import React from 'react'
import Button from './Common/Button'
import { Cale, Cap, Locate } from '../icons'

const Cardevent = () => {
  return (
    <div className='p-7  hover:shadow-[0px_8px_35px_0px_#0000001A] rounded-[20px] border border-black/20'>
        <img src="/assets/Rectangle64.png" alt="" />
        <div className='mt-5.25 mb-3 gap-2 flex flex-col'>
            <h1 className='font-semibold text-2xl leading-[150%] mb-3'>Lorem ipsum dolar sit de</h1>
            <p className='flex items-center gap-2 text-[#666666] '><Cale />10/02/2022</p>
            <p className='flex items-center gap-2 text-[#666666]'><Locate />Mumbai</p>
            <p className='flex items-center gap-2 text-[#666666]'><Cap />1,080</p>
        </div>
        <Button  
         text={'Go Check'}
         textColor={'text-white'}
         textSize={'text-base'}
         bgColor={"bg-[#2C49FE]"}
         font={'font-semibold'}
         padding={'px-[28px] py-[11px]'}
         rounded={'rounded-[23px]'}
         margin={'mt-5'}
        />
    </div>
  )
}

export default Cardevent