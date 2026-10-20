import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  const data = await request.formData();
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const company = String(data.get("company") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return Response.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY || !process.env.ENQUIRY_TO_EMAIL || !process.env.ENQUIRY_FROM_EMAIL) {
    return Response.json({ error: "Enquiry form is not configured yet. Add the environment variables in Vercel and redeploy." }, { status: 500 });
  }

  try {
    await resend!.emails.send({
      from: process.env.ENQUIRY_FROM_EMAIL,
      to: [process.env.ENQUIRY_TO_EMAIL],
      subject: `New enquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 12px;">New enquiry from Nxzora Fresh website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return Response.json({ ok: true, message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Unable to send the enquiry at the moment. Please try again later." }, { status: 500 });
  }
}
