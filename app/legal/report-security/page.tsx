import LegalLayout from '@/components/legal-layout';

const content = `
## Vulnerability Reporting
We take the security of IKHLAS AI SAMP seriously. If you discover a security vulnerability, we encourage you to report it to us responsibly.

## How to Report
Please send a detailed report to our security team via Discord or email. Include steps to reproduce the issue and any potential impact you've identified.

## Our Commitment
We will investigate all legitimate reports and make every effort to quickly resolve any issues. We ask that you do not disclose the vulnerability publicly until we have had a chance to address it.
`;

export default function ReportSecurity() {
  return (
    <LegalLayout 
      title="Report Security" 
      lastUpdated="February 27, 2026" 
      content={content}
    />
  );
}
