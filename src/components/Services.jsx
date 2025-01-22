import React from 'react'
import service_img from '../assets/service_img.png';
import arrow from '../assets/arrow.png';
import search1 from '../assets/search1.png';
import square from '../assets/square.png';
import shop from '../assets/shop.png';
import speaker from '../assets/speaker.png';

const Services = () => {
  return (
   <>
   <div className='py-8 px-10'>

    <div className='text-center'>
        <h2 className='m-auto text-[14px] text-[#EB8D15] py-1'>WELCOME TO REGISTERKARO.IN</h2>
        <h3 className='m-auto text-[32px] font-semibold py-1'>Explore Our Services</h3>
    </div>

    <div className='flex justify-evenly px-4 py-10'>
        <div className=' w-[20%] flex flex-col justify-center items-center gap-4'>
            <img className='w-12 h-12' src={service_img} alt='not work'/>
            <h2 className='text-[20px] font-bold'>Company Formation</h2>
            <p className='text-center text-[17.6px]'>Build Web-based solution that
               enhance customer experience 
            </p>
            <span className='flex justify-center items-center gap-1 py-7'>
                <a>Learn more</a><img className='w-4 h-4 mt-1' src={arrow} alt='not work'/>
            </span>
        </div>
        <div className='card w-[25%] flex flex-col justify-center items-center gap-4 px-10'>
            <img className='w-12 h-12' src={search1} alt='not work'/>
            <h2 className='text-[20px] font-bold'>Company Formation</h2>
            <p className='text-center text-[17.6px]'>Make data-driven decisions and utilize
                technology to reach business goals.
            </p>
            <span className='flex justify-center items-center gap-1 py-7'>
                <a>Learn more</a><img className='w-4 h-4 mt-1' src={arrow} alt='not work'/>
            </span>
        </div>
        <div className=' w-[20%] flex flex-col justify-center items-center gap-4'>
            <img className='w-12 h-12' src={square} alt='not work'/>
            <h2 className='text-[20px] font-bold'>Company Formation</h2>
            <p className='text-center text-[17.6px]'>Foster customer relationships by
                effectively serving your market.
            </p>
            <span className='flex justify-center items-center gap-1 py-7'>
                <a>Learn more</a><img className='w-4 h-4 mt-1' src={arrow} alt='not work'/>
            </span>
            
        </div>
    </div>

    <div className='flex justify-evenly px-4 py-4'>
        <div className='w-[20%] flex flex-col justify-center items-center gap-4'>
            <img className='w-12 h-12' src={square} alt='not work'/>
            <h2 className='text-[20px] font-bold'>Company Formation</h2>
            <p className='text-center text-[17.6px]'>Turn your ideas into modern
                products with our design experts.
            </p>
            <span className='flex justify-center items-center gap-1 py-7'>
                <a>Learn more</a><img className='w-4 h-4 mt-1' src={arrow} alt='not work'/>
            </span>
        </div>
        <div className='card w-[25%] flex flex-col justify-center items-center gap-4 px-7'>
            <img className='w-12 h-12' src={shop} alt='not work'/>
            <h2 className='text-[20px] font-bold'>Company Formation</h2>
            <p className='text-center text-[17.6px]'>Expand your business across the giobe with
                minimal effort
            </p>
            <span className='flex justify-center items-center gap-1 py-7'>
                <a>Learn more</a><img className='w-4 h-4 mt-1' src={arrow} alt='not work'/>
            </span>
        </div>
        <div className='w-[20%] flex flex-col justify-center items-center gap-4'>
            <img className='w-12 h-12' src={speaker} alt='not work'/>
            <h2 className='text-[20px] font-bold'>Company Formation</h2>
            <p className='text-center text-[17.6px]'>Steering user behaviours with
                creative design, data insights & technology.
            </p>
            <span className='flex justify-center items-center gap-1 py-7'>
                <a>Learn more</a><img className='w-4 h-4 mt-1' src={arrow} alt='not work'/>
            </span>
            
        </div>
    </div>

    <div className='flex justify-center items-center my-2'>
         <button className='bg-[#1c4670] font-semibold py-2 px-4 text-white rounded-sm'>See All Services</button>
    </div>

   </div>
   </>
  )
}

export default Services