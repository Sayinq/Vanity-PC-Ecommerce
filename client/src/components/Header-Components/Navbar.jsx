import React from 'react';
import { motion } from 'framer-motion';
import { slideAnimation, fadeAnimation } from '../../config/motion';
import CartButton from './CartButton';
import PCTabMenu from './PC-Tab';
import PartsTabMenu from './Parts-Tab';

const Navbar = () => {
    return (
      <motion.header
        id="navbar"
        className="flex items-center fixed top-0 justify-between w-full h-auto bg-black p-4 py-2 z-20"
      >
        {/* Navbar Logo */}
        <motion.div id="nav-logo-links" className="flex flex-row" {...slideAnimation('left')}>
          <img
            src="src/assets/Favicon/vanity_icon.png"
            className="w-24 h-24 mr-4 hover:scale-110 transition-scale ease-in-out duration-100"
            alt="Logo"
          />
          <motion.ul className="flex flex-row items-center gap-x-8" {...fadeAnimation}>
            <PCTabMenu />
            <PartsTabMenu />
            <motion.li className="p-2 text-base hover:border-b-2 md:flex sm:hidden">
              <a id="FAQ" href="#">
                FAQ
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
  
        {/* Navbar Icons */}
        <motion.div
          id="nav-icons"
          className="flex flex-row items-center gap-x-4 mr-2"
          {...slideAnimation('right')}
        >
          {/* Cart */}
          <CartButton />
  
          {/* User */}
          <motion.a id="user" className="flex p-4 text-xl hover:border-b-2">
            <ion-icon name="person-outline"></ion-icon>
          </motion.a>
  
          {/* Menu */}
        </motion.div>
      </motion.header>
    );
  };
  
  export default Navbar;