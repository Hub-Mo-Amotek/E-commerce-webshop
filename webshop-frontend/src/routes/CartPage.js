const CartPage = () => {
    return (
        <div className="cartPage">
            <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
                <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">

                        <ul role="list" className="border-t border-b border-gray divide-y divide-gray">
                                <li className="flex py-6 sm:py-10">
                                    {/*IMAGE*/}
                                    <div className="flex-shrink-0">
                                        <img
                                            src="#"
                                            alt="pokemon"
                                            className="object-center object-cover sm:w-20 sm:h-20"/>
                                    </div>

                                    <div className="flex-1 flex flex-col justify-between sm:ml-6">
                                        <div className="relative pr-5 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                            <div>
                                            {/*NAME*/}
                                            <div className="flex justify-between">
                                                <h3 className="text-sm">
                                                    <p> Pikachu </p>
                                                </h3>
                                            </div>
                                            {/*PRICE*/}
                                                <p className="text-sm font-medium text-gray-900"> €10.00 </p>
                                            </div>
                                            {/*QUANTITY*/}
                                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                                <select
                                                    className="max-w-full rounded-md border border-gray-200 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    <option value={6}>6</option>
                                                    <option value={7}>7</option>
                                                    <option value={8}>8</option>
                                                </select>
                                                {/*DELETE*/}
                                                <div className="absolute top-0 right-0">
                                                    <button type="button"
                                                            className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                                                        <span>Remove</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                        </ul>
                    </section>

                    {/* TOTAL-PRICE */}
                    <section
                        className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
                    >
                        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                            YOUR TOTAL
                        </h2>

                        <dl className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-gray-600">Subtotal</dt>
                                <dd className="text-sm font-medium text-gray-900">€30.00</dd>
                            </div>
                            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                <dt className="flex items-center text-sm text-gray-600">
                                    <span>Shipping</span>
                                    <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Learn more about how shipping is calculated</span>
                                    </a>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">$5.00</dd>
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