import React from 'react';
import m1 from '../assets/m1.png';
import m78 from '../assets/m78.png';
import m3287 from '../assets/m3287.png';
import m12 from '../assets/m12.png';
import m41 from '../assets/m41.png';

const NumberImportant = () => {
  return (
    <div className="p-[4rem]">
      {/* Title Section */}
      <div className="text-center mb-[5rem]">
        <p className="text-yellow-600">WHY REGISTER KARO</p>
        <h2 className="text-3xl md:text-4xl font-bold">Some Numbers are Important</h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 justify-items-center">
        <div className="flex flex-col justify-center items-center">
          <img className="w-10 sm:w-12 md:w-16" src={m1} alt="not work" loading="lazy"/>
          <p className="text-center">CUSTOMERS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-10 sm:w-12 md:w-16" src={m12} alt="not work" loading="lazy"/>
          <p className="text-center">Years of Excellence</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-10 sm:w-12 md:w-16" src={m41} alt="not work" loading="lazy"/>
          <p className="text-center">R&D Engineers</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-9 sm:w-12 md:w-16" src={m78} alt="not work" loading="lazy"/>
          <p className="text-center">Countries</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-10 sm:w-12 md:w-16" src={m3287} alt="not work" loading="lazy"/>
          <p className="text-center">PARTNERS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-10 sm:w-12 md:w-16" src={m41} alt="not work" loading="lazy"/>
          <p className="text-center">Awards Received</p>
        </div>
      </div>
    </div>
  );
};

export default NumberImportant;
