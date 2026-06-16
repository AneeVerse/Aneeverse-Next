import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const serviceLabels = {
  "google-ads": "Google Ads",
  "meta-ads": "Meta Ads",
  seo: "SEO",
  "website-development": "Website Development",
  "platform-development": "Platform Development",
  "not-sure": "Not Sure",
};

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      companyName,
      email,
      phone,
      serviceNeeded,
      userLocation,
      userPincode,
      userIp,
    } = body;

    if (!fullName || !companyName || !email || !phone || !serviceNeeded) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const serviceDisplay = serviceLabels[serviceNeeded] || serviceNeeded;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_APP_PASSWORD,
      },
    });

    const teamHtml = `
      <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
        <div style="background:linear-gradient(135deg,#073742 0%,#0a4f5e 100%);padding:28px 32px">
          <h1 style="color:#88D7F0;margin:0;font-size:20px;font-weight:700">📣 New Digital Marketing Consultation Request</h1>
          <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:13px">Ads Digital Marketing Lead</p>
        </div>
        <div style="padding:28px 32px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:10px 0;color:#64748b;width:140px;vertical-align:top">Full Name</td><td style="padding:10px 0;color:#0f172a;font-weight:600">${fullName}</td></tr>
            <tr style="background:#f1f5f9"><td style="padding:10px;color:#64748b;vertical-align:top;border-radius:6px 0 0 6px">Company Name</td><td style="padding:10px;color:#0f172a;font-weight:600;border-radius:0 6px 6px 0">${companyName}</td></tr>
            <tr><td style="padding:10px 0;color:#64748b;vertical-align:top">Email</td><td style="padding:10px 0;color:#0f172a;font-weight:600"><a href="mailto:${email}" style="color:#0284c7;text-decoration:none">${email}</a></td></tr>
            <tr style="background:#f1f5f9"><td style="padding:10px;color:#64748b;vertical-align:top;border-radius:6px 0 0 6px">Phone / WhatsApp</td><td style="padding:10px;color:#0f172a;font-weight:600;border-radius:0 6px 6px 0">${phone}</td></tr>
            <tr><td style="padding:10px 0;color:#64748b;vertical-align:top">Service Needed</td><td style="padding:10px 0;color:#0f172a;font-weight:600">${serviceDisplay}</td></tr>
          </table>

          <h2 style="color:#073742;margin:24px 0 12px;font-size:15px;font-weight:700;border-top:1px solid #e2e8f0;padding-top:20px">📍 User Location (Auto-Fetched)</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:10px 0;color:#64748b;width:140px;vertical-align:top">Location</td><td style="padding:10px 0;color:#0f172a;font-weight:600">${userLocation || "Unknown"}</td></tr>
            <tr style="background:#f1f5f9"><td style="padding:10px;color:#64748b;vertical-align:top;border-radius:6px 0 0 6px">Pincode</td><td style="padding:10px;color:#0f172a;font-weight:600;border-radius:0 6px 6px 0">${userPincode || "Unknown"}</td></tr>
            <tr><td style="padding:10px 0;color:#64748b;vertical-align:top">IP Address</td><td style="padding:10px 0;color:#0f172a;font-weight:600">${userIp || "Unknown"}</td></tr>
          </table>
        </div>
        <div style="padding:16px 32px;background:#f1f5f9;text-align:center">
          <p style="margin:0;font-size:11px;color:#94a3b8">Sent from aneeverse.com · Ads Digital Marketing page</p>
        </div>
      </div>
    `;

    const LEAD_RECEIVER_EMAIL = process.env.LEAD_RECEIVER_EMAIL || "team@aneeverse.com";

    await transporter.sendMail({
      from: `"Aneeverse Website" <${process.env.SMTP_EMAIL}>`,
      to: LEAD_RECEIVER_EMAIL,
      subject: `📣 Digital Marketing Consultation Request — ${fullName} (${serviceDisplay})`,
      html: teamHtml,
    });

    const userHtml = `
      <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
        <div style="background:linear-gradient(135deg,#073742 0%,#0a4f5e 100%);padding:32px;text-align:center">
          <img src="https://aneeverse.com/images/logo.svg" alt="Aneeverse" style="height:32px;margin-bottom:16px" />
          <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700">We've Got Your Details! 🎉</h1>
        </div>
        <div style="padding:32px">
          <p style="font-size:15px;color:#334155;line-height:1.7;margin:0 0 16px">
            Hi <strong>${fullName}</strong>,
          </p>
          <p style="font-size:15px;color:#334155;line-height:1.7;margin:0 0 16px">
            Thank you for booking a free consultation! Our digital marketing team has received your details and is reviewing your <strong>${serviceDisplay}</strong> request for <strong>${companyName}</strong>.
          </p>
          <div style="background:#f0fdfa;border-left:4px solid #88D7F0;padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0">
            <p style="margin:0;font-size:14px;color:#0f172a;font-weight:600">⏱ What happens next?</p>
            <ul style="margin:10px 0 0;padding-left:18px;font-size:13px;color:#475569;line-height:1.8">
              <li>We'll review your goals and current marketing setup</li>
              <li>We'll prepare a clear plan tailored to your needs</li>
              <li>You'll hear from us within <strong>24 hours</strong> to schedule your free call</li>
            </ul>
          </div>
          <p style="font-size:15px;color:#334155;line-height:1.7;margin:24px 0 0">
            <strong>We will contact you soon!</strong> If you have any questions in the meantime, just reply to this email.
          </p>
        </div>
        <div style="padding:20px 32px;background:#f8fafc;text-align:center;border-top:1px solid #e2e8f0">
          <p style="margin:0 0 4px;font-size:13px;color:#64748b;font-weight:600">Aneeverse — Full-Service Digital Agency</p>
          <p style="margin:0;font-size:11px;color:#94a3b8">aneeverse.com</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Aneeverse" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: `Your Free Consultation Request Is Confirmed — Aneeverse`,
      html: userHtml,
    });

    try {
      const GOOGLE_APPS_SCRIPT_URL =
        process.env.GOOGLE_APPS_SCRIPT_URL ||
        "https://script.google.com/macros/s/AKfycbxxjaHsbRr8i2wgkwbNKtOkrJZZ9yxMZI_z7zY3um1B2l1-yMPrWQUUD_OQh20af50Q/exec";

      if (GOOGLE_APPS_SCRIPT_URL) {
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pageSource: "Ads Digital Marketing Page",
            fullName,
            companyName,
            email,
            phone,
            serviceNeeded: serviceDisplay,
            userLocation: userLocation || "Unknown",
            userPincode: userPincode || "Unknown",
            userIp: userIp || "Unknown",
          }),
        });
      }
    } catch (sheetError) {
      console.error("Google Sheets sync failed:", sheetError);
    }

    return NextResponse.json({ success: true, message: "Emails sent successfully." });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
