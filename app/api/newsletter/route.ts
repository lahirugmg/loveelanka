import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Placeholder: accept the email and pretend to store it.
  // In production, connect to a real email service (e.g., ConvertKit, Mailchimp).
  try {
    await req.json();
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

