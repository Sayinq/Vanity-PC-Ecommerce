import { React, useState } from 'react'
import { motion } from 'framer-motion';
import { slideAnimation, fadeAnimation } from '../config/motion';
import CartQuantity from '../components/CartQuantity';

function CartButton() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
};

return (
    <div className="relative">
        <motion.div 
            id="cart-button"
            className="flex items-center p-4 text-lg hover:border-b-2 cursor-pointer"
            initial = "hidden"
            {...fadeAnimation}
            onClick={toggleCart}
        >
            <ion-icon name="cart-outline"></ion-icon>
        </motion.div>

        {isCartOpen && (
            <motion.div 
                className="absolute top-20 -right-16 mt-2 min-w-max w-auto min-h-max h-auto p-4 bg-white shadow-lg"
                style={{ minWidth: '25vw' }}
                intial = "hidden"
                {...slideAnimation('right')}
            >
                {/* Cart Toggled Header */}

                <div className="flex flex-row justify-between items-center text-2xl font-bold text-black pb-4 border-b-2">
                    <h2>Cart</h2>
                    <ion-icon id="close-cart" className="cursor-pointer" name="close-outline" onClick={toggleCart}></ion-icon>
                </div>

                {/* Free Shipping Qualify Bar */}
                {/* Make Into Component so bar adjusts based on amount < $2,500*/}
                {/* If amount > $2,500, bar turns green moving gradient?*/}
                <div className="flex flex-col justify-center items-center py-4">
                    <h2 className="lg:text-lg sm:text-xs font-semibold text-black pb-4">Free Shipping over $2,500!</h2>
                    <div className="bg-transparent border-black border-2 w-3/4 h-4 rounded-full">
                        <div className="bg-black h-full w-3/4 rounded-r-full"></div>
                    </div>
                </div>

                {/* Cart added items */}
                {/* Container needs to be main inside for scrollability for cart if multiple added */}
                <div className="w-full h-auto py-4">
                    <div id="cart-image" className="flex lg:flex-nowrap sm:flex-wrap lg:justify-between sm:justify-center items-center w-full border-b-2">
                        <img src="./src/assets/gaming-pc-2.png" className="h-12 w-12" />
                        <div className="flex lg:flex-row sm:flex-col items-center w-full h-auto p-4">

                {/* Name based on item added */}

                            <h2 id="cart-name" className="lg:text-lg sm:text-sm text-black font-semibold pr-4">EliteForce</h2>
                            <CartQuantity />
                            <ion-icon name="trash-outline"></ion-icon>
                        </div>

                {/* Amount needs to be changed based on quantity and item price */}

                        <h2 id="cart-price" className="lg:text-lg sm:text-sm text-black font-bold">$3,999.99</h2>
                        </div>
                </div>

                {/* Subtotal calculations */}
                <div className="flex lg:flex-row sm:flex-col lg:justify-between lg:gap-y-0 sm:gap-y-2 items-center w-full h-auto bottom-0 left-0 mt-56 py-4">
                    <h2 className="text-black font-semibold">Subtotal + Tax</h2>

                {/* Subtotal based on Item price + tax */}

                    <h2 id="subtotal_price" className="text-black font-semibold">$4,000</h2>
                </div>

                {/* Checkout Button */}
                <div className="flex justify-center w-full h-auto">
                    <button className="bg-black text-white text-sm px-4 py-2 w-full h-auto rounded-full">
                        Continue to Checkout
                    </button>
                </div>

            </motion.div>
        )}
    </div>
    );
}

export default CartButton