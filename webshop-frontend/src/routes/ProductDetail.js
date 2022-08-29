import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    //TODO: remove addToCart-function + import the functionality.
    const {id} = useParams();
    var [productDetail, setproductDetail] = useState([]);
    var [productFound,setProductFound] = useState(false);
    var [image,setImage]=useState('');
    // fixing .map is not a function with this line of code
    if(!Array.isArray(productDetail)){
        productDetail = [productDetail];
    }
    useEffect(() => {
        if(typeof id !== 'undefined'){
            getProductDetail(id);
        }
    }, [productFound,image]);
    
    function getProductDetail() {
        axios.get(`http://localhost/E-commerce-webshop/server/Model/ProductsData.php/${id}`).then(function(response) {
            setproductDetail(response.data);
            setProductFound(true);
        }).catch((error)=> {
            // handle error
            console.log(error);
          }).then(()=>{
            productDetail.forEach(product=>{
                setImage("./assets/images/products/"+product.primary_image)
             })
         });    
    }
        console.log("IMAGE = ",image);

    function addToCart(id) {
        //TODO: remove this function.
    }

    return (
        <div>
            {/* start of product detail section */}
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                {productDetail.map((product, key) => 
                    <div className="lg:w-4/5 mx-auto flex flex-wrap" key={key}>
                        {/*IMAGE*/}
                       {/* {setTimeout(() => setPowers(product.primary_image), 3000)} */}
                        <img alt={product.name} loading="lazy" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={"./assets/images/products/"+product.primary_image}/>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.catName}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                            <p className="leading-relaxed">{product.description}</p>
                            <div className="flex">
                                {/*PRICE*/}
                                <span
                                    className="title-font font-medium text-2xl text-gray-900">€{product.price}</span>
                                {/*ADD TO CART-BUTTON*/}
                                <button type="submit" className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none
                                    hover:bg-red-600 rounded" onClick={() => addToCart(product.id)}>
                                    <span className="text-sm font-medium">
                                    Add to Cart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </section>
            {/* end of product detail section */}


            {/* start of related products section */}
            {/*            <section>
                            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                                <div className="relative max-w-3xl mx-auto text-center">
                                    <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>
                                    <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white">
                                        Related products
                                    </h2>
                                </div>

                                <div className="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
                                    <a
                                        href="/product-detail"
                                        className="relative block border border-gray-100"
                                    >
                                        WISHLIST-BUTTON
                                        <button
                                            type="button"
                                            name="wishlist"
                                            className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                            </svg>
                                        </button>

                                        IMAGE
                                        <img
                                            loading="lazy"
                                            alt="Build Your Own Drone"
                                            className="object-contain w-full h-56"
                                            src="./assets/images/gokupng.png"
                                        />

                                        <div className="p-6">
                                            PRICE
                                            <p className="text-sm font-medium text-gray-600">
                                                €58.00
                                            </p>
                                            NAME
                                            <h5 className="mt-1 text-lg font-bold">
                                                Son Goku
                                            </h5>
                                            ADD TO CART
                                            <button name="add" type="button" className="flex items-center justify-center w-full
                                            px-8 py-4 mt-4 bg-yellow-500 rounded-sm">
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
                                        </div>
                                    </a>
                                    <a
                                        href="/product-detail"
                                        className="relative block border border-gray-100"
                                    >
                                        WISHLIST-BUTTON
                                        <button
                                            type="button"
                                            name="wishlist"
                                            className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                            </svg>
                                        </button>

                                        IMAGE
                                        <img
                                            loading="lazy"
                                            alt="Build Your Own Drone"
                                            className="object-contain w-full h-56"
                                            src="./assets/images/gokupng.png"
                                        />

                                        <div className="p-6">
                                            <p className="text-sm font-medium text-gray-600">
                                                €58.00
                                            </p>

                                            <h5 className="mt-1 text-lg font-bold">
                                                Son Goku
                                            </h5>

                                            <button
                                                name="add"
                                                type="button"
                                                className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                                            >
                        <span className="text-sm font-medium">
                          Add to Cart
                        </span>

                                                <svg
                                                    className="w-5 h-5 ml-1.5"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </a>

                                    <a
                                        href="/product-detail"
                                        className="relative block border border-gray-100"
                                    >
                                        WISHLIST-BUTTON
                                        <button
                                            type="button"
                                            name="wishlist"
                                            className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                            </svg>
                                        </button>

                                        IMAGE
                                        <img
                                            loading="lazy"
                                            alt="Build Your Own Drone"
                                            className="object-contain w-full h-56"
                                            src="./assets/images/gokupng.png"
                                        />

                                        <div className="p-6">
                                            <p className="text-sm font-medium text-gray-600">
                                                €58.00
                                            </p>

                                            <h5 className="mt-1 text-lg font-bold">
                                                Son Goku
                                            </h5>

                                            <button
                                                name="add"
                                                type="button"
                                                className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                                            >
                        <span className="text-sm font-medium">
                          Add to Cart
                        </span>

                                                <svg
                                                    className="w-5 h-5 ml-1.5"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </a>

                                    <a
                                        href="/product-detail"
                                        className="relative block border border-gray-100"
                                    >
                                        WISHLIST-BUTTON
                                        <button
                                            type="button"
                                            name="wishlist"
                                            className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                            </svg>
                                        </button>

                                        IMAGE
                                        <img
                                            loading="lazy"
                                            alt="Build Your Own Drone"
                                            className="object-contain w-full h-56"
                                            src="./assets/images/gokupng.png"
                                        />

                                        <div className="p-6">
                                            <p className="text-sm font-medium text-gray-600">
                                                €58.00
                                            </p>

                                            <h5 className="mt-1 text-lg font-bold">
                                                Son Goku
                                            </h5>

                                            <button
                                                name="add"
                                                type="button"
                                                className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                                            >
                        <span className="text-sm font-medium">
                          Add to Cart
                        </span>

                                                <svg
                                                    className="w-5 h-5 ml-1.5"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </a>
                                </div>
                                A BUTTON ?
                                <div className="mt-4 text-center">
                                    <button type="button" className="text-xs text-gray-500 underline">a button</button>
                                </div>
                            </div>
                        </section>*/}
            {/* end of related products section */}
        </div>
    )
}

export default ProductDetail