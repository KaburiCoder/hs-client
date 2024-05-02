import { NextRequest, NextResponse } from "next/server";
import { paths } from "./paths";
import { withAuth, withoutAuth } from "./middlewares/auth";

export async function middleware(request: NextRequest) {
  if (request.body !== null) {
    // 라우팅 외의 작업은 빠져나가도록
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;

  if (notAuthPaths(pathname)) {
    return withoutAuth(request);
  }

  if (allowPaths(pathname)) {
    return NextResponse.next();
  }

  return withAuth(request);
}

function notAuthPaths(pathname: string) {
  return (
    pathname.startsWith(paths.login) ||
    pathname.startsWith(paths.signup) ||
    pathname.startsWith(paths.findPw)
  );
}

function allowPaths(pathname: string) {
  return  pathname.startsWith("/images") ;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
