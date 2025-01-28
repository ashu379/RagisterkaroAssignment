import React from 'react';

import image from '../assets/icon.png';
const OurVideo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 border-2 px-10 py-10 bg-[#1c4670]">
      {/* Text Section */}
      <div className="w-full md:w-[50%] flex flex-col gap-4 pt-2">
        <div>
          <h1 className="text-[34px] text-white font-semibold">Our Video Introductions</h1>
          <p className="text-[16px] text-gray-400">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
          </p>
        </div>
        <div className="py-2">
          <img className="w-[80%] md:w-full" src={image} alt="not work" loading="lazy"/>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="w-full md:w-[50%] flex justify-center items-center">
        <iframe
          width="100%"
          height="auto"
          className="h-[45vh] md:h-[60vh]"
          src="https://www.youtube.com/embed/_HU7i5peA24?autohide=1&modestbranding=1&rel=0"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default OurVideo;



