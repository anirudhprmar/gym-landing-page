"use client"
import React, { RefObject } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { MoveRight, ChevronDown } from 'lucide-react'
import BgHero from '../../public/bg/bgHero.png'
import { motion } from 'motion/react'

interface scrollProps {
  scrollFunction: (ref: React.RefObject<HTMLElement | null>) => void;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export default function Hero({ scrollFunction, contactRef }: scrollProps) {
  const handleContactClick = (e: React.MouseEvent, section: RefObject<HTMLElement | null>) => {
    e.preventDefault()
    if (section.current) {
      scrollFunction(section)
    }
  }

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden'
    >
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${BgHero.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background'></div>
        <div className='absolute inset-0 bg-grid-pattern opacity-20'></div>
      </div>

      <div className='relative z-10 flex flex-col gap-8 items-center justify-center text-center px-4 max-w-5xl mx-auto mt-20'>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='flex flex-col gap-4'
        >
          <span className='text-primary font-mono tracking-widest text-sm md:text-base uppercase'>
            Redefine Your Limits
          </span>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-tight'>
            FORGE YOUR <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-white text-glow'>LEGACY</span>
          </h1>
          <p className='text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed'>
            Experience the ultimate fitness evolution. State-of-the-art equipment, elite coaching, and a community that drives you forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className='flex flex-col sm:flex-row gap-4 w-full justify-center'
        >
          <Button
            variant={'default'}
            size={'lg'}
            className='bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(var(--primary),0.5)]'
            asChild
          >
            <Link
              onClick={(e) => handleContactClick(e, contactRef)}
              href={contactRef.current ? "#contact" : ""}
              className='flex items-center gap-2'
            >
              Start Your Journey <MoveRight className='w-5 h-5' />
            </Link>
          </Button>
          <Button
            variant={'outline'}
            size={'lg'}
            className='border-zinc-700 text-white hover:bg-zinc-800 hover:text-white text-lg px-8 py-6 rounded-full font-medium backdrop-blur-sm'
          >
            View Programs
          </Button>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-400'
      >
        <ChevronDown className='w-8 h-8' />
      </motion.div>

    </div>
  )
}
