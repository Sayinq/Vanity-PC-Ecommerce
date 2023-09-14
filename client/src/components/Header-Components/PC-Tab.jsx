import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideAnimation, fadeAnimation } from '../../config/motion';

const PCTabContent = () => {
  return (
    <motion.div 
        className="absolute py-2 w-full bg-[#1A1C1E] border-t-[2px] text-center border-gray-300 shadow-lg"
        style={{ minWidth: 'max-content' }}    
        initial="hidden"
        {...slideAnimation('up')}
    >

      {/* Dropdown content here */}

      <div className="flex flex-row w-full items-center">
        <a href="#" className="block w-full text-center px-8 py-6 text-xl text-white hover:text-black hover:bg-gray-100">
          Vanguard
        </a>
      </div>
      <div className="flex flex-row items-center">
        <a href="#" className="block w-1/3 text-center px-8 py-6 text-xl text-white hover:text-black hover:bg-gray-100">
          EliteForce
        </a>
        <a href="#" className="block w-1/3 text-center px-8 py-6 text-xl text-white hover:text-black hover:bg-gray-100">
          InfernoX
        </a>
        <a href="#" className="block w-1/3 text-center px-8 py-6 text-xl text-white hover:text-black hover:bg-gray-100">
          ThunderStrike
        </a>
      </div>
      <div className="flex flex-row items-center">
        <a href="#" className="block w-1/3 text-center px-8 py-6 text-xl text-white hover:text-black hover:bg-gray-100">
          NovaBlade
        </a>
        <a href="#" className="block w-1/3 text-center px-8 py-6 text-xl text-white hover:text-black hover:bg-gray-100">
          QuantumPulse
        </a>
        <a href="#" className="block w-1/3 text-center px-8 py-6 text-xl text-white hover:text-black hover:bg-gray-100">
          SolarFlare
        </a>
      </div>
    </motion.div>
  );
};

    {/* PC Tab Menu event handlers */}

const PCTabMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
      <motion.div
        id="pc-tab"
        className="flex items-center p-4 text-lg hover:border-b-2 cursor-pointer"
      >
        <span href="#">Gaming PCs</span>
      </motion.div>

      {/* Conditionally renders Dropdown */}

      {isDropdownOpen && <PCTabContent />} 
    </div>
  );
};

export default PCTabMenu;


