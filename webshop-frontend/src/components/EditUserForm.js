import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditUserForm = () => {

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/E-commerce-webshop/server/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        })
    }


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
    <div>
        <h1>edit page</h1>
    <form onSubmit={handleForm}>
        <label>first name</label>
        <input onChange={handleChange} type="text" name="first_name" ></input>
        <br/>

        <label>last name</label>
        <input onChange={handleChange} type="text" name="last_name" ></input>
        <br/>

        <label>email</label>
        <input onChange={handleChange} type="text" name="email" ></input>
        <br/>

        <label>password</label>
        <input onChange={handleChange} type="text" name="password" ></input>
        <br/>

        <button>Edit</button>
    </form>
    </div>
  )
}

export default EditUserForm
