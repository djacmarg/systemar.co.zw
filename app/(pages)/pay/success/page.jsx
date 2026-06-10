"use client";

import { Suspense } from "react";
import PaymentStatus from "./PaymentStatus";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full text-center">
       
        <Suspense
          fallback={
            <p className="text-gray-500">Checking payment status...</p>
          }
        >
          <PaymentStatus />
        </Suspense>
      </div>
    </div>
  );
}