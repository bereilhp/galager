import { NextResponse } from "next/server";

export function middleware(req) {
  const path = req.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup";
  const token = req.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  } else if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/profile",
    "/profile/:path*",
    "/login",
    "/signup",
    "/courses",
    "/courses/:path*",
    "/exercises",
    "/exercises/:path*",
    "/about",
  ],
};
