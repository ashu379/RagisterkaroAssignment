import React from 'react'
import arrow from '../assets/arrow.png';
import members from '../assets/members.png';
// import design1 from '../assets/design1.png';
// import design2 from '../assets/design2.png';

const About = () => {
  return (
   <>
   <div className='flex justify-center p-8 gap-4'>
      <div className='flex flex-col gap-3 w-[45%] pt-6'>
            <h2 className='text-[14px] text-[#EB8D15]'>WELCOME TO REGISTERKARO.IN</h2>
            <span className='flex justify-start text-[32px] gap-2 font-semibold'>
             <h1 className='text-black text-[32px] font-semibold'>About</h1><h1 className='text-[#EB8D15]'>Register Karo</h1></span>
             <p className='text-[16px]'>We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
               their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.</p>
             <p className='text-[16px]'>I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes</p>  
             <div className='flex justify-start items-center my-2'>
         <button className='flex justify-between items-center gap-2 bg-[#1c4670] font-semibold py-2 px-4 text-white rounded-sm'>Learn More <img className='w-4 h-4 mt-1 text-white'  style={{ filter: "brightness(0) invert(1)" }} src={arrow} alt='not work'/></button>
    </div>
 
      </div>
       <div className='w-[45%] flex justify-between gap-2'>
         <img className='img w-[90%]' src={members} alt='not work'/>     
         {/* <div className='flex flex-col justify-between gap-2'>
         <img className=' w-[20%] z-20' src={design1} alt='not work'/>
         <img className='w-[20%] z-20' src={design2} alt='not work'/>
         <img/>
         </div> */}
      </div>
   </div>
   </>
  )
}

export default About