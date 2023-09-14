import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideAnimation, fadeAnimation } from '../../config/motion';

const PartsTabContent = () => {
  return (
    <motion.div
      className="absolute py-2 w-max h-min bg-[#1A1C1E] border-t-[2px] border-gray-300 shadow-lg"
      style={{ minWidth: '25vw' }}
      initial="hidden"
      {...slideAnimation('up')}
    >
      {/* Dropdown content for Parts-Tab here */}

        <div className=" flex flex-col w-full items-center">
            <a href="#" className="transition-color ease-in-out duration-100 block w-full text-center p-6 text-xl text-white hover:text-black hover:bg-gray-100">
                <h2>CPUs</h2>
            </a>
            <a href="#" className="transition-color ease-in-out duration-100 flex flex-col w-full text-center p-6 text-xl text-white hover:text-black hover:bg-gray-100">
                <span>Graphics</span>
                <span>Cards</span>
            </a>
            <a href="#" className="transition-color ease-in-out duration-100 block w-full text-center p-6 text-xl text-white hover:text-black hover:bg-gray-100">
                <h2>Motherboards</h2>
            </a>
        </div>

    </motion.div>
  );
};

const PartsTabMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        id="parts-tab"
        className="flex items-center p-4 text-lg hover:border-b-2 cursor-pointer"
      >
        <span href="#">Parts</span>
      </motion.div>
      {isDropdownOpen && <PartsTabContent />} {/* Conditionally render PartsTabContent */}
    </div>
  );
};

export default PartsTabMenu;
