import React, {useEffect, useState}from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyAccount = () => {
  let [users, setUsers] = useState([]);

    let navigate = useNavigate();
    let id = localStorage.getItem('id');

    function getUsers() {
      axios.get(`http://localhost/E-commerce-webshop/server/Model/User.php/${id}/getUser`).then(function(response) {
          setUsers(response.data);
      })
  }


    useEffect(()=>{
        let auth = localStorage.getItem('id');

        if(auth === null){
          navigate('/Login');
        }
        getUsers();

}, [navigate]);



  return (
    <div>
      {users}
    </div>
  )
}

export default MyAccount