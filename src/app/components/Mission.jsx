import React from 'react'

function Mission() {
  return (
    <div className=' bg-gray-100 h-auto py-10'>
      <div className='justify-center text-center  '>
        <h1 className='text-xl text-blue-600 font-semibold  '>Our Mission</h1>
        <h3 className='text-2xl font-bold my-2'>To Make Healthcare Accessible And Transparent For Everyone</h3>
      </div>
      <div >
        <div className='grid lg:grid-cols-2 gap-8 mx-8 my-5'>
          <div className='col-span-1 text-center border-2 border-blue-800 rounded-xl p-10'>
            <h1 className='text-xl font-bold '>Second Opinions & Peer Reviews from Top Medical Experts Worldwide</h1>
            <p className=' text-gray-500'>Access to global specialists ensures accurate diagnoses and comprehensive treatment options, empowering patients with expert insights for informed decisions on complex cases</p>
          </div>
          <div className='col-span-1 text-center border-2 border-blue-800 rounded-xl  p-10'>
          <h1 className='text-xl font-bold '>Telehealth Services for post-operative care & ongoing treatment</h1>
          <p className='text-gray-500'>Telehealth services offer continuous post-operative support, enabling at-home recovery through virtual check-ins and ensuring ongoing treatment with convenient access to medical guidance.</p>
          </div>
        </div>
      </div>

      <div className='mb-3' >
        <div className='grid lg:grid-cols-2 gap-8 mx-8 my-5'>
          <div className='col-span-1 text-center border-2 border-blue-800 rounded-xl p-10'>
            <h1 className='text-xl font-bold '>U.S. Inpatient services & telemedicine add-ons</h1>
            <p className=' text-gray-500'>U.S. inpatient services provide round-the-clock care and advanced treatments, while telemedicine add-ons offer virtual consultations and remote monitoring for smooth outpatient transitions.</p>
          </div>
          <div className='col-span-1 text-center border-2 border-blue-800 rounded-xl  p-10'>
          <h1 className='text-xl font-bold '>Patient Journey Management & Cloud-Based EMR Solutions</h1>
          <p className='text-gray-500'>Patient journey management, EMR, and cloud-based healthcare solutions optimize experiences by ensuring seamless care coordination and enhancing data accessibility for personalized treatment.</p>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Mission