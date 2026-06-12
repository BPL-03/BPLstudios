import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const { error } = await resend.emails.send({
      from: 'BPL Studios <onboarding@resend.dev>',
      to: 'contact@bplstudios.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return Response.json({ error: 'Failed to send' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Failed to send' }, { status: 500 });
  }
}
