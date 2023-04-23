import React from "react";
import  { Link } from "react-router-dom";


import { styles } from "../styles";
import { navLinks } from "../constants";
import {logo, menu, close } from "../assets";
import cn from "classnames";

const Navbar = () => {
    const [active, setActive] = React.useState<string>("");
    const [toggle, setToggle] = React.useState<boolean>(false);
    return (
        <nav
            className={cn(
                `${styles.paddingX}`,
                "w-full flex items-center",
                "py-5 fixed top-0 z-20 bg-primary"
            )}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                    <div className="text-white text-[18px] font-bold cursor-pointer flex flex-row items-end">
                        <p className="text-2xl">3D Portfolio &nbsp;</p>
                        <span className="sm:block hidden text-xs">
                            &nbsp; by Jasper
                        </span>
                    </div>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => {
                        return (
                            <li
                                key={link.id}
                                className={`${
                                    active === link.id ?
                                    "text-white" :
                                    "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                                onClick={() =>  setActive(link.id)}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        )
                    })}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img 
                        src={toggle ? close : menu}
                        alt="menu"
                        className={cn(
                            "w-[28px] h-[28px]",
                            "object-contain cursor-pointer"
                        )}
                        onClick={() => setToggle(!toggle)}
                    />

                    <div className={cn(
                        !toggle ? "hidden" : "flex",
                        "p-6 bg-gray-200 absolute rounded-md",
                        "top-20 right-0 mx-4 my-2 min-w-[140px]"
                    )}>
                        <ul 
                            className={cn(
                                "list-none", 
                                "flex flex-col justify-end items-start gap-4"
                            )}>
                            {navLinks.map((link) => {
                                return (
                                    <li
                                        key={link.id}
                                        className={cn(
                                            active === link.id ? "text-primary hover:text-primary" : "text-secondary hover:text-primary",
                                        "text-[18px] font-medium cursor-pointer"
                                        )}
                                        onClick={() =>  {
                                            setActive(link.id);
                                            setToggle(!toggle);
                                        }}
                                    >
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;