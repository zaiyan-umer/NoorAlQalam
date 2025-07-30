import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full flex items-center justify-center bg-background'>
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/general/masha.jpg`}
        alt="Hero Image for Large Screens"
        width={1200}
        height={400}
        className="hidden lg:block h-auto object-cover"
        priority
      />
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/general/a7.jpg`}

        alt="Hero Image for Medium Screens"
        width={800}
        height={300}
        className="md:block lg:hidden h-auto object-cover"
        priority
      />
    </div>
  )
}

export default Hero