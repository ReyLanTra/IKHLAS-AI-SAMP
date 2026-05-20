'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/context/auth-context';
import { 
  Bot, Code, Database, Terminal, MessageSquare, Zap, 
  Shield, Settings, Save, RefreshCw, ChevronRight, 
  LayoutDashboard, LogIn, LogOut, Globe, Cpu, Sparkles
} from 'lucide-react';

export default function Dashboard() {
  const { isLoggedIn, login } = useAuth();
  const [activeTab, setActiveTab] = useState<'home' | 'settings'>('home');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#dashboard') {
        setActiveTab('settings');
      } else {
        setActiveTab('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const [config, setConfig] = useState({
    prefix: '!ai',
    model: 'openai/gpt-oss-20b',
    systemPrompt: 'Anda adalah IKHLAS AI SAMP, asisten cerdas yang ahli dalam segala hal tentang GTA San Andreas Multiplayer (SAMP)...',
    autoReply: true,
  });

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-violet-500/30 overflow-x-hidden">
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      {/* Video Banner (Autoplay-Loop GIF feel) */}
      <div 
        className="relative w-full overflow-hidden border-b border-violet-950/20 bg-zinc-950 select-none z-10"
        onContextMenu={(e) => e.preventDefault()}
      >
        <video 
          src="https://video.alikhlas.icu/66gy/1000125203.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto object-cover max-h-[380px] pointer-events-none select-none"
          style={{ pointerEvents: 'none' }}
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20 pointer-events-none" />
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-10"
          >
            {/* Hero Section */}
            <section className="relative pt-20 pb-20 px-6">
              <div className="container mx-auto text-center max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest mb-8"
                >
                  <Sparkles size={14} />
                  <span>The Future of SAMP Intelligence</span>
                </motion.div>
                
                <h1 className="text-7xl md:text-9xl font-display font-extrabold tracking-tighter mb-8 leading-[0.9] bg-gradient-to-b from-white via-white to-zinc-600 bg-clip-text text-transparent">
                  ELEVATE YOUR <br /> SAMP EXPERIENCE
                </h1>
                
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                  A premium AI companion engineered for GTA San Andreas Multiplayer. 
                  Scripting, roleplay, and server management, redefined through neural intelligence.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  <motion.a 
                    href="https://discord.com/oauth2/authorize?client_id=1478403637465321552&permissions=8866461766385655&integration_type=0&scope=applications.commands+bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-10 py-4 bg-violet-600 text-white rounded-full font-bold transition-all shadow-[0_10px_40px_rgba(139,92,246,0.25)] flex items-center gap-3"
                  >
                    <Image 
                      src="https://image.alikhlas.icu/tM8f/IKHLAS_AI_SAMP_LOGO.png" 
                      alt="Logo" 
                      width={24} 
                      height={24} 
                      referrerPolicy="no-referrer"
                    />
                    Deploy to Server
                  </motion.a>
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    onClick={() => {
                      window.location.hash = 'dashboard';
                      setActiveTab('settings');
                    }}
                    className="px-10 py-4 bg-transparent border border-white/10 hover:bg-white/5 text-white rounded-full font-bold transition-all flex items-center gap-3 backdrop-blur-sm"
                  >
                    <LayoutDashboard size={22} />
                    Control Panel
                  </motion.button>
                </div>
              </div>
            </section>

            {/* Stats / Tech Section */}
            <section className="py-20 border-y border-white/5 bg-white/[0.02]">
              <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                <StatItem icon={<Cpu size={24} />} label="Processing" value="Groq LPU™" />
                <StatItem icon={<Globe size={24} />} label="Latency" value="< 100ms" />
                <StatItem icon={<Database size={24} />} label="Memory" value="Infinite" />
                <StatItem icon={<Shield size={24} />} label="Security" value="Encrypted" />
              </div>
            </section>             {/* Features Section */}
            <section className="py-32 container mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <GlassCard 
                  icon={<Terminal className="text-violet-400" />}
                  title="PAWN Architect"
                  description="Advanced neural understanding of PAWN scripting, optimized for high-performance server logic."
                />
                <GlassCard 
                  icon={<Sparkles className="text-violet-400" />}
                  title="Roleplay Mastery"
                  description="Sophisticated narrative generation and RP logic enforcement for immersive server environments."
                />
                <GlassCard 
                  icon={<Database className="text-violet-400" />}
                  title="Neural Memory"
                  description="Context-aware persistent storage powered by Supabase, ensuring continuity in every interaction."
                />
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="settings"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="container mx-auto px-8 py-16"
          >
            <div className="max-w-6xl mx-auto">
              {!isLoggedIn ? (
                <div className="text-center py-32 bg-white/[0.02] border border-white/5 rounded-[40px] backdrop-blur-md">
                  <Shield size={64} className="mx-auto text-violet-500/50 mb-6" />
                  <h2 className="text-3xl font-display font-bold mb-4">Access Restricted</h2>
                  <p className="text-zinc-500 mb-8 max-w-md mx-auto">Please authenticate with your Discord account to manage your bot instances.</p>
                  <button 
                    onClick={login}
                    className="px-8 py-3 bg-white text-black rounded-full font-bold transition-all hover:bg-zinc-200"
                  >
                    Authenticate Now
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  {/* Sidebar */}
                  <div className="lg:col-span-3 space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 mb-6 px-4">Management</h3>
                    <SettingsTab active icon={<Bot size={20} />} label="Core Engine" />
                    <SettingsTab icon={<MessageSquare size={20} />} label="Personality" />
                    <SettingsTab icon={<Shield size={20} />} label="Access Control" />
                    <SettingsTab icon={<Database size={20} />} label="Neural Logs" />
                    <div className="pt-8">
                      <div className="px-4 py-6 bg-violet-500/5 border border-violet-500/10 rounded-3xl">
                        <p className="text-xs text-violet-500/60 font-medium mb-2 uppercase tracking-wider">System Status</p>
                        <div className="flex items-center gap-2 text-violet-400 font-bold">
                          <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                          Operational
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Panel */}
                  <div className="lg:col-span-9">
                    <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-10 backdrop-blur-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8">
                        <button 
                          onClick={handleSave}
                          disabled={isSaving}
                          className="px-8 py-3 bg-violet-600 hover:bg-violet-500 disabled:bg-zinc-800 text-white rounded-full font-bold transition-all flex items-center gap-3 shadow-lg shadow-violet-600/20"
                        >
                          {isSaving ? <RefreshCw size={20} className="animate-spin" /> : <Save size={20} />}
                          {isSaving ? 'Synchronizing...' : 'Apply Changes'}
                        </button>
                      </div>

                      <div className="max-w-2xl">
                        <h2 className="text-4xl font-display font-bold mb-2">Core Configuration</h2>
                        <p className="text-zinc-500 mb-12">Fine-tune the neural parameters of your IKHLAS instance.</p>

                        <div className="space-y-10">
                          <InputGroup 
                            label="Command Prefix" 
                            description="The trigger character for bot interaction."
                            value={config.prefix}
                            onChange={(v) => setConfig({...config, prefix: v})}
                          />
                          
                          <div className="space-y-4">
                            <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Neural Model</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <ModelOption 
                                active={config.model === 'openai/gpt-oss-20b'} 
                                onClick={() => setConfig({...config, model: 'openai/gpt-oss-20b'})}
                                name="GPT-OSS 20B"
                                desc="Optimized for PAWN scripting"
                              />
                              <ModelOption 
                                active={config.model === 'llama3-70b-8192'} 
                                onClick={() => setConfig({...config, model: 'llama3-70b-8192'})}
                                name="Llama 3 70B"
                                desc="Best for complex RP logic"
                              />
                            </div>
                          </div>                           <div className="space-y-4">
                            <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest">System Architecture (Prompt)</label>
                            <textarea 
                              rows={5}
                              value={config.systemPrompt}
                              onChange={(e) => setConfig({...config, systemPrompt: e.target.value})}
                              className="w-full bg-black/40 border border-white/10 rounded-3xl px-6 py-5 focus:outline-none focus:border-violet-500/50 transition-all resize-none text-zinc-300 font-light leading-relaxed"
                            />
                          </div>

                          <div className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/10">
                            <div>
                              <h4 className="font-bold text-lg">Autonomous Response</h4>
                              <p className="text-sm text-zinc-500">Allow bot to engage in threads automatically.</p>
                            </div>
                            <button 
                              onClick={() => setConfig({...config, autoReply: !config.autoReply})}
                              className={`w-14 h-7 rounded-full transition-all relative ${config.autoReply ? 'bg-violet-600' : 'bg-zinc-800'}`}
                            >
                              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${config.autoReply ? 'left-8' : 'left-1'}`} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavLink({ children, active = false, onClick }: { children: React.ReactNode; active?: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`text-sm font-bold uppercase tracking-widest transition-all relative py-2 ${active ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
    >
      {children}
      {active && (
        <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-500" />
      )}
    </button>
  );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="text-center md:text-left space-y-2">
      <div className="flex items-center justify-center md:justify-start gap-3 text-zinc-500">
        {icon}
        <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
      </div>
      <div className="text-2xl font-display font-bold text-white">{value}</div>
    </div>
  );
}

function GlassCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.04)' }}
      className="p-10 bg-white/[0.02] rounded-[40px] border border-white/5 transition-all group"
    >
      <div className="mb-8 p-4 bg-violet-500/5 rounded-2xl inline-block group-hover:bg-violet-500/10 transition-colors">
        {React.cloneElement(icon as React.ReactElement<any>, { size: 32 })}
      </div>
      <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
      <p className="text-zinc-400 leading-relaxed font-light">{description}</p>
    </motion.div>
  );
}

function SettingsTab({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all ${active ? 'bg-white/5 text-white border border-white/10 shadow-xl' : 'hover:bg-white/[0.02] text-zinc-500 hover:text-zinc-300'}`}>
      <div className="flex items-center gap-4">
        {icon}
        <span className="font-bold text-sm uppercase tracking-widest">{label}</span>
      </div>
      <ChevronRight size={18} className={active ? 'opacity-100' : 'opacity-0'} />
    </button>
  );
}

function InputGroup({ label, description, value, onChange }: { label: string; description: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest">{label}</label>
        <p className="text-xs text-zinc-600 mt-1">{description}</p>
      </div>
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-500/50 transition-all text-zinc-300"
      />
    </div>
  );
}

function ModelOption({ active, onClick, name, desc }: { active: boolean; onClick: () => void; name: string; desc: string }) {
  return (
    <button 
      onClick={onClick}
      className={`text-left p-6 rounded-3xl border transition-all ${active ? 'bg-violet-500/10 border-violet-500/50' : 'bg-black/40 border-white/10 hover:border-white/20'}`}
    >
      <div className="font-bold mb-1">{name}</div>
      <div className="text-xs text-zinc-500">{desc}</div>
    </button>
  );
}
