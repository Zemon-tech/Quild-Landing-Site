'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import { useEffect, useRef } from 'react';

interface AuthRedirectProps {
  children: React.ReactNode;
}

export function AuthRedirect({ children }: AuthRedirectProps) {
  const { isSignedIn, isLoaded: isAuthLoaded } = useAuth();
  const { user, isLoaded: isUserLoaded } = useUser();
  const sessionCheckInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const isLoaded = isAuthLoaded && isUserLoaded;
    // Redirect only if the user is fully signed in AND has been granted access.
    const hasAccess = user?.publicMetadata?.canAccessApp === true;

    if (isLoaded && isSignedIn && hasAccess) {
      const mainAppUrl = process.env.NEXT_PUBLIC_MAIN_APP_URL;
      if (mainAppUrl) {
        window.location.href = mainAppUrl;
      } else {
        console.warn('NEXT_PUBLIC_MAIN_APP_URL environment variable is not set');
        // Fallback to localhost if env var is not set
        window.location.href = 'http://localhost:5173';
      }
    }
  }, [isSignedIn, isAuthLoaded, isUserLoaded, user]);

  // Set up session monitoring to detect logout from main app
  useEffect(() => {
    const isLoaded = isAuthLoaded && isUserLoaded;
    if (isLoaded && isSignedIn) {
      // For production: Use Clerk's built-in session validation
      // This is more reliable than cookie checking across domains
      const validateSession = async () => {
        try {
          // Check if the current session is still valid
          const response = await fetch('/api/auth/validate-session', {
            method: 'GET',
            credentials: 'include',
          });
          
          if (!response.ok) {
            // Session is invalid, reload to update auth state
            window.location.reload();
          }
        } catch (error) {
          console.warn('Session validation failed:', error);
        }
      };

      // Immediate validation
      validateSession();

      // Set up periodic validation every 10 seconds
      sessionCheckInterval.current = setInterval(validateSession, 10000);
    }

    // Cleanup interval when component unmounts or auth state changes
    return () => {
      if (sessionCheckInterval.current) {
        clearInterval(sessionCheckInterval.current);
        sessionCheckInterval.current = null;
      }
    };
  }, [isAuthLoaded, isUserLoaded, isSignedIn]);

  // Listen for storage events (when logout happens in another tab/window)
  useEffect(() => {
    // For production: Listen for Clerk's built-in events
    const handleClerkEvent = (event: CustomEvent) => {
      if (event.type === 'clerk:user:updated' || event.type === 'clerk:session:updated') {
        // User or session was updated, check if still authenticated
        if (isSignedIn) {
          // Trigger a session validation
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      }
    };

    // Listen for Clerk events
    window.addEventListener('clerk:user:updated', handleClerkEvent as EventListener);
    window.addEventListener('clerk:session:updated', handleClerkEvent as EventListener);
    
    return () => {
      window.removeEventListener('clerk:user:updated', handleClerkEvent as EventListener);
      window.removeEventListener('clerk:session:updated', handleClerkEvent as EventListener);
    };
  }, [isSignedIn]);

  // Don't render anything while checking auth status
  const isLoaded = isAuthLoaded && isUserLoaded;
  if (!isLoaded) {
    return null;
  }

  // Do not render children if a redirect is pending (user has access)
  const hasAccess = user?.publicMetadata?.canAccessApp === true;
  if (isSignedIn && hasAccess) {
    return null;
  }

  // If user is not signed in, show the landing page
  return <>{children}</>;
}
