import React from 'react'
import img1 from '../assets/coinbase.png';
import img2 from '../assets/spotify.png';
import img3 from '../assets/slack.png';
import img4 from '../assets/dropbox.png';
import img5 from '../assets/webflow.png';
import img6 from '../assets/zoom.png';

const Brand = () => {
  return (
    <>
    <div className="grid  grid-flow-col m-[2rem] justify-items-center">
        <img src={img1} className="w-[50%]" loading="lazy"/>
        <img src={img2} className="w-[50%]" loading="lazy"/>
        <img src={img3} className="w-[50%]" loading="lazy"/>
        <img src={img4} className="w-[50%]" loading="lazy"/>
        <img src={img5} className="w-[50%]" loading="lazy"/>
        <img src={img6} className="w-[50%]" loading="lazy"/>
       </div>
    </>
  )
}

export default Brand