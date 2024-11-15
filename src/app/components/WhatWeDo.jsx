import React from 'react'
import { TiTick } from "react-icons/ti";
import doctorImage3 from './assets/doctorImage3.png'
import Image from 'next/image';

function WhatWeDo() {
  return (
    <div className="container mx-auto p-5">
      <div className='px-8 py-7'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
          <div className='col-span-1mx-4 flex justify-center items-center'>
            {/* <img width={350} height={200}  src="https://www.globalhealthopinion.com/_next/static/media/feature-img-2.b358494a.png" alt="" /> */}
            <Image width={350} height={200}   src={doctorImage3} />

          </div>
          <div col-span-1>
            <div className='p-5'>
               <h5 className='text-2xl text-blue-600 '>WHAT WE DO</h5>
               <p style={{ fontFamily: "IBM Plex Sans, sans-serif" }} className='text-2xl font-bold my-3 '>Transforming Healthcare through Technology and Expert Reviews</p>
               <p className='text-gray-600 mt-3 text-xs'>Global Health Opinion leverages AI algorithms and a global network of medical professionals for quick and accurate medical evaluations, catering to diverse healthcare needs.</p>
               <div className='my-3'>
                <ul>
                <li className='flex text-xs font-bold my-2'><TiTick className='text-xl text-green-500 ' />Expert Medication Reviews</li>
                <li className='flex text-xs font-bold my-2'><TiTick className='text-xl text-green-500 ' />Insightful Second Opinions</li>
                <li className='flex text-xs font-bold my-2'><TiTick className='text-xl text-green-500 ' />Comprehensive Peer Reviews
                </li>

                </ul>
               </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default WhatWeDo