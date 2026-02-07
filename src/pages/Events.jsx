import React from 'react'
import Navbar from '../Components/Common/Navbar'
import Eventbg from '../Components/Forthpage/Eventbg'
import Eventchoose from '../Components/Forthpage/Eventchoose'
import Footer from '../Components/Common/Footer'

const Events = () => {
  return (
    <div>
        <Navbar className={"bg-black/60 text-white"} />
        <Eventbg />
        <Eventchoose />
        <Footer />
    </div>
  )
}

export default Events