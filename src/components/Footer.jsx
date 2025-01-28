import React from 'react'
import { FaArrowUp } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <footer className="bg-[#011B5B] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1 */}
          <div>
            <p className="mb-4 w-[60%] font-light">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-apple"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h5 className="text-yellow-400 font-semibold mb-4">START A BUSINESS</h5>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Features</a></li>
              <li><a href="#" className="hover:text-gray-400">Solutions</a></li>
              <li><a href="#" className="hover:text-gray-400">Integrations</a></li>
              <li><a href="#" className="hover:text-gray-400">Enterprise</a></li>
              <li><a href="#" className="hover:text-gray-400">Solutions</a></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h5 className="text-yellow-400 font-semibold mb-4">GOVERNMENT REGISTRATION</h5>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Partners</a></li>
              <li><a href="#" className="hover:text-gray-400">Community</a></li>
              <li><a href="#" className="hover:text-gray-400">Developers</a></li>
              <li><a href="#" className="hover:text-gray-400">App</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h5 className="text-yellow-400 font-semibold mb-4">COMPLIANCE & TAX</h5>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Channels</a></li>
              <li><a href="#" className="hover:text-gray-400">Scale</a></li>
              <li><a href="#" className="hover:text-gray-400">Watch the Demo</a></li>
              <li><a href="#" className="hover:text-gray-400">Our Competition</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Registerkaro. All Rights Reserved.</p>
          <a
            href="#"
            className="animate-bounce bg-yellow-400 p-2 w-[4rem] h-[4rem] rounded-full shadow-lg hover:bg-yellow-500 flex items-center justify-center"
            >
               <FaArrowUp className='text-[2rem] '/>
          </a>

        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer