import { headers } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session
    ? NextResponse.next()
    : NextResponse.redirect(new URL('/sign-in', request.url));
}

export const config = {
  runtime: 'nodejs',
  matcher: ['/dashboard'],
};
