import React from 'react';
import safe_icon from '../assets/safe_icon.png';
import check_icon from '../assets/check_icon.png';
import smile_icon from '../assets/smile_icon.png';
import person_icon from '../assets/person_icon.png';
import protect_icon from '../assets/protect_icon.png';

const WhyChoose = () => {
  return (
    <div className="p-10">
      {/* First Section */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div className="w-full md:w-[50%] flex flex-col gap-4">
          <h2 className="text-[14px] text-[#EB8D15]">WHY REGISTERKARO.IN</h2>
          <h2 className="text-[36px] text-black font-bold">
            Why Choose Register Karo
          </h2>
          <p>
            It is with consistent services and results that build trust with
            the people, and that, in turn, helps us to serve the business
            better.
          </p>
        </div>
        <div className="w-[40%] md:w-[17%] flex justify-center items-center">
          <img src={safe_icon} alt="safe_icon" className="w-full h-auto" loading="lazy"/>
        </div>
        <div className="w-[40%] md:w-[16%] flex justify-center items-center">
          <img src={check_icon} alt="check_icon" className="w-full h-auto" loading="lazy"/>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full md:w-[94.5%]">
        <div className="flex flex-col md:flex-row justify-center md:justify-end gap-4 p-4">
          <div className="w-full md:w-[18.5%] flex justify-center items-center">
            <img src={smile_icon} alt="smile_icon" className="w-full h-auto" loading="lazy"/>
          </div>
          <div className="w-full md:w-[18.5%] flex justify-center items-center">
            <img src={person_icon} alt="person_icon" className="w-full h-auto" loading="lazy"/>
          </div>
          <div className="w-full md:w-[18.5%] flex justify-center items-center">
            <img src={protect_icon} alt="protect_icon" className="w-full h-auto" loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
