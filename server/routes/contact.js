const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // If no email credentials configured, just log and succeed (dev mode)
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('📬 Contact form submission (no email config):', { name, email, message });
    return res.json({ success: true, message: 'Message received!' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password, not your Gmail password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:auto;background:#0f0f1a;color:#f1f5f9;padding:36px;border-radius:12px;">
          <h2 style="color:#a78bfa;margin-bottom:8px;">New Contact Form Submission</h2>
          <hr style="border:1px solid #1f1f3a;margin-bottom:24px;" />
          <p><strong style="color:#94a3b8;">Name:</strong> ${name}</p>
          <p><strong style="color:#94a3b8;">Email:</strong> <a href="mailto:${email}" style="color:#67e8f9;">${email}</a></p>
          <p style="margin-top:16px;"><strong style="color:#94a3b8;">Message:</strong></p>
          <p style="background:#13131f;padding:16px;border-radius:8px;border-left:3px solid #7c3aed;">${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

module.exports = router;
