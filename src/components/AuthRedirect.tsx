'use client';

import { useAuth } from '@clerk/nextjs';
import { useEffect, useRef } from 'react';

interface AuthRedirectProps {
  children: React.ReactNode;
}

export function AuthRedirect({ children }: AuthRedirectProps) {
  const { isSignedIn, isLoaded } = useAuth();
  const sessionCheckInterval = useRef<NodeJS.Timeout | null>(null);

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

  // Set up session monitoring to detect logout from main app
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      // Immediate check for session cookie
      const hasSessionCookie = document.cookie.includes('__session');
      if (!hasSessionCookie) {
        // Session cookie was cleared (user logged out from main app)
        window.location.reload();
        return;
      }

      // Check session status every 3 seconds when user is signed in
      sessionCheckInterval.current = setInterval(() => {
        // Check if the Clerk session cookie still exists
        const hasSessionCookie = document.cookie.includes('__session');
        if (!hasSessionCookie) {
          // Session cookie was cleared (user logged out from main app)
          // Force a page reload to update the auth state
          window.location.reload();
        }
      }, 3000);
    }

    // Cleanup interval when component unmounts or auth state changes
    return () => {
      if (sessionCheckInterval.current) {
        clearInterval(sessionCheckInterval.current);
        sessionCheckInterval.current = null;
      }
    };
  }, [isLoaded, isSignedIn]);

  // Listen for storage events (when logout happens in another tab/window)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === '__clerk_session' && !e.newValue && isSignedIn) {
        // Clerk session was cleared in another tab/window
        window.location.reload();
      }
    };

    // Also listen for custom logout events
    const handleLogoutEvent = () => {
      if (isSignedIn) {
        window.location.reload();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('clerk:logout', handleLogoutEvent);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('clerk:logout', handleLogoutEvent);
    };
  }, [isSignedIn]);

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
