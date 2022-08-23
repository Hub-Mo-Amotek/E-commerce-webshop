import React, {useEffect, useState} from "react";
import newProducts from "../components/homepage/NewProducts";

const CartPage = () => {
    //TODO: shipping cost.
    //TODO: order-total.
    //TODO: proceed to checkout

    //PRODUCTS-IN CART
    const productsInCartList = [
        {
            id: 111,
            imageAlt: 'Pikachu',
            imageSrc: './assets/images/gokupng.png',
            name: 'pikachu',
            price: 111,
            shippingCost: 111,
            quantity: 1,
        },
        {
            id: 211,
            imageAlt: 'Lala',
            imageSrc: './assets/images/gokupng.png',
            name: 'lala',
            price: 211,
            shippingCost: 111,
            quantity: 1,
        }
    ];
    //QUANTITY-OPTIONS:
    const options = [
        {label: 1, value: 1},
        {label: 2, value: 2},
        {label: 3, value: 3},
        {label: 4, value: 4},
        {label: 5, value: 5},
        {label: 6, value: 6},
        {label: 7, value: 7},
        {label: 8, value: 8},
    ]

    //In order to remove items from the list, we need to use the useState Hook:
    let [products, setProducts] = useState(productsInCartList);
    //In order to access the selected and to control it we need to use the useState Hook:
    let [selected, setSelected] = useState(1);

    //When the user clicks on the remove-button, the item with that specific product.id will be removed from the cart.
    //the id will be filtered out of the list and a new list will be displayed.
    function handleRemove(id) {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts([...newProducts]); //spread-operator om react duidelijk te maken dat state aangepast is met nieuwe array
    }

    //the price  will be updated in the order-summary.
    let [subtotal, setSubtotal] = useState(0)

    function handleSubtotal() {
        if (products.length === 0) {
            setSubtotal = 0;
        } else {
            let tempSubtotal = 0;
            products.forEach((product) => {
                tempSubtotal += product.price * product.quantity;
            })
            setSubtotal(tempSubtotal)
        }
    }

    //When the user changes the quantity, the price and shipping-cost will be updated in the order-summary.
    const handleChange = event => {
        setSelected(event.target.value);
        const newProducts = [];
        products.forEach(product => {
            if (product.id == event.target.name) {
                product.quantity = event.target.value
                newProducts.push(product);
            } else {
                newProducts.push(product);
            }
        })
        setProducts([...newProducts])
        handleSubtotal();
    };
    
    return (
        <div className="cartPage">
            <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                {/*TITLE*/}
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
                <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                            {products.map((product, key) => (
                                <li key={key} className="flex py-6 sm:py-6">
                                    {/*IMAGE*/}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="w-14 h-14 object-center object-cover sm:w-28 sm:h-28"
                                        />
                                    </div>
                                    {/*NAME + PRICE + QUANTITY + REMOVE*/}
                                    <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                            {/*NAME & PRICE*/}
                                            <div className="flex justify-between">
                                                {/*NAME*/}
                                                <p className="text-sm">
                                                    <a href="#"/*product.href*/
                                                       className="font-medium text-gray-700 hover:text-gray-800">
                                                        {product.name}
                                                    </a>
                                                </p>
                                                {/*PRICE*/}
                                                <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                            </div>
                                            {/*QUANTITY & REMOVE*/}
                                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                                {/*QUANTITY*/}
                                                <label className="sr-only"></label>
                                                <select
                                                    className="max-w-full rounded-md border border-gray-300 py-1.5
                                                    text-base leading-5 font-medium text-gray-700 text-left shadow-sm
                                                    focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500
                                                    sm:text-sm" value={product.quantity} onChange={handleChange}
                                                    name={product.id}>

                                                    {options.map((option) => (
                                                        <option value={option.value}>{option.label}</option>
                                                    ))}

                                                </select>
                                                {/*REMOVE*/}
                                                <div className="absolute top-0 right-0">
                                                    <button type="button" onClick={() => handleRemove(product.id)}
                                                            className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                                             fill="none" viewBox="0 0 24 24" stroke="red"
                                                             strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M6 18L18 6M6 6l12 12"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
                    >
                        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                            Order summary
                        </h2>

                        <dl className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-gray-600">Subtotal</dt>
                                <dd className="text-sm font-medium text-gray-900">{subtotal}</dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                <dt className="flex items-center text-sm text-gray-600">
                                    <span>Shipping</span>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">€5.00</dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                <dt className="text-base font-medium text-gray-900">Order total</dt>
                                <dd className="text-base font-medium text-gray-900">€35.00</dd>
                            </div>
                        </dl>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                            >
                                Checkout
                            </button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default CartPage