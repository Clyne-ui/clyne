'use client';

import { useEffect, useState } from 'react';

export function useLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return { isLoading };
}
