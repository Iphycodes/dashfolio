import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const path = url.pathname;

  const isRootPath = path === '/';

  if (isRootPath) {
    return NextResponse.redirect(new URL('/explore', request.url));
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: ['/((?!api|_next|static|.*\\..*|favicon.ico).*)'],
// };
