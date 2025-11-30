"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { RefObject, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

interface AboutProps {
  scrollFunction: (ref: RefObject<HTMLElement | null>) => void;
  refs: {
    about: RefObject<HTMLDivElement | null>;
    program: RefObject<HTMLElement | null>;
    testemonial: RefObject<HTMLElement | null>;
    contact: RefObject<HTMLElement | null>;
  }
}


export default function Navbar({ scrollFunction, refs }: AboutProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  })

  const handleNavClick = (e: React.MouseEvent, section: RefObject<HTMLElement | null>) => {
    e.preventDefault()
    scrollFunction(section)
  }

  return (
    <header>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-between px-6 py-4 fixed top-0 w-full z-50 transition-all duration-300 ${hasScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
      >

        <div className="flex items-center gap-3">
          {/* Logo Placeholder if image fails, or use the image */}
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/20">
            <Image
              src={'/logo.webp'}
              fill
              alt="logo"
              className="object-cover"
            />
          </div>

          <Link href={'/'} className="hidden sm:block text-2xl font-bold tracking-tighter text-white">
            CRUNCH<span className="text-primary">N</span>CURVES
          </Link>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-zinc-300 items-center">
          <li className="cursor-pointer hover:text-primary transition-colors">
            <Link
              onClick={(e) => handleNavClick(e, refs.about)}
              href={refs.about.current ? "#about" : "#"}
            >
              ABOUT
            </Link>
          </li>
          <li className="cursor-pointer hover:text-primary transition-colors">
            <Link
              href={refs.program.current ? "#programs" : "#"}
              onClick={(e) => handleNavClick(e, refs.program)}
            >
              PROGRAMS
            </Link>
          </li>
          <li className="cursor-pointer hover:text-primary transition-colors">
            <Link href={refs.testemonial.current ? "#testemonials" : "#"}
              onClick={(e) => handleNavClick(e, refs.testemonial)}
            >
              TESTIMONIALS
            </Link>
          </li>
        </ul>

        <div>
          <Button asChild size={'sm'} className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-6">
            <Link
              href={refs.contact.current ? "#contact" : "#"}
              onClick={(e) => handleNavClick(e, refs.contact)}
            >
              JOIN NOW
            </Link>
          </Button>
        </div>
      </motion.nav>
    </header>
  )
}
