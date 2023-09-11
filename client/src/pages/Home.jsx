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
        <main id="app" className="flex flex-col">
            <motion.header id="navbar" className="flex items-center fixed top-0 justify-between w-full h-auto bg-black p-4 py-2 z-20">

                {/* Navbar Logo */}

                <motion.div id="nav-logo-links" class="flex flex-row" {...slideAnimation('left')}>
                    <img src="src/assets/vanity_icon.png" 
                    className="w-24 h-24 mr-4 hover:scale-110 transition-scale ease-in-out duration-100" />
                    <motion.ul className="flex flex-row items-center gap-x-8" {...fadeAnimation}>
                        <motion.li className="p-2 text-base hover:border-b-2 md:flex sm:hidden">
                            <a href="#">Premade</a>
                        </motion.li>
                        <motion.li className="p-2 text-base hover:border-b-2 md:flex sm:hidden">
                            <a href="#">Parts</a>
                        </motion.li>
                        <motion.li className="p-2 text-base hover:border-b-2 md:flex sm:hidden">
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
            <div id="item-details" className="flex flex-col lg:w-1/2 md:w-screen h-auto p-8 bg-[#081016] drop-shadow-lg">
                <div id="item-details__inner" className="p-4">

                    <h2 class="items-details__title" 
                    className="md:text-4xl py-2 font-black tracking-wide text-itemtitle">Vanguard</h2>
                    <h2 class id="items-details__subtitle" className="md:text-2xl py-2 font-semibold tracking-widest uppercase text-yellow-600 [text-shadow:_0_1px_5px_rgb(255_255_255_/_40%)]">Limited Edition</h2>

                    <h2 id="items-details__price" className="md:text-lg py-2 text-[222133] font-bold tracking-widest uppercase">$2,499.99 USD</h2>
                    <p id="item-description" className="text-lg py-6 leading-loose">
                    Introducing the "Vanguard" Gaming PC – Unleash the power of cutting-edge gaming with our flagship rig. 
                    Featuring the formidable AMD Ryzen 7 5900X CPU, paired with the blazing-fast 7900XTX graphics card, this custom AUROS case-clad powerhouse delivers uncompromising performance and style. 
                    Dive into the world of immersive gaming and content creation with the Vanity Vanguard, where aesthetics meet unrivaled power.
                    </p>

                    {/* Input for time count-down (5 days left counting down, resets on page refresh) */} 

                    <div id="item-links" className="">

                    <button id="featured-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                    <p id="featured-button__text" className="pr-2">Add To Cart</p>
                    <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                    </button>

                    </div>
                </div>
            </div>
        </section>

        {/* Premade / Quickbuy Section */}

        <section id="quickbuy" className="flex items-center justify-evenly bg-[#212032] w-full h-full z-10 py-8">
            <div id="quickbuy-wrapper" className="flex flex-wrap justify-evenly w-full py-12 gap-y-8">
                <div id="quickbuy-product" className="p-8 bg-[#081016] lg:w-1/3 md:w-3/4 h-auto m-0.5 rounded-lg">
                    <div id="quickbuy-image" className="flex justify-center items-center border-b-2 py-4">
                        <img src="./src/assets/gaming-pc-2.png" className="w-80 h-80 hover:scale-[1.05] transition-scale ease-in-out duration-100"/>
                    </div>
                    <h2 id="quickbuy-product__header" className="text-itemtitle md:text-4xl py-1 pt-4 font-black tracking-wide uppercase">EliteForce</h2>
                    <h2 id="quickbuy-product__price" className="md:text-lg py-4 text-[222133] font-bold tracking-widest uppercase">$3,999.99</h2>
                    <p id="quickbuy-product__description" className="">
                    Unleash the "EliteForce" and dominate the gaming world. 
                    Powered by the Intel Core i9-12900K and the mighty NVIDIA GeForce RTX 3090, this PC delivers unrivaled performance. 
                    With a stunning EliteForce Edition case and customizable RGB lighting, it's a true force to be reckoned with.
                    </p>
                    <button id="featured-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 mt-6 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                    <p id="featured-button__text" className="pr-2">Add To Cart</p>
                    <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                    </button>
                </div>
                <div id="quickbuy-product" className="p-8 bg-[#081016] lg:w-1/3 md:w-3/4 h-auto rounded-lg">
                    <div id="quickbuy-image" className="flex justify-center items-center border-b-2 py-4">
                        <img src="./src/assets/gaming-pc-3.png" className="w-80 h-80 hover:scale-[1.05] transition-scale ease-in-out duration-100"/>
                    </div>
                    <h2 id="quickbuy-product__header" className="text-itemtitle md:text-4xl py-1 pt-4 font-black tracking-wide uppercase">InfernoX</h2>
                    <h2 id="quickbuy-product__price" className="md:text-lg py-4 text-[222133] font-bold tracking-widest uppercase">$3,499.99</h2>
                    <p id="quickbuy-product__description" className="">
                    Ignite your gaming experience with the "InfernoX." 
                    Featuring the AMD Ryzen 9 5950X and the powerful ASUS ROG Strix Radeon RX 6900 XT, this PC is a fiery beast. 
                    Encased in the exclusive InfernoX Edition, it's the ultimate choice for 4K gaming.
                    </p>
                    <button id="featured-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 mt-6 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                    <p id="featured-button__text" className="pr-2">Add To Cart</p>
                    <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                    </button>
                </div>
                <div id="quickbuy-product" className="p-8 bg-[#081016] lg:w-1/3 md:w-3/4 h-auto m-0.5 rounded-lg">
                    <div id="quickbuy-image" className="flex justify-center items-center border-b-2 py-4">
                        <img src="./src/assets/gaming-pc-4.png" className="w-80 h-80 hover:scale-[1.05] transition-scale ease-in-out duration-100"/>
                    </div>
                    <h2 id="quickbuy-product__header" className="text-itemtitle md:text-4xl py-1 pt-4 font-black tracking-wide uppercase">ThunderStrike</h2>
                    <h2 id="quickbuy-product__price" className="md:text-lg py-4 text-[222133] font-bold tracking-widest uppercase">$2,999.99</h2>
                    <p id="quickbuy-product__description" className="">
                    Feel the power of the "ThunderStrike." 
                    Equipped with the Intel Core i7-12700KF and the lightning-fast MSI GeForce RTX 3080 Ti, this PC is designed for extreme overclocking. 
                    Housed in the sleek ThunderStrike Edition case, it's a force of nature.
                    </p>
                    <button id="featured-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 mt-6 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                    <p id="featured-button__text" className="pr-2">Add To Cart</p>
                    <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                    </button>
                </div>
                <div id="quickbuy-product" className="p-8 bg-[#081016] lg:w-1/3 md:w-3/4 h-auto rounded-lg">
                    <div id="quickbuy-image" className="flex justify-center items-center border-b-2 py-4">
                        <img src="./src/assets/gaming-pc-5.png" className="w-80 h-80 hover:scale-[1.05] transition-scale ease-in-out duration-100"/>
                    </div>
                    <h2 id="quickbuy-product__header" className="text-itemtitle md:text-4xl py-1 pt-4 font-black tracking-wide uppercase">NovaBlade</h2>
                    <h2 id="quickbuy-product__price" className="md:text-lg py-4 text-[222133] font-bold tracking-widest uppercase">$2,499.99</h2>
                    <p id="quickbuy-product__description" className="">
                    Enter a new gaming dimension with the "NovaBlade." 
                    Featuring the AMD Ryzen 7 5800X and the capable EVGA GeForce RTX 3070, it's your gateway to VR-ready adventures. 
                    Encased in the stylish NovaBlade Edition case, it's where innovation meets affordability.
                    </p>
                    <button id="featured-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 mt-6 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                    <p id="featured-button__text" className="pr-2">Add To Cart</p>
                    <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                    </button>
                </div>
                <div id="quickbuy-product" className="p-8 bg-[#081016] lg:w-1/3 md:w-3/4 h-auto rounded-lg">
                    <div id="quickbuy-image" className="flex justify-center items-center border-b-2 py-4">
                        <img src="./src/assets/gaming-pc-6.png" className="w-80 h-80 hover:scale-[1.05] transition-scale ease-in-out duration-100"/>
                    </div>
                    <h2 id="quickbuy-product__header" className="text-itemtitle md:text-4xl py-1 pt-4 font-black tracking-wide uppercase">QuantumPulse</h2>
                    <h2 id="quickbuy-product__price" className="md:text-lg py-4 text-[222133] font-bold tracking-widest uppercase">$1,999.99</h2>
                    <p id="quickbuy-product__description" className="">
                    Experience the "QuantumPulse," 
                    a compact powerhouse with the Intel Core i5-12600K and the efficient Zotac GeForce RTX 3060. 
                    Its sleek QuantumPulse Edition case makes it the perfect blend of performance and style for gamers on the move.
                    </p>
                    <button id="featured-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 mt-6 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                    <p id="featured-button__text" className="pr-2">Add To Cart</p>
                    <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                    </button>
                </div>
                <div id="quickbuy-product" className="p-8 bg-[#081016] lg:w-1/3 md:w-3/4 h-auto rounded-lg">
                    <div id="quickbuy-image" className="flex justify-center items-center border-b-2 py-4">
                        <img src="./src/assets/gaming-pc-7.png" className="w-80 h-80 hover:scale-[1.05] transition-scale ease-in-out duration-100"/>
                    </div>
                    <h2 id="quickbuy-product__header" className="text-itemtitle md:text-4xl py-1 pt-4 font-black tracking-wide uppercase">SolarFlare</h2>
                    <h2 id="quickbuy-product__price" className="md:text-lg py-4 text-[222133] font-bold tracking-widest uppercase">$1,499.99</h2>
                    <p id="quickbuy-product__description" className="">
                    Illuminate your gaming world with the "SolarFlare." 
                    Powered by the AMD Ryzen 5 5600X and the impressive Sapphire Radeon RX 6700 XT, it excels in ray tracing performance. 
                    Encased in the stunning SolarFlare Edition case, it's a beacon of gaming excellence.
                    </p>
                    <button id="featured-button" className="flex flex-row text-center items-center transition-color ease-in-out duration-75 px-6 py-2 mt-6 w-auto h-10 text-white bg-black hover:bg-white hover:text-black rounded-xl">
                    <p id="featured-button__text" className="pr-2">Add To Cart</p>
                    <ion-icon id="add-icon" name="add-outline" className=""></ion-icon>
                    </button>
                </div>
            </div>
        </section>

        {/* Partners Section */}

        <section id="our-partners" className="flex justify-center items-center bg-[#FFFFFF] px-8 py-14  w-full h-auto">
            <motion.div id="partners-wrapper" className="flex flex-row justify-center items-center w-full h-auto gap-x-16" {...fadeAnimation}>
            <h2 id="partners-header" className="text-black text-lg font-thin mr-4">Our Partners</h2>
                <img src="https://cdn.midjourney.com/819f7252-e0c0-4022-b380-848867e30302/0_3.png" 
                    className="transition-all duration-110 ease-in-out md:w-24 md:h-24 lg:w-48 lg:h-48 p-4 hover:scale-110" />
                <img src="https://cdn.midjourney.com/52799847-1345-499a-86c3-8b69fb3ab71c/0_2_384_N.webp" 
                    className="transition-all duration-110 ease-in-out md:w-24 md:h-24 lg:w-48 lg:h-48 p-4 hover:scale-110" />
                <img src="https://cdn.midjourney.com/b184a8a4-6695-49fc-9387-c30ecd2c0bfa/0_0.png" 
                    className="transition-all duration-110 ease-in-out md:w-24 md:h-24 lg:w-48 lg:h-48 p-4 hover:scale-110" />
                <img src="https://cdn.midjourney.com/7bd90013-60b7-49a8-baa0-15b6663fa8d4/0_1.png" 
                    className="transition-all duration-110 ease-in-out md:w-24 md:h-24 lg:w-48 lg:h-48 p-4 hover:scale-110" />
                    
            </motion.div>
        </section>

        {/* About Us Section */}

        <section id="about-us" className="flex flex-col items-center justify-center w-full h-full px-8 py-24 bg-[#F4F8FD]">
            <div id="about-us-wrapper" className="flex flex-row justify-center items-center gap-x-8 w-3/4 h-auto py-4">
                <aside id="about-image" className="flex float-left relative w-full h-full bg-white md:mr-12">
                    <img src="https://10web-site.ai/60/wp-content/uploads/sites/63/2023/09/recycled-shoe-store-home-about-image_qJG7oR9X.webp" className="w-full h-full" />
                </aside>
                <div id="about-text" className="flex flex-col justify-center items-start content-center lg:gap-y-8 md:gap-y-4 -mt-4" {...slideAnimation('up')}>
                    <h2 id="about-bold" className="text-slate-800 text-4xl font-semibold">About Vanity</h2>
                    <p id="about-thin" className="text-zinc-600 lg:text-2xl md:text-lg font-medium lg:w-full md:w-full">
                    At Vanity, we are passionate about all things PC. 
                    Our goal is to provide the best selection of computer parts and accessories to our customers.
                    From graphics cards to CPUs and everything in between, we’ve got you covered.
                    </p>
                    <button id="about-button" className="text-slate-800 text-sm font-bold pb-2 border-slate-800 hover:border-blue-700 hover:text-blue-700 border-b-2 uppercase transition-all duration-75 ease-in-out">Read More</button>
                </div>
            </div>

        </section>

        {/* Why Choose Vanity */}

        <section id="why-choose" className="flex flex-col w-full h-screen px-8 py-24 bg-[#F4F8FD]">

            <div id="why-wrapper" className="flex flex-col justify-center items-center text-center w-full h-auto gap-y-8">
                <h2 id="why-bold" className="text-slate-800 text-4xl font-semibold">Why Choose Vanity</h2>
                <p id="why-thin" className="text-zinc-600 text-xl lg:w-1/2 md:w-4/5 font-medium leading-7">At Vanity, we believe in providing our customers with the best shopping experience possible. 
                From our selection of high-quality products to our fast and reliable shipping, we’re committed to making your PC building experience as smooth and enjoyable as possible.</p>
            </div>

            <div id="reasons" className="flex lg:flex-row md:flex-col w-full h-auto px-8 py-24 md:ml-28 items-center gap-y-8">
                
                <div id="reasons-wrapper-left" className="flex flex-col w-3/4 h-auto gap-8">
                    <div id="list-reason-one" className="flex flex-col gap-y-2 w-3/4 border-zinc-600 border-b-2 pb-6">
                        <p id="one-number" className="text-blue-600 font-semibold">01.</p>
                        <h2 id="one-bold" className="text-slate-800 text-2xl font-medium">Wide Selection of Parts</h2>
                        <p id="one-thin" className="text-zinc-600 text-lg lg:w-10/12 md:w-11/12">
                            We offer a wide selection of PC parts, 
                            including top-of-the-line graphics cards, CPUs, and CPU coolers, 
                            to help you build the ultimate gaming rig or workstation.
                        </p>
                    </div>
                    <div id="list-reason-two" className="flex flex-col gap-y-2 w-3/4 border-zinc-600 border-b-2 pb-6">
                        <p id="two-number" className="text-blue-600 font-semibold">02.</p>
                        <h2 id="two-bold" className="text-slate-800 text-2xl font-medium">Fast and Reliable Shipping</h2>
                        <p id="two-thin" className="text-zinc-600 text-lg lg:w-10/12 md:w-11/12">
                            We pride ourselves on our fast and reliable shipping, 
                            so you can get your new PC parts as quickly as possible.
                        </p>
                    </div>
                </div>
                <div id="reasons-wrapper-right" className="flex flex-col justify-center w-3/4 h-auto gap-8">
                    <div id="list-reason-three" className="flex flex-col gap-y-2 w-3/4 border-zinc-600 border-b-2 pb-6">
                        <p id="three-number" className="text-blue-600 font-semibold">03.</p>
                        <h2 id="three-bold" className="text-slate-800 text-2xl font-medium">Competitve Prices</h2>
                        <p id="three-thin" className="text-zinc-600 text-lg lg:w-10/12 md:w-11/12">
                            We offer competitive prices on all of our products, 
                            so you can get the best value for your money.
                        </p>
                    </div>
                    <div id="list-reason-four" className="flex flex-col gap-y-2 w-3/4 border-zinc-600 border-b-2 pb-6">
                        <p id="four-number" className="text-blue-600 font-semibold text-left">04.</p>
                        <h2 id="four-bold" className="text-slate-800 text-2xl font-medium text-left">Expert Customer Support</h2>
                        <p id="four-thin" className="text-zinc-600 text-lg lg:w-10/12 md:w-11/12 text-left">
                            Our expert customer support team is always available to help you with any questions 
                            or issues you may have, ensuring a smooth and stress-free shopping experience.
                        </p>
                    </div>
                </div>
            </div>

        </section>

        </main>
    </AnimatePresence>
  )
}

export default Home