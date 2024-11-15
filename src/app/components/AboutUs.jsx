import React from 'react'
import { TiTick } from "react-icons/ti";
import patientReview from './assets/PatientReview.png'
import Image from 'next/image';
function AboutUs() {
  return (
    <div className='mx-auto  p-5 my-2'>
      <div className='px-4 py-8'>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3 lg:py-8 lg:px-6 ">
          <div className="col-span-1 flex justify-center">
            {/* <img width={340} height={200} src={patientReview} alt="About Us" /> */}
            <Image width={340} height={200} src={patientReview} />
          </div>
          <div className="col-span-1 p-2 ">
            <h3 className="text-2xl text-blue-700 font-semibold">ABOUT US</h3>
            <p className="text-3xl mt-3 font-semibold">Empowering Global Patients with Trusted Medical Expertise</p>
            <p className='text-gray-600 mt-3 text-xs'>Global Health Opinion provides patients worldwide with reliable medical insights and expert reviews for informed decision-making, regardless of location.</p>
           
              <div className='py-3'>
                <ul className='grid lg:grid-cols-2 sm:grid-cols-1  gap-2 '>
                  <li className='flex text-xs font-bold'><TiTick className='text-xl text-green-500 mx-1' />Seamless Care</li>
                  <li className='flex text-xs font-bold'><TiTick className='text-xl text-green-500 mx-1' />Comprehensive Care</li>
                  <li className='flex text-xs font-bold'><TiTick className='text-xl text-green-500 mx-1' />Patient-Centered Care</li>
                  <li className='flex text-xs font-bold'><TiTick className='text-xl text-green-500 mx-1' />Cutting-Edge Technology</li>
                  <li className='flex text-xs font-bold'><TiTick className='text-xl text-green-500 mx-1' />Warm & Welcoming Environment</li>
                  <li className='flex text-xs font-bold'><TiTick className='text-xl text-green-500 mx-1' />Expert Doctors</li>
                  <li className='flex text-xs font-bold'><TiTick className='text-xl text-green-500 mx-1' />Personalized Approach</li>
                  <li className='flex text-xs font-bold'><TiTick className='text-xl text-green-500 mx-1' />Positive Reviews</li>
                  
                </ul>
                </div>
                <p className='text-gray-600 mt-3 text-xs'>We offer detailed medication reviews, second opinions, and peer reviews to empower patients in making informed health decisions.</p>

           
          </div>
        </div>

      </div>


    </div>
  )
}

export default AboutUs