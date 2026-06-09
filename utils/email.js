export const EmailTemplate = (mailheader, mailbody, baseUrl) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SYSTEMAR.CO.ZW Email</title>
    <style>
      body,
      html {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #f9fafb;
        color: #333;
      }
      /* Responsive Container */
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      /* Header */
      .header {
        text-align: center;
        padding: 1rem 0;
        border-bottom: 1px solid #e5e7eb;
        height: 250px;
      }
      .header img {
        width: 100%;
        max-width: 100%;
        height: 100%;
      }
      /* Main Content */
      .body {
        padding: 1.5rem 0;
      }
      .h1 {
        font-size: 1.1rem;
        font-weight: 500;
        color: #1f2937;
        margin-bottom: 1rem;
      }
      .p {
        font-size: 1rem;
        color: #4b5563;
        line-height: 1.6;
        margin-bottom: 1rem;
      }
      /* Button */
      .btn {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        color: #ffffff;
        background-color: #0a45e5;
        border-radius: 6px;
        text-decoration: none;
        text-align: center;
        margin-top: 1rem;
      }
      /* Footer */
      .footer {
        padding-top: 1.5rem;
        font-size: 0.875rem;
        color: #6b7280;
        border-top: 1px solid #e5e7eb;
        text-align: center;
      }
      .footer a {
        color: #06429d;
        text-decoration: none;
      }

      /* Responsive Styles */
      @media screen and (max-width: 600px) {
        .container {
          padding: 1rem;
          border-radius: 0;
        }
        .h1 {
          font-size: 1.25rem;
        }
        .p {
          font-size: 0.875rem;
        }
        .btn {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }
        .header img {
          max-width: 96%; /* Adjusts image size on small screens */
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Header -->
      <div class="header">
        <img
          src="https://sms.systemar.co.zw/email_images/email_header_1.png"
          alt="SYSTEMAR_email_template"
        />
      </div>

      <!-- Body Content -->
      <div class="body">
        <h1 class="h1">${mailheader}</h1>
        <p class="p">${mailbody}</p>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p>
         &copy; 2020 - ${new Date().getFullYear()}  SYSTEMAR, a
            proprietary service of Tech Pundit (Pty) Ltd. All rights reserved.
        </p>
        <p>
          <a href="https://systemar.co.zw/newsletter/unsubscribe">Unsubscribe</a>
          | <a href="https://systemar.co.zw/privacy-policy">Privacy Policy</a> |
          <a href="https://systemar.co.zw" target="_blank">Visit Website</a>
        </p>
        <hr />
        <p> Office 1, Highfield Post Office,
        
            Highfield, Harare, 
        
            Zimbabwe
        <p>
         <a href="https://systemar.co.zw">Email: sales@systemar.co.zw</a>
        </p>
      </div>
    </div>
  </body>
</html>
  `;
};
