 import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // TODO: Replace with actual authentication logic against the backend
  if (username === 'admin' && password === 'password') {
    return NextResponse.json({ success: true });
  } else {
    return new NextResponse(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
