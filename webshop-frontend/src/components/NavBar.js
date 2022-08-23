import React from 'react'
import { useEffect, useRef, useState } from 'react'


export default () => {

        const [state, setState] = useState(false)
        const navRef = useRef()

        // Replace javascript:void(0) path with your path
        const navigation = [
                { title: "All Products", path: "/all-products" },
                //{ title: "Categories", path: "javascript:void(0)" },
                //{ title: "Shopping Cart", path: "javascript:void(0)" },
                //{ title: "Sell", path: "javascript:void(0)" }
        ]

        useEffect(() => {

                const body = document.body

                // Disable scrolling
                const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"]
                if (state) body.classList.add(...customBodyStyle)
                // Enable scrolling
                else body.classList.remove(...customBodyStyle)

                // Sticky strick
                const customStyle = ["sticky-nav", "fixed", "border-b"]
                window.onscroll = () => {
                        if (window.scrollY > 80) navRef.current.classList.add(...customStyle)
                        else navRef.current.classList.remove(...customStyle)
                }
        }, [state])


        return (
            <nav ref={navRef} className="bg-white w-full top-0 z-20">
                    <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
                            <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
                                    <a href="javascript:void(0)">
                                            <img
                                                src="../assets/images/images.png"
                                                width={120}
                                                height={50}
                                                alt="Logo Icon"
                                            />
                                    </a>
                                    <div className="lg:hidden">
                                            <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                                                    onClick={() => setState(!state)}
                                            >
                                                    {
                                                            state ? (
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                                </svg>
                                                            ) : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                                                </svg>
                                                            )
                                                    }
                                            </button>
                                    </div>
                            </div>
                            <div className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${ state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'}`}>
                                    <div>
                                            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                                                    <div className="relative inline-block text-left">
                                                            <div>
                                                                    <button type="button"
                                                                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                                                                            id="menu-button" aria-expanded="false"
                                                                            aria-haspopup="true">
                                                                            Categories
                                                                            <svg className="-mr-1 ml-2 h-5 w-5"
                                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                                 viewBox="0 0 20 20" fill="currentColor"
                                                                                 aria-hidden="true">
                                                                                    <path fill-rule="evenodd"
                                                                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                                          clip-rule="evenodd"/>
                                                                            </svg>
                                                                    </button>
                                                            </div>


                                                            <div
                                                                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                                role="menu" aria-orientation="vertical"
                                                                aria-labelledby="menu-button" tabIndex="-1">
                                                                    <div className="py-1" role="none">

                                                                            <a href="/category"
                                                                               className="text-gray-700 block px-4 py-2 text-sm"
                                                                               role="menuitem" tabIndex="-1"
                                                                               id="menu-item-0">XBox</a>
                                                                            <a href="/category"
                                                                               className="text-gray-700 block px-4 py-2 text-sm"
                                                                               role="menuitem" tabIndex="-1"
                                                                               id="menu-item-1">PlayStation</a>
                                                                            <a href="/category"
                                                                               className="text-gray-700 block px-4 py-2 text-sm"
                                                                               role="menuitem" tabIndex="-1"
                                                                               id="menu-item-2">Games</a>
                                                                            <a href="/category"
                                                                               className="text-gray-700 block px-4 py-2 text-sm"
                                                                               role="menuitem" tabIndex="-1"
                                                                               id="menu-item-2">Gameing Accessories</a>
                                                                            <a href="/category"
                                                                               className="text-gray-700 block px-4 py-2 text-sm"
                                                                               role="menuitem" tabIndex="-1"
                                                                               id="menu-item-2">Other</a>
                                                                    </div>
                                                            </div>
                                                    </div>
                                                    <li className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                                                            <a href="/" className="text-gray-600 hover:text-indigo-600">
                                                                    Sell
                                                            </a>
                                                    </li>
                                                    <li className="mt-4 lg:mt-0">
                                                            <a href="/Login" className="py-3 px-4 text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0">
                                                                    Login
                                                            </a>
                                                    </li>
                                                    <li className="mt-8 lg:mt-0">
                                                            <a href="/SignUp" className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline">
                                                                    Sign Up
                                                            </a>
                                                    </li>
                                                    <li className="mt-8 lg:mt-0">
                                                            <a href="/cart" className="py-3 px-4 text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0">
                                                                <img src="../assets/images/cart.png" width="50"
                                                                     height="50"/>
                                                            </a>
                                                    </li>
                                            </ul>
                                    </div>
                                    <div className="flex-1">
                                            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                                                    {
                                                            navigation.map((item, idx) => {
                                                                    return (
                                                                        <li key={idx} className="text-gray-600 hover:text-indigo-600">
                                                                                <a href={item.path}>
                                                                                        { item.title }
                                                                                </a>
                                                                        </li>
                                                                    )
                                                            })
                                                    }
                                            </ul>
                                    </div>
                            </div>
                    </div>
            </nav>
        )
}
