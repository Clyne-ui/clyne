'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function useAutoTheme() {
  const { setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const checkTime = () => {
      const now = new Date();
      const hour = now.getHours();

      // Dark mode: 7pm (19:00) to 6am (06:00)
      // Light mode: 6am (06:00) to 7pm (19:00)
      if (hour >= 19 || hour < 6) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };

    // Check theme immediately on mount
    checkTime();

    // Check every minute to see if theme should change
    const interval = setInterval(checkTime, 60000);

    return () => clearInterval(interval);
  }, [isMounted, setTheme]);
}
