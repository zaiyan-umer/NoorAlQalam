import Image from 'next/image';
import React from 'react';
import type { Painting } from '@/types/painting';

type Props = {
  painting: Painting;
  shop?: boolean;
};

const PaintingCardComponent: React.FC<Props> = ({ painting, shop = false }) => {
  return (
    <article className="overflow-hidden relative">
      <div className="h-112 relative overflow-hidden">
        <Image
          src={painting.imgUrl}
          alt={painting.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
          className="w-full hover:scale-105 transition-transform duration-300 cursor-pointer"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-xl font-semibold">{painting.title}</h2>
        {
          shop && (
            <p className="text-gray-600 mt-2">{painting.price}</p>
          )
        }
      </div>
    </article>
  );
};

const PaintingCard = React.memo(PaintingCardComponent);
PaintingCard.displayName = 'PaintingCard';

export default PaintingCard;
