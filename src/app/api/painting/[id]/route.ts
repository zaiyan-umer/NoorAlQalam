import Image from '@/lib/models/image';
import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db-connect/db';

export async function GET(request:NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log("ID: ", id);
  

  try {
    await dbConnect();
    const image = await Image.findById(id);
    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    return NextResponse.json(image);
  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
