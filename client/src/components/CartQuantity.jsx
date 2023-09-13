import { React, useState } from 'react'

function CartQuantity() {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="flex flex-row text-black text-lg pt-2 w-max h-auto items-center">
            <button
                onClick={decreaseQuantity}
                className="px-2 py-1 border text-black rounded-l-full"
                disabled={quantity === 1}
            >
                -
            </button>
            <span className="px-4 py-1 border">{quantity}</span>
            <button onClick={increaseQuantity} className="px-2 py-1 border rounded-r-full">
                +
            </button>
        </div>
    );
}

export default CartQuantity