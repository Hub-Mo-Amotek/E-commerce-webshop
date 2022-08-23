import axios from 'axios';
import React, { useState } from 'react'
import DisplayUser from './DisplayUser'

const Form = () => {

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleForm = (e) => {
        e.preventDefault();

        axios.post('http://localhost/E-commerce-webshop/server/Model/Category.php', inputs)
        console.log(inputs)
    }
    

  return (
    <div>
    <form onSubmit={handleForm} action="Model/CategoryFill.php">
        <label>name</label>
        <input onChange={handleChange} type="text" name="name" ></input>
        <br/>

        <label>description</label>
        <input onChange={handleChange} type="text" name="description" ></input>
        <br/>

        <button>save</button>
    </form>
    <DisplayUser />
    </div>
  )
}

export default Form
