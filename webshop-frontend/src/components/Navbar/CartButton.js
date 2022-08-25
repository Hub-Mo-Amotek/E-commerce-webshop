import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

const CartButton = () => {
    return (
        <Link to="/cart">
            <button type="button"
                    className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
                <ShoppingCartIcon className="w-5 h-5 mr-1"/>
                Cart
            </button>
        </Link>
    )
}

export default CartButton