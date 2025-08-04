// app/painting/[id]/page.tsx
import Image from 'next/image';
import React from 'react';
import type { Painting } from '@/types/painting';

interface Props {
  params: Promise<{ id: string }>;
}

async function fetchImage(id: string): Promise<Painting | null> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/painting/${encodeURIComponent(
            id
        )}`,
        { cache: 'no-store' }
    );
    if (!res.ok) return null;
    return res.json();
}


export default async function PaintingPage({ params }: Props) {
  const { id } = await params;
  const image = await fetchImage(id);
    if (!image) {
        return (
            <div className="p-6 flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-2">Painting not found</h1>
                <p className="text-gray-600">Could not load painting with ID: {id}</p>
            </div>
        );
    }

    return (
        <div className="max-w-screen sm:max-w-7xl mx-auto sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 dark:bg-gray-900 overflow-hidden">
                {/* Image */}
                <div className="relative w-full aspect-square flex items-center justify-center">
                    {image.imgUrl ? (
                        <Image
                            src={image.imgUrl}
                            alt={image.title || 'painting'}
                            className="object-contain"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    ) : (
                        <div className="text-gray-400">No image available</div>
                    )}
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-2 sm:mb-6">
                            {image.title || 'Untitled Painting'}
                        </h1>

                        {image.price && (
                            <div className="text-xl md:text-2xl font-semibold text-indigo-600 mb-3 md:mb-8">
                                {image.price}
                            </div>
                        )}

                        <div className="mb-8 flex sm:items-center gap-4">
                            <div className="flex items-center gap-4">
                                <div
                                    className={`font-medium ${image.isFeatured === false ? 'text-red-600' : 'text-green-600'
                                        }`}
                                >
                                    {image.isFeatured === false ? 'Sold out' : 'Available'}
                                </div>
                            </div>
                            <div className="mt-2 sm:mt-0">
                                {image.isFeatured === false ? (
                                    <button
                                        disabled
                                        className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-medium cursor-not-allowed"
                                    >
                                        Sold
                                    </button>
                                ) : (
                                    <button className="cursor-pointer px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-sm font-medium hover:opacity-95 transition">
                                        Buy Now
                                    </button>
                                )}
                            </div>
                        </div>

                        {image.description && (
                            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-lg ">
                                {image.description}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );


}
