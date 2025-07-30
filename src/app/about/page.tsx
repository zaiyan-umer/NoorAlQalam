import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
    const baseurl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
    console.log(baseurl);
    
const data = [
    {
        title: "1953 • Birth in Pakistan",
        content: (
            <div>
                <p className="mb-6 text-lg text-neutral-800 dark:text-neutral-200">
                    Born in 1953 in Pir-Mahal, Pakistan. He would grow up surrounded by 
                    tradition and discipline, absorbing the beauty of cultural craft from an early age.
                </p>
                <div className="relative w-full h-124">
                    <Image
                        src={`${baseurl}/bio/pir-mahal.jpg`}
                        alt="Birthplace"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-md shadow-md"
                        priority
                    />
                </div>
            </div>
        ),
    },
    {
        title: "1967 • First Brush with Art",
        content: (
            <div>
                <p className="mb-6 text-lg text-neutral-800 dark:text-neutral-200">
                    At a very early age, he began painting, a self-taught journey that would
                    evolve from signboards to hand-painted cinema posters.
                </p>
                <div className="relative w-full h-124">
                    <Image
                        src={`${baseurl}/bio/old.jpg`}
                        alt="First Painting"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-md shadow-md"
                        priority
                    />
                </div>
            </div>
        ),
    },
    {
        title: "1970 • Professional Cinema Artist in Lahore",
        content: (
            <div>
                <p className="mb-6 text-lg text-neutral-800 dark:text-neutral-200">
                    After moving to Lahore, he worked in the bustling Lakshmi Chowk and Royal Park
                    areas — the heart of Pakistan’s film industry — painting bold, expressive cinema posters.
                </p>
                <div className="relative w-full h-124">
                    <Image
                        src={`${baseurl}/bio/lahore.jpg`}
                        alt="Cinema Art in Lahore"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-md shadow-md"
                        priority
                    />
                </div>
            </div>
        ),
    },
    {
        title: "1977 • Bahrain Years",
        content: (
            <div>
                <p className="mb-6 text-lg text-neutral-800 dark:text-neutral-200">
                    In 1977, he moved to Bahrain, where he spent several years. The experience
                    broadened his artistic vision and deepened his spiritual connection to his craft.
                </p>
                <div className="relative w-full h-124">
                    <Image
                        src={`${baseurl}/bio/bahrain.jpg`}
                        alt="Bahrain Period"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-md shadow-md"
                        priority
                    />
                </div>
            </div>
        ),
    },
    {
        title: "1980 • Return to Karachi",
        content: (
            <div>
                <p className="mb-6 text-lg text-neutral-800 dark:text-neutral-200">
                    After returning to Karachi in 1980, he stepped away from cinema art and
                    transitioned fully into calligraphy, knife painting, and mixed techniques that
                    would later define his signature style.
                </p>
                <div className="relative w-full h-124">
                    <Image
                        src={`${baseurl}/bio/karachi.jpg`}
                        alt="Return to Karachi"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-md shadow-md"
                        priority
                    />
                </div>
            </div>
        ),
    },
    {
        title: "2007–2024 • The Calligraphy Years",
        content: (
            <div>
                <p className="mb-6 text-lg text-neutral-800 dark:text-neutral-200">
                    For over 15 years, he has focused entirely on Islamic calligraphy, blending 
                    traditional Sulus script with modern tools and techniques. His work has been 
                    exhibited in major Karachi galleries and praised for its unique fusion of classical 
                    and contemporary styles.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="relative w-full h-112">
                        <Image
                            src={`${baseurl}/bio/latest.jpg`}
                            alt="Calligraphy Work 1"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="rounded-lg shadow-md"
                            priority
                        />
                    </div>
                    <div className="relative w-full h-112">
                        <Image
                            src={`${baseurl}/bio/ex1.jpg`}
                            alt="Calligraphy Work 2"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="rounded-lg shadow-md"
                            priority
                        />
                    </div>
                </div>
            </div>
        ),
    },
];

    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
