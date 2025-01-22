import React from 'react';
import star1 from '../assets/star1.png';
import starts from '../assets/starts.png';
import line from '../assets/line.png';
import w from '../assets/w.png';
import rating1 from '../assets/rating1.png';
import rating2 from '../assets/rating2.png';
import rating3 from '../assets/rating3.png';
import peopls from '../assets/people.png';
import hands from '../assets/hands.png';
import btn from '../assets/btn.png';
import men from '../assets/men.png';


const HeroSection = () => {
  return (
   <>
   <div className='border-sky-400 border'>

   
   <div className='flex flex-1 px-[8%] pt-10 '>
       <span className='flex justify-evenly items-center gap-1'>
        <img className='w-[10%]' src={star1} alt='not work'/>
        <p className='font-semibold text-xl'>Google Rating</p>
        <img className='w-[34%] mt-2' src={starts} alt='not work'/>
       </span>
   </div>
   <div className='flex justify-center px-2'>
    <div className='left p-10 w-[50%]'>
       <div className='px-1'>
        <h1 className='text-black text-6xl font-semibold'>Your trusted partner</h1>
        <h1 className='text-black text-6xl font-semibold'>for compliance business</h1>
        <span className='py-10 border-2'>
           <img className='py-2' src={line} alt='not work'/>
       </span>
       </div>
       <div className='py-2'>
           <p className='text-xl'>An online business compliance platform that helps entrepreneurs and other individuals with various, registrations, tax filings, and other legal matters.</p>
       </div>
       <div className='py-4'>
        <div className='flex justify-between'>
          <span className='flex gap-2'>     
            <img className='w-9 h-9' src={w} alt='not work'/>              
            <span>
                <img className='w-14 h-4' src={rating1} alt='not work'/>
            <p>Customer Rating</p> 
            </span>
          </span>
          <span className='flex gap-2'>
          <img className='w-9 h-9' src={peopls} alt='not work'/>   
            <span>
                <img className='w-14 h-4' src={rating2}/>
             <p>Clients</p>   
            </span>    
          </span>
          <span className='flex gap-2'>
          <img className='w-9 h-9' src={hands} alt='not work'/>    
            <span>
                <img className='w-14 h-4' src={rating3} alt='not work'/>
            <p>Finacial Stability</p>    
            </span>   
          </span>
        </div>
        <div>

        </div>
        <div>

        </div>
       </div>
       <div className='flex justify-start p-4 gap-4 py-4'>
           <span className='flex justify-center bg-[#1c4670] items-center px-11 py-3 rounded-md text-white font-semibold cursor-pointer'>
            <a>Talk An Expert</a>
           </span>
           <span className='flex justify-center items-center gap-2'>
            <img className='w-6 h-6 cursor-pointer' src={btn} alt='not work'/>
            <p>See how it works</p>
           </span>
       </div>
       
    </div>
      
      
       
       
       <div className='right bg-gradient-to-r from-slate-50 to-blue-100'>
        <div className='flex flex-col fixed right-1 justify-evenly gap-6 mt-4'>
            <span className='shadow-black cursor-pointer border-2 bg-white py-2 px-5 text-black font-semibold rounded-md'>
                Annual Compliance
            </span> 
            <span className='shadow-black border-2 cursor-pointer bg-white py-2 px-5 text-black font-semibold rounded-md'>
               Payroll Services
            </span>
            <span className='shadow-black border-2 cursor-pointer bg-white py-2 px-5 text-black font-semibold rounded-md'>
                Company Formation
            </span>
            <span className='shadow-black border-2 cursor-pointer bg-white py-2 px-5 text-black font-semibold rounded-md'>
                Annual Compliance
            </span>        
        </div>
        <img src={men} alt='not work'/>    
       </div>
   </div>
   </div>
   </>
  )
}

export default HeroSection