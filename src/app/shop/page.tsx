import React from 'react'
import { classicalPaintings, signaturePaintings } from '@/paintings';
import PaintingCard from '@/components/PaintingCard';

const Shop = () => {
  return (
    <div className='container mx-auto px-4 py-10 max-w-[1200px]'>
      <h1 className="text-5xl font-bold mb-14 text-accent-foreground text-center">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classicalPaintings.map((painting, index) => (
          painting.isFeatured && (
            <PaintingCard key={index} painting={painting} index={index} />
          )
        ))}
        {signaturePaintings.map((painting, index) => (
          painting.isFeatured && (
            <PaintingCard key={index} painting={painting} index={index} />
          )
        ))}
      </div>
    </div>
  )
}

export default Shop