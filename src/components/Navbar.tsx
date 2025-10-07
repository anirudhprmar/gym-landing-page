"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { RefObject, useEffect, useState } from "react";
import Image from "next/image";

interface AboutProps {
  scrollFunction:(ref: RefObject<HTMLElement | null>) => void;
  refs: {
    about: RefObject<HTMLDivElement | null>;
    program: RefObject<HTMLElement | null>;
    testemonial: RefObject<HTMLElement | null>;
    contact: RefObject<HTMLElement | null>;
  }
}


export default function Navbar({scrollFunction,refs}:AboutProps) {
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

  const handleNavClick = (e:React.MouseEvent, section:RefObject<HTMLElement | null>) => {
    e.preventDefault()
    scrollFunction(section)
  }

  return (
    <header>
      <nav className={`flex items-center justify-around p-3 fixed top-0 w-full z-200 text-zinc-100 ${hasScrolled ? ' bg-transparent backdrop-blur-md ' : ''}`}>
        
        <div className="flex items-center gap-2">
          <Image
          src={'/logo.webp'}
          height={90}
          width={90}
          alt="logo"
          className="w-15 h-10 object-cover rounded-none"
          />
            <p className="text-2xl cursor-pointer font-bold">
              <Link href={'/'}>
                C-n-C
              </Link>
              </p>
        </div>

        <ul className="hidden md:flex gap-10 text-md items-center justify-center">
            <li className="cursor-pointer">
              <Link
              onClick={(e) => handleNavClick(e, refs.about)}
              href={refs.about.current ? "#about" : "#"}
              >
              About Us
              </Link>
              </li>
            <li className="cursor-pointer">
              <Link
              href={refs.program.current ? "#programs" : "#"}
              onClick={(e) => handleNavClick(e, refs.program)}
              >
              Programs
              </Link>
              </li>
            <li className="cursor-pointer">
              <Link href={refs.testemonial.current ? "#testemonials" : "#"}
              onClick={(e) => handleNavClick(e, refs.testemonial)}
              >
              Testimonials
              </Link>
              </li>
        </ul>

        <div>
            <Button size={'sm'} variant={'default'} className="bg-yellow-200 hover:bg-yellow-300 border-0">
                <Link 
               href={refs.contact.current ? "#contact" : "#"}
              onClick={(e) => handleNavClick(e, refs.contact)} 
                className="text-zinc-900 text-lg">
                JOIN NOW
                </Link>
            </Button>
        </div>
      </nav>
    </header>
  )
}
