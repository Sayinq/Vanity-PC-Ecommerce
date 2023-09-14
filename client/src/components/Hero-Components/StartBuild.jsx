import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StartBuild = () => {
    const [clicked, setClicked] = useState(false);

    const scrollToBuild = () => {
        const startBuildSection = document.getElementById('quickbuy-footer-wrapper');
        if (startBuildSection) {
            const yOffset = -120;
            const y = startBuildSection.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setClicked(true);
        }
    };

    return (
        <motion.button
            id="build-button"
            className={`transition-color ease-in-out duration-75 px-6 py-2 w-36 text-white hover:text-black bg-black hover:bg-white rounded-xl`}
            onClick={scrollToBuild}
        >
            Start Build
        </motion.button>
    )
}

export default StartBuild;