import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';



const DisplayUser = () => {


    let [users, setUsers] = useState([]);
    // fixing .map is not a function with this line of code
    if(!Array.isArray(users)){
        users = [users];
    }


    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://becode.localhost/SCRUM/E-commerce-webshop/server/Model/Category.php').then(function(response) {
            setUsers(response.data);
        })
    }

    //console.log(users)
  return (
    <div>
    <h1>List Users</h1>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>last name</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user, key) => 
                <tr key={key}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.sub_name}</td>
                </tr>
            )}

        </tbody>
    </table>
</div>
  )
}

export default DisplayUser