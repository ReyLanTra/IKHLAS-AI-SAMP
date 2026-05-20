import LegalLayout from '@/components/legal-layout';

const content = `
## 1. Usage License
We grant you a personal, non-exclusive, non-transferable license to use IKHLAS AI SAMP for your personal or server-related projects within the SAMP community.

## 2. Restrictions
You may not reverse engineer, decompile, or attempt to extract the source code of the AI models. Commercial redistribution of the AI service itself is prohibited without explicit consent.

## 3. Disclaimer of Warranty
The service is provided "as is" without any warranties. While we strive for accuracy in PAWN scripting and RP logic, we do not guarantee the results will be error-free.
`;

export default function TermsOfUse() {
  return (
    <LegalLayout 
      title="Terms of Use" 
      lastUpdated="February 27, 2026" 
      content={content}
    />
  );
}
