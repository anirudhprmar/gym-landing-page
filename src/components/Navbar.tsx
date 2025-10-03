"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

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
        
        <div>
            <p className="text-xl">CnC</p>
        </div>

        <ul className="hidden md:flex gap-10 text-md items-center justify-center">
            <li>Gallery</li>
            <li>About Us</li>
            <li>Testimonials</li>
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
