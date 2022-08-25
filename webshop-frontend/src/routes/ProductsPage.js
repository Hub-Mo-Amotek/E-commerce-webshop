import React, {useState} from 'react'

const ProductsPage = () => {
    //TODO: remove addToCart-function + import the functionality.

    const productsCategoryList = [
        {
            id: 111,
            imageAlt: 'Pikachu',
            imageSrc: './assets/images/gokupng.png',
            name: 'pikachu',
            price: 1,
            quantity: 1,
            category: 'Pokemon',
        },
        {
            id: 211,
            imageAlt: 'Lala',
            imageSrc: './assets/images/gokupng.png',
            name: 'lala',
            price: 2,
            quantity: 1,
            category: 'Pokemon',

        },
        {
            id: 311,
            imageAlt: 'Po',
            imageSrc: './assets/images/gokupng.png',
            name: 'Po',
            price: 3,
            quantity: 1,
            category: 'Pokemon',

        },
        {
            id: 411,
            imageAlt: 'Dipsy',
            imageSrc: './assets/images/gokupng.png',
            name: 'Dipsy',
            price: 4,
            quantity: 1,
            category: 'Pokemon',

        }
    ];

    let [products, setProducts] = useState(productsCategoryList);

    function addToCart(id) {
        //TODO: remove this function.
    }

    return (

        // GRID CONTAINER
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-6">
            {products.map(product => (
                <li key={product.id} style={{listStyleType: 'none'}}>
                    {/*Product Card*/}
                    <a href="/product-detail" className="relative block border border-gray-100">
                        {/*WISH-LIST*/}
                        {/*<button type="button" name="wishlist"
                        className="absolute p-2 text-white bg-black rounded-full right-4 top-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </button>*/}
                        {/*END WISH-LIST*/}
                        {/*Product Image*/}
                        <img loading="lazy" alt="Goku" alt={product.imageAlt}
                             className="object-cover w-full h-72" src={product.imageSrc}/>
                        {/*NAME + PRICE + ADD TO CART*/}
                        <div className="p-6">
                            {/*Product Title*/}
                            <h2 className="font-semibold text-sm">
                                {product.category}<br/>
                                <span className="font-normal">{product.name}</span>
                            </h2>
                            {/*Product Rating*/}
                            <div className="flex my-3">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-sm ml-3">4 Reviews</span>
                        </span>
                            </div>
                            {/*Product Price*/}
                            <p className="text-base font-bold">
                                €{product.price}
                            </p>
                        </div>
                    </a>
                    {/*                    Product Card
                    <a href="/product-detail" className="relative block border border-gray-100">
                        <button type="button" name="wishlist"
                                className="absolute p-2 text-white bg-black rounded-full right-4 top-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </button>

                        <img loading="lazy" alt="Monkey D. Luffy" className="object-cover w-full h-72"
                             src="./assets/images/products/luffy.jpg"/>

                        <div className="p-6">

                            <h2 className="font-semibold text-sm">
                                One Piece:
                                <br/>
                                <span className="font-normal">Monkey D. Luffy</span>
                            </h2>

                            Product Rating
                            <div className="flex my-3">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-sm ml-3">4 Reviews</span>
                        </span>
                            </div>

                            <p className="text-base font-bold mt-2 align-text-bottom">
                                €26.99
                            </p>

                        </div>
                    </a>

                    Product Card
                    <a href="/product-detail" className="relative block border border-gray-100">
                        <button type="button" name="wishlist"
                                className="absolute p-2 text-white bg-black rounded-full right-4 top-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </button>

                        <img loading="lazy" alt="Boba Fet" className="object-cover w-full h-72"
                             src="./assets/images/products/boba-fet.jpg"/>

                        <div className="p-6">

                            <h2 className="font-semibold text-sm">
                                Star Wars:
                                <br/>
                                <span className="font-normal">Boba Fet (Return of the Jedi)</span>
                            </h2>

                            Product Rating
                            <div className="flex my-3">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-sm ml-3">4 Reviews</span>
                        </span>
                            </div>

                            <p className="text-base font-bold mt-2">
                                €74.99
                            </p>

                        </div>
                    </a>

                    Product Card
                    <a href="/product-detail" className="relative block border border-gray-100">
                        <button type="button" name="wishlist"
                                className="absolute p-2 text-white bg-black rounded-full right-4 top-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </button>

                        <img loading="lazy" alt="Bulbasaur" className="object-cover w-full h-72"
                             src="./assets/images/products/bulba.jpg"/>

                        <div className="p-6">

                            <h2 className="font-semibold text-sm">
                                Pokemon:
                                <br/>
                                <span className="font-normal">Bulbasaur Figure</span>
                            </h2>

                            Product Rating
                            <div className="flex my-3">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-sm ml-3">4 Reviews</span>
                        </span>
                            </div>

                            <p className="text-base font-bold mt-2">
                                €54.99
                            </p>

                        </div>
                    </a>

                    Product Card
                    <a href="/product-detail" className="relative block border border-gray-100">
                        <button type="button" name="wishlist"
                                className="absolute p-2 text-white bg-black rounded-full right-4 top-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </button>

                        <img loading="lazy" alt="Mobile Suit Gundam" className="object-cover w-full h-72"
                             src="./assets/images/products/gundam.jpg"/>

                        <div className="p-6">

                            <h2 className="font-semibold text-sm">
                                Mobile Suit Gundam:
                                <br/>
                                <span className="font-normal">XXXG-00W0 Wing Gundam Zero</span>
                            </h2>

                            Product Rating
                            <div className="flex my-3">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-sm ml-3">4 Reviews</span>
                        </span>
                            </div>

                            <p className="text-base font-bold mt-2">
                                €159.99
                            </p>

                        </div>
                    </a>

                    Product Card
                    <a href="/product-detail" className="relative block border border-gray-100">
                        <button type="button" name="wishlist"
                                className="absolute p-2 text-white bg-black rounded-full right-4 top-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </button>

                        <img loading="lazy" alt="Saitama" className="object-cover w-full h-72"
                             src="./assets/images/products/saitama.jpg"/>

                        <div className="p-6">

                            <h2 className="font-semibold text-sm">
                                One-Punch Man:
                                <br/>
                                <span className="font-normal">Saitama</span>
                            </h2>

                            Product Rating
                            <div className="flex my-3">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-sm ml-3">4 Reviews</span>
                        </span>
                            </div>

                            <p className="text-base font-bold mt-2">
                                €44.99
                            </p>

                        </div>
                    </a>

                    Product Card
                    <a href="/product-detail" className="relative block border border-gray-100">
                        <button type="button" name="wishlist"
                                className="absolute p-2 text-white bg-black rounded-full right-4 top-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </button>

                        <img loading="lazy" alt="Giyu Tomioka" className="object-cover w-full h-72"
                             src="./assets/images/products/demon-slayer.jpg"/>

                        <div className="p-6">

                            <h2 className="font-semibold text-sm">
                                Demon Slayer:
                                <br/>
                                <span className="font-normal">Giyu Tomioka</span>
                            </h2>

                            Product Rating
                            <div className="flex my-3">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-sm ml-3">4 Reviews</span>
                        </span>
                            </div>

                            <p className="text-base font-bold mt-2">
                                €314.99
                            </p>

                        </div>
                    </a>

                    Product Card
                    <a href="/product-detail" className="relative block border border-gray-100">
                        <button type="button" name="wishlist"
                                className="absolute p-2 text-white bg-black rounded-full right-4 top-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </button>

                        <img loading="lazy" alt="Toshiro Hitsugaya" className="object-cover w-full h-72"
                             src="./assets/images/products/bleach.jpg"/>

                        <div className="p-6">

                            <h2 className="font-semibold text-sm">
                                Bleach:
                                <br/>
                                <span className="font-normal">Toshiro Hitsugaya</span>
                            </h2>

                            Product Rating
                            <div className="flex my-3">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-sm ml-3">4 Reviews</span>
                        </span>
                            </div>

                            <p className="text-base font-bold mt-2">
                                €26.99
                            </p>

                        </div>
                    </a>*/}
                    {/*BUTTON ADD TO CART*/}
                    <button type="submit" className="add-to-cart flex items-center justify-center
                                            w-full px-8 py-4 mt-4 rounded-sm bg-yellow-500"> onClick={() => addToCart(product.id)}
                        <span className="text-sm font-medium">
                                    Add to Cart
                                    </span>
                        <svg
                            className="w-5 h-5 ml-1.5"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                        </svg>
                    </button>
                    {/*END BUTTON ADD TO CART*/}
                </li>
            ))}
        </div>
    )
}

export default ProductsPage