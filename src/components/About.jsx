import React from 'react';
import arrow from '../assets/arrow.png';
import members from '../assets/members.png';

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center p-4 md:p-8 gap-6 md:gap-8">
        {/* Text Section */}
        <div className="flex flex-col gap-4 w-full md:w-[50%] pt-4">
          <h2 className="text-[14px] text-[#EB8D15]">WELCOME TO REGISTERKARO.IN</h2>
          <span className="flex justify-start text-[28px] sm:text-[32px] gap-2 font-semibold">
            <h1 className="text-black">About</h1>
            <h1 className="text-[#EB8D15]">Register Karo</h1>
          </span>
          <p className="text-[14px] sm:text-[16px] leading-relaxed">
            We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years, and I’m extremely pleased with
            their performance, ability to execute, and willingness to adapt in our ever-changing environment. Perry is an outstanding leader who is fanatical about
            customer satisfaction. He has built a solid team that has consistently delivered on projects, thereby exceeding everyone’s expectations.
          </p>
          <p className="text-[14px] sm:text-[16px] leading-relaxed">
            I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
          </p>
          <div className="flex justify-start items-center my-2">
            <button className="flex justify-between items-center gap-2 bg-[#1c4670] font-semibold py-2 px-4 text-white rounded-sm">
              Learn More
              <img
                className="w-4 h-4"
                style={{ filter: 'brightness(0) invert(1)' }}
                src={arrow}
                alt="not work"
                loading="lazy"
              />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-center">
          <img
            className="w-full max-w-[400px] md:max-w-full rounded-md shadow-lg"
            src={members}
            alt="not work"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default About;
