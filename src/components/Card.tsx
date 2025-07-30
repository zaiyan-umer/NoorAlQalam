'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Lens } from "@/components/ui/lens";
import { motion } from "motion/react";
import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function CardDemo({ imgUrl, title, cta, href }: { imgUrl: string, title: string, cta: string, href: string }) {
    const [hovering, setHovering] = useState(false)

    return (
        <Card className="w-full max-w-md">
            <CardHeader className="sr-only">
                <CardTitle>Gallery Card</CardTitle>
                <CardDescription>
                    Explore our collection of stunning artworks.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative z-10 hidden sm:block">
                    <Lens hovering={hovering} setHovering={setHovering} lensSize={200} zoomFactor={1.5} position={{ x: 200, y: 150 }} isStatic={false}>
                        <Link href={href}>
                            <Image
                                src={imgUrl}
                                alt="Gallery Image"
                                width={400}
                                height={200}
                                className="w-full h-auto object-cover mb-4"
                            />
                        </Link>
                    </Lens>
                    <motion.div
                        animate={{
                            filter: hovering ? "blur(2px)" : "blur(0px)",
                        }}
                        className="py-4 relative z-20"
                    >
                        <div className="text">
                            <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">{title}</h1>
                            <Link href={href} className="cursor-pointer">
                                <Button variant={"outline"} className="px-8 py-5 uppercase tracking-wider text-lg font-light cursor-pointer rounded-sm">
                                    {cta}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="relative z-10 block sm:hidden">
                    <Link href={href}>
                        <Image
                            src={imgUrl}
                            alt="Gallery Image"
                            width={400}
                            height={200}
                            className="w-full h-auto object-cover mb-4"
                        />
                    </Link>
                    <div className="text">
                        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">{title}</h1>
                        <Link href={href} className="cursor-pointer">
                            <Button variant={"outline"} className="px-8 py-5 uppercase tracking-wider text-lg font-light cursor-pointer rounded-sm">
                                {cta}
                            </Button>
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
