import React from 'react';
import NavBar from './NavBar';



const Header = () => {
  return (
    <div className="flex flex-col p-5 w-full h-96 bg-gradient-to-t from-color-one to-color-two">
        <div className="flex items-center">
            header
        </div>

        <NavBar />
    </div>
  )
}

export default Header