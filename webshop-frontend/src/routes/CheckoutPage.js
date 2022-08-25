import React from 'react'

const CheckoutPage = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                    <h1 className="sr-only">Checkout</h1>
                    <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                        <div>

                            {/*--CONTACT DETAILS--*/}
                            <div className="mt-10 border-t border-gray-200 pt-10">
                                <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>
                                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">

                                    {/*--NAME--*/}
                                    <div>
                                        <label for="first-name" className="block text-sm font-medium text-gray-700">First
                                            name</label>
                                        <div className="mt-1">
                                            <input type="text" id="first-name" name="first-name"
                                                   autocomplete="given-name"
                                                   className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>

                                    {/*--LASTNAME--*/}
                                    <div>
                                        <label for="last-name" className="block text-sm font-medium text-gray-700">Last
                                            name</label>
                                        <div className="mt-1">
                                            <input type="text" id="last-name" name="last-name"
                                                   autocomplete="family-name"
                                                   className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>

                                    {/*--COMPANY--*/}
                                    {/*<div className="sm:col-span-2">
                                        <label for="company"
                                               className="block text-sm font-medium text-gray-700">Company</label>
                                        <div className="mt-1">
                                            <input type="text" name="company" id="company"
                                                   className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>*/}

                                    {/*--ADDRESS--*/}
                                    <div className="sm:col-span-2">
                                        <label for="address"
                                               className="block text-sm font-medium text-gray-700">Address</label>
                                        <div className="mt-1">
                                            <input type="text" name="address" id="address" autocomplete="street-address"
                                                   className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>

                                    {/*--EXTRA INFO ADDRESS--*/}
                                    <div className="sm:col-span-2">
                                        <label for="apartment" className="block text-sm font-medium text-gray-700">Apartment,
                                            suite, etc.</label>
                                        <div className="mt-1">
                                            <input type="text" name="apartment" id="apartment"
                                                   className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500
                                               focus:border-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>

                                    {/*--CITY--*/}
                                    <div>
                                        <label for="city"
                                               className="block text-sm font-medium text-gray-700">City</label>
                                        <div className="mt-1">
                                            <input type="text" name="city" id="city" autocomplete="address-level2"
                                                   className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>

                                    {/*--COUNTRY--*/}
                                    <div>
                                        <label for="country"
                                               className="block text-sm font-medium text-gray-700">Country</label>
                                        <div className="mt-1">
                                            <div type="text" name="country" id="country"
                                                 className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500
                                               focus:border-indigo-500 sm:text-sm">Belgium
                                            </div>
                                        </div>
                                    </div>

                                    {/*--PROVINCE--*/}
                                    <div>
                                        <label for="region" className="block text-sm font-medium text-gray-700">State /
                                            Province</label>
                                        <div className="mt-1">
                                            <input type="text" name="region" id="region" autocomplete="address-level1"
                                                   className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>

                                    {/*--POSTAL CODE--*/}
                                    <div>
                                        <label for="postal-code" className="block text-sm font-medium text-gray-700">Postal
                                            code</label>
                                        <div className="mt-1">
                                            <input type="text" name="postal-code" id="postal-code"
                                                   autocomplete="postal-code"
                                                   className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>

                                    {/*--PHONE--*/}
                                    <div className="sm:col-span-2">
                                        <label for="phone"
                                               className="block text-sm font-medium text-gray-700">Phone</label>
                                        <div className="mt-1">
                                            <input type="text" name="phone" id="phone" autocomplete="tel"
                                                   className="py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/*SAVE CONTACT DATA? only for user with account*/}
                            <div className="mt-6 flex space-x-2">
                                <div className="flex items-center h-5">
                                    <input id="saveData" name="saveData" type="checkbox"
                                           className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                </div>
                                <label htmlFor="same-as-shipping" className="text-sm font-medium text-gray-900">Save my
                                    contact details
                                    for the future</label>
                            </div>

                            {/*BILLING = SHIPPING?*/}
                            <div className="mt-6 flex space-x-2">
                                <div className="flex items-center h-5">
                                    <input id="same-as-shipping" name="same-as-shipping" type="checkbox" required
                                           className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                                </div>
                                <label htmlFor="same-as-shipping" className="text-sm font-medium text-gray-900">Billing
                                    address is the same as shipping address</label>
                            </div>

                            {/*--PAYMENT--*/}
                            <div className="mt-10 border-t border-gray-200 pt-6 pb-6">
                                <h2 className="text-lg font-medium text-gray-900">Payment</h2>
                                {/*--PAYMENT TYPE--*/}
                                <fieldset className="mt-4">
                                    <legend className="sr-only">Payment type</legend>
                                    <div className="space-y-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-12">

                                        {/*--CREDITCARD--*/}
                                        <div className="flex items-center">
                                            <input id="credit-card" name="payment-type" type="radio" checked
                                                   className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                                            <label for="credit-card"
                                                   className="ml-3 block text-sm font-medium text-gray-700"> Credit
                                                card </label>
                                        </div>

                                        {/*--PAYPAL--*/}
                                        <div className="flex items-center">
                                            <input id="paypal" name="payment-type" type="radio"
                                                   className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                                            <label for="paypal"
                                                   className="ml-3 block text-sm font-medium text-gray-700"> PayPal </label>
                                        </div>

                                        {/*--ETRANSFER--*/}
                                        <div className="flex items-center">
                                            <input id="etransfer" name="payment-type" type="radio"
                                                   className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                                            <label for="etransfer"
                                                   className="ml-3 block text-sm font-medium text-gray-700"> eTransfer </label>
                                        </div>

                                    </div>
                                </fieldset>
                                {/*--VISA NUMBER--*/}
                                {/*<div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                    <div className="col-span-4">
                      <label for="card-number" className="block text-sm font-medium text-gray-700">Card number</label>
                      <div className="mt-1">
                        <input type="text" id="card-number" name="card-number" autocomplete="cc-number" className="block
                        w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      </div>
                    </div>
                    </div>*/}
                                {/*--VISA NAME--*/}
                                {/*<div className="col-span-4">
                      <label for="name-on-card" className="block text-sm font-medium text-gray-700">Name on card</label>
                      <div className="mt-1">
                        <input type="text" id="name-on-card" name="name-on-card" autocomplete="cc-name" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      </div>
                    </div>*/}
                                {/*--VISA EXP DATE--*/}
                                {/*<div className="col-span-3">
                      <label for="expiration-date" className="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
                      <div className="mt-1">
                        <input type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      </div>
                    </div>*/}
                                {/*--VISA CVC NR--*/}
                                {/*<div>
                      <label for="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                      <div className="mt-1">
                        <input type="text" name="cvc" id="cvc" autocomplete="csc" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      </div>
                    </div>*/}
                            </div>
                        </div>
                    </form>

                    {/*--AGREE TO TERMS--*/}
                    {/*     <div className="mt-6 flex space-x-2">
                        <div className="flex items-center h-5">
                            <input id="same-as-shipping" name="same-as-shipping" type="checkbox" required
                                   className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                        </div>
                        <label htmlFor="terms" className="text-sm font-medium text-gray-900">I agree to the
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </label>
                    </div>*/}

                    {/*PAY NOW BUTTON*/}
                    <div className="border-t border-gray-200 py-10 px-4 sm:px-6">
                        <button type="submit"
                                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3
                                px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2
                                focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Proceed to payment
                        </button>
                    </div>
                </div>

                {/*--COPYRIGHTS--*/}
                <div className="border-t border-gray-100 py-10 text-center">
                    <p className="text-sm text-gray-500">&copy; 2022 The Crusty Crab. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage