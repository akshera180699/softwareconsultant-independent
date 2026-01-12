import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL!,
        pass: process.env.SMTP_PASSWORD!,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL!,
      replyTo: email, // IMPORTANT: reply goes to user
      subject: "New Project Inquiry",
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SMTP ERROR:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
