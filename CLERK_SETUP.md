# Clerk Setup for Landing Site

## Environment Variables

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

## How It Works

### **Unauthenticated Users:**
- See landing page with marketing content
- "Get Started" button opens Clerk signup modal
- "Sign In" button opens Clerk signin modal

### **Authenticated Users:**
- Automatically redirected to main app (using NEXT_PUBLIC_MAIN_APP_URL)
- See "Go to App" button instead of "Get Started"
- UserButton shows in navigation

### **Authentication Flow:**
1. User clicks "Get Started" → Clerk modal opens
2. User signs up/signs in → Clerk sets `__session` cookie
3. User is redirected to main app (using NEXT_PUBLIC_MAIN_APP_URL)
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

5. **Test logout synchronization:**
   - Open main app in one tab
   - Open landing site in another tab
   - Logout from main app
   - Landing site should automatically detect logout and show landing page

## Benefits

- ✅ **Seamless experience**: Users don't see landing page after login
- ✅ **Same authentication**: Uses same Clerk account as main app
- ✅ **Smart routing**: Nginx + Clerk work together
- ✅ **Industry standard**: Like GitHub, Slack, Notion
- ✅ **Logout synchronization**: Automatically detects when user logs out from main app

