import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      // User is not authenticated
      return NextResponse.json({ valid: false }, { status: 401 });
    }
    
    // User is authenticated
    return NextResponse.json({ valid: true, userId });
  } catch (error) {
    console.error('Session validation error:', error);
    // If there's an error validating the session, assume it's invalid
    return NextResponse.json({ valid: false }, { status: 401 });
  }
}

