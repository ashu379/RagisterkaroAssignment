import React from 'react'

const DigitalReality = () => {
  return (
   <>
    <div className='justify-items-center bg-gradient-to-r from-yellow-600 to-blue-950 text-white p-[4rem]'>
            <div className='justify-items-center'>
               <p>1% OF THE INDUSTRY</p>
               <h2 className='font-bold text-3xl'>Welcome to your new digital reality. Now.</h2>
               </div>
               <div className='text-black mt-[2rem]'>
                <input type='email' placeholder='Enter Your Email' className='w-[25rem] h-[3rem] rounded-[3px] ml-[1rem]'/><button className='h-[3.1rem] bg-yellow-600 text-white w-[8rem] rounded-e-[9px] m=[-2rem]' style={{marginLeft: "-.5rem"}}> submit</button>
               </div>
               <div className="grid  grid-flow-col m-[2rem] gap-4 justify-items-center">
                <p>&#10003; Instant results</p>
                <p>&#10003; User-Frindly Interface </p>
                <p>&#10003; Personalized customization</p>
               </div>
        </div>
   </>
  )
}

export default DigitalReality