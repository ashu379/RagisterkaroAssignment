import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.png';
import search from '../assets/iconoir_search.png';

export default function TextNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center w-[20%] pb-1">
          <img src={Logo} alt="Company Logo" loading="lazy"/>
        </div>
        <div className="md:hidden">
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul
          className={`md:flex z-[1] space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
        >
          <li className="p-4 md:p-0"><a href="#">Home</a></li>
          <li className="p-4 md:p-0"><a href="#">Our Service</a></li>
          <li className="p-4 md:p-0"><a href="#">Blog</a></li>
          <li className="p-4 md:p-0"><a href="#">Contact Us</a></li>
          <li className="p-4 md:p-0"><a href="#">About Us</a></li>
          <li className="p-4 md:p-0"><img src={search} alt="Search Icon" loading="lazy"/></li>
          <li className="p-4 md:p-0">
            <button className="bg-[#ffa229] text-white px-4 py-2 rounded-md text-sm">
              Talk To An Expert
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
