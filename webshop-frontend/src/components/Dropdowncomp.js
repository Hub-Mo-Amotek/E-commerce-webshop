import React, {useState} from "react";
import { createPopper } from "@popperjs/core";
import {usePopper} from "react-popper";

const Dropdown = ({ color }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();


    const bgColor = "white";


     const toggleDropdown = () => {
         setDropdownPopoverShow(!dropdownPopoverShow) ;
         createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
             placement: "bottom-start",
             strategy: "absolute",
                 modifiers: [
                 {
                     name: 'computeStyles',
                     options: {
                         gpuAcceleration: false, // true by default
                     },
                 },
             ],
         });

    }

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-6/12 md:w-4/12 px-4">
                    <div className="relative inline-flex align-middle w-full">
                        <button
                            className={
                                "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                                bgColor
                            }
                            type="button"
                            ref={btnDropdownRef}
                            onClick={() => {
                                toggleDropdown();
                                // dropdownPopoverShow
                                //     ? closeDropdownPopover()
                                //     : openDropdownPopover();
                            }}
                        >
                            {color === "white" ? "Categories" : color + " Dropdown"}
                        </button>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                //(color === "white" ? "bg-white " : bgColor + " ") +
                                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <a
                                href="/category"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                    //(color === "white" ? " text-slate-700" : "text-white")
                                }
                            >
                                XBox
                            </a>
                            <a
                                href="/category"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                    //(color === "white" ? " text-slate-700" : "text-white")
                                }
                            >
                                PlayStation
                            </a>
                            <a
                                href="/category"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                    //(color === "white" ? " text-slate-700" : "text-white")
                                }
                            >
                                Games
                            </a>
                            <a
                                href="/category"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                    //(color === "white" ? " text-slate-700" : "text-white")
                                }
                            >
                                Gaming Accessories
                            </a>
                            <a
                                href="/category"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                                    //(color === "white" ? " text-slate-700" : "text-white")
                                }
                            >
                                Other
                            </a>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function DropdownRender() {
    return (
        <>
            <Dropdown color="white" />
        </>
    );
}