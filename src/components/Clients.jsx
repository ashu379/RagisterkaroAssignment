import React from 'react';
import pt from '../assets/partners_icons.png';

const Clients = () => {
  return (
    <div className="py-10 px-4 md:px-10">
      {/* Title */}
      <span className="flex justify-center py-1">
        <h1 className="text-[24px] md:text-[32px] font-bold text-center">Our Happy Clients</h1>
      </span>

      {/* Description */}
      <span className="flex justify-center py-1">
        <p className="text-[14px] md:text-[16px] text-gray-500 w-full md:w-[60%] text-center">
          Professionally cultivate one-to-one customer service with robust ideas.
          Dynamically innovate resource-leveling customer service for state-of-the-art customer service.
        </p>
      </span>

      {/* Image */}
      <span className="my-10 md:my-20 w-full flex justify-center">
        <img className="w-[80%] md:w-[100%] h-auto" src={pt} alt="not work" loading="lazy"/>
      </span>
    </div>
  );
};

export default Clients;
