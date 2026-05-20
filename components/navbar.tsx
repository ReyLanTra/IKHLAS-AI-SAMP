'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Bot, LogIn, LogOut } from 'lucide-react';

export default function Navbar({ 
  isLoggedIn, 
  user, 
  onLogin, 
  onLogout 
}: { 
  isLoggedIn: boolean; 
  user: { name: string; avatar: string } | null;
  onLogin: () => void;
  onLogout: () => void;
}) {
  return (
    <nav className="border-b border-white/5 bg-black/40 backdrop-blur-2xl sticky top-0 z-50">
      <div className="container mx-auto px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-display font-bold text-2xl cursor-pointer group">
          <div className="relative">
            <Image 
              src="https://image.alikhlas.icu/tM8f/IKHLAS_AI_SAMP_LOGO.png" 
              alt="IKHLAS Logo" 
              width={40} 
              height={40} 
              className="group-hover:scale-110 transition-transform rounded-lg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-violet-500/30 blur-lg rounded-full animate-pulse -z-10" />
          </div>
          <span className="tracking-tighter bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">IKHLAS AI SAMP</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all">Home</Link>
          <Link href="/#dashboard" className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all">Dashboard</Link>
          <Link href="/docs" className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-all">Documentation</Link>
        </div>

        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onLogin}
              className="px-6 py-2.5 bg-white text-black rounded-full font-bold text-sm transition-all flex items-center gap-2 hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <LogIn size={18} />
              Login with Discord
            </motion.button>
          ) : (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <Image src={user?.avatar || ''} alt="Avatar" width={24} height={24} className="w-6 h-6 rounded-full border border-white/20" referrerPolicy="no-referrer" />
                <span className="text-sm font-medium text-zinc-300">{user?.name}</span>
              </div>
              <button onClick={onLogout} className="p-2 text-zinc-500 hover:text-white transition-colors">
                <LogOut size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
