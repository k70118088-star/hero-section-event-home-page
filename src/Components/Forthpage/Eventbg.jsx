import React from 'react'
import { Link } from 'react-router-dom'


const Eventbg = () => {
  return (
    <div className='flex justify-center items-center'>
       
        <div className="absolute inset-0 bg-[url(/assets/e17367a742c4a1c61951756ea6f76d0309c431af.jpg)] bg-no-repeat bg-center h-93 " />
      <div className="absolute inset-0 bg-black/50 h-93  max-w-500" />
      <div className=' z-1 w-full max-w-7xl text-white mt-32 p-3'>
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