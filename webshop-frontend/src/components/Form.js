import axios from 'axios';
import React, { useState } from 'react'

const Form = () => {

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleForm = (e) => {
        e.preventDefault();

        axios.post('http://localhost/E-commerce-webshop/server/', inputs)
        console.log(inputs)
    }
    

  return (
    <form onSubmit={handleForm}>
        <label>first name</label>
        <input onChange={handleChange} type="text" name="first_name" ></input>

        <label>last name</label>
        <input onChange={handleChange} type="text" name="last_name" ></input>

        <label>email</label>
        <input onChange={handleChange} type="text" name="email" ></input>

        <label>password</label>
        <input onChange={handleChange} type="text" name="password" ></input>

        <button>save</button>
    </form>
  )
}

export default Form
