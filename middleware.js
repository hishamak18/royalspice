import { NextResponse } from 'next/server';
import { parse } from 'cookie';

export function middleware(request) {
    const cookies = parse(request.headers.get('cookie') || '');
    const isAuthenticated = cookies.auth === 'your-token'; // Validate your real token here

    if (request.url === '/api/check-auth') {
        return NextResponse.next();
    } else if (isAuthenticated) {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: '/dashboardrpr/:path*',
};
