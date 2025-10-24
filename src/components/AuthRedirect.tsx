'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import { useEffect } from 'react';

interface AuthRedirectProps {
  children: React.ReactNode;
}

export function AuthRedirect({ children }: AuthRedirectProps) {
  const { isSignedIn, isLoaded: isAuthLoaded } = useAuth();
  const { user, isLoaded: isUserLoaded } = useUser();

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
