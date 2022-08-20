import React from 'react'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar_option1">
              <span className="login">Log In</span>
            </div>

            <div className="navbar_option2">
                    <span className="signup">Sign Up</span>
            </div>

            <div className="navbar_option3">
                    <span className="cart">Shopping Cart</span>
            </div>

            <div className="navbar_option4">
                    <span className="sell">Sell</span>
            </div>

            <div className="navbar_option5">
                    <span className="products">All Products</span>
            </div>

            <div className="navbar_option6">
                    <span className="categories">Categories</span>
            </div>

            <div className="navbar_option7">
                    <span className="logout">Log Out</span>
            </div>
        </div>
    )
}

export default NavBar