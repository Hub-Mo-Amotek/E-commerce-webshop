import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryPage = () => {
    const {id} = useParams();
    var [allProducts, setAllProducts] = useState([]);
    var [dataFound,setDataFound] = useState(false);
    // fixing .map is not a function with this line of code
    if(!Array.isArray(allProducts)){
        allProducts = [allProducts];
    }
    console.log("Id = ",id);
    useEffect(() => {
        //    if(id){
        //         getProductsByCategoryId(id);
        //    } else{
             getAllProducts();
        //    }
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
    // function getProductsByCategoryId(categoryId) {
    //     axios.get(`http://localhost/E-commerce-webshop/server/Model/Products.php/${categoryId}`).then(function(response) {
    //         console.log("response Data",response.data);
    //         // setAllProducts(response.data);
    //         // setDataFound(true);
    //     }).then(()=>{
    //     //     allProducts.forEach(product=>{
    //         //  console.log("product",product);
    //     // })
    // });  
    // }
  return (
    <div className='CategoryPage'>
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-6">
        {allProducts.map((product) => 
        <Link to={`/product-detail/${product.id}/`}  key={product.id}>
            <div className="relative block border border-gray-100"  key={product.id}>
            {/* <a href="/product-detail/" > */}
                {/* <button type="button" name="wishlist" className="absolute p-2 text-white bg-black rounded-full right-4 top-4">
                </button> */}
                {/*Product Image*/}
                <div className='object-cover w-full h-72'>
                <img loading="lazy" alt="Goku" className='w-full h-full pl-6' src={"./assets/images/products/"+product.primary_image} /></div>
                <div className="p-6">
                    {/*Product Title*/}
                    <h2 className="font-semibold text-sm">
                    {product.name}
                        <br/>
                        <span className="font-normal">Super Hero Ichibansho Goku</span>
                    </h2>
                    {/*Product Price*/}
                    <p className="text-base font-bold">
                    &euro; {product.price}
                    </p>
                </div>
            {/* </a> */}
            </div>
            </Link>
            )}
        </div>
    </div>
  )
}

export default CategoryPage

