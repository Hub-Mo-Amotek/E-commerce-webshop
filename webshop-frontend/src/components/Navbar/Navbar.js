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
        <nav className="bg-white">
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between ">
                    <img src={Logo} alt="Gbay logo" className="cursor-pointer h-16" />
                    <div className="w-10 h-10 pt-2 cursor-pointer" onClick={() => setOpen(!open)}>
                        {open ? (<XMarkIcon />) : (<Bars3Icon />)}
                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center gap-8">
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <NavLinks />
                </ul>
                <div className="md:block hidden">
                    <LogInButton />
                </div>
                <div className="md:block hidden">
                    <SignUpButton />
                </div>
                <div className="md:block hidden">
                    <CartButton />
                </div>
                {/* MOBILE NAV */}
                <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4`}>
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <NavLinks />
                    <div className="py-5">
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