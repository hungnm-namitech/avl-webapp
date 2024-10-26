import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const publicPaths = [
    '/',
    '/login',
    '/forgot-password',
    '/forgot-password/completion',
  ].includes(pathname);

  if (publicPaths && token) {
    return NextResponse.redirect(new URL('/dashboard', origin));
  }
  if (!token && !publicPaths) {
    return NextResponse.redirect(new URL('/login', origin));
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    '/',
    '/dashboard',
    '/dashboard/:path*',
    '/detail-order/:path*',
    '/edit-expense/:path*',
    '/order-list/:path*',
    '/setting/:path*',
    '/login/:path*',
    '/forgot-password/:path*',
    '/logout/:path*',
    '/order/:path*',
  ],
};
