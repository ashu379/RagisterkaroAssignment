import React from 'react'
import safe_icon from '../assets/safe_icon.png';
import check_icon from '../assets/check_icon.png';
import smile_icon from '../assets/smile_icon.png';
import person_icon from '../assets/person_icon.png';
import protect_icon from '../assets/protect_icon.png';


const WhyChoose = () => {
  return (
   <>
   <div className='p-10'>

    <div className='flex justify-center gap-4'>
         <div className='w-[50%] flex flex-col gap-4'>
            <h2 className='text-[14px] text-[#EB8D15]'>WHY REGISTERKARO.IN</h2>
            <h2 className='text-[36px] text-black font-bold'
            >Why Choose Register Karo</h2>
            <p>it is with consistent services and results thar build trust with the proples and 
                that in turn help us to serve the business better.
            </p>
         </div>
         <div className='w-[17%]'>
          <img src={safe_icon} alt='not work'/>
         </div>
         <div className='w-[16%]'>
          <img src={check_icon} alt='not work'/>
         </div>
    </div>

    <div className='w-[94.5%]'>      
    <div className='flex justify-end gap-4 p-4'>
        <div className='w-[18.5%]'>
            <img src={smile_icon} alt='not work'/>
        </div>
        <div className='w-[18.5%]'>
            <img src={person_icon} alt='not work'/>
        </div>
        <div className='w-[18.5%]'>
            <img src={protect_icon} alt='not work'/>
        </div>
    </div>
    </div>
   </div>
   </>
  )
}

export default WhyChoose