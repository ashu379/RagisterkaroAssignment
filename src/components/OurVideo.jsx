import React from 'react'
import youtube from '../assets/youtube.png';
import image from '../assets/icon.png';

const OurVideo = () => {
  return (
   <>
   <div className='flex justify-center gap-8 border-2 px-10 py-10 bg-[#1c4670]'>
      <div className='w-[50%] flex flex-col gap-4 pt-2'>
           <div>
                <h1 className='text-[34px] text-white font-semibold'>Our Video introducations</h1>
                <p className='text-[16px] text-gray-400'>Velit purus egestas tellus phasellus. 
                    Mattis eget sed faucibus magna vulputate
                     pellentesque a diam tincidunt apis dui.</p>
           </div>
           <div className='py-2'>
            <img className='w-[80%]' src={image} alt='not work'/>
           </div>
      </div>
      <div className='w-[50%] cursor-pointer'>
      <img className='w-[80%] h-[45vh]' src={youtube} alt='not work'/>
      </div>
   </div>
   </>
  )
}

export default OurVideo