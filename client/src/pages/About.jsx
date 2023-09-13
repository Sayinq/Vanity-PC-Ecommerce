import React from 'react'

const About = () => {
  return (
    <main id="app" className="flex flex-col">
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
  )
}

export default About