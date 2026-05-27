import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, otherDetails } = body;

    // Validate required fields
    if (!name || !email || !service) {
      return NextResponse.json({ error: "All required fields must be filled." }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_APP_PASSWORD,
      },
    });

    const inquiryDetails = service === "Other" && otherDetails ? otherDetails : "N/A";

    // 1. Email to the Aneeverse team
    const teamHtml = `
      <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
        <div style="background:linear-gradient(135deg,#073742 0%,#0a4f5e 100%);padding:28px 32px">
          <h1 style="color:#88D7F0;margin:0;font-size:20px;font-weight:700">📞 New Discovery Call Lead</h1>
          <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:13px">Lead details submitted prior to calendar slot selection</p>
        </div>
        <div style="padding:28px 32px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr>
              <td style="padding:10px 0;color:#64748b;width:140px;vertical-align:top">Full Name</td>
              <td style="padding:10px 0;color:#0f172a;font-weight:600">${name}</td>
            </tr>
            <tr style="background:#f1f5f9">
              <td style="padding:10px;color:#64748b;vertical-align:top;border-radius:6px 0 0 6px">Email</td>
              <td style="padding:10px;color:#0f172a;font-weight:600;border-radius:0 6px 6px 0">
                <a href="mailto:${email}" style="color:#0284c7;text-decoration:none">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#64748b;vertical-align:top">Phone</td>
              <td style="padding:10px 0;color:#0f172a;font-weight:600">
                <a href="tel:${phone || 'N/A'}" style="color:#0284c7;text-decoration:none">${phone || 'N/A'}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#64748b;vertical-align:top">Service Selected</td>
              <td style="padding:10px 0;color:#0f172a;font-weight:600">${service}</td>
            </tr>
            ${service === "Other" ? `
            <tr style="background:#f1f5f9">
              <td style="padding:10px;color:#64748b;vertical-align:top;border-radius:6px 0 0 6px">Custom Details</td>
              <td style="padding:10px;color:#0f172a;font-weight:600;border-radius:0 6px 6px 0;white-space:pre-wrap">${inquiryDetails}</td>
            </tr>
            ` : ""}
          </table>
        </div>
        <div style="padding:16px 32px;background:#f1f5f9;text-align:center">
          <p style="margin:0;font-size:11px;color:#94a3b8">Sent from aneeverse.com · Discovery Booking Widget</p>
        </div>
      </div>
    `;

    const LEAD_RECEIVER_EMAIL = process.env.LEAD_RECEIVER_EMAIL || "team@aneeverse.com";

    await transporter.sendMail({
      from: `"Aneeverse Website" <${process.env.SMTP_EMAIL}>`,
      to: LEAD_RECEIVER_EMAIL,
      subject: `📞 Discovery Call Setup Lead — ${name} (${service})`,
      html: teamHtml,
    });

    // 2. Optional Confirmation Email to the user
    const userHtml = `
      <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
        <div style="background:linear-gradient(135deg,#073742 0%,#0a4f5e 100%);padding:32px;text-align:center">
          <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700">Let's Connect! 📅</h1>
        </div>
        <div style="padding:32px">
          <p style="font-size:15px;color:#334155;line-height:1.7;margin:0 0 16px">
            Hi <strong>${name}</strong>,
          </p>
          <p style="font-size:15px;color:#334155;line-height:1.7;margin:0 0 16px">
            Thank you for initiating your Discovery Call request! We've received your interest in <strong>${service}</strong>.
          </p>
          <p style="font-size:15px;color:#334155;line-height:1.7;margin:0 0 16px">
            If you haven't booked your time slot on our calendar yet, please make sure to select a convenient date and time to finalize the call setup.
          </p>
          <div style="background:#f0fdfa;border-left:4px solid #88D7F0;padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0">
            <p style="margin:0;font-size:14px;color:#0f172a;font-weight:600">⏱ What's next?</p>
            <ul style="margin:10px 0 0;padding-left:18px;font-size:13px;color:#475569;line-height:1.8">
              <li>Finalise your calendar slot selection</li>
              <li>A calendar invite with Google Meet credentials will be sent instantly</li>
              <li>We will discuss details on how we can accelerate your creative and growth operations</li>
            </ul>
          </div>
          <p style="font-size:15px;color:#334155;line-height:1.7;margin:24px 0 0">
            Best regards,<br />
            <strong>Team Aneeverse</strong>
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
      subject: `Discovery Call Setup — Aneeverse`,
      html: userHtml,
    });

    // 3. Send to Google Sheets if App Script URL is configured
    try {
      const GOOGLE_APPS_SCRIPT_URL =
        process.env.GOOGLE_APPS_SCRIPT_URL ||
        "https://script.google.com/macros/s/AKfycbxxjaHsbRr8i2wgkwbNKtOkrJZZ9yxMZI_z7zY3um1B2l1-yMPrWQUUD_OQh20af50Q/exec";

      if (GOOGLE_APPS_SCRIPT_URL) {
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pageSource: "Discovery Call Form",
            fullName: name,
            email,
            phone: phone || "N/A",
            platform: service,
            storeName: "N/A",
            storeLink: "N/A",
            monthlyRevenue: "N/A",
            biggestChallenge: inquiryDetails,
            userLocation: "Discovery Form Page",
            userPincode: "N/A",
            userIp: "N/A",
          }),
        });
      }
    } catch (sheetError) {
      console.error("Google Sheets discovery lead sync failed:", sheetError);
    }

    return NextResponse.json({ success: true, message: "Lead sent successfully." });
  } catch (error) {
    console.error("Discovery lead email send error:", error);
    return NextResponse.json({ error: "Failed to process lead." }, { status: 500 });
  }
}
