import React from 'react'
import Navbar from '../Components/Navbar'
import User1 from '../Components/User1'
import Gallery from '../Components/Gallery'

const Username = () => {
  return (
    <div>
        <Navbar className={"bg-white text-black  shadow-[0px_8px_35px_0px_rgba(0,0,0,0.05)]"} />
        <User1 />
        <Gallery />
    </div>
  )
}

export default Username