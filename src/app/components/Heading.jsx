import React from 'react'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon4 from './assets/icon4.png'
import icon3 from './assets/icon3.png'
import Image from 'next/image';
function Heading() {
  return (
    <div class="container flex justify-center items-center mx-auto h-64 p-14">
      <div class="grid  sm:grid-cols-1 md:grid-cols-11 lg:grid-cols-12 lg:gap-1 md:gap-1 sm:gap-1">
        <div class="col-span-1 lg:p-5  md:p-1 sm:p-0 ">
          <Image src={icon1}/>
        </div>
        <div class="col-span-1 lg:pt-20 lg:p-5 md:p-1 md:pt-20 sm:p-0">
          {/* <img src={icon2} alt="icon" /> */}
          <Image src={icon2}/>
        </div>
        <div class="col-span-7 p-5">
          <h1 style={{ fontFamily: "IBM Plex Sans, sans-serif" }} class=" lg:text-3xl font-bold text-center flex justify-center sm:text-2xl">Compassionate care, exceptional results.</h1>
          <p class="text-lg text-black text-center font-extralight pt-3">To empower patients across the globe by offering expert medical insights</p>
        </div>
        <div class="col-span-1 lg:pt-20 lg:p-5 md:p-1  md:pt-20 sm:p-0 ">
          <Image src={icon3}/>
        </div>
        <div class="col-span-1   lg:p-5 md:p-1 sm:p-0">
          <Image src={icon4}/>
        </div>
      </div>
    </div>
  )
}

export default Heading