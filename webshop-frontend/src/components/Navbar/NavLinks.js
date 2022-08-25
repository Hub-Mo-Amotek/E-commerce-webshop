import React from 'react'
import { Link } from "react-router-dom"
import { categories } from './CategDumData'

const NavLinks = () => {

    return (
        <div>
        {categories.map((categorie) => (
                <div>
                    <div className="px-3 text-left lg:cursor-pointer group">
                        <h1 className="py-10">{categorie.name}</h1>
                        {categorie.submenu &&
                            <div>
                                <div className="absolute top-24 hidden group-hover:lg:block hover:lg:block">
                                    <div className="py-3">
                                        <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                                    </div>
                                    <div className="bg-white p-5 grid grid-cols-3 gap-10">
                                        {categorie.sublinks.map((gbaySublinks) =>(
                                                <div>
                                                    <h1 className="text-lg font-semibold">{gbaySublinks.Head}</h1>
                                                    {gbaySublinks.sublink.map((smallLink)=>(
                                                        <li className="text-sm text-gray-600 my-2.5">
                                                            <Link to={smallLink.link} className="hover:text-color-nerdy">{smallLink.name}</Link>
                                                        </li>
                                                    ))}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    {/* MOBILE MENUS */}

                </div>
            ))
        }
        </div>
    )
};

export default NavLinks