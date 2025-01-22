import React from 'react'
import m1 from '../assets/m1.png'
import m78 from '../assets/m78.png';
import m3287 from '../assets/m3287.png';
import m12 from '../assets/m12.png'
import m41 from '../assets/m41.png'
 

const NumberImportant = () => {
  return (
    <>
     <div className="p-[4rem]">
            <div className='justify-items-center '>
                <p className="text-yellow-600">WHY REGISTER KARO</p>
                <h2 className="text-3xl font-bold ">Some Numbers are important</h2>
            </div>

            <div className="grid  grid-flow-col m-[2rem] gap-4 justify-items-center mt-[5rem]">
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-10' src={m1} alt='not work'/>
                    <p>CUSTOMERS</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                     <img className='w-10' src={m12} alt='not work'/>
                    <p>Years of Excellence</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-10' src={m41} alt='not work'/>
                    <p>R&D Engineers</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                <img className='w-9' src={m78} alt='not work'/>
                    <p>Countries</p>
                </div>  
                <div className='flex flex-col justify-center items-center'>
                     <img className='w-10' src={m3287} alt='not work'/>
                    <p>PARTNERS</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                   <img className='w-10' src={m41} alt='not work'/>
                    <p>Awards Received</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default NumberImportant