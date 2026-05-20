'use client';

import React from 'react';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';

export default function LegalLayout({ 
  title, 
  lastUpdated, 
  content 
}: { 
  title: string; 
  lastUpdated: string; 
  content: string;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-violet-500/30 overflow-x-hidden">
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-500/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 container mx-auto px-8 py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-zinc-500 font-mono text-sm mb-12 uppercase tracking-widest">
            Last Updated: {lastUpdated}
          </p>
          
          <div className="markdown-body prose prose-invert prose-purple max-w-none prose-headings:font-display prose-headings:tracking-tight prose-p:text-zinc-400 prose-p:leading-relaxed prose-li:text-zinc-400">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
