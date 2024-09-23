// Function to create and send an email
function sendEmail(to, subject, body) {
  const email = {
    to,
    subject,
    body,
    sentAt: new Date(),
    status: "sent",
  };
  logEmail(email);
  return email;
}

// Function to create a specific type of email
function createAndSendEmail(to, subject, body, typeFlag) {
  const email = sendEmail(to, subject, body);
  email[typeFlag] = true;
  logEmail(email);
  return email;
}

// Example usage
const welcomeEmail = createAndSendEmail(
  "newuser@example.com",
  "Welcome!",
  "Thank you for joining.",
  "isWelcomeEmail"
);

const passwordResetEmail = createAndSendEmail(
  "user@example.com",
  "Reset Password",
  "Click here to reset your password.",
  "isPasswordReset"
);
