import LegalLayout from '@/components/legal-layout';

const content = `
## 1. Data Collection
We collect minimal data necessary to provide the service, including Discord user IDs and conversation history for context-aware responses. This data is stored securely using Supabase.

## 2. Use of Data
Your conversation history is used solely to improve the AI's responses to you and maintain continuity in your interactions. We do not sell your personal data to third parties.

## 3. Third-Party Services
We use Groq for AI processing and Supabase for data storage. These services have their own privacy policies regarding data handling.

## 4. Your Rights
You have the right to request the deletion of your conversation history at any time through the dashboard or by contacting support.
`;

export default function PrivacyPolicy() {
  return (
    <LegalLayout 
      title="Privacy Policy" 
      lastUpdated="February 27, 2026" 
      content={content}
    />
  );
}
