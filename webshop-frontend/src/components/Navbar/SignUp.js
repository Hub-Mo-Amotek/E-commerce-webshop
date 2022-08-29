import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const SignUpButton = () => {
    let [style, setStyle] = useState();
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
    setStyle('inline-flex items-center px-4 py-2 bg-orange-200 hover:bg-orange-300 text-orange-800 text-sm font-medium rounded-md')
    setName("my account");
}
const changeItTwo = () => {
    setPath("/SignUp");
    setStyle('inline-flex items-center px-4 py-2 bg-blue-200 hover:bg-blue-300 text-blue-800 text-sm font-medium rounded-md')
    setName("sign up");
}

console.log('path', path);
console.log('name', name);


    return (
        <Link to={path}>
            <button type="button" className={style}>
                {name}
            </button>
        </Link>
    )
}

export default SignUpButton