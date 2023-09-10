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
        <div id="app" className="flex flex-col">
            <motion.header id="navbar" className="flex items-center justify-between w-full h-auto p-4 py-2 bg-black">

                {/* Navbar Logo */}

                <motion.div id="nav-logo" {...slideAnimation('left')}>
                    <img src="https://cdn.discordapp.com/attachments/199979466036871168/1139249251860369418/logotesttransparent.png" 
                    className="w-24 h-24 p-4" />
                </motion.div>

                {/* Navbar Links */}

                <motion.div id="nav-links" className="">
                    <motion.ul className="flex flex-row items-center gap-x-8" {...fadeAnimation}>
                        <motion.li className="flex p-4 text-lg hover:border-b-2">
                            <a href="#">Premade</a>
                        </motion.li>
                        <motion.li className="flex p-4 text-lg hover:border-b-2">
                            <a href="#">Parts</a>
                        </motion.li>
                        <motion.li className="flex p-4 text-lg hover:border-b-2">
                            <a href="#">Help</a>
                        </motion.li>
                    </motion.ul>
                </motion.div>

                {/* Navbar Icons */}

                <motion.div id="nav-icons" className="flex flex-row items-center gap-x-4 mr-2" {...slideAnimation('right')}>
                    <motion.a id="checkout" className="flex p-4 text-xl hover:border-b-2">
                        <ion-icon name="cart-outline"></ion-icon>
                    </motion.a>
                    <motion.a id="user" className="flex p-4 text-xl hover:border-b-2">
                        <ion-icon name="person-outline"></ion-icon>
                    </motion.a>
                    <motion.a id="menu" className="flex p-4 text-xl hover:border-b-2">
                        <ion-icon name="menu-outline"></ion-icon>
                    </motion.a>

                </motion.div>
            </motion.header>

        {/* Hero Section */}

        <section id="hero" className="flex flex-col items-center justify-center w-full h-screen">
            <motion.div id="hero-header" className="flex" {...slideAnimation('up')}>
                <h2 class="text-white md:text-6xl font-black drop-shadow-lg">Welcome to Vanity</h2>
            </motion.div>
            <motion.div id="hero-smaller" className="flex py-8" {...slideAnimation('up')}>
                <p class="text-white md:text-2xl font-semibold drop-shadow-2xl">Your best choice for premium PC ecommerce</p>
            </motion.div>

            <motion.button id="hero-button" className="px-6 py-2 w-36 text-white bg-black hover:bg-white hover:text-black rounded-xl" {...slideAnimation('up')}>
                Shop Now
            </motion.button>
        </section>

                                        {/* WRITE GSAP FOR EVERYTHING BELOW THIS */}

        {/* As Seen In Section */}

        <section id="seen-in" className="flex justify-center items-center bg-[#FFFFFF] px-8 py-14  w-full h-auto">
            <motion.div id="seen-in-wrapper" className="flex flex-row justify-center items-center w-full h-auto gap-x-16" {...fadeAnimation}>
            <h2 id="seen-in-header" className="text-black text-lg font-thin mr-4">As Seen In</h2>
                <img src="https://cdn.midjourney.com/819f7252-e0c0-4022-b380-848867e30302/0_3.png" 
                    className="md:w-24 md:h-24 lg:w-48 lg:h-48 p-4 hover:scale-110" />
                <img src="https://cdn.midjourney.com/52799847-1345-499a-86c3-8b69fb3ab71c/0_2_384_N.webp" 
                    className="md:w-24 md:h-24 lg:w-48 lg:h-48 p-4 hover:scale-110" />
                <img src="https://cdn.midjourney.com/b184a8a4-6695-49fc-9387-c30ecd2c0bfa/0_0.png" 
                    className="md:w-24 md:h-24 lg:w-48 lg:h-48 p-4 hover:scale-110" />
                <img src="https://cdn.midjourney.com/7bd90013-60b7-49a8-baa0-15b6663fa8d4/0_1.png" 
                    className="md:w-24 md:h-24 lg:w-48 lg:h-48 p-4 hover:scale-110" />
                    
            </motion.div>
        </section>

        {/* About Us Section */}

        <section id="about-us" className="flex flex-col items-center justify-center w-full h-screen px-8 py-24 bg-[#F4F8FD]">
            <div id="about-us-wrapper" className="flex flex-row justify-center items-center gap-x-8 w-3/4 h-auto py-4">
                <div id="about-image" className="flex relative w-full h-full bg-white md:mr-12">
                    <img src="https://10web-site.ai/60/wp-content/uploads/sites/63/2023/09/recycled-shoe-store-home-about-image_qJG7oR9X.webp" className="w-full h-full" />
                </div>
                <div id="about-text" className="flex flex-col justify-center items-start content-center lg:gap-y-8 md:gap-y-4 -mt-4" {...slideAnimation('up')}>
                    <h2 id="about-bold" className="text-slate-800 text-4xl font-semibold">About Vanity</h2>
                    <p id="about-thin" className="text-zinc-600 lg:text-2xl md:text-lg font-medium lg:w-full md:w-4/5">
                    At Vanity, we are passionate about all things PC. 
                    Our goal is to provide the best selection of computer parts and accessories to our customers.
                    From graphics cards to CPUs and everything in between, we’ve got you covered.
                    </p>
                    <button id="about-button" className="text-slate-800 text-sm font-bold pb-2 border-slate-800 hover:border-blue-700 hover:text-blue-700 border-b-2 uppercase">Read More</button>
                </div>
            </div>

        </section>

        {/* Why Choose Vanity */}

        <section id="why-choose" className="flex flex-col w-full h-screen bg-green-500 px-8 py-24 bg-[#F4F8FD]">
            <div id="why-wrapper" className="flex flex-col justify-center items-center text-center w-full h-auto gap-y-8">
                <h2 id="why-bold" className="text-slate-800 text-4xl font-semibold">Why Choose Vanity</h2>
                <p id="why-thin" className="text-zinc-600 text-xl lg:w-1/2 md:w-4/5 font-medium leading-7">At Vanity, we believe in providing our customers with the best shopping experience possible. 
                From our selection of high-quality products to our fast and reliable shipping, we’re committed to making your PC building experience as smooth and enjoyable as possible.</p>
            </div>
        </section>

        </div>
    </AnimatePresence>
  )
}

export default Home