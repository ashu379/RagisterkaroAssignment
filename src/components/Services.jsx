import React from 'react';
import service_img from '../assets/service_img.png';
import arrow from '../assets/arrow.png';
import search1 from '../assets/search1.png';
import square from '../assets/square.png';
import shop from '../assets/shop.png';
import speaker from '../assets/speaker.png';

const Services = () => {
  return (
    <>
      <div className='py-8 px-4 sm:px-6 lg:px-10'>
        {/* Header Section */}
        <div className='text-center'>
          <h2 className='text-[14px] text-[#EB8D15] py-1'>WELCOME TO REGISTERKARO.IN</h2>
          <h3 className='text-[24px] sm:text-[28px] lg:text-[32px] font-semibold py-1'>Explore Our Services</h3>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
          {/* Card 1 */}
          <div className='flex flex-col justify-center items-center text-center gap-4'>
            <img className='w-12 h-12' src={service_img} alt='not work' />
            <h2 className='text-[18px] sm:text-[20px] font-bold'>Company Formation</h2>
            <p className='text-[15px] sm:text-[17px] w-[16rem]'>Build web-based solutions that enhance customer experience.</p>
            <span className='flex justify-center items-center gap-1'>
              <a className='text-[#1c4670] font-medium cursor-pointer'>Learn more</a>
              <img className='w-4 h-4 mt-1' src={arrow} alt='not work' />
            </span>
          </div>

          {/* Card 2 */}

         <div className="relative flex flex-col justify-center items-center text-center gap-4 border-x-4 border-gray-300 p-4 rounded-md  hover:shadow-xl transition-shadow duration-300">
                {/* Left Dot */}
                <div className="absolute left-[-4px] top-[3rem] transform -translate-y-1/2">
                  <div className="w-1 h-5 bg-[#BB162B] rounded-full animate-bounce" />
                </div>

                {/* Right Dot */}
                <div className="absolute right-[-4px] bottom-[3rem] transform -translate-y-1/2">
                  <div className="w-1 h-5 bg-[#BB162B] rounded-full animate-bounce" />
                </div>

                <img className="w-12 h-12" src={search1} alt="not work" />
                <h2 className="text-[18px] sm:text-[20px] font-bold">Company Secretarial Services</h2>
                <p className="text-[15px] sm:text-[17px] w-[16rem]">
                  Make data-driven decisions and utilize technology to reach business goals.
                </p>
                <span className="flex justify-center items-center gap-1">
                  <a className="text-[#1c4670] font-medium cursor-pointer">Learn more</a>
                  <img className="w-4 h-4 mt-1" src={arrow} alt="not work" />
                </span>
                </div>


          {/* Card 3 */}
          <div className='flex flex-col justify-center items-center text-center gap-4'>
            <img className='w-12 h-12' src={square} alt='not work' />
            <h2 className='text-[18px] sm:text-[20px] font-bold'>Virtual Office Address</h2>
            <p className='text-[15px] sm:text-[17px] w-[16rem]'>Foster customer relationships by effectively serving your market.</p>
            <span className='flex justify-center items-center gap-1'>
              <a className='text-[#1c4670] font-medium cursor-pointer'>Learn more</a>
              <img className='w-4 h-4 mt-1' src={arrow} alt='not work' />
            </span>
          </div>

          {/* Card 4 */}
          <div className='flex flex-col justify-center items-center text-center gap-4'>
            <img className='w-12 h-12' src={square} alt='not work' />
            <h2 className='text-[18px] sm:text-[20px] font-bold'>Annual Compliance Services</h2>
            <p className='text-[15px] sm:text-[17px] w-[16rem]'>Turn your ideas into modern products with our design experts.</p>
            <span className='flex justify-center items-center gap-1'>
              <a className='text-[#1c4670] font-medium cursor-pointer'>Learn more</a>
              <img className='w-4 h-4 mt-1' src={arrow} alt='not work' />
            </span>
          </div>

          {/* Card 5 */}
          <div className="relative flex flex-col justify-center items-center text-center gap-4 border-x-4 border-gray-300 p-4 rounded-md  hover:shadow-xl transition-shadow duration-300">
                  {/* Left Dot */}
                  <div className="absolute left-[-4px] top-[3rem] transform -translate-y-1/2">
                  <div className="w-1 h-5 bg-[#BB162B] rounded-full animate-bounce" />
                </div>

                {/* Right Dot */}
                <div className="absolute right-[-4px] bottom-[3rem] transform -translate-y-1/2">
                  <div className="w-1 h-5 bg-[#BB162B] rounded-full animate-bounce" />
                </div>

                <img className="w-12 h-12" src={shop} alt="not work" loading="lazy"/>
                <h2 className="text-[18px] sm:text-[20px] font-bold">Payroll Services</h2>
                <p className="text-[15px] sm:text-[17px] w-[16rem]">
                  Expand your business across the globe with minimal effort.
                </p>
                <span className="flex justify-center items-center gap-1">
                  <a className="text-[#1c4670] font-medium cursor-pointer">Learn more</a>
                  <img className="w-4 h-4 mt-1" src={arrow} alt="not work" loading="lazy"/>
                </span>
                </div>


          {/* Card 6 */}
          <div className='flex flex-col justify-center items-center text-center gap-4'>
            <img className='w-12 h-12' src={speaker} alt='not work' loading="lazy"/>
            <h2 className='text-[18px] sm:text-[20px] font-bold'>Bookkeeping Services</h2>
            <p className='text-[15px] sm:text-[17px] w-[16rem]'>Steering user behaviours with creative design, data insights & technology.</p>
            <span className='flex justify-center items-center gap-1'>
              <a className='text-[#1c4670] font-medium cursor-pointer'>Learn more</a>
              <img className='w-4 h-4 mt-1' src={arrow} alt='not work' loading="lazy" />
            </span>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className='flex justify-center items-center mt-4'>
          <button className='bg-[#1c4670] font-semibold py-2 px-4 text-white rounded-md hover:bg-[#16334e] transition'>
            See All Services
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
