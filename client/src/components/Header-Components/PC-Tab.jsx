import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideAnimation, fadeAnimation } from '../../config/motion';

const PCTabContent = () => {
  return (
    <motion.div 
        className="absolute py-2 w-full bg-white border text-center border-gray-300 shadow-lg"
        style={{ minWidth: 'max-content' }}    
        initial="hidden"
        {...slideAnimation('up')}
    >

      {/* Dropdown content here */}

      <div className="flex flex-row w-full items-center">
        <a href="#" className="block w-full text-center px-8 py-6 text-sm text-gray-700 hover:bg-gray-100">
          <span className="image-wrapper flex flex-col justify-center items-center">
            <img
              src="./src/assets/gaming-pc.png"  
              alt="Image 1"
              className="image h-16 w-16"
            />
          </span>
          Vanguard
        </a>
      </div>
      <div className="flex flex-row items-center">
        <a href="#" className="block w-full text-center px-8 py-6 text-sm text-gray-700 hover:bg-gray-100">
          <span className="image-wrapper flex flex-col justify-center items-center">
            <img
              src="./src/assets/gaming-pc-2.png"  
              alt="Image 2"
              className="image h-16 w-16"
            />
          </span>
          EliteForce
        </a>
        <a href="#" className="block w-full text-center px-8 py-6 text-sm text-gray-700 hover:bg-gray-100">
          <span className="image-wrapper flex flex-col justify-center items-center">
            <img
              src="./src/assets/gaming-pc-3.png"  
              alt="Image 3"
              className="image h-16 w-16"
            />
          </span>
          InfernoX
        </a>
        <a href="#" className="block w-full text-center px-8 py-6 text-sm text-gray-700 hover:bg-gray-100">
          <span className="image-wrapper flex flex-col justify-center items-center">
            <img
              src="./src/assets/gaming-pc-4.png"  
              alt="Image 4"
              className="image h-16 w-16"
            />
          </span>
          ThunderStrike
        </a>
      </div>
      <div className="flex flex-row items-center">
        <a href="#" className="block w-full text-center px-8 py-6 text-sm text-gray-700 hover:bg-gray-100">
          <span className="image-wrapper flex flex-col justify-center items-center">
            <img
              src="./src/assets/gaming-pc-5.png"  
              alt="Image 5"
              className="image h-16 w-16"
            />
          </span>
          NovaBlade
        </a>
        <a href="#" className="block w-full text-center px-8 py-6 text-sm text-gray-700 hover:bg-gray-100">
          <span className="image-wrapper flex flex-col justify-center items-center">
            <img
              src="./src/assets/gaming-pc-6.png"  
              alt="Image 6"
              className="image h-16 w-16"
            />
          </span>
          QuantumPulse
        </a>
        <a href="#" className="block w-full text-center px-8 py-6 text-sm text-gray-700 hover:bg-gray-100">
          <span className="image-wrapper flex flex-col justify-center items-center">
            <img
              src="./src/assets/gaming-pc-7.png"  
              alt="Image 7"
              className="image h-16 w-16"
            />
          </span>
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


