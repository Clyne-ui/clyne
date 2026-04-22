'use client';

import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/portfolio/navbar';
import { LoadingPage } from '@/components/loading-page';
import { useLoadingScreen } from '@/hooks/useLoadingScreen';
import { useAutoTheme } from '@/hooks/useAutoTheme';

export function RootLayoutClient({ children }: { children: ReactNode }) {
  const { isLoading } = useLoadingScreen();
  useAutoTheme();

  return (
    <AnimatePresence mode="wait">
      {isLoading && <LoadingPage key="loading" />}
      {!isLoading && (
        <div key="content" className="relative font-sans antialiased bg-background text-foreground">
          <Navbar />
          <main>{children}</main>
        </div>
      )}
    </AnimatePresence>
  );
}
