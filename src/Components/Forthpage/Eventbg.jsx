import React from 'react'
import { Link } from 'react-router-dom'


const Eventbg = () => {
  return (
    <div className='flex justify-center items-center'>
       
        <div className="absolute inset-0 bg-[url(/assets/Rectangle56.png)] bg-no-repeat h-[372px]  max-w-[2000px] " />
      <div className="absolute inset-0 bg-black/50 h-[372px]  max-w-[2000px]" />
      <div className=' z-1 w-full max-w-320 text-white mt-32'>
        <div className="flex items-start justify-flex-start gap-2 text-base font-normal ">
            <Link to="/" className="hover:text-[#2c49fe] hover:underline">
              HOME
            </Link>
            <span>&gt;</span>
            <span>Events</span>
          </div>
          <h1 className='font-semibold text-[64px] leading-[130%]'>Events</h1>
          </div>
    </div>
  )
}

export default Eventbg