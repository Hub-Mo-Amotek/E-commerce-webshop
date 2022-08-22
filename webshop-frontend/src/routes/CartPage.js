import React,{useState} from "react";
import newProducts from "../components/homepage/NewProducts";
const CartPage = () => {


    //at the same time the subtotal in the order summary will be equal to the price of that product.
    //the shipping cost wil be displayed underneath.
    //if the seller is the same person the shipping cost will not add-up when adding more of his products.
    //The order-total is equal to the subtitle + shipping (costs).

    //TODO-1 When the user clicks on "add to cart" the item with that specific product.id will be added to the cart(1 piece only).
    //id + imageSrc + imageAlt + name + price + shipping cost + quantity (=1)
    const productsInCartList = [
        {
            id: 111,
            imageAlt: 'Pikachu',
            imageSrc:'#',
            name: 'pikachu',
            price: 111,
            shippingCost: 111,
            quantity: 1,
        },
        {
            id: 211,
            imageAlt: 'Lala',
            imageSrc:'#',
            name: 'lala',
            price: 211,
            shippingCost: 111,
            quantity: 1,
        }
    ];

    //TODO: DONE--In order to modify the list, we need to use the useState Hook:
    const [products, setProducts] = useState(productsInCartList);
    console.log ("products: " ,products)

    //TODO: DONE--When the user click on the remove-button, the item with that specific product.id will be removed from the cart.
    //the id will be filtered out of the list and a new list will be displayed.
    function handleRemove(id) { //line 78 = delete-button
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);//state not updating?  LOOK HERE!
    }
    console.log("newProducts: " ,newProducts)
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
                                                <label /*htmlFor={`quantity-${productIdx}`}*/ className="sr-only">
                                                    {/*quantity, {product.name}*/}
                                                </label>
                                                <select
                                                    /*id={`quantity-${productIdx}`}*/
                                                    /*name={`quantity-${productIdx}`}*/
                                                    className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                                                {/*REMOVE*/}
                                                <div className="absolute top-0 right-0">
                                                    <button type="button"  onClick={() => handleRemove(products.id)}
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