import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { categories } from './CategDumData'
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const NavLinks = () => {
    const [heading, setHeading] = useState("")
    const [subHeading, setSubHeading] = useState("")

    return (
        <div>
        {categories.map((categorie) => (
                <div>
                    <div className="px-3 text-left lg:cursor-pointer group">
                        <h1
                            className="py-10 flex justify-between items-center lg:pr-0 pr-5 group"
                            onClick={()=> {
                                heading !== categorie.name ? setHeading(categorie.name) : setHeading("");
                                setSubHeading("");
                            }}
                        >
                            {categorie.name}
                            <span className="h-6 w-6 lg:hidden inline">
                                {heading === categorie.name ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </span>
                            <span className="h-6 w-6 lg:mt-0 lg:ml-2 lg:block hidden group-hover:rotate-180">
                                <ChevronDownIcon />
                            </span>
                        </h1>
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
                                                            <Link to={`/categorypage`} className="hover:text-color-nerdy">{smallLink.name}</Link>
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
                    <div className={`
                        ${heading  === categorie.name ? 'lg:hidden' : 'hidden'}
                    `}>
                        {/* SUB CATEGORIES */}
                        {categorie.sublinks.map((gbaySublinks)=>(
                                <div className="bg-white">
                                    <div>
                                        <h1
                                            className="py-4 pl-7 font-semibold lg:pr-0 pr-5 flex justify-between items-center"
                                            onClick={()=>
                                                subHeading !== gbaySublinks.Head ? setSubHeading(gbaySublinks.Head) : setSubHeading("")
                                            }
                                        >
                                            {gbaySublinks.Head}
                                            <span className="h-6 w-6 lg:mt-1 lg:ml-2 inline">
                                                {subHeading === gbaySublinks.Head ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                            </span>
                                        </h1>
                                    </div>
                                    <div className={`${
                                        subHeading === gbaySublinks.Head ? "lg:hidden" : "hidden"
                                    }`}
                                    >
                                        {gbaySublinks.sublink.map((smallLink) => (
                                            <li className="py-3 pl-14">
                                                <Link to={`/categorypage`} className="hover:text-color-nerdy">{smallLink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            ))
        }
        </div>
    )
};

export default NavLinks