import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
    fadeAnimation
} from '../config/motion';

const Home = () => {
  return (
    <AnimatePresence>
        <motion.header id="navbar" className="flex items-center justify-between w-full h-auto p-4 py-2 bg-black">

            {/* Navbar Logo */}

            <motion.div id="navlogo" {...slideAnimation('up')}>
                <img src="https://cdn.discordapp.com/attachments/199979466036871168/1139249251860369418/logotesttransparent.png" 
                className="w-24 h-24 p-4" />
            </motion.div>

            {/* Navbar Links */}

            <motion.div id="navlinks" className="flex flex-row items-center gap-x-4 mr-2" {...slideAnimation('right')}>
                <motion.a id="link" className="flex p-4">
                    <ion-icon name="cart-outline" className="flex text-2xl"></ion-icon>
                </motion.a>
                <motion.a id="link" className="flex p-4">
                    <ion-icon name="person-outline"></ion-icon>
                </motion.a>
                <motion.a id="link" className="flex p-4">
                    <ion-icon name="menu-outline"></ion-icon>
                </motion.a>

            </motion.div>
        </motion.header>
    </AnimatePresence>
  )
}

export default Home