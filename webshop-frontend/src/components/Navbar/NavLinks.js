import React from 'react'

const NavLinks = () => {
    const links = [
        { name: "All Products" },
        { name: "Categories" }
    ];
    return <>
        {
            links.map(link=>(
                <div>
                    <div className="px-3 text-left md:cursor-pointer">
                        <h1 className="py-7">{link.name}</h1>
                    </div>
                </div>
            ))
        }
    </>
};

export default NavLinks