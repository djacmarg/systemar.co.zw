import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/emailhelper";

export async function POST(req) {
  const {
    fullname,
    email,
    nameOfSchool,
    numberOfStudents,
    phone,
    servicePlan,
  } = await req.json();
  try {
    if (!email) {
      return NextResponse.json({
        ok: false,
        msg: "No Email address entered!",
        status: 400,
      });
    }
    const emaildata = {
      from: `SYSTEMAR | Tech Pundit Pty Ltd <${process.env.SMTP_EMAIL}>`,
      to: process.env.APP_EMAIL,
      subject: "Request for " + servicePlan,
      mailheader: "Request for " + servicePlan,
      baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL,
      mailbody: `Message details: <br /> name: ${fullname} <br />email: ${email}<br />phone: ${phone}<br /><br />Name of School: ${nameOfSchool}<br /><br />Number of Students: ${numberOfStudents}<br /> Plan requested: ${servicePlan}`,
    };
    sendEmail(emaildata);
    return NextResponse.json({
      ok: true,
      status: 201,
      msg: "Message sent successful!",
    });
  } catch (err) {
    return NextResponse.json({
      err: err,
      ok: false,
      msg: "Unable to send message",
      status: 500,
    });
  }
}
