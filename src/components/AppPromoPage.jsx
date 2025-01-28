import React from 'react';
import { motion } from 'framer-motion';
import phoneimg from '../assets/phonegrp.png';
import appStore from '../assets/App store.png';
import googlePlay from '../assets/google play.png';

const AppPromoPage = () => {
  return (
    <>
      <div className="bg-[#1C4670] overflow-hidden text-white flex items-center">
        <div className="container px-4 py-8 md:h-[25rem] flex flex-col-reverse md:flex-row">
          {/* Left Section */}
          <div className="w-full md:w-[44%] mb-8 md:mb-0 md:mr-[20%]">
            <motion.h1
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Manage Your Services by Your Mobile Phone
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
            </motion.p>

            {/* Get the App Section */}
            <motion.div
              className="mb-4 ml-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p>Get the App</p>
            </motion.div>

            <motion.div
              className="flex mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a>
                <img src={appStore} alt="App Store" className="h-[58px] sm:h-[64px] w-[150px] sm:w-[180px] mr-2" loading="lazy" />
              </a>
              <a>
                <img src={googlePlay} alt="Google Play" className="h-[58px] sm:h-[64px] w-[150px] sm:w-[180px] mr-2" loading="lazy" />
              </a>
            </motion.div>
          </div>

          {/* Right Section (Phone Image) */}
          <div className="w-full md:w-[56%] flex justify-center md:justify-end">
            <motion.div
              className="relative bottom-[-2rem] md:bottom-[7rem]"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            >
              <img
                src={phoneimg}
                alt="Phone Preview"
                className="rounded-xl shadow-lg w-[80%] sm:w-[60%] md:w-[40rem] h-[auto] md:h-[60rem]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppPromoPage;
