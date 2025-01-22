import React from 'react'
import f_icon from '../assets/form_icon.png';
import p_icon from '../assets/payment_icon.png';
import t_icon from '../assets/tellicaller.png';
import m_icon from '../assets/mail_icon.png';

const Process = () => {
  return (
    <>
    <div className='flex justify-evenly gap-4 bg-[#FFA229] py-10'>
        <span className='flex items-center gap-2'>
           <span className='rounded-2xl p-2 bg-red-700'>
            <img className='w-5' src={f_icon} alt='not work'/>
            </span>
            <p>Fill up Application Form</p>
        </span>
        <span className='flex items-center gap-2'>
           <span className='rounded-2xl p-2 bg-green-700'>
            <img className='w-5' src={p_icon} alt='not work'/>
            </span>
            <p>Make Online Payment</p>
        </span>
        <span className='flex items-center gap-2'>
           <span className='rounded-2xl p-2 bg-orange-500'>
            <img className='w-5' src={t_icon} alt='not work'/>
            </span>
            <p>Executive will Process Application</p>
        </span>
        <span className='flex items-center gap-2'>
           <span className='rounded-2xl p-2 bg-[#828282]'>
            <img className='w-5' src={m_icon} alt='not work'/>
            </span>
            <p>Get Confirm Mall</p>
        </span>
      
    </div>
    </>
  )
}

export default Process