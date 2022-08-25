import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const CategoryPage = () => {

    var [allProducts, setAllProducts] = useState([]);
    var [dataFound,setDataFound] = useState(false);
    // fixing .map is not a function with this line of code
    if(!Array.isArray(allProducts)){
        allProducts = [allProducts];
    }
    useEffect(() => {
        // const interval = setInterval(() => {
        //     
        //   }, 1000);
        //   return () => clearInterval(interval);
           getAllProducts();
    }, [dataFound]);
    
    function getAllProducts() {
        axios.get('http://localhost/E-commerce-webshop/server/Model/Products.php').then(function(response) {
           
          
            console.log("response Data",response.data);
            setAllProducts(response.data);
            
            setDataFound(true);

        }).then(()=>{
            allProducts.forEach(product=>{

                
            console.log("product",product);
               
        })
            
        });
        
    }
  return (
    <div className='CategoryPage'>
        
        <table>
         <tbody>
            {allProducts.map((product, key) => 
                <tr key={key}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.primary_image}</td>
                    <td>{product.price}</td>
                    <td>
                        test
                        
                    </td>
                </tr>
            )}

        </tbody>
        </table>
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-6">
        {allProducts.map((product, key) => 
            <a href="/product-detail" className="relative block border border-gray-100"  key={key}>
                <button type="button" name="wishlist" className="absolute p-2 text-white bg-black rounded-full right-4 top-4">
                </button>
                {/*Product Image*/}
                <img loading="lazy" alt="Goku" className="object-cover w-full h-72" src={product.primary_image} />
                <div className="p-6">
                    {/*Product Title*/}
                    <h2 className="font-semibold text-sm">
                    {product.name}
                        <br/>
                        <span className="font-normal">Super Hero Ichibansho Goku</span>
                    </h2>
                    {/*Product Price*/}
                    <p className="text-base font-bold">
                    {product.price}
                    </p>
                </div>
            </a>
            )}
        </div>
    </div>
  )
}

export default CategoryPage

