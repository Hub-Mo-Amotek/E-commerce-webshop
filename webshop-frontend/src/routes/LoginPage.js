import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '../components/Alert'

const LoginPage = () => {

let [alert, setAlert] = useState();

  const refreshPage = () =>{
    window.location.reload(false);
  }

  let navigate = useNavigate();

  const [user, setUser] = useState({email:'', password:''});

  const handleChange = (e) => {
      setUser({...user, [e.target.name]: e.target.value})

  }
  const handleForm = (e) => {
    e.preventDefault();

    axios.post('http://localhost/E-commerce-webshop/server/Model/Login.php', user)
    .then((result)=>{
      if(result.data){
        console.log('user found', result.data);
        window.localStorage.setItem('email', result.data.email);
        window.localStorage.setItem('id', result.data.id);
        window.localStorage.setItem('firstName', result.data.first_name);
          navigate('/my-account');
          refreshPage();
      }else{
          setAlert(<Alert clr='red' alertTitel="something went wrong!" alertInfo="try again, or make a new account"/>)
      }
      
    });
    console.log(user);

}

  return (
    <div>
      <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <div>{alert}</div>
          <h2 className="mb-12 text-center text-5xl font-extrabold">G-BAY</h2>
          <form onSubmit={handleForm}>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email" >Email</label>
              <input 
              id="email" 
              type="text" 
              name="email" 
              placeholder="your_email@here.com"
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" 
              onChange={handleChange}
              value={user.email}
              required/>
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="password">Password</label>
              <input 
              id="password" 
              type="password" 
              name="password" 
              placeholder="your password"
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" 
              onChange={handleChange}
              value={user.password}
              required/>
            </div>
            <div className="mt-6">
              <button
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 border border-transparent
                  rounded-md font-semibold capitalize text-white hover:bg-green-700 active:bg-green-700 focus:outline-none
                  focus:border-green-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                  >Login
              </button>
            </div>
            <div className="mt-6 text-center">
              <a href="#" className="text-sm"> Forgot your password? </a>
            </div>
            <div className="mt-6">
            </div>
            {/*<div className="mt-6 text-center">
              <a href="#" className="underline">Sign up for an account</a>
            </div>*/}
          </form>
          <Link to="/signUp">
          <button
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 border border-transparent
                  rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none
                  focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition"
                  >create account
              </button>
              </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage


        // START localstorage login info
        // const [authe, setAuthe] = useState();
        // const [name, setName] = useState();
        // let [log, setLog] = useState();



        // useEffect(()=>{
        //         let auth = localStorage.getItem('id');
        //         let b = localStorage.getItem('firstName')

        //         if(auth){
        //                 setLog('Logout');
        //               }else{
        //                 setLog('Login');
        //               }

        //         setAuthe(auth);
        //         setName(b);
        // }, []);

        // const handleLogAction = () => {
        //         let auth = localStorage.getItem('id');
        //         if(auth){
        //                 localStorage.clear();
        //                 navigate('/Login');
        //               }else{
        //                 navigate('/Login');
        //               }
        // }

        // END localstorage login info