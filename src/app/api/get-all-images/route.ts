import Image from '@/lib/models/image';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const images = await Image.find();
    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}
