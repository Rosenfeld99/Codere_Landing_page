import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const MobileHeader = ({ menu }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden flex items-center justify-between p-3">
            <div className="flex gap-3">
                <button
                    onClick={() => setOpen(!open)}
                    className="relative z-50 text-4xl"
                >
                    {open ? <IoClose /> : <HiMenu />}
                </button>
                <div>
                    <img
                        className="w-full h-[30px] object-contain"
                        src="/src/assets/codere-logo.png"
                        alt="Logo"
                    />
                </div>
            </div>
            <div className="text-[#333F48] font-semibold hover:scale-110 duration-150 border-[#333F48] px-3 py-1 border-[2px] rounded-[25px]">
                <button>Acceder</button>
            </div>

            {/* Animated Menu */}
            <div
                className={`fixed z-40 top-0 left-0 h-screen w-full bg-[#79C000] transform origin-left transition-transform duration-500 ease-in-out ${open ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    }`}
            >
                <div className="items-center gap-8 flex flex-col h-full justify-center">
                    {menu.map((item, index) => (
                        <div
                            key={index}
                            className="relative text-[#333F48] group hover:text-[#fff] flex flex-col items-center"
                        >
                            {item.name}
                            <div className="h-[2px] w-0 bg-white absolute bottom-[-6px] transform transition-all duration-300 ease-in-out group-hover:w-full" />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default MobileHeader