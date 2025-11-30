"use client"
import Link from 'next/link'
import ImageSlider from './ImageSlider'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'
import React, { RefObject } from 'react'
import { motion } from 'motion/react'

interface AboutProps {
  scrollFunction: (ref: RefObject<HTMLElement | null>) => void;
  refs: {
    aboutRef?: RefObject<HTMLDivElement | null>
    contactRef: RefObject<HTMLDivElement | null>
  }
}

export default function Gallery({ scrollFunction, refs }: AboutProps) {

  const handleContactClick = (e: React.MouseEvent, section: RefObject<HTMLElement | null>) => {
    e.preventDefault()
    if (section.current) {
      scrollFunction(section)
    }
  }

  return (
    <section ref={refs.aboutRef} id="about" className='w-full min-h-screen py-24 px-6 bg-zinc-950 text-white flex flex-col items-center justify-center relative overflow-hidden'>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 pointer-events-none"></div>

      <div className='container mx-auto z-10 flex flex-col lg:flex-row items-center gap-16'>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='flex-1 w-full max-w-xl'
        >
          <ImageSlider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex-1 flex flex-col gap-8 text-center lg:text-left'
        >
          <div>
            <h2 className='text-primary font-mono tracking-widest uppercase mb-2'>Who We Are</h2>
            <h3 className='text-4xl md:text-5xl font-extrabold leading-tight'>
              MORE THAN JUST <br /> A <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500'>GYM</span>
            </h3>
          </div>

          <div className='space-y-4 text-zinc-400 text-lg leading-relaxed'>
            <p>
              We are a sanctuary for those who refuse to settle. Our mission is to provide the environment, equipment, and expertise you need to break through your limits.
            </p>
            <p>
              Whether you&apos;re a beginner taking your first step or an athlete chasing a new PR, our community is here to support your journey every step of the way.
            </p>
          </div>

          <div className='pt-4'>
            <Button
              size={'lg'}
              className='bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(var(--primary),0.4)]'
              asChild
            >
              <Link
                onClick={(e) => handleContactClick(e, refs.contactRef)}
                href={refs.contactRef.current ? "#contact" : ""}
                className='flex items-center gap-2'
              >
                Join The Movement <MoveRight className='w-5 h-5' />
              </Link>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
