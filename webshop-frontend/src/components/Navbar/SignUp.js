import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const SignUpButton = () => {
    let [logged, setLogged] = useState();

    useEffect(()=>{
        let auth = localStorage.getItem('id');

        if(auth){
                setLogged('hidden');
              }else{
                setLogged('inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md');
              }

}, []);

    return (
        <Link to="/SignUp">
            <button type="button" className={logged}>
                Sign up
            </button>
        </Link>
    )
}

export default SignUpButton