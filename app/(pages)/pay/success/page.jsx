// app/pay/success/page.tsx

"use client";
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import PaymentStatus from "./PaymentStatus";

export default function PaymentSuccessPage() {
  return (
    <div className="p-6 text-center min-h-screen h-auto">
      <h1 className="text-2xl font-bold mb-4">Payment Status</h1>
      <Suspense fallback={<p>Loading payment info...</p>}>
        <PaymentStatus />
      </Suspense>
    </div>
  );
}
