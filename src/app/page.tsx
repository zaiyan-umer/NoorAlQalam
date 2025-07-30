'use client'
import React, { useEffect } from 'react'
import Hero from '@/components/Hero'
import CardDemo from '@/components/Card'
import data from '@/data'
import About from '@/components/About'



const HomePage = () => {
useEffect(() => {
  console.log(data);
}, [])


  return (
    <>
      <Hero />
      <div className="cards flex items-center justify-center flex-wrap mt-10 md:gap-40">
        {
          data.map((item, index) => (
            <CardDemo key={index} imgUrl={item.imgUrl} title={item.title} cta={item.cta} href={item.href} />
          ))
        }
      </div>
      <About />
    </>
  )
}

export default HomePage