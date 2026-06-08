"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function PaymentStatus() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");

  const [status, setStatus] = useState("Verifying...");
  const [transaction, setTransaction] = useState(null);
  const receiptRef = useRef();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const res = await fetch(`/api/verify-payment?reference=${reference}`);
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();

        if (data.status === "success") {
          setStatus("Payment Successful ✅");
          setTransaction(data.data);
        } else {
          setStatus("Payment Failed");
        }
      } catch (error) {
        console.error("Payment verification error:", error);
        setStatus("Error verifying payment");
      }
    };

    if (reference) {
      verifyPayment();
    }
  }, [reference]);

  const handlePrint = () => {
    if (!receiptRef.current) return;
    const printContent = receiptRef.current.innerHTML;
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <html>
        <head>
          <title>Payment Receipt</title>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    newWindow.close();
  };

  const handleDownloadPDF = () => {
    if (!transaction) return;

    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Payment Receipt", 20, 20);

    const rows = [
      ["Reference", transaction.reference],
      [
        "Customer Name",
        `${transaction.customer.first_name} ${transaction.customer.last_name}`,
      ],
      ["Email", transaction.customer.email],
      ["IP Address", transaction.ip_address],
      ["Currency", transaction.currency],
      [
        "Amount",
        `${(transaction.amount / 100).toFixed(2)} ${transaction.currency}`,
      ],
    ];

    doc.autoTable({
      startY: 30,
      body: rows,
      theme: "grid",
    });

    doc.save(`receipt-${transaction.reference}.pdf`);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Payment Status</h2>
      <p className="mb-2">{status}</p>

      {transaction && (
        <>
          <div
            ref={receiptRef}
            className="space-y-2 text-sm text-gray-700 bg-white p-4 rounded border mt-4"
          >
            <p>
              <strong>Reference:</strong> {transaction.reference}
            </p>
            <p>
              <strong>Customer Name:</strong> {transaction.customer.first_name}{" "}
              {transaction.customer.last_name}
            </p>
            <p>
              <strong>Email:</strong> {transaction.customer.email}
            </p>
            <p>
              <strong>IP Address:</strong> {transaction.ip_address}
            </p>
            <p>
              <strong>Currency:</strong> {transaction.currency}
            </p>
            <p>
              <strong>Amount:</strong> {(transaction.amount / 100).toFixed(2)}{" "}
              {transaction.currency}
            </p>
            <p>
              <strong>Paid At:</strong>{" "}
              {new Date(transaction.paid_at).toLocaleString()}
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handlePrint}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
              🖨️ Print Receipt
            </button>

            <button
              onClick={handleDownloadPDF}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
            >
              📄 Download PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
}
