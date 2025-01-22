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
            <img src={mail} alt="not work"/>          
       </span>
     
       <span className="flex items-center">
       <img src={Follow}/>
       </span>
   </div>
    <nav className="flex justify-between items-center px-6 py-2">
        <div className="flex justify-center items-center  w-[20%] pb-1">
            <img src={Logo} alt="not work"/>
        </div>
        <div>
            <div className="flex justify-evenly  items-center space-x-6 gap-2">     
          <a href="#home" className="text-sm">Home</a>
          <a href="#services" className="text-sm">Our Services</a>
          <a href="#blog" className="text-sm">Blog</a>
          <a href="#contact" className="text-sm">Contact Us</a>
          <a href="#about" className="text-sm">About Us</a>
          <img src={search} alt="not work"/>
          <button className="bg-[#ffa229] text-white px-4 py-2 rounded-md text-sm">Talk An Expert</button>
            </div>
            
        </div>
    </nav>
    </>
  )
}

export default Header