import React, {useEffect}from 'react'
import { useNavigate } from 'react-router-dom';

const MyAccount = () => {
    let navigate = useNavigate();


    useEffect(()=>{
        let auth = localStorage.getItem('id');

        if(auth === null){
          navigate('/Login');
        }
}, []);

  return (
    <div>MyAccount</div>
  )
}

export default MyAccount