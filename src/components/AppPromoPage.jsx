import React from 'react'
import phoneimg from '../assets/phonegrp.png'
import appStore from '../assets/App store.png'
import googlePlay from '../assets/google play.png'

const AppPromoPage = () => {
  return (
    <>
    <div className="bg-[#1C4670] overflow-hidden   text-white  flex items-center ">
      <div className="container  px-4 h-[25rem] m-[2rem]  flex ">
       <div className="w-[44%] mr-[20%]">
        <h1 className="text-4xl font-bold mb-4">Manage Your Services by your Mobile Phone</h1>

        {/* Subtitle */}
        <p className="text-lg mb-8">
          Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
        </p>
        <div className='mb-4 ml-3'>
        <p>Get the App</p>
        </div>
        <div className="flex  mb-12">
          <a>
            <img src={appStore} alt="App Store" className="h-[58px] mr-2 w-[150px]" />
            
          </a>
          <a>
            <img src={googlePlay} alt="Google Play" className="h-[58px] mr-2 w-[150px]" />
            
          </a>
        </div>

        </div>
        <div>

        <div className="">
         
          <div className="relative bottom-[7rem]">
            <img
              src={phoneimg}
              alt="Phone Preview 2"
              className="rounded-xl shadow-lg w-[40rem] h-[60rem]"
            />
           
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AppPromoPage