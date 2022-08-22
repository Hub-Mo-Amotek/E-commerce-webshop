const CartPage = () => {
    return (
        <div className="cartPage">
            <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                {/*TITLE*/}
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
                <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">

                        <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                            {/*products.map((product, productIdx) => (*/
                                <li /*key={product.id}*/ className="flex py-6 sm:py-6">
                                    <div className="flex-shrink-0">
                                        {/*IMAGE*/}
                                        <img
                                            src="./assets/images/pikachu terrarium.jpeg"/*product.imageSrc*/
                                            alt="Pikachu"/*product.imageAlt*/
                                            className="w-14 h-14 object-center object-cover sm:w-28 sm:h-28"
                                        />
                                    </div>

                                    <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                <div className="flex justify-between">
                                                    {/*NAME*/}
                                                    <p className="text-sm">
                                                        <a href="#"/*product.href*/
                                                           className="font-medium text-gray-700 hover:text-gray-800">
                                                            Pikachu terrarium{/*product.name*/}
                                                        </a>
                                                    </p>
                                                    {/*PRICE*/}
                                                    <p className="mt-1 text-sm font-medium text-gray-900">€10.00{/*product.price*/}</p>
                                                </div>

                                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                                <label /*htmlFor={`quantity-${productIdx}`}*/ className="sr-only">
                                                    {/*Quantity, {product.name}*/}
                                                </label>
                                                <select
                                                    /*id={`quantity-${productIdx}`}*/
                                                    /*name={`quantity-${productIdx}`}*/
                                                    className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    {/*QUANTITY*/}
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    <option value={6}>6</option>
                                                    <option value={7}>7</option>
                                                    <option value={8}>8</option>
                                                </select>

                                                <div className="absolute top-0 right-0">
                                                    <button type="button"
                                                            className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                                             fill="none" viewBox="0 0 24 24" stroke="red"
                                                             strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M6 18L18 6M6 6l12 12"/>
                                                        </svg>
                                                        {/*<span/*className="sr-only">Remove</span>*/}
                                                        {/*<XIcon className="h-5 w-5" aria-hidden="true"/>*/}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                           /* ))*/}
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
                                <dd className="text-sm font-medium text-gray-900">€30.00</dd>
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