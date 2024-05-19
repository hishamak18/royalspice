import { NextResponse } from 'next/server';
import { parse } from 'cookie';

export async function GET(request) {
    const cookies = parse(request.headers.get('cookie') || '');
    const isAuthenticated = cookies.auth === 'your-token'; // Validate your real token here

    return NextResponse.json({ authenticated: isAuthenticated });
}
