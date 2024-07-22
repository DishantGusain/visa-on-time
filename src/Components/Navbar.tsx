
"use client";

import React, { useState } from "react";


import { IoCloseOutline } from "react-icons/io5";

import { CgMenuRight } from "react-icons/cg";
export default function Navbar() {


    let [open_nav, setOpenNav] = useState(false);

    return <div className="">
        <div className="flex justify-between items-center mx-auto pt-6  px-4  md:w-[1000px] 2xl:w-[1300px] font-primary font-medium text-xl">

            <div className="w-48"><a href="/" className=""> <img src="/logo.avif" alt="Visa On Time Logo" /></a></div>


            <div className="md:flex items-center space-x-4 hidden">


                <a href="/#AboutUs" className="hover:text-[#0088ff] hover:underline">About Us</a>
                <a href="/#Procedure" className="hover:text-[#0088ff] underline">Procedure</a>
                <a href="/#FAQ" className="hover:text-[#0088ff] hover:underline">FAQs</a>


            </div>



            <div
                className="top-8 right-4 absolute md:hidden text-3xl text-black cursor-pointer"
                onClick={() => setOpenNav(!open_nav)}
            >
                {open_nav ? <IoCloseOutline /> : <CgMenuRight />}
            </div>


        </div>




        {open_nav === true ? (
            <div className="  md:hidden pt-6 w-full">
                <div className="my-4 ml-6 ">
                    <a className="pb-1 font-medium text-lg hover:text-[#0088ff] transition duration-300 cursor-pointer" href="/#AboutUs" >
                        About Us

                    </a>
                </div>

                <div className="my-4  ml-6 ">
                    <a className="pb-1 font-medium text-lg hover:text-[#0088ff] transition duration-300 cursor-pointer" href="/#Procedure" >
                        Procedure

                    </a>
                </div>

                <div className="my-4  ml-6 ">
                    <a href="/#FAQ" className="pb-1  font-medium text-lg hover:text-[#0088ff] transition duration-300 cursor-pointer" >
                        FAQs

                    </a>
                </div>


            </div>
        ) : null}







    </div>;
}