import LegalLayout from '@/components/legal-layout';

const content = `
## 1. Acceptance of Terms
By accessing and using IKHLAS AI SAMP, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

## 2. Description of Service
IKHLAS AI SAMP provides an artificial intelligence companion designed for the GTA San Andreas Multiplayer (SAMP) community, including scripting assistance, roleplay guidance, and server management tools.

## 3. User Conduct
Users are responsible for their interactions with the AI. Any attempt to exploit, bypass, or misuse the AI for malicious purposes is strictly prohibited.

## 4. Intellectual Property
The neural models and software architecture powering IKHLAS AI SAMP are the intellectual property of its developers. Users retain ownership of the scripts they generate using the service.
`;

export default function TermsOfService() {
  return (
    <LegalLayout 
      title="Terms of Service" 
      lastUpdated="February 27, 2026" 
      content={content}
    />
  );
}
