import React, { RefObject } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import BgHero from '../../public/bg/bgHero.png'

interface scrollProps{
  scrollFunction: (ref: React.RefObject<HTMLElement | null>) => void;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export default function Hero({scrollFunction,contactRef}:scrollProps) {
  const handleContactClick = (e:React.MouseEvent, section:RefObject<HTMLElement | null>) => {
      e.preventDefault()
      if (section.current) {
        scrollFunction(section)
      }
    }

  return (
  <div className=' flex flex-col gap-5  text-zinc-100 justify-center min-h-screen w-full relative  '
    style={{
    backgroundImage: `url(${BgHero.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
  >
    <div className='min-w-full h-full flex items-center bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.9)] absolute '></div>

      <div className='flex flex-col gap-5 z-100 items-center justify-center text-center '>
        <div className='flex flex-col gap-5 max-w-90 md:max-w-3xl'>
          <h1 className='text-3xl md:text-6xl  font-extrabold '>YOUR FITNESS JOURNEY BEGINS HERE</h1>
          <p className='text-sm md:text-lg '>Our state of the art facilities and expert trainers are here to help you achieve your fitness goals, no matter your starting point.</p>
        </div>
        
        <div>
          <Button variant={'secondary'} size={'lg'} className='bg-yellow-200 hover:bg-yellow-300 text-zinc-950'>
              <Link 
               onClick={(e) => handleContactClick(e,contactRef)} 
              href={contactRef.current ? "#contact" : ""}
              className='w-full h-full flex items-center gap-2'>
                  Explore More <span className='p-1 rounded-sm bg-primary-foreground'><MoveRight className='size-5 '/></span>
              </Link>
          </Button>
        </div>

      </div>

      
    </div>
  )
}
