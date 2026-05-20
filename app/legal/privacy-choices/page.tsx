import LegalLayout from '@/components/legal-layout';

const content = `
## Manage Your Data
At IKHLAS AI SAMP, we believe you should have control over your data. Below are the choices available to you regarding your privacy.

## 1. Opt-Out of Neural Training
By default, we do not use your private conversations to train global models. You can further restrict data usage in your dashboard settings.

## 2. Data Deletion
You can wipe your neural memory (conversation history) at any time. This will reset the AI's context for your future interactions.

## 3. Cookie Preferences
We use essential cookies for session management. You can manage your cookie preferences through your browser settings.
`;

export default function PrivacyChoices() {
  return (
    <LegalLayout 
      title="Privacy Choices" 
      lastUpdated="February 27, 2026" 
      content={content}
    />
  );
}
