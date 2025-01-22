import React from 'react'
import pt from '../assets/partners_icons.png'

const Clients = () => {
  return (
    <>
    <div className='py-10 px-10'>
        <span className='flex justify-center py-1'>
            <h1 className='text-[32px] font-bold'>Our Happy Clients</h1>
        </span>
        <span className='flex justify-center py-1'>
           <p className='text-[16px] text-gray-500 w-[60%] text-center'>Professionally cultivate 
            one-to-one customer service with robust ideas. 
            Dynamically innovate resource-leveling customer 
            service for state of the art customer service.</p>
        </span>
        <span>
            <img className='my-20' src={pt} alt='not work'/>
        </span>
    </div>
    </>
  )
}

export default Clients