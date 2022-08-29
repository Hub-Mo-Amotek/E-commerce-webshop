import React from 'react'
import { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom';



const LogInButton = () => {
    let navigate = useNavigate();


    const [authe, setAuthe] = useState();
    const [name, setName] = useState();
    let [log, setLog] = useState();
    let [style, setStyle] = useState();


    useEffect(()=>{
            let auth = localStorage.getItem('id');
            let b = localStorage.getItem('firstName')


            if(auth){
                    setLog('Logout');
                    setStyle("inline-flex items-center sm:mx-0 lg:mx-2 px-4 py-2 bg-red-200 hover:bg-red-300 text-red-800 text-sm font-medium rounded-md")
                  }else{
                    setLog('Login');
                    setStyle("inline-flex items-center sm:mx-0 lg:mx-2 px-4 py-2 bg-green-200 hover:bg-green-300 text-green-800 text-sm font-medium rounded-md")
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
                className={style}
                onClick={handleLogAction}>
            {log}
        </button>
    )
}

export default LogInButton