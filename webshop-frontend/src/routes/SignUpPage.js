import { useState } from "react";
import axios from "axios";


const SignUpPage = () => {

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const checkPassword = (e) =>{
        e.preventDefault();

        if(inputs.password === inputs.confirm_password){
            handleForm();
        }else{
            alert('the password doesnt match')
        }
    }

    const handleForm = () => {

        axios.post('http://localhost/E-commerce-webshop/server/Model/User.php', inputs)
        console.log(inputs)
    }
    return (
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={checkPassword} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="first_name"
                            placeholder="first name" 
                            onChange={handleChange} />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="last_name"
                            placeholder="last name" 
                            onChange={handleChange} />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" 
                            onChange={handleChange} />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" 
                            onChange={handleChange} />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            onChange={handleChange} />

                        <button
                            className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 border border-transparent
                            rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none
                            focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition"
                        >Create Account
                        </button>

                        {/*<div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>*/}
                    </form>
                </div>
            </div>
    )
}

export default SignUpPage