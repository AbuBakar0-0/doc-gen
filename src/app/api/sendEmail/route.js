import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { id, email } = await request.json();

    if (!id || !email) {
      return NextResponse.json(
        { message: "Missing required fields: id or email" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_APP_EMAIL,
        pass: process.env.NEXT_PUBLIC_APP_PASSWORD,
      },
    });

    const subject = "Account Verification";
    const text = "Please click the button below to verify your account.";
    const html = `
      <p>${text}</p>
      <a href="https://doc-gen-xi.vercel.app/api/verify?id=${id}" style='background-color:black;color:white;'>Verify Account</a>
    `;

    const info = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_APP_EMAIL,
      to: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
