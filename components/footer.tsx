'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 relative z-10 bg-black/20">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3 font-display font-bold text-2xl">
          <Image 
            src="https://image.alikhlas.icu/tM8f/IKHLAS_AI_SAMP_LOGO.png" 
            alt="IKHLAS Logo" 
            width={32} 
            height={32} 
            referrerPolicy="no-referrer"
          />
          <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">IKHLAS AI SAMP</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-zinc-500">
          <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/legal/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/legal/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link href="/legal/report-security" className="hover:text-white transition-colors">Report Security</Link>
          <Link href="/legal/privacy-choices" className="hover:text-white transition-colors">Privacy Choices</Link>
          <a href="#" className="hover:text-white transition-colors">Discord Support</a>
        </div>
        <div className="text-zinc-600 text-sm font-mono">
          EST. 2024 // NEURAL_SAMP_CORE_V2
        </div>
      </div>
    </footer>
  );
}
