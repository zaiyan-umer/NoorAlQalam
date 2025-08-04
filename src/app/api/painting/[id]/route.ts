import mongoose from 'mongoose';
import Image from '@/lib/models/image';
import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db-connect/db';

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;

  if (!mongoose.isValidObjectId(id)) {
    return NextResponse.json(
      { error: 'Invalid image ID format' },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    const image = await Image.findById(id).lean().select('-__v');

    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    return NextResponse.json(image, { status: 200 });
  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
