import React, { RefObject } from 'react'
import { Dumbbell } from 'lucide-react'
import Image from 'next/image'

interface refInfo{
  featureRef?:RefObject<HTMLDivElement | null>
}

export default function Feature({featureRef}:refInfo) {
  return (
    <div ref={featureRef} className='flex flex-col gap-20 p-10 min-h-screen md:p-20 bg-zinc-800 text-zinc-100 justify-center items-center w-full '>
      <div className=' gap-4 text-center'>
        <h3 className='text-3xl md:text-5xl font-bold'>Best Programs for You</h3>
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-2 :grid-cols-4 gap-10 '>

        <div className='relative w-80 h-70  transition-colors border rounded-lg overflow-hidden cursor-pointer group bg-white shadow-md'>
          <div className='className="p-4 flex flex-col items-center justify-center"'>
          </div>
          <div className='flex items-center justify-center h-42'>
            <Dumbbell className='text-zinc-900 size-16'/>
          </div>


            <p className='absolute bottom-12 left-4 right-4 text-xl font-semibold text-gray-800
                          transition-all duration-500 ease-in-out
                          group-hover:translate-y-[-44px] group-hover:text-black group-hover:font-bold'>
                      Strength Training
            </p>

            <p className='absolute bottom-4 left-4 right-4 text-sm text-gray-600 opacity-0
                    translate-y-4 transition-all duration-500 ease-in-out
                    group-hover:opacity-100 group-hover:translate-y-0'>
                      Our trainer will design a progressive workout plan that help you achieve gain strength
            </p>
        </div>

        <div className='relative w-80 h-70  transition-colors border rounded-lg overflow-hidden cursor-pointer group bg-white shadow-md'>
          <div className='className="p-4 flex flex-col items-center justify-center"'>
          </div>
          <div className='flex items-center justify-center h-42'>
            <Image
            src={'/yoga.svg'}
            width={100}
            height={100}
            alt='yoga sitting pose'
            />
          </div>


            <p className='absolute bottom-12 left-4 right-4 text-xl font-semibold text-gray-800
                          transition-all duration-500 ease-in-out
                          group-hover:translate-y-[-44px] group-hover:text-black group-hover:font-bold'>
                      Basic Yoga
            </p>

            <p className='absolute bottom-4 left-4 right-4 text-sm text-gray-600 opacity-0
                    translate-y-4 transition-all duration-500 ease-in-out
                    group-hover:opacity-100 group-hover:translate-y-0'>
                      Our trainer will design a progressive workout plan that help you achieve gain strength
            </p>
        </div>

        <div className='relative w-80 h-70  transition-colors border rounded-lg overflow-hidden cursor-pointer group bg-white shadow-md'>
          <div className='className="p-4 flex flex-col items-center justify-center"'>
          </div>
          <div className='flex items-center justify-center h-42'>
              <Image
            src={'/muscle.svg'}
            width={100}
            height={100}
            alt='yoga sitting pose'
            />
          </div>


            <p className='absolute bottom-12 left-4 right-4 text-xl font-semibold text-gray-800
                          transition-all duration-500 ease-in-out
                          group-hover:translate-y-[-44px] group-hover:text-black group-hover:font-bold'>
                      Body Building
            </p>

            <p className='absolute bottom-4 left-4 right-4 text-sm text-gray-600 opacity-0
                    translate-y-4 transition-all duration-500 ease-in-out
                    group-hover:opacity-100 group-hover:translate-y-0'>
                      Our trainer will design a progressive workout plan that help you achieve gain strength
            </p>
        </div>

        <div className='relative w-80 h-70  transition-colors border rounded-lg overflow-hidden cursor-pointer group bg-white shadow-md'>
          <div className='className="p-4 flex flex-col items-center justify-center"'>
          </div>
          <div className='flex items-center justify-center h-42'>
              <Image
            src={'/running.svg'}
            width={100}
            height={100}
            alt='yoga sitting pose'
            />
          </div>


            <p className='absolute bottom-12 left-4 right-4 text-xl font-semibold text-gray-800
                          transition-all duration-500 ease-in-out
                          group-hover:translate-y-[-44px] group-hover:text-black group-hover:font-bold'>
                      Weight Loss
            </p>

            <p className='absolute bottom-4 left-4 right-4 text-sm text-gray-600 opacity-0
                    translate-y-4 transition-all duration-500 ease-in-out
                    group-hover:opacity-100 group-hover:translate-y-0'>
                      Our trainer will design a progressive workout plan that help you achieve gain strength
            </p>
        </div>

      </div>
    </div>
  )
}
