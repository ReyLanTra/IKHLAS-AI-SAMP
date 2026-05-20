'use client';

import React, { useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { AuthProvider, useAuth } from '@/context/auth-context';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, user, login, logout } = useAuth();

  useEffect(() => {
    // Matikan klik kanan / menu konteks khusus gambar dan video
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'IMG' || target.tagName === 'VIDEO' || target.closest('img') || target.closest('video'))) {
        e.preventDefault();
      }
    };

    // Matikan touch hold menu di device Android/iOS untuk gambar/video
    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'IMG' || target.tagName === 'VIDEO' || target.closest('img') || target.closest('video'))) {
        // Kita biarkan gesture click/tap biasa lewat, tapi matikan touch-callout
        // CSS -webkit-touch-callout: none sudah menanganinya sebagian besar, 
        // tapi kita bisa tambahkan preventDefault jika diperlukan pada gesture-hold panjang.
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <>
      <Navbar 
        isLoggedIn={isLoggedIn} 
        user={user} 
        onLogin={login} 
        onLogout={logout} 
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <LayoutContent>
        {children}
      </LayoutContent>
    </AuthProvider>
  );
}
