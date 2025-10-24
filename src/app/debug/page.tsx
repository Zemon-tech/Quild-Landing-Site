'use client';

import { useAuth, useClerk } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function DebugPage() {
  const { isLoaded, isSignedIn, userId } = useAuth();
  const clerk = useClerk();

  useEffect(() => {
    console.log('=== CLERK DEBUG INFO ===');
    console.log('Clerk loaded:', isLoaded);
    console.log('Is signed in:', isSignedIn);
    console.log('User ID:', userId);
    console.log('Clerk instance:', clerk);
    console.log('Environment:', {
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? 'SET' : 'NOT SET',
      NEXT_PUBLIC_WAITLIST_REDIRECT_URL: process.env.NEXT_PUBLIC_WAITLIST_REDIRECT_URL || 'NOT SET'
    });
  }, [isLoaded, isSignedIn, userId, clerk]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow">
        <h1 className="text-xl font-bold mb-4">Clerk Debug Page</h1>
        <div className="space-y-2 text-sm">
          <p><strong>Clerk Loaded:</strong> {isLoaded ? '✅ Yes' : '❌ No'}</p>
          <p><strong>Signed In:</strong> {isSignedIn ? '✅ Yes' : '❌ No'}</p>
          <p><strong>User ID:</strong> {userId || 'None'}</p>
          <p><strong>Publishable Key:</strong> {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? '✅ Set' : '❌ Not Set'}</p>
          <p><strong>Waitlist URL:</strong> {process.env.NEXT_PUBLIC_WAITLIST_REDIRECT_URL || '❌ Not Set'}</p>
        </div>
        <div className="mt-4 p-3 bg-yellow-100 rounded">
          <p className="text-xs text-yellow-800">Check browser console for detailed logs</p>
        </div>
      </div>
    </div>
  );
}
