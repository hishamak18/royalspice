import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(request) {
    const { username, password } = await request.json();
    console.log(username)
    if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
    ) {
        const token = 'your-token'; // Generate a real token here
        const serialized = serialize('auth', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        });

        const response = NextResponse.json({ message: 'Success' });
        response.headers.set('Set-Cookie', serialized);
        return response;
    } else {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
}
