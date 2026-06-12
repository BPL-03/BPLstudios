import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, company, website, budget, challenge } = await req.json();

    if (!name || !email) {
      return Response.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'BPL Studios Form <onboarding@resend.dev>',
      to: 'contact@bplstudios.com',
      subject: `New Project Request - ${company || name}`,
      html: `
        <h3>New Project Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Brand/Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Website:</strong> ${website || 'Not provided'}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <br/>
        <p><strong>Challenge:</strong></p>
        <p>${challenge ? challenge.replace(/\n/g, '<br/>') : 'Not provided'}</p>
      `
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
