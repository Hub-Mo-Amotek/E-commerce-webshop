import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const DisplayUser = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/E-commerce-webshop/server/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        })
    }
    console.log(users);
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
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                        <button>delete</button>
                    </td>
                </tr>
            )}

        </tbody>
    </table>
</div>
  )
}

export default DisplayUser