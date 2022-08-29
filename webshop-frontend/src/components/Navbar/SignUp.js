import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const SignUpButton = () => {
    let [logged, setLogged] = useState();
    let [name, setName] = useState("");
    let [path, setPath] = useState("");


    useEffect(()=>{
        let auth = localStorage.getItem('id');

        if(auth){
            changeItOne()

              }else{
                changeItTwo()

              }

}, []);

const changeItOne = () => {
    setPath("/my-account");
    setName("my account");
}
const changeItTwo = () => {
    setPath("/SignUp");
    setName("sign up");
}

console.log('path', path);
console.log('name', name);


    return (
        <Link to={path}>
            <button type="button" className='inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md'>
                {name}
            </button>
        </Link>
    )
}

export default SignUpButton