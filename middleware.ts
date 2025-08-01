import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // adjust the path you want to block, e.g. "/secret-page" or API route
  if (url.pathname.startsWith('/upload') || url.pathname.startsWith('/api/upload')) {
    if (process.env.NODE_ENV === 'production') {
      return new NextResponse('Blocked', { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/upload', '/api/upload'],
};
