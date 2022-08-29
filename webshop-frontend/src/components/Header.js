import React from 'react';
import NavBar from './Navbar/Navbar';



const Header = () => {
  return (
    <div>

        <NavBar />

        <div className="flex justify-center items-end w-full sm:h-72 md:h-80 lg:h-96 xl:h-96 bg-gradient-to-t from-color-one to-color-two">

            <img src="http://localhost:3000/assets/images/header/header.png"/>

        </div>

    </div>

  )
}

export default Header