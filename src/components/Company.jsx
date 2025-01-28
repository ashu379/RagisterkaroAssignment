import React from 'react';
import Oracle_logo from '../assets/Oracle_logo.png';
import morpheus_logo from '../assets/morpheus_logo.png';
import samsung_logo from '../assets/samsung_logo.png';
import monday_logo from '../assets/monday_logo.png';
import segment_logo from '../assets/segment_logo.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Company = () => {
  const itemimg = [
    <img className='w-[120px] h-6 object-contain' src={Oracle_logo} alt='Oracle Logo' loading="lazy"/>,
    <img className='w-[120px] h-6 object-contain' src={morpheus_logo} alt='Morpheus Logo' loading="lazy"/>,
    <img className='w-[120px] h-6 object-contain' src={samsung_logo} alt='Samsung Logo' loading="lazy"/>,
    <img className='w-[120px] h-6 object-contain' src={monday_logo} alt='Monday.com Logo' loading="lazy"/>,
    <img className='w-[120px] h-6 object-contain' src={segment_logo} alt='Segment Logo' loading="lazy"/>
  ];

  return (
    <div className='py-8'>
      <div className='flex justify-center py-4'>
        <h2 className='text-2xl font-semibold text-center max-w-lg'>
          Trusted By Over 100+ Startups and Freelance Businesses
        </h2>
      </div>
      <div className='m-[2rem]'>
      <AliceCarousel 
        mouseTracking 
        items={itemimg} 
        autoPlay={true} 
        autoPlayInterval={2000} 
        infinite 
        disableButtonsControls 
        disableDotsControls 
        responsive={{
          0: { items: 2 },
          600: { items: 3 },
          1024: { items: 5 },
        }}
      />
      </div>
    </div>
  );
};

export default Company;
