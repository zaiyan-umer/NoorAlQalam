import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const About = () => {
    return (
        <div className="relative w-full flex items-center justify-center bg-background">
            <div className="relative w-full max-w-[1000px]">
                <div className="relative">
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/general/ex.jpg`}
                        alt="About the artist"
                        width={1000}
                        height={400}
                        className="h-auto object-cover"
                        priority
                    />
                </div>
            </div>

            <div className="absolute max-sm:top-[20%] sm:top-[40%] lg:top-[60%] z-20 text-center text-white px-4 flex flex-col items-center gap-5">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">About the Artist</h1>
                <p className="hidden sm:block text-lg md:text-xl text-[#c3c2c2] max-w-[800px] mx-auto">
                Born in 1953, self-taught and unstoppable, Mr. Zubair&rsquo;s journey began with poster paints and transformed into timeless Islamic calligraphy. Today, his palette knife breathes life into Arabic script, blending tradition, devotion, and generations of passion. <br /><i>This is Noor al-Qalam.</i>
                </p>
                <p className='hidden max-sm:block'>Born in 1953, self-taught and unstoppable...</p>
                <Button variant={"outline"} className="px-8 py-5 uppercase tracking-wider text-lg font-light bg-transparent hover:bg-transparent hover:text-white cursor-pointer rounded-sm">
                    Read More
                </Button>
            </div>
        </div>
    )
}

export default About