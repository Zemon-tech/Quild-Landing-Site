'use client';

import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';

interface AuthRedirectProps {
  children: React.ReactNode;
}

export function AuthRedirect({ children }: AuthRedirectProps) {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    // Only redirect if user is signed in and component is loaded
    if (isLoaded && isSignedIn) {
      // Redirect to main app using environment variable
      const mainAppUrl = process.env.NEXT_PUBLIC_MAIN_APP_URL;
      if (mainAppUrl) {
        window.location.href = mainAppUrl;
      } else {
        console.warn('NEXT_PUBLIC_MAIN_APP_URL environment variable is not set');
        // Fallback to localhost if env var is not set
        window.location.href = 'http://localhost:5173';
      }
    }
  }, [isSignedIn, isLoaded]);

  // Don't render anything while checking auth status
  if (!isLoaded) {
    return null;
  }

  // If user is signed in, don't render the landing page
  if (isSignedIn) {
    return null;
  }

  // If user is not signed in, show the landing page
  return <>{children}</>;
}
