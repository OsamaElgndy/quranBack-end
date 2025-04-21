
export const template = (code: string): string  =>{
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .email-container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              color: #333333;
            }
            .code {
              font-size: 24px;
              font-weight: bold;
              color: #4CAF50;
              text-align: center;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              font-size: 12px;
              color: #888888;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <h1 class="header">رمز التحقق الخاص بك</h1>
            <p style="text-align: center;">يرجى استخدام رمز التحقق التالي لإكمال العملية:</p>
            <div class="code">${code}</div>
            <p style="text-align: center;">إذا لم تطلب هذا الرمز، يرجى تجاهل هذه الرسالة.</p>
            <div class="footer">© 2025 شركتك. جميع الحقوق محفوظة.</div>
          </div>
        </body>
      </html>
    `;
  }
