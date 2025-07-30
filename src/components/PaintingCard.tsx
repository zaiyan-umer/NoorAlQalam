import Image from 'next/image'
import React from 'react'

interface Painting {
    imgUrl: string;
    title: string;
    isFeatured: boolean;
    price: string;
    description: string;
}

const PaintingCard = ({painting, index}: {painting: Painting; index: number}) => {
    return (
        <div key={index} className="overflow-hidden">
            <div className="h-112 relative overflow-hidden">
                <Image
                    src={painting.imgUrl}
                    alt={painting.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
            </div>
            <div className="p-4 flex flex-col items-center">
                <h2 className="text-xl font-semibold">{painting.title}</h2>
                <p className="text-gray-600 mt-2">{painting.price}</p>
            </div>
        </div>
    )
}

export default PaintingCard