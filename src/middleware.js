import { NextResponse, NextRequest } from 'next/server'

 
export function middleware(NextRequest) {
    const path = NextRequest.nextUrl.pathname;
    
    const isPublicPath = path === '/login' || path === '/register';

    const token = NextRequest.cookies.get('token')?.value || '';

    // if user already logged in then he/she should not visit login or signup
    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/', NextRequest.nextUrl));
    }

    // if user tries to access the protected pages without login
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', NextRequest.nextUrl));
    }
}
 
export const config = {
  matcher: [
    '/',
    '/profile/:path*',
    '/login',
    '/register',
    '/sankey',
    '/sld',
  ],
}