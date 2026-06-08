// app/api/verify-payment/route.ts
import { NextResponse } from "next/server";

export async function GET(req) {
  const reference = req.nextUrl.searchParams.get("reference");

  if (!reference) {
    return NextResponse.json({
      status: "error",
      message: "No reference",
      status: 400,
    });
  }

  try {
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    if (data.data.status === "success") {
      return NextResponse.json({ status: "success", data: data.data });
    } else {
      return NextResponse.json({ status: "failed", data: data.data });
    }
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Verification failed",
      status: 500,
    });
  }
}
