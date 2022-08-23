import React from 'react';
import NavBar from './NavBar';



const Header = () => {
  return (
    <div>
        <div className="flex flex-col p-5 w-full h-96 bg-gradient-to-t from-color-one to-color-two">
            <div className="p-10 w-full">
                header
            </div>

            <div className="p-10 mt-auto w-full">
                bottom test
            </div>
        </div>

        <NavBar />

    </div>

  )
}

export default Header