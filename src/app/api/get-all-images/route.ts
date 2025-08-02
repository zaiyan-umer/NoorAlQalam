import Image from '@/lib/models/image';
import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db-connect/db';

export async function GET() {
  try {
    await dbConnect();
    const images = await Image.find();
    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}
