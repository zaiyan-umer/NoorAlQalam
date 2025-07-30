"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
    return (
        <>
            <nav className="w-full py-10 bg-background">
                <div className="container mx-auto flex items-center justify-between px-4 h-16">
                    {/* Logo */}
                    <div className="flex items-center lg:pl-40">
                        <Link href="/" className="text-xl overflow-hidden">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/general/logo.png`}
                                alt="Logo"
                                width={100}
                                height={100}
                                priority
                            />
                        </Link>
                    </div>
                    {/* Navigation */}
                    <div className="hidden md:flex flex-1 justify-center tracking-widest">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/">
                                            <div className="font-light text-xl uppercase tracking-wider bg-transparent">Home</div>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        <div className="font-light text-xl uppercase tracking-wider">Gallery</div>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[300px] gap-4">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="/gallery/classical">
                                                        <div className="font-light text-md uppercase">Classical</div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link href="/gallery/signature">
                                                        <div className="font-light text-md uppercase">Signature Art</div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/about">
                                            <div className="font-light text-xl uppercase tracking-wider">About</div>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/shop">
                                            <div className="font-light text-xl uppercase tracking-wider">Shop</div>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="px-4 py-2 bg-transparent cursor-pointer">
                                    <Menu size={35} />
                                </button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                                <SheetDescription className="sr-only">
                                    Navigate through the website using this menu.
                                </SheetDescription>

                                <div className="grid gap-6 px-10 py-6 mt-20">
                                    <Link href="/" className="text-lg font-light uppercase tracking-widest">Home</Link>
                                    <Link href="/gallery/classical">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <div className="text-lg font-light uppercase tracking-widest">Gallery</div>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-56" align="start">
                                                <DropdownMenuLabel className="hidden">Gallery</DropdownMenuLabel>
                                                <DropdownMenuGroup>
                                                    <DropdownMenuItem className="font-light text-sm uppercase tracking-wide">
                                                        Classical Calligraphy
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="font-light text-sm uppercase tracking-wide">
                                                        Signature Art
                                                    </DropdownMenuItem>
                                                </DropdownMenuGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </Link>
                                    <Link href="/about" className="text-lg font-light uppercase tracking-widest">About</Link>
                                    <Link href="/shop" className="text-lg font-light uppercase tracking-widest">Shop</Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </>
    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
