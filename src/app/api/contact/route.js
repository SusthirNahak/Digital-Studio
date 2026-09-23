import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || 'susthir.nahak@gmail.com';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, company, phone, service, timeline, source, description } = data;

    // Validate required fields
    if (!name || !email || !service || !description) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, service, and description are required.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    const plainTextBody = `
NEW PROJECT INQUIRY
===================
Recipient: ${RECIPIENT_EMAIL}
Received At: ${timestamp}

Client Details:
- Name: ${name}
- Email: ${email}
- Company / Brand: ${company || 'Not provided'}
- WhatsApp / Phone: ${phone || 'Not provided'}

Project Scope:
- Required Service: ${service}
- Desired Timeline: ${timeline || 'Flexible'}
- Discovery Channel: ${source || 'Not specified'}

Project Description:
--------------------
${description}
    `.trim();

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #171717; background-color: #fafafa; border: 1px solid #e5e5e5; border-radius: 8px;">
        <div style="border-bottom: 2px solid #171717; padding-bottom: 16px; margin-bottom: 20px;">
          <span style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #737373; letter-spacing: 1px;">Studio Intake Dispatch</span>
          <h2 style="margin: 6px 0 0 0; font-size: 22px; font-weight: 700; color: #0a0a0a;">New Project Brief Received</h2>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr style="border-bottom: 1px solid #e5e5e5;">
            <td style="padding: 10px 0; color: #737373; width: 140px; font-family: monospace; font-size: 12px; text-transform: uppercase;">Client Name</td>
            <td style="padding: 10px 0; font-weight: 600; color: #171717;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e5e5e5;">
            <td style="padding: 10px 0; color: #737373; font-family: monospace; font-size: 12px; text-transform: uppercase;">Email Address</td>
            <td style="padding: 10px 0; font-weight: 600; color: #171717;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
          </tr>
          ${
            company
              ? `<tr style="border-bottom: 1px solid #e5e5e5;">
            <td style="padding: 10px 0; color: #737373; font-family: monospace; font-size: 12px; text-transform: uppercase;">Company</td>
            <td style="padding: 10px 0; color: #171717;">${company}</td>
          </tr>`
              : ''
          }
          ${
            phone
              ? `<tr style="border-bottom: 1px solid #e5e5e5;">
            <td style="padding: 10px 0; color: #737373; font-family: monospace; font-size: 12px; text-transform: uppercase;">Phone / WhatsApp</td>
            <td style="padding: 10px 0; color: #171717;">${phone}</td>
          </tr>`
              : ''
          }
          <tr style="border-bottom: 1px solid #e5e5e5;">
            <td style="padding: 10px 0; color: #737373; font-family: monospace; font-size: 12px; text-transform: uppercase;">Required Service</td>
            <td style="padding: 10px 0; font-weight: 600; color: #0f172a;">${service}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e5e5e5;">
            <td style="padding: 10px 0; color: #737373; font-family: monospace; font-size: 12px; text-transform: uppercase;">Desired Timeline</td>
            <td style="padding: 10px 0; color: #171717;">${timeline || 'Flexible'}</td>
          </tr>
          ${
            source
              ? `<tr style="border-bottom: 1px solid #e5e5e5;">
            <td style="padding: 10px 0; color: #737373; font-family: monospace; font-size: 12px; text-transform: uppercase;">Source Channel</td>
            <td style="padding: 10px 0; color: #171717;">${source}</td>
          </tr>`
              : ''
          }
        </table>

        <div style="margin-top: 20px; background-color: #ffffff; padding: 18px; border-radius: 6px; border: 1px solid #e5e5e5;">
          <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #737373; margin-bottom: 8px;">Project Description</div>
          <div style="font-size: 14px; line-height: 1.6; color: #262626; white-space: pre-wrap;">${description}</div>
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e5e5; font-size: 12px; color: #737373; text-align: center;">
          Sent to <strong>${RECIPIENT_EMAIL}</strong> via Susthir Digital Website Contact Form.
        </div>
      </div>
    `;

    // Check if SMTP is configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    let emailSentViaSmtp = false;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Susthir Digital Leads" <${smtpUser}>`,
          to: RECIPIENT_EMAIL,
          replyTo: email,
          subject: `[New Project Brief] ${service} - ${name}${company ? ` (${company})` : ''}`,
          text: plainTextBody,
          html: htmlBody,
        });

        emailSentViaSmtp = true;
      } catch (smtpErr) {
        console.error('SMTP transmission error:', smtpErr);
      }
    }

    // Build pre-filled mailto URL for direct email client opening
    const mailtoSubject = encodeURIComponent(`Project Brief: ${service} - ${name}`);
    const mailtoBody = encodeURIComponent(plainTextBody);
    const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

    return NextResponse.json({
      success: true,
      recipient: RECIPIENT_EMAIL,
      emailSentViaSmtp,
      mailtoUrl,
      timestamp,
      brief: {
        name,
        email,
        company,
        phone,
        service,
        timeline,
        source,
        description,
      },
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing the submission.' },
      { status: 500 }
    );
  }
}
