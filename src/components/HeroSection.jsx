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
      <div className="border-sky-400 border">
        <div className="flex flex-col md:flex-row px-6 md:px-[8%] pt-10">
          <span className="flex items-center gap-2 mb-6 md:mb-0">
            <img className="w-10 md:w-[10%]" src={star1} alt="not work" loading="lazy"/>
            <p className="font-semibold text-lg md:text-xl">Google Rating</p>
            <img className="w-28 md:w-[34%] mt-1" src={starts} alt="not work" loading="lazy"/>
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-center px-4">
          <div className="left p-6 md:p-10 w-full md:w-[50%]">
            <div className="mb-6">
              <h1 className="text-black text-3xl md:text-5xl lg:text-6xl font-semibold">
                Your trusted partner
              </h1>
              <h1 className="text-black text-3xl md:text-5xl lg:text-6xl font-semibold">
                for compliance business
              </h1>
              <div className="py-6">
                <img className="py-2" src={line} alt="not work" loading="lazy"/>
              </div>
            </div>
            <p className="text-base md:text-lg lg:text-xl mb-6">
              An online business compliance platform that helps entrepreneurs and other individuals with various registrations, tax filings, and other legal matters.
            </p>
            <div className="flex flex-wrap gap-4 justify-between mb-6">
              <div className="flex items-center gap-2">
                <img className="w-9 h-9" src={w} alt="not work" loading="lazy"/>
                <div>
                  <img className="w-14 h-4" src={rating1} alt="not work" loading="lazy"/>
                  <p className="text-sm">Customer Rating</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-9 h-9" src={peopls} alt="not work" loading="lazy"/>
                <div>
                  <img className="w-14 h-4" src={rating2} alt="not work" loading="lazy"/>
                  <p className="text-sm">Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-9 h-9" src={hands} alt="not work" loading="lazy"/>
                <div>
                  <img className="w-14 h-4" src={rating3} alt="not work" loading="lazy"/>
                  <p className="text-sm">Financial Stability</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex justify-center bg-[#1c4670] items-center px-6 py-3 rounded-md text-white font-semibold"
              >
                Talk to an Expert
              </a>
              <span className="flex items-center gap-2">
                <img className="w-6 h-6 cursor-pointer" src={btn} alt="not work" loading="lazy"/>
                <p className="text-sm md:text-base">See how it works</p>
              </span>
            </div>
          </div>
          <div className="right w-full md:w-[50%] bg-gradient-to-r from-slate-50 to-blue-100">
            <div className="flex flex-col gap-4 absolute right-4 top-[15rem]">
              <span className="shadow border bg-white py-2 px-5 text-black font-semibold rounded-md cursor-pointer">
                Annual Compliance
              </span>
              <span className="shadow border bg-white py-2 px-5 text-black font-semibold rounded-md cursor-pointer">
                Payroll Services
              </span>
              <span className="shadow border bg-white py-2 px-5 text-black font-semibold rounded-md cursor-pointer">
                Company Formation
              </span>
              <span className="shadow border bg-white py-2 px-5 text-black font-semibold rounded-md cursor-pointer">
                Annual Compliance
              </span>
            </div>
            <img className="w-full mt-6" src={men} alt="not work" loading="lazy"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
