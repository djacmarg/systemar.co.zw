"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function PaymentStatus() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");

  const [status, setStatus] = useState("loading");
  const [transaction, setTransaction] = useState(null);
  const [error, setError] = useState(null);

  const receiptRef = useRef(null);

  useEffect(() => {
    if (!reference) return;

    const verifyPayment = async () => {
      try {
        setStatus("loading");

        const res = await fetch(
          `/api/verify-payment?reference=${reference}`
        );

        if (!res.ok) throw new Error("Failed to verify payment");

        const data = await res.json();

        if (data.status === "success") {
          setTransaction(data.data);
          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch (err) {
        console.error(err);
        setError("Unable to verify payment.");
        setStatus("error");
      }
    };

    verifyPayment();
  }, [reference]);

  const handlePrint = () => {
    if (!receiptRef.current) return;

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
      <html>
        <head>
          <title>Payment Receipt</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
          </style>
        </head>
        <body>
          ${receiptRef.current.outerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  const handleDownloadPDF = () => {
    if (!transaction) return;

    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Payment Receipt", 14, 20);

    const rows = [
      ["Reference", transaction.reference],
      [
        "Customer",
        `${transaction.customer.first_name} ${transaction.customer.last_name}`,
      ],
      ["Email", transaction.customer.email],
      ["Currency", transaction.currency],
      [
        "Amount",
        `${(transaction.amount / 100).toFixed(2)} ${transaction.currency}`,
      ],
      ["IP Address", transaction.ip_address],
      ["Paid At", new Date(transaction.paid_at).toLocaleString()],
    ];

    doc.autoTable({
      startY: 30,
      body: rows,
      theme: "grid",
    });

    doc.save(`receipt-${transaction.reference}.pdf`);
  };

  const StatusBadge = () => {
    const map = {
      loading: "bg-gray-100 text-gray-600",
      success: "bg-green-100 text-green-700",
      failed: "bg-red-100 text-red-700",
      error: "bg-red-100 text-red-700",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${map[status]}`}
      >
        {status === "loading" && "Verifying payment..."}
        {status === "success" && "Payment successful"}
        {status === "failed" && "Payment failed"}
        {status === "error" && "Error verifying payment"}
      </span>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-xl bg-white border rounded-2xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">Payment Status</h2>

        <StatusBadge />

        {error && <p className="text-red-600 mt-3 text-sm">{error}</p>}

        {transaction && (
          <>
            <div
              ref={receiptRef}
              className="mt-6 border rounded-lg p-5 space-y-2 text-sm text-gray-700"
            >
              <p>
                <strong>Reference:</strong> {transaction.reference}
              </p>
              <p>
                <strong>Customer:</strong>{" "}
                {transaction.customer.first_name}{" "}
                {transaction.customer.last_name}
              </p>
              <p>
                <strong>Email:</strong> {transaction.customer.email}
              </p>
              <p>
                <strong>Currency:</strong> {transaction.currency}
              </p>
              <p>
                <strong>Amount:</strong>{" "}
                {(transaction.amount / 100).toFixed(2)}{" "}
                {transaction.currency}
              </p>
              <p>
                <strong>IP Address:</strong> {transaction.ip_address}
              </p>
              <p>
                <strong>Paid At:</strong>{" "}
                {new Date(transaction.paid_at).toLocaleString()}
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handlePrint}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm"
              >
                Print Receipt
              </button>

              <button
                onClick={handleDownloadPDF}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-sm"
              >
                Download PDF
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}