'use client';

import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { config } from '@/lib/config';

export default function AuthRedirect() {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      // Redirect to main app using centralized configuration
      window.location.href = config.mainAppUrl;
    }
  }, [isLoaded, isSignedIn]);

  return null;
}
