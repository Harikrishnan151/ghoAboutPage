import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import contactImg from './assets/contactImg.png'
function ContactUs() {
  return (
    <div className='container mx-auto my-8 p-5'>
      <div  
  style={{
    backgroundSize: 'cover',       
    backgroundPosition: 'center',  
    backgroundRepeat: 'no-repeat', 
    backgroundImage: `url(${contactImg.src})`
  }} 
  className='h-96 rounded-xl'>
    <div>
      <div className='pt-24'>
        <p className='lg:text-3xl text-white font-bold lg:mx-16 md:mx-16 sm:text-2xl sm:mx-4 '>Providing Accurate and Timely Medical Guidance for Every Patient</p>
      </div>
    </div>
  <div className=' lg:flex lg:justify-normal md:justify-normal sm:flex sm:justify-center sm:items-center'>
    <button className='button bg-white border-2 lg:px-8 lg:mx-16 lg:mt-32   lg:h-12 rounded-xl lg:text-xl text-blue-700 font-semibold md:px-4 md:mx-14 md:mt-10 md:h-8 sm:px-10  sm:mt-auto sm:mx-80 sm:text-xs sm:h-4 '>
    <span className='flex '><GoArrowUpRight className='mx-1 mt-1' />  Contact Us</span>
    </button>
  </div>
</div>

    </div>
  )
}

export default ContactUs