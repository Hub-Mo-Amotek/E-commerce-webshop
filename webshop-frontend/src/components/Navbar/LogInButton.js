import React from 'react'
import { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom';



const LogInButton = () => {
    let navigate = useNavigate();


    const [authe, setAuthe] = useState();
    const [name, setName] = useState();
    let [log, setLog] = useState();

    useEffect(()=>{
            let auth = localStorage.getItem('id');
            let b = localStorage.getItem('firstName')


            if(auth){
                    setLog('Logout');
                  }else{
                    setLog('Login');
                  }

            setAuthe(auth);
            setName(b);
    }, [authe]);


    const handleLogAction = () => {
            let auth = localStorage.getItem('id');
            if(auth){
                    localStorage.clear();
                    navigate('/Login');
                  }else{
                    navigate('/Login');
                  }
                  window.location.reload(false);
    }

    return (
        <button type="button"
                className="inline-flex items-center sm:mx-0 lg:mx-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
                onClick={handleLogAction}>
            {log}
        </button>
    )
}

export default LogInButton