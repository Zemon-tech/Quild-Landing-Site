# Environment Setup Guide

## Overview

This project uses environment variables to manage URLs and configuration across different environments (development, staging, production).

## Environment Variables

### Required Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Main App URL Configuration
NEXT_PUBLIC_MAIN_APP_URL=http://localhost:5173

# Clerk Authentication URLs
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=http://localhost:5173
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=http://localhost:5173
```

### Environment-Specific Configurations

#### Development (.env.local)
```bash
NEXT_PUBLIC_MAIN_APP_URL=http://localhost:5173
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=http://localhost:5173
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=http://localhost:5173
```

#### Staging (.env.staging)
```bash
NEXT_PUBLIC_MAIN_APP_URL=https://staging.yourapp.com
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=https://staging.yourapp.com
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=https://staging.yourapp.com
```

#### Production (.env.production)
```bash
NEXT_PUBLIC_MAIN_APP_URL=https://yourapp.com
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=https://yourapp.com
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=https://yourapp.com
```

## How It Works

### Centralized Configuration

All environment variables are managed through `src/lib/config.ts`:

```typescript
export const config = {
  mainAppUrl: process.env.NEXT_PUBLIC_MAIN_APP_URL || 'http://localhost:5173',
  clerkAfterSignInUrl: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || 'http://localhost:5173',
  clerkAfterSignUpUrl: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || 'http://localhost:5173',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const;
```

### Usage in Components

Instead of hardcoded URLs, components now use:

```typescript
import { config } from '@/lib/config';

// Use config.mainAppUrl instead of hardcoded URLs
<a href={config.mainAppUrl}>Go to App</a>
```

## Benefits

✅ **Environment Flexibility**: Easy to switch between dev/staging/production
✅ **No Hardcoded URLs**: All URLs are configurable
✅ **Centralized Management**: Single place to update URLs
✅ **Type Safety**: TypeScript ensures correct usage
✅ **Fallback Values**: Default to localhost if env vars are missing

## Deployment

### Vercel
Set environment variables in your Vercel project settings:
- `NEXT_PUBLIC_MAIN_APP_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`

### Other Platforms
Set the same environment variables in your hosting platform's configuration.

## Troubleshooting

### URLs Not Updating
1. Check that `.env.local` file exists in project root
2. Restart your development server
3. Verify environment variable names are correct
4. Check browser console for any errors

### Environment Variables Not Loading
1. Ensure variable names start with `NEXT_PUBLIC_` for client-side access
2. Check file permissions on `.env.local`
3. Verify the file is not in `.gitignore` (it should be)

## Security Notes

- `NEXT_PUBLIC_*` variables are exposed to the client
- Only use these for non-sensitive configuration like URLs
- Never put API keys or secrets in `NEXT_PUBLIC_*` variables
