import { dbConnect } from '@/lib/db-connect/db';
import Image from '@/lib/models/image';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest){
    try{
        await dbConnect();
        const body = await request.json();
        const { title, description, imgUrl, price, category, isFeatured } = body;

        const newImage = new Image({
            title,
            description,
            imgUrl,
            price,
            category,
            isFeatured
        });

        await newImage.save();

        return NextResponse.json(newImage, { status: 201 });
    } catch (error) {
        console.error('Error adding painting:', error);
        return NextResponse.json({ error: 'Failed to add painting' }, { status: 500 });
    }
}