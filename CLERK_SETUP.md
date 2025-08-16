# Clerk Setup Guide

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Main App URL Configuration
NEXT_PUBLIC_MAIN_APP_URL=http://localhost:5173

# Clerk Authentication URLs
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=http://localhost:5173
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=http://localhost:5173
```

**Note**: The Clerk URLs now use the same environment variable as the main app URL for consistency.

## How It Works

### **Unauthenticated Users:**
- See landing page with marketing content
- "Get Started" button opens Clerk signup modal
- "Sign In" button opens Clerk signin modal

### **Authenticated Users:**
- Automatically redirected to main app (port 5173)
- See "Go to App" button instead of "Get Started"
- UserButton shows in navigation

### **Authentication Flow:**
1. User clicks "Get Started" → Clerk modal opens
2. User signs up/signs in → Clerk sets `__session` cookie
3. User is redirected to main app (port 5173)
4. Future visits to `localhost:3000` → Auto-redirect to main app

## Testing

1. **Start the landing site:**
   ```bash
   cd "zemon-landing copy"
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

## Benefits

- ✅ **Seamless experience**: Users don't see landing page after login
- ✅ **Same authentication**: Uses same Clerk account as main app
- ✅ **Smart routing**: Nginx + Clerk work together
- ✅ **Industry standard**: Like GitHub, Slack, Notion

