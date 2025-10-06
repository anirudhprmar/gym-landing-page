"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
      const [hasScrolled, setHasScrolled] = useState(false);

      useEffect(() => {
    const handleScroll = () => {
      // Adjust this value based on when you want the border to appear
      const scrollThreshold = 419.1; 
      if (window.scrollY > scrollThreshold) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`flex items-center justify-around p-3 fixed top-0 min-w-full z-10 text-zinc-100 ${hasScrolled ? ' bg-transparent backdrop-blur-md ' : ''}`}>
        
        <div className="flex items-center gap-2">
          <Image
          src={'/logo.webp'}
          height={90}
          width={90}
          alt="logo"
          className="w-15 h-10 object-cover rounded-none"
          />
            <p className="text-xl cursor-pointer font-bold">C-n-C</p>
        </div>

        <ul className="hidden md:flex gap-10 text-md items-center justify-center">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Programs</li>
            <li className="cursor-pointer">Testimonials</li>
            {/* <li></li    > */}
        </ul>

        <div>
            <Button size={'lg'} variant={'default'} className="bg-yellow-200 hover:bg-yellow-300 border-0">
                <Link href={"#"} className="text-zinc-900">
                JOIN NOW
                </Link>
            </Button>
        </div>
      </nav>
    </header>
  )
}
