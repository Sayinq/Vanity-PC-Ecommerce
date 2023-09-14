import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
    fadeAnimation
} from '../config/motion';

import CartButton from '../components/Header-Components/CartButton';
import PCTabMenu from '../components/Header-Components/PC-Tab';
import PartsTabMenu from '../components/Header-Components/Parts-Tab';

const Home = () => {
  return (
    <AnimatePresence>
        <main id="app" className="flex flex-col">
            <motion.header id="navbar" className="flex items-center fixed top-0 justify-between w-full h-auto bg-black p-4 py-2 z-20">

                {/* Navbar Logo */}

                <motion.div id="nav-logo-links" class="flex flex-row" {...slideAnimation('left')}>
                    <img src="src/assets/vanity_icon.png" 
                    className="w-24 h-24 mr-4 hover:scale-110 transition-scale ease-in-out duration-100" />
                    <motion.ul className="flex flex-row items-center gap-x-8" {...fadeAnimation}>
                        <PCTabMenu />
                        <PartsTabMenu />
                        <motion.li className="p-2 text-base hover:border-b-2 md:flex sm:hidden">
                            <a id="FAQ" href="#">FAQ</a>
                        </motion.li>
                    </motion.ul>
                </motion.div>

                {/* Navbar Icons */}

                <motion.div id="nav-icons" className="flex flex-row items-center gap-x-4 mr-2" {...slideAnimation('right')}>
                    
                    {/* Cart */}
                    <CartButton />

                    {/* User */}
                    <motion.a id="user" className="flex p-4 text-xl hover:border-b-2">
                        <ion-icon name="person-outline"></ion-icon>
                    </motion.a>

                    {/* Menu */}

                </motion.div>
            </motion.header>

        {/* Hero Section */}

        <section id="hero" className="flex flex-col items-center justify-center w-auto h-screen z-10 mt-24">
            <motion.div id="hero-header" className="flex" {...slideAnimation('up')}>
                <h2 class="text-white md:text-6xl font-black drop-shadow-md">Welcome to Vanity</h2>
            </motion.div>
            <motion.div id="hero-smaller" className="flex py-8" {...slideAnimation('up')}>
                <p class="text-white md:text-2xl font-semibold drop-shadow-md">Your best choice for premium PC ecommerce</p>
            </motion.div>
            <motion.div id="hero-button-wrapper" className="flex flex-row items center gap-x-4" {...slideAnimation('up')}>
                <motion.button id="hero-button" className="transition-color ease-in-out duration-75 px-6 py-2 w-36 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                    Shop Now
                </motion.button>
                <motion.button id="hero-button" className="transition-color ease-in-out duration-75 px-6 py-2 w-36 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                    Build List
                </motion.button>
            </motion.div>
        </section>

                                        {/* WRITE GSAP FOR EVERYTHING BELOW THIS */}

        {/* Featured Item Section */}

        <section id="featured-item" className="flex lg:flex-row md:flex-col items-center justify-around w-full h-screen z-10">
            <div id="item-picture" className="py-4">
                <img src="./src/assets/gaming-pc.png" className="lg:scale-125 md:scale-100"/>
            </div>
            <div id="item-details" className="flex flex-col lg:w-1/2 md:w-screen h-auto p-8 bg-[#081016] drop-shadow-lg rounded-lg">
                <div id="item-details__inner" className="p-4">

                    <h2 class="items-details__title" 
                    className="md:text-4xl py-2 font-black tracking-wide text-itemtitle">Vanguard</h2>
                    <h2 class id="items-details__subtitle" className="md:text-2xl py-2 font-semibold tracking-widest uppercase text-yellow-600 [text-shadow:_0_1px_5px_rgb(255_255_255_/_40%)]">Limited Edition</h2>

                    <h2 id="items-details__price" className="md:text-lg py-2 text-[222133] font-bold tracking-widest uppercase">$4,499.99 USD</h2>
                    <p id="item-description" className="text-lg py-6 leading-loose">
                    Introducing the "Vanguard" Gaming PC – Unleash the power of cutting-edge gaming with our flagship rig. 
                    Featuring the formidable AMD Ryzen 9 7950X3D CPU, paired with the blazing-fast 7900XTX graphics card, this custom AUROS case-clad powerhouse delivers uncompromising performance and style. 
                    Dive into the world of immersive gaming and content creation with the Vanity Vanguard, where aesthetics meet unrivaled power.
                    </p>

                    {/* Input for time count-down (5 days left counting down, resets on page refresh) */} 

                    <div id="item-links" className="">

                    <div id="featured-button__wrapper" className="flex flex-row gap-x-2 lg:pb-0 md:pb-24">
                        <button id="view-specs" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="view-specs__text" className="pr-2">View Specs</p>
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        <button id="featured-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="featured-button__text" className="pr-2">Add To Cart</p>
                        <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Premade / Quickbuy Section */}

        <section id="quickbuy" className="flex items-center justify-evenly bg-[#212032] w-full h-full z-10 py-8">
            <div id="quickbuy-wrapper" className="transition-colors ease-in-out  flex flex-wrap justify-evenly w-full py-12 pb-20 gap-y-28">
                <div id="quickbuy-eliteforce" className="transition-colors ease-in-out p-8 bg-[#081016] hover:bg-gradient-to-r from-cyan-500 to-blue-500 lg:w-1/3 md:w-3/4 h-auto m-0.5 rounded-lg">
                    <div id="quickbuy-image" className="flex justify-center items-center border-b-2 py-4">
                        <img src="./src/assets/gaming-pc-2.png" className="w-80 h-80 hover:scale-[1.05] transition-scale ease-in-out duration-100"/>
                    </div>
                    <h2 id="quickbuy-eliteforce__header" className="text-itemtitle md:text-4xl py-1 pt-4 font-black tracking-wide uppercase">EliteForce</h2>
                    <h2 id="quickbuy-eliteforce__price" className="md:text-lg py-4 text-[222133] font-bold tracking-widest uppercase">$3,999.99</h2>
                    <p id="quickbuy-eliteforce__description" className="">
                    Unleash the "EliteForce" and dominate the gaming world. 
                    Powered by the Intel Core i9-12900K and the mighty NVIDIA GeForce RTX 3090, this PC delivers unrivaled performance. 
                    With a stunning EliteForce Edition case and customizable RGB lighting, it's a true force to be reckoned with.
                    </p>
                    <div id="atc-button__wrapper" className="flex flex-row gap-x-2 pt-6">
                        <button id="view-specs" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="view-specs__text" className="pr-2">View Specs</p>
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        <button id="atc-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="atc-button__text" className="pr-2">Add To Cart</p>
                        <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                        </button>
                    </div>
                </div>
                <div id="quickbuy-infernox" className="p-8 bg-[#081016] lg:w-1/3 md:w-3/4 h-auto rounded-lg">
                    <div id="quickbuy-image" className="flex justify-center items-center border-b-2 py-4">
                        <img src="./src/assets/gaming-pc-3.png" className="w-80 h-80 hover:scale-[1.05] transition-scale ease-in-out duration-100"/>
                    </div>
                    <h2 id="quickbuy-infernox__header" className="text-itemtitle md:text-4xl py-1 pt-4 font-black tracking-wide uppercase">InfernoX</h2>
                    <h2 id="quickbuy-inferno__price" className="md:text-lg py-4 text-[222133] font-bold tracking-widest uppercase">$3,499.99</h2>
                    <p id="quickbuy-infernox__description" className="">
                    Ignite your gaming experience with the "InfernoX." 
                    Featuring the AMD Ryzen 9 5950X and the powerful ASUS ROG Strix Radeon RX 6900 XT, this PC is a fiery beast. 
                    Encased in the exclusive InfernoX Edition, it's the ultimate choice for 4K gaming.
                    </p>
                    <div id="atc-button__wrapper" className="flex flex-row gap-x-2 pt-6">
                        <button id="view-specs" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="view-specs__text" className="pr-2">View Specs</p>
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        <button id="atc-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="atc-button__text" className="pr-2">Add To Cart</p>
                        <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                        </button>
                    </div>
                </div>
                <div id="quickbuy-thunderstrike" className="p-8 bg-[#081016] lg:w-1/3 md:w-3/4 h-auto m-0.5 rounded-lg">
                    <div id="quickbuy-image" className="flex justify-center items-center border-b-2 py-4">
                        <img src="./src/assets/gaming-pc-4.png" className="w-80 h-80 hover:scale-[1.05] transition-scale ease-in-out duration-100"/>
                    </div>
                    <h2 id="quickbuy-thunderstrike__header" className="text-itemtitle md:text-4xl py-1 pt-4 font-black tracking-wide uppercase">ThunderStrike</h2>
                    <h2 id="quickbuy-thunderstrike__price" className="md:text-lg py-4 text-[222133] font-bold tracking-widest uppercase">$2,999.99</h2>
                    <p id="quickbuy-thunderstrike__description" className="">
                    Feel the power of the "ThunderStrike." 
                    Equipped with the Intel Core i7-12700KF and the lightning-fast MSI GeForce RTX 3080 Ti, this PC is designed for extreme overclocking. 
                    Housed in the sleek ThunderStrike Edition case, it's a force of nature.
                    </p>
                    <div id="atc-button__wrapper" className="flex flex-row gap-x-2 pt-6">
                        <button id="view-specs" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="view-specs__text" className="pr-2">View Specs</p>
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        <button id="atc-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="atc-button__text" className="pr-2">Add To Cart</p>
                        <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                        </button>
                    </div>
                </div>
                <div id="quickbuy-novablade" className="p-8 bg-[#081016] lg:w-1/3 md:w-3/4 h-auto rounded-lg">
                    <div id="quickbuy-image" className="flex justify-center items-center border-b-2 py-4">
                        <img src="./src/assets/gaming-pc-5.png" className="w-80 h-80 hover:scale-[1.05] transition-scale ease-in-out duration-100"/>
                    </div>
                    <h2 id="quickbuy-novablade__header" className="text-itemtitle md:text-4xl py-1 pt-4 font-black tracking-wide uppercase">NovaBlade</h2>
                    <h2 id="quickbuy-novablade__price" className="md:text-lg py-4 text-[222133] font-bold tracking-widest uppercase">$2,499.99</h2>
                    <p id="quickbuy-novablade__description" className="">
                    Enter a new gaming dimension with the "NovaBlade." 
                    Featuring the AMD Ryzen 7 5800X and the capable EVGA GeForce RTX 3070, it's your gateway to VR-ready adventures. 
                    Encased in the stylish NovaBlade Edition case, it's where innovation meets affordability.
                    </p>
                    <div id="atc-button__wrapper" className="flex flex-row gap-x-2 pt-6">
                        <button id="view-specs" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="view-specs__text" className="pr-2">View Specs</p>
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        <button id="atc-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="atc-button__text" className="pr-2">Add To Cart</p>
                        <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                        </button>
                    </div>
                </div>
                <div id="quickbuy-quantumpulse" className="p-8 bg-[#081016] lg:w-1/3 md:w-3/4 h-auto rounded-lg">
                    <div id="quickbuy-image" className="flex justify-center items-center border-b-2 py-4">
                        <img src="./src/assets/gaming-pc-6.png" className="w-80 h-80 hover:scale-[1.05] transition-scale ease-in-out duration-100"/>
                    </div>
                    <h2 id="quickbuy-quantumpulse__header" className="text-itemtitle md:text-4xl py-1 pt-4 font-black tracking-wide uppercase">QuantumPulse</h2>
                    <h2 id="quickbuy-quantumpulse__price" className="md:text-lg py-4 text-[222133] font-bold tracking-widest uppercase">$1,999.99</h2>
                    <p id="quickbuy-quantumpulse__description" className="">
                    Experience the "QuantumPulse," 
                    a compact powerhouse with the Intel Core i5-12600K and the efficient Zotac GeForce RTX 3060. 
                    Its sleek QuantumPulse Edition case makes it the perfect blend of performance and style for gamers on the move.
                    </p>
                    <div id="atc-button__wrapper" className="flex flex-row gap-x-2 pt-6">
                        <button id="view-specs" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="view-specs__text" className="pr-2">View Specs</p>
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        <button id="atc-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="atc-button__text" className="pr-2">Add To Cart</p>
                        <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                        </button>
                    </div>
                </div>
                <div id="quickbuy-solarflare" className="p-8 bg-[#081016] lg:w-1/3 md:w-3/4 h-auto rounded-lg">
                    <div id="quickbuy-image" className="flex justify-center items-center border-b-2 py-4">
                        <img src="./src/assets/gaming-pc-7.png" className="w-80 h-80 hover:scale-[1.05] transition-scale ease-in-out duration-100"/>
                    </div>
                    <h2 id="quickbuy-solarflare__header" className="text-itemtitle md:text-4xl py-1 pt-4 font-black tracking-wide uppercase">SolarFlare</h2>
                    <h2 id="quickbuy-solarflare__price" className="md:text-lg py-4 text-[222133] font-bold tracking-widest uppercase">$1,499.99</h2>
                    <p id="quickbuy-solarflare__description" className="">
                    Illuminate your gaming world with the "SolarFlare." 
                    Powered by the AMD Ryzen 5 5600X and the impressive Sapphire Radeon RX 6700 XT, it excels in ray tracing performance. 
                    Encased in the stunning SolarFlare Edition case, it's a beacon of gaming excellence.
                    </p>
                    <div id="atc-button__wrapper" className="flex flex-row gap-x-2 pt-6">
                        <button id="view-specs" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="view-specs__text" className="pr-2">View Specs</p>
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        <button id="atc-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                        <p id="atc-button__text" className="pr-2">Add To Cart</p>
                        <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Partners Section */}

        <section id="our-partners" className="flex justify-center items-center bg-[#081016] px-8 py-14  w-full h-auto">
            <motion.div id="partners-wrapper" className="flex flex-row justify-center items-center w-full h-auto gap-x-16" {...fadeAnimation}>
            <h2 id="partners-header" className="text-white text-lg font-medium mr-4">Our Partners</h2>
                <img src="./src/assets/partner-icon.png" 
                    className="transition-all duration-110 ease-in-out md:w-24 md:h-24 lg:w-48 lg:h-48 p-4 hover:scale-110" />
                <img src="./src/assets/partner-icon-2.png" 
                    className="transition-all duration-110 ease-in-out md:w-24 md:h-24 lg:w-48 lg:h-48 p-4 hover:scale-110" />
                <img src="./src/assets/partner-icon-3.png" 
                    className="transition-all duration-110 ease-in-out md:w-24 md:h-24 lg:w-48 lg:h-48 p-4 hover:scale-110" />
                <img src="./src/assets/partner-icon-4.png" 
                    className="transition-all duration-110 ease-in-out md:w-24 md:h-24 lg:w-48 lg:h-48 p-4 hover:scale-110" />
                    
            </motion.div>
        </section>

        {/* Footer Link Section */}

        

        </main>
    </AnimatePresence>
  )
}

export default Home