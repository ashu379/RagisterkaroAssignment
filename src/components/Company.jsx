import React from 'react'
import Oracle_logo from '../assets/Oracle_logo.png';
import morpheus_logo from '../assets/morpheus_logo.png';
import samsung_logo from '../assets/samsung_logo.png';
import monday_logo from '../assets/monday_logo.png';
import segment_logo from '../assets/segment_logo.png';

const Company = () => {
  return (
   <>
   <div className='py-4'>
       <div className='flex justify-center py-4'>
        <h2 className='text-xl font-semibold'>Trusted By Over 100+ Startups and freelance business</h2>
       </div>
       <div className='flex  px-10 gap-7 justify-center py-4'>
          <img className='w-30 h-6' src={Oracle_logo} alt='not work'/>
          <img className='w-30 h-6' src={morpheus_logo} alt='not work'/>
          <img className='w-30 h-6' src={morpheus_logo} alt='not work'/>
          <img className='w-30 h-6' src={samsung_logo} alt='not work'/>
          <img className='w-30 h-6' src={monday_logo} alt='not work'/>
          <img className='w-30 h-6' src={segment_logo} alt='not work'/>
       </div>
   </div>
   </>
  )
}

export default Company