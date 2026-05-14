import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Readable label maps
const platformLabels = {
  amazon: "Amazon",
  ebay: "eBay",
  etsy: "Etsy",
  all: "All Three (Amazon, eBay, Etsy)",
};

const revenueLabels = {
  "under-1l": "Under ₹1L",
  "1l-5l": "₹1L – ₹5L",
  "5l-20l": "₹5L – ₹20L",
  "20l-plus": "₹20L+",
};

const challengeLabels = {
  "listings-seo": "Listings & SEO",
  "ad-management": "Ad Management",
  "account-health": "Account Health",
  all: "All of the above",
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, platform, storeName, monthlyRevenue, biggestChallenge } = body;

    // ── Validate required fields ──
    if (!fullName || !email || !phone || !platform || !storeName || !monthlyRevenue || !biggestChallenge) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // ── Create transporter ──
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_APP_PASSWORD,
      },
    });

    // ── 1. Email to the Aneeverse team ──
    const teamHtml = `
      <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
        <div style="background:linear-gradient(135deg,#073742 0%,#0a4f5e 100%);padding:28px 32px">
          <h1 style="color:#88D7F0;margin:0;font-size:20px;font-weight:700">🛒 New Store Audit Request</h1>
          <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:13px">Ads &amp; E-commerce Lead</p>
        </div>
        <div style="padding:28px 32px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:10px 0;color:#64748b;width:140px;vertical-align:top">Full Name</td><td style="padding:10px 0;color:#0f172a;font-weight:600">${fullName}</td></tr>
            <tr style="background:#f1f5f9"><td style="padding:10px;color:#64748b;vertical-align:top;border-radius:6px 0 0 6px">Email</td><td style="padding:10px;color:#0f172a;font-weight:600;border-radius:0 6px 6px 0"><a href="mailto:${email}" style="color:#0284c7;text-decoration:none">${email}</a></td></tr>
            <tr><td style="padding:10px 0;color:#64748b;vertical-align:top">Phone / WhatsApp</td><td style="padding:10px 0;color:#0f172a;font-weight:600">${phone}</td></tr>
            <tr style="background:#f1f5f9"><td style="padding:10px;color:#64748b;vertical-align:top;border-radius:6px 0 0 6px">Platform</td><td style="padding:10px;color:#0f172a;font-weight:600;border-radius:0 6px 6px 0">${platformLabels[platform] || platform}</td></tr>
            <tr><td style="padding:10px 0;color:#64748b;vertical-align:top">Store / Brand</td><td style="padding:10px 0;color:#0f172a;font-weight:600">${storeName}</td></tr>
            <tr style="background:#f1f5f9"><td style="padding:10px;color:#64748b;vertical-align:top;border-radius:6px 0 0 6px">Monthly Revenue</td><td style="padding:10px;color:#0f172a;font-weight:600;border-radius:0 6px 6px 0">${revenueLabels[monthlyRevenue] || monthlyRevenue}</td></tr>
            <tr><td style="padding:10px 0;color:#64748b;vertical-align:top">Biggest Challenge</td><td style="padding:10px 0;color:#0f172a;font-weight:600">${challengeLabels[biggestChallenge] || biggestChallenge}</td></tr>
          </table>
        </div>
        <div style="padding:16px 32px;background:#f1f5f9;text-align:center">
          <p style="margin:0;font-size:11px;color:#94a3b8">Sent from aneeverse.com · Ads &amp; E-commerce page</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Aneeverse Website" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      subject: `🛒 New Store Audit Request — ${fullName} (${platformLabels[platform] || platform})`,
      html: teamHtml,
    });

    // ── 2. Confirmation email to the user ──
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
            Thank you for requesting a free store audit! Our marketplace specialists have received your details and are already reviewing your <strong>${platformLabels[platform] || platform}</strong> store.
          </p>
          <div style="background:#f0fdfa;border-left:4px solid #88D7F0;padding:16px 20px;border-radius:0 8px 8px 0;margin:24px 0">
            <p style="margin:0;font-size:14px;color:#0f172a;font-weight:600">⏱ What happens next?</p>
            <ul style="margin:10px 0 0;padding-left:18px;font-size:13px;color:#475569;line-height:1.8">
              <li>Our team will audit your listings, ads &amp; account health</li>
              <li>We'll identify revenue leaks and growth opportunities</li>
              <li>You'll receive a personalised report within <strong>24 hours</strong></li>
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
      subject: `Your Free Store Audit Request Is Confirmed — Aneeverse`,
      html: userHtml,
    });

    return NextResponse.json({ success: true, message: "Emails sent successfully." });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
