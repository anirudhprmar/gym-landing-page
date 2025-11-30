"use client"
import { Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { RefObject } from 'react'

interface refInfo {
  footerRef?: RefObject<HTMLDivElement | null>
}

export default function Footer({ footerRef }: refInfo) {
  return (
    <footer id="contact" className='bg-zinc-950 text-zinc-300 border-t border-zinc-900' ref={footerRef}>
      <div className='container mx-auto px-6 py-16'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
          {/* CTA Section */}
          <div className='flex flex-col justify-center space-y-6'>
            <h5 className='text-4xl md:text-6xl font-extrabold text-white leading-tight'>
              READY TO <br /> <span className='text-primary'>TRANSFORM?</span>
            </h5>
            <p className='text-lg max-w-md'>
              Join the elite community at Crunch-N-Curves today. Your future self will thank you.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <div className='flex items-center gap-3 bg-zinc-900 p-4 rounded-lg border border-zinc-800'>
                <Phone className='text-primary w-6 h-6' />
                <div>
                  <p className='text-xs text-zinc-500 uppercase font-bold'>Call Us</p>
                  <p className='text-white font-mono'>092000 05777</p>
                </div>
              </div>
              <div className='flex items-center gap-3 bg-zinc-900 p-4 rounded-lg border border-zinc-800'>
                <MapPin className='text-primary w-6 h-6' />
                <div>
                  <p className='text-xs text-zinc-500 uppercase font-bold'>Visit Us</p>
                  <p className='text-white text-sm'>Sirol Main Rd, Gwalior</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className='w-full h-80 rounded-2xl overflow-hidden border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.11358303446!2d78.2076792754576!3d26.192983177083505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c4305146c049%3A0x2d612562cae02dc6!2sCrunch-N-Curves%20The%20Fitness%20Club%20%7C%20Best%20Gym%20in%20Gwalior!5e0!3m2!1sen!2sin!4v1759224817305!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className='border-t border-zinc-900 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>

          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-3'>
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/10">
                <Image
                  src={'/logo.webp'}
                  fill
                  alt="logo"
                  className="object-cover"
                />
              </div>
              <span className='text-xl font-bold text-white tracking-tighter'>CRUNCH<span className='text-primary'>N</span>CURVES</span>
            </div>
            <p className='text-sm text-zinc-500 max-w-xs'>
              Empowering Gwalior to achieve peak fitness since 2023.
            </p>
          </div>

          <div className='flex gap-12'>
            <div>
              <h6 className='font-bold text-white mb-4 uppercase text-sm tracking-wider'>Socials</h6>
              <div className='flex gap-4'>
                <Link href={'https://www.facebook.com/crunchncurves/'} target='_blank' className='hover:text-primary transition-colors'>
                  <Facebook className='w-6 h-6' />
                </Link>
                <Link href={'https://www.instagram.com/crunch_n_curves'} target='_blank' className='hover:text-primary transition-colors'>
                  <Instagram className='w-6 h-6' />
                </Link>
              </div>
            </div>

            <div>
              <h6 className='font-bold text-white mb-4 uppercase text-sm tracking-wider'>Hours</h6>
              <ul className='space-y-2 text-sm text-zinc-400'>
                <li className='flex items-center gap-2'><Clock className='w-4 h-4 text-primary' /> Mon-Sat: 6am - 9pm</li>
                <li className='flex items-center gap-2'><Clock className='w-4 h-4 text-zinc-600' /> Sun: Closed</li>
              </ul>
            </div>
          </div>

        </div>

        <div className='mt-12 text-center text-xs text-zinc-700'>
          © {new Date().getFullYear()} Crunch-N-Curves. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
