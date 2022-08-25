import React, {useState} from 'react'
import Logo from '../../assets/images/gbay-logo.png'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import CartButton from './CartButton'
import LogInButton from './LogInButton'
import SignUpButton from './SignUp'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className="bg-white sticky top-0">
            <div className="flex items-center font-medium justify-between">
                <div className="z-50 bg-white p-5 lg:w-auto w-full flex justify-between ">
                    <Link to="/">
                        <img src={Logo} alt="Gbay logo" className="cursor-pointer h-16" />
                    </Link>
                    <div className="w-7 h-7 pt-4 cursor-pointer lg:hidden" onClick={() => setOpen(!open)}>
                        {open ? (<XMarkIcon />) : (<Bars3Icon />)}
                    </div>
                </div>
                <ul className="lg:flex hidden uppercase items-center gap-8">
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/category" className="py-7 px-3 inline-block">
                            All Products
                        </Link>
                    </li>
                    <NavLinks />
                </ul>
                <div className="lg:block hidden">
                    <LogInButton />
                    <SignUpButton />
                </div>
                <div className="lg:block hidden mr-5">
                    <CartButton />
                </div>
                {/* MOBILE NAV */}
                <ul className={`lg:hidden bg-white fixed w-full top-0 overflow-auto overscroll-contain bottom-0 divide-y divide-color-nerdy py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/category" className="py-7 px-3 inline-block">
                            All Products
                        </Link>
                    </li>
                    <li>
                        <NavLinks />
                    </li>
                    <div className="py-5 w-full">
                        <LogInButton />
                    </div>
                    <div className="py-5">
                        <SignUpButton />
                    </div>
                    <div className="py-5">
                        <CartButton />
                    </div>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar