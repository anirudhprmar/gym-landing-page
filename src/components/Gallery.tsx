import Link from 'next/link'
import ImageSlider from './ImageSlider'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'

export default function Gallery() {
  
  return (
    <div className='max-w-300 min-w-full min-h-screen mx-auto py-20 px-4 bg-zinc-800 text-zinc-50 flex flex-col gap-10'>
      <div>
        <h2 className='text-3xl text-center p-2 font-bold'>About Us</h2>
      </div>
      <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center'>
        <ImageSlider />
        <div className='flex flex-col gap-5 max-w-md text-center lg:text-left'>
          <p className='font-bold text-3xl'>Get Ready to Reach your Fitness Goals</p>
          <p className='text-md'>We are a gym that is comitted to helping people reach their fitness goals. We offer a variety of programs and services to fit your needs.</p>
          <p className='text-sm'>We believe that everyone should have access to the benefits of exercise.</p>
            <Button variant={'secondary'} size={'lg'} className='bg-yellow-200 text-zinc-950'>
              <Link href="#" className='w-full h-full flex items-center gap-2 justify-center'>
                  Join Us Now <span className='p-1 rounded-sm bg-primary-foreground'><MoveRight className='size-5 '/></span>
              </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
