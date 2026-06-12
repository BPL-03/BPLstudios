export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, website, budget, challenge } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'RESEND_API_KEY is not configured on Vercel' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
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
      })
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || 'Error sending email' });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
