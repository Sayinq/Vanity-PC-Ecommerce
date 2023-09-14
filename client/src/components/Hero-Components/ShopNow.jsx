import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ShopNow = () => {
    const [clicked, setClicked] = useState(false);

    const scrollToQuickBuy = () => {
        const quickBuySection = document.getElementById('quickbuy-header-wrapper');
        if (quickBuySection) {
            const yOffset = -120; // Adjust this value to set the desired offset
            const y = quickBuySection.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setClicked(true);
        }
    };

    return (
        <motion.button
            id="hero-button"
            className={`transition-color ease-in-out duration-75 px-6 py-2 w-36 text-white hover:text-black bg-black hover:bg-white rounded-xl`}
            onClick={scrollToQuickBuy}
        >
            Shop Now
        </motion.button>
    );
};

export default ShopNow;