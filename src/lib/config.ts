// Configuration file for environment variables
export const config = {
  // Main application URL
  mainAppUrl: process.env.NEXT_PUBLIC_MAIN_APP_URL || 'http://localhost:5173',
  
  // Clerk authentication URLs
  clerkAfterSignInUrl: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || 'http://localhost:5173',
  clerkAfterSignUpUrl: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || 'http://localhost:5173',
  
  // Environment detection
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const;
