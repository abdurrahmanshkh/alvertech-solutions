import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, company, email, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message || !company || !service) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Prepare email data for Brevo
    const emailData = {
      sender: {
        name: "Alvertech Solutions Website",
        email: "transactionalerts@yahoo.com",
      },
      to: [
        {
          email: "alvertechsolutions@gmail.com",
          name: "Alvertech Solutions Team",
        },
      ],
      subject: `New Consultation Request from ${name} at ${company}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Consultation Request</title>
          <style>
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #1A2530;
              max-width: 650px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9ff;
            }
            .container {
              background: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 15px rgba(17, 28, 44, 0.05);
              border: 1px solid #c1c6d7;
            }
            .header {
              background-color: #111c2c;
              color: #ffffff;
              padding: 30px 20px;
              text-align: center;
              border-bottom: 4px solid #0059bb;
            }
            .logo {
              font-size: 28px;
              font-weight: 700;
              margin-bottom: 5px;
              letter-spacing: -0.5px;
            }
            .logo-alvertech {
              color: #ffffff;
            }
            .logo-solutions {
              color: #0059bb;
            }
            .header h1 {
              margin: 15px 0 0 0;
              font-size: 20px;
              font-weight: 500;
              color: #d8e3fa;
            }
            .content {
              padding: 30px;
            }
            .field {
              margin-bottom: 24px;
            }
            .field-label {
              font-weight: 600;
              color: #0059bb;
              margin-bottom: 6px;
              text-transform: uppercase;
              font-size: 12px;
              letter-spacing: 0.5px;
            }
            .field-value {
              color: #1A2530;
              font-size: 16px;
              background-color: #f9f9ff;
              padding: 12px 16px;
              border-radius: 6px;
              border-left: 3px solid #0059bb;
              word-wrap: break-word;
            }
            .message-content {
              background-color: #f9f9ff;
              border-left: 3px solid #006d30;
              border-radius: 6px;
              padding: 16px;
              white-space: pre-wrap;
              line-height: 1.6;
              font-size: 15px;
            }
            .footer {
              background-color: #f9f9ff;
              padding: 20px;
              text-align: center;
              border-top: 1px solid #c1c6d7;
            }
            .timestamp {
              color: #414754;
              font-size: 13px;
              font-weight: 500;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">
                <span class="logo-alvertech">Alvertech</span><span class="logo-solutions">Solutions</span>
              </div>
              <h1>New Consultation Request</h1>
            </div>
            
            <div class="content">
              <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <div class="field" style="flex: 1; min-width: 250px;">
                  <div class="field-label">👤 Full Name</div>
                  <div class="field-value">${name}</div>
                </div>
                
                <div class="field" style="flex: 1; min-width: 250px;">
                  <div class="field-label">🏢 Company</div>
                  <div class="field-value">${company}</div>
                </div>
              </div>
              
              <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <div class="field" style="flex: 1; min-width: 250px;">
                  <div class="field-label">📧 Email Address</div>
                  <div class="field-value">
                    <a href="mailto:${email}" style="color: #0059bb; text-decoration: none; font-weight: 500;">${email}</a>
                  </div>
                </div>
                
                <div class="field" style="flex: 1; min-width: 250px;">
                  <div class="field-label">⚙️ Service Required</div>
                  <div class="field-value" style="border-left-color: #006d30;">${service}</div>
                </div>
              </div>
              
              <div class="field" style="margin-bottom: 0;">
                <div class="field-label">💬 Message / Requirements</div>
                <div class="message-content">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              <div class="timestamp">
                Received on ${new Date().toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                })}
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      textContent: `
New Consultation Request - Alvertech Solutions

Name: ${name}
Company: ${company}
Email: ${email}
Service Required: ${service}

Message / Requirements:
${message}

Received on: ${new Date().toLocaleString()}
      `,
    };

    // Send email using Brevo API
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY || "",
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API Error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    const result = await response.json();
    console.log("Email sent successfully:", result);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your request! Our team will contact you soon.",
        messageId: result.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
