import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineFormatQuote } from "react-icons/md";
import doctorImage1 from './assets/doctorImg1.png'
import doctorImage2 from './assets/doctorImage2.png'
import Image from 'next/image';
function HealthPriority() {
  return (
    <div className='container mx-auto '>
      <div className='mx-2 p-5'>
        <h2 className='text-blue-600 text-2xl font-semibold'>YOUR HEALTH IS OUR TOP PRIORITY</h2>
        <p className='text-2xl my-2 font-semibold'>At Global Health Opinion Inc., we believe in empowering patients and healthcare providers with expert insights and second opinions that make a difference.</p>
      </div>
      <div className="container mx-2">
        <div className="grid lg:grid-cols-2 md:grid-cols-1  md:justify-center sm:grid-cols-1 gap-4">
          <div className='px-3 justify-center items-center'>
            <div>
              {/* <img width={600} style={{ borderRadius: '6px' }} src="https://www.globalhealthopinion.com/_next/static/media/about-img-1.960888d8.png" alt="" /> */}
              <Image width={600}  style={{ borderRadius: '6px' }} src={doctorImage1} />
            </div>
            <div className='my-12 bg-gray-100 h-80 rounded'>
              <div className='mx-4 my-5'>
              
               <div className='lg:py-20 lg:px-10 md:py-14 sm:py-32'>
               <h2 className='text-5xl text-blue-600'><MdOutlineFormatQuote /></h2>
                <h3 className='text-xl font-bold'>I had a great experience at health care clinic.I was seen quickely & the doctor was able
                  to diagonse & treat my condition very patentily 
                </h3>
                <h5 className=' font-bold mt-5'>Jane Ronan</h5>
                <h5 >Cardio Patient</h5>
               </div>
              </div>
            </div>
          </div>
          <div className='mx-3'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1  gap-5  my-3'>
              <div className='bg-violet-500 rounded justify-center items-center'>
                <div className='my-8 mx-8'>
                  <h2 className='text-white text-5xl font-bold'>20+</h2>
                  <h2 className='text-white text-2xl'>Industrial Experience</h2>
                </div>
              </div>
              <div className='bg-blue-500 rounded justify-center items-center h-44'>
                <div className='my-10 mx-8'>
                <img width={200} src="https://www.globalhealthopinion.com/_next/static/media/gho-logo-white.fdf110ed.svg" alt="" />

                </div>
              </div>
            </div>
            <div className='grid lg:grid-cols-1 md:grid-cols-1 md:flex md:justify-center sm:grid-cols-1 my-6'>
              {/* <img width={600} style={{ borderRadius: '6px' }} src="https://www.globalhealthopinion.com/_next/static/media/about-img-2.aaac02f0.png" alt="" /> */}
              <Image width={600}  style={{ borderRadius: '6px' }} src={doctorImage2} />

            </div>
            <div className='my-3'>
              <div className='flex sm:grid-cols-1  bg-slate-200 rounded h-32 justify-center items-center gap-3'>
                <div className='flex rounded bg-white mb-7 sm:mx-2'>
                <IoCallOutline className='text-blue-500 lg:text-4xl rounded sm:text-3xl   ' />
                </div>
                <div>
                  <div className='text-xl text-blue-400'>Contact Us</div>
                  <div>Providing Accurate and Timely Medical Guidance for Every Patient</div>
                  <div className='mt-2'>Learn More </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HealthPriority