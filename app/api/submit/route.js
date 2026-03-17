import { Resend } from "resend";

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const companyName = payload.companyName?.trim();
    const website = payload.website?.trim();
    const tagline = payload.tagline?.trim();

    if (!companyName || !website || !tagline) {
      return Response.json(
        { error: "Company name, website, and one-line pitch are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Missing RESEND_API_KEY on the server." },
        { status: 500 }
      );
    }

    if (!process.env.SUBMISSION_TO_EMAIL) {
      return Response.json(
        { error: "Missing SUBMISSION_TO_EMAIL on the server." },
        { status: 500 }
      );
    }

    if (!process.env.SUBMISSION_FROM_EMAIL) {
      return Response.json(
        { error: "Missing SUBMISSION_FROM_EMAIL on the server." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const fields = [
      ["Company name", companyName],
      ["Website", website],
      ["One-line pitch", tagline],
      ["Your name", payload.contactName],
      ["Your email", payload.contactEmail],
      ["Business model", payload.modelType],
      ["MRR", payload.mrr],
      ["Companies built", payload.companiesBuilt],
      ["Notes", payload.notes]
    ];

    const html = `
      <div style="font-family: Arial, sans-serif; color: #171311; line-height: 1.6;">
        <h1 style="font-size: 20px; margin-bottom: 16px;">New autonomous AI company submission</h1>
        <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
          ${fields
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e9dfd3; width: 180px; color: #6d635c; vertical-align: top;">
                    ${escapeHtml(label)}
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e9dfd3;">
                    ${escapeHtml(value) || "<span style='color:#9b8f87;'>Not provided</span>"}
                  </td>
                </tr>
              `
            )
            .join("")}
        </table>
      </div>
    `;

    await resend.emails.send({
      from: process.env.SUBMISSION_FROM_EMAIL,
      to: process.env.SUBMISSION_TO_EMAIL,
      subject: `New directory submission: ${companyName}`,
      replyTo: payload.contactEmail?.trim() || undefined,
      html
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Something went wrong while sending the submission." },
      { status: 500 }
    );
  }
}
