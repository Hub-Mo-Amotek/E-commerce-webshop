import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {
    const [inputs, setInputs] = useState([]);
    const [file, setFile] = useState();
   
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if(name !== 'primary_image'){
            setInputs(values => ({...values, [name]: value}));
        } else{
            setFile(URL.createObjectURL(event.target.files[0]));
            const name1 = event.target.name;
            console.log(file);
            setInputs(values => ({...values, [name1]: file}));
            
        }
    }


    const handleForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost/E-commerce-webshop/server/Model/Products.php', inputs)
        console.log(inputs)
    }

  return (
    <div className='AddProduct'>
        




      	<div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
		    <div className="max-w-md w-full">
                <div>
                    <img className="mx-auto h-12 w-auto" src="./assets/images/gbay-logo.png" alt="Workflow"/>
                    <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Add new product for sell
                    </h3>
                </div>
                <form className="mt-8 space-y-6" onSubmit={ handleForm }>
                    {/* product Name */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                            Product Name
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="shadow bg-gray-200 appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" name="name" type="text" placeholder="Product Name" onChange={handleChange} required/>
                        </div>
                    </div>

                    {/* product Description */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="description">
                            Product Description
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <textarea id="description" name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product description" onChange={handleChange} ></textarea>
                        </div>
                    </div>
                    {/* product short description */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="short_description">
                            Product Short Description
                        </label>
                        </div>
                        <div className="md:w-2/3">
                       <input className="shadow bg-gray-200 appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="short_description" name="short_description" type="text" placeholder="Product Short Description" onChange={handleChange} required/>
                        </div>
                    </div>
                    {/* product Price */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="price">
                            Product Price
                        </label>
                        </div>
                        <div className="md:w-2/3">
                       <input className="shadow bg-gray-200 appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="price" name="price" type="number" placeholder="Product Price" onChange={handleChange} required/>
                        </div>
                    </div>
                    {/* product Images */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="primary_image">Upload file</label>
                    </div>
                    <div className="md:w-2/3">
                    <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="primary_image-help" id="primary_image" name="primary_image" type="file" accept="image/x-png,image/gif,image/jpeg" onChange={handleChange}/>
                   
                    </div>
                    </div>
                    {/* product Sub Images */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="sub_image_1">Upload file</label>
                    </div>
                    <div className="md:w-2/3">
                    <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="sub_image_1_help" id="sub_image_1" name="sub_image_1" type="file" accept="image/x-png,image/gif,image/jpeg" onChange={handleChange}/>
                   
                    </div>
                    </div>
                    {/* product sub Images2 */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="sub_image_2">Upload file</label>
                    </div>
                    <div className="md:w-2/3">
                    <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="sub_image_2_help" id="sub_image_2" name="sub_image_2" type="file" accept="image/x-png,image/gif,image/jpeg" onChange={handleChange}/>
                   
                    </div>
                    </div>
                    {/* product Quantity */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="quantity">
                            Product Quantity
                        </label>
                        </div>
                        <div className="md:w-2/3">
                       <input className="shadow bg-gray-200 appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="quantity" name="quantity" type="text" placeholder="Product Quantity" onChange={handleChange} required/>
                        </div>
                    </div>
                    {/* product category dropdown */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label htmlFor="category_id" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Select a category</label>
                        </div>
                        <div className="md:w-2/3">
                            <select id="category_id" className="shadow bg-gray-200 appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="category_id" onChange={handleChange} required>
                                <option defaultValue>Choose a categories</option>
                                <option value="1">XBox</option>
                                <option value="2">Play Station</option>
                                <option value="3">Games</option>
                                <option value="4">Gaming Accessories</option>
                                <option value="5">Others</option>
                            </select>
                        </div>
                    </div>
                    {/* product inserted user id */}
                    <input type="text" name="user_id"  onChange={handleChange}></input>
                    <input type="text" name="discount_id" onChange={handleChange}></input>
                    <button type="submit" name="page">Submit</button>
                </form>
            </div>
            <img src={file}  alt={file}/>
        </div>
    </div>
  )
}

export default AddProduct