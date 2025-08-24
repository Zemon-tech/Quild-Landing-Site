# Clerk Setup Guide

## Environment Variables

### Local Development
Create a `.env.local` file in the landing site directory with your Clerk keys:

```bash
# Use the same Clerk keys as your main app
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# Main App URL
NEXT_PUBLIC_MAIN_APP_URL=http://localhost:5173

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### Production Deployment (Vercel)
For production, add these environment variables in your Vercel dashboard:

```bash
# Production Clerk keys (switch to Production mode in Clerk dashboard)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_... # Production key
CLERK_SECRET_KEY=sk_live_... # Production secret key

# Your main app production URL
NEXT_PUBLIC_MAIN_APP_URL=https://your-main-app-domain.com

# Clerk URLs for production
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

**Note**: The Clerk URLs now use the same environment variable as the main app URL for consistency.

## How It Works

### **Unauthenticated Users:**
- See landing page with marketing content
- "Get Started" button opens Clerk signup modal
- "Sign In" button opens Clerk signin modal

### **Authenticated Users:**
- Automatically redirected to main app (using NEXT_PUBLIC_MAIN_APP_URL)
- See "Go to App" button instead of "Get Started"
- UserButton shows in navigation

### **Logout Synchronization:**
- **Local Development**: Uses cookie monitoring and storage events
- **Production**: Uses Clerk's built-in session validation API
- **Cross-domain support**: Works between different domains (Vercel + Cloudflare)
- **Automatic refresh**: Reloads page when logout is detected to update UI

### **Authentication Flow:**
1. User clicks "Get Started" → Clerk modal opens
2. User signs up/signs in → Clerk sets `__session` cookie
3. User is redirected to main app (using NEXT_PUBLIC_MAIN_APP_URL)
4. Future visits to `localhost:3000` → Auto-redirect to main app

## Testing

1. **Start the landing site:**
   ```bash
   cd "quild-landing"
   npm run dev
   ```

2. **Visit `http://localhost:3000`**
   - Should see landing page
   - Click "Get Started" → Clerk modal opens

3. **Sign up/sign in**
   - Should redirect to main app
   - Should get `__session` cookie

4. **Visit `http://localhost:3000` again**
   - Should auto-redirect to main app
   - Because `__session` cookie exists

5. **Test logout synchronization:**
   - Open main app in one tab
   - Open landing site in another tab
   - Logout from main app
   - Landing site should automatically detect logout and show landing page

### **Production Testing**
1. **Deploy both apps** with production Clerk keys
2. **Test cross-domain authentication** between Vercel and Cloudflare
3. **Verify logout synchronization** works across different domains
4. **Check browser console** for any authentication errors

## Benefits

- ✅ **Seamless experience**: Users don't see landing page after login
- ✅ **Same authentication**: Uses same Clerk account as main app
- ✅ **Smart routing**: Nginx + Clerk work together
- ✅ **Industry standard**: Like GitHub, Slack, Notion
- ✅ **Logout synchronization**: Automatically detects when user logs out from main app
- ✅ **Production ready**: Works across different domains and hosting providers

## Production Deployment

### **Clerk Setup**
1. **Switch to Production Mode**: In your Clerk dashboard, change from "Development" to "Production"
2. **Get Production Keys**: Copy the production `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
3. **Update Environment Variables**: Add these to your Vercel deployment

### **Cross-Domain Authentication**
- **Landing Site**: Deployed on Vercel (e.g., `https://landing.yourdomain.com`)
- **Main App**: Deployed on Cloudflare (e.g., `https://app.yourdomain.com`)
- **Shared Authentication**: Both use the same Clerk production instance
- **Logout Sync**: Uses API-based session validation for cross-domain compatibility

