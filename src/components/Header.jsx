import React from 'react'
import Logo from '../assets/Logo.png'
import search from '../assets/iconoir_search.png';
import mail from '../assets/email.png';
import Follow from '../assets/Follow.png';


const Header = () => {
  return (
    <>
    <div className='flex w-[100%] flex-1 bg-[#1c4670] justify-end items-cente px-4 '>
       <span className="flex">
            <img src={mail} alt="not work" loading="lazy"/>          
       </span>
     
       <span className="flex items-center">
       <img src={Follow} loading="lazy"/>
       </span>
   </div>
   
    </>
  )
}

export default Header