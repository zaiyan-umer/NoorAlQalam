'use client'
import React, { useEffect, useState } from 'react'
import PaintingCard from '@/components/PaintingCard';
import axios from 'axios';
import type { Painting } from '@/types/painting';

const Shop = () => {
  const [paintings, setPaintings] = useState<Painting[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('/api/get-all-images');

        setPaintings(res.data);
      } catch (error) {
        console.error('Error fetching paintings, shop:', error);
      }
    };
    getData();
  }, []);

  return (
    <div className='container mx-auto px-4 py-10 max-w-[1200px]'>
      <h1 className="text-5xl font-bold mb-14 text-accent-foreground text-center">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paintings.map((painting, index) => (
          painting.isFeatured && (
            <PaintingCard key={index} painting={painting} shop />
          )
        ))}
      </div>
    </div>
  );
};

export default Shop;