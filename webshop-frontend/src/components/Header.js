import React from 'react';
import NavBar from './NavBar';



const Header = () => {
  return (
    <div>
        <div className="flex justify-center items-end w-full h-96 bg-gradient-to-t from-color-one to-color-two">

            <img src="./assets/images/header/header.png"/>

        </div>

        <NavBar />

    </div>

  )
}

export default Header