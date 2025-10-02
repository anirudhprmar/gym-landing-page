import React from 'react'

export default function Footer() {
  return (
    <footer className='pb-5'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 p-10 justify-around bg-zinc-900 text-zinc-100'>
        <div>
          {/* join us and address */}
          <h5 className='text-3xl text-zinc-50 font-bold'>JOIN US NOW.</h5>
          <div className='flex flex-col gap-2 mt-5 bg-zinc-50 text-zinc-900 rounded-md p-5'>
            <p className='font-bold'>Contact: <span className='font-light'>2929292929</span> </p>
            <p className='font-bold'>Address: <span className='font-light'>Near modal town</span> </p>
          </div>
        </div>
        <div>
          {/* address on map */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.11358303446!2d78.2076792754576!3d26.192983177083505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c4305146c049%3A0x2d612562cae02dc6!2sCrunch-N-Curves%20The%20Fitness%20Club%20%7C%20Best%20Gym%20in%20Gwalior!5e0!3m2!1sen!2sin!4v1759224817305!5m2!1sen!2sin" width="600" height="450" className="rounded-md border-2  " allowFullScreen={true} loading="lazy" ></iframe>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-10 md:gap-20 p-10 justify-around bg-zinc-50 text-zinc-900 mx-20 mt-10 rounded-lg pb-10'>
        {/* footer with links */}
        <div className='flex flex-col gap-5'>
          {/* image / logo */}
          <p className='font-bold text-2xl'>CRUNCHES & CURVES</p>
          <p className='text-sm '>
            {/* address */}
            Near modal town, Gwalior, Madhya Pradesh
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-10 md:gap-20'>
          <div>
            <p className='font-semibold'>CONTACT US</p>
            <ul>
              <li>+91 23224242424</li>
            </ul>
          </div>

          <div>
            <p className='font-semibold'>OPERATIONAL</p>
            <ul>
              <li>MON-FRI : 9Am to 9Pm</li>
              <li>SAT & SUN: 9Am to 12Pm</li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
