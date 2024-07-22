"use client"

import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

import { CgMenuRight } from "react-icons/cg";


const FORMSPARK_FORM_ID = "1uzxj5WLu";


export default function FormComponent() {

    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });



    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [Gender, setGender] = useState("");
    const [City, setCity] = useState("");
    const [TravelledBefore, setTravelledBefore] = useState("");


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await submit({
            FirstName,
            LastName,
            MobileNumber,
            Gender,
            City,
            TravelledBefore,
        });
        alert("Form submitted");
    };




    return <div className=" mx-auto  px-4 md:w-[1000px] 2xl:w-[1300px]  font-primary">





        <div className="flex justify-between items-center mx-auto pt-6 font-primary text-lg">

            <div className="w-48"><a href="/" className=""> <img src="/logo.avif" alt="Visa On Time Logo" /></a></div>


            <div className="md:flex items-center space-x-4 hidden">


                <a href="/" className="hover:text-[#0088ff] hover:underline">About Us</a>
                <a href="/" className="hover:text-[#0088ff] underline">Procedure</a>
                <a href="/" className="hover:text-[#0088ff] hover:underline">FAQs</a>


            </div>

            <div className="md:hidden text-3xl">
                <CgMenuRight />
            </div>


        </div>


        <h1 className="my-10 md:my-20 mb-6 font-bold text-2xl text-center md:text-3xl">Submit your details</h1>












        <form onSubmit={onSubmit} className="relative font-bold text-base">
            <div className="relative flex justify-between my-6 w-full">
                <div className="relative w-[49%]">
                    <label htmlFor="First Name" className="block w-full">First Name*</label>
                    <input type="text" name="Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} id="default-search" className="block border-gray-300 bg-transparent shadow-xs px-4 py-2 border rounded-lg w-full font-semibold text-gray-900 placeholder-gray-400 focus:outline-none" placeholder="Ayush" required />
                </div>
                <div className="relative w-[49%]">
                    <label htmlFor="Last Name" className="block w-full">Last Name*</label>
                    <input name="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} type="text" id="default-search" className="block border-gray-300 bg-transparent shadow-xs px-4 py-2 border rounded-lg w-full font-semibold text-gray-900 placeholder-gray-400 focus:outline-none" placeholder="Gupta" required />
                </div>
            </div>
            <div className="relative my-6">
                <label htmlFor="MobileNumber" className="block w-full">Mobile Number*</label>
                <input type="number" name="MobileNumber" value={MobileNumber} onChange={(e) => setMobileNumber(e.target.value)} id="default-search" className="block border-gray-300 bg-transparent shadow-xs px-4 py-2 border rounded-lg w-full font-semibold text-gray-900 placeholder-gray-400 focus:outline-none" placeholder="92585XXXXX" required />
            </div>


            <div className="block my-6 w-full">
                <label htmlFor="Gender" className="block w-full">Gender*</label>
                <select name="Gender" value={Gender} onChange={(e) => setGender(e.target.value)} id="countries" className="block border-gray-300 px-4 py-2.5 border rounded-lg w-full h-12 text-gray-600 focus:outline-none" required>
                    <option className="font-bold font-primary text-base" value="" disabled> - select - </option>
                    <option className="font-bold font-primary text-base" value="male">Male</option>
                    <option className="font-bold font-primary text-base" value="female">Female</option>
                </select>
            </div>



            <div className="relative my-6">
                <label htmlFor="City" className="block w-full">City*</label>
                <input name="City" value={City} onChange={(e) => setCity(e.target.value)} type="text" id="default-search" className="block border-gray-300 bg-transparent shadow-xs px-4 py-2 border rounded-lg w-full font-semibold text-gray-900 placeholder-gray-400 focus:outline-none" placeholder="New Delhi" required />
            </div>


            <div className="block my-6 w-full">
                <label htmlFor="countries" className="block w-full">Have you ever travelled outside of India?*</label>
                <select name="Travelled Before" value={TravelledBefore} onChange={(e) => setTravelledBefore(e.target.value)} id="countries" className="block border-gray-300 px-4 py-2.5 border rounded-lg w-full h-12 text-gray-600 focus:outline-none" required>
                    <option className="font-bold font-primary text-base" value="" disabled>- select -</option>
                    <option className="font-bold font-primary text-base" value="Yes">Yes</option>
                    <option className="font-bold font-primary text-base" value="No">No</option>
                </select>
            </div>








            <button type="submit" disabled={submitting} className="bg-[#EB560D] hover:bg-[#141B52] shadow shadow-orange-500 py-3 rounded-lg w-full font-semibold text-lg text-white transition duration-300">
                Submit
            </button>




        </form>












        <section className="mx-auto mt-10 md:mt-20 px-4 pt-6 md:w-[1000px] 2xl:w-[1300px] font-primary">
            <div className="md:flex justify-between items-start">
                <div className="flex justify-center items-center my-10 md:my-0 text-center md:text-left">
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-center md:justify-start">
                            <a href="/" className=""> <img src="/logo.avif" alt="Visa On Time Logo" className="w-48" /></a>
                        </div>
                        <h1 className="font-semibold">Get your Visas always on time!</h1>
                        <h1 className="">hello@visaontime.co</h1>
                    </div>
                </div>
                <div className="flex justify-between font-semibold text-sm">
                    <div className="space-y-2 md:pr-16">
                        <p className="hover:text-[#0088ff] hover:underline">
                            <a href="#FAQ">Documents Required</a>
                        </p>

                        <p className="hover:text-[#0088ff] hover:underline">
                            <a href="#Procedure">Procedure</a>
                        </p>

                        <p className="hover:text-[#0088ff] hover:underline">

                            <a href="#FAQ">FAQs</a>
                        </p>

                        <p className="hover:text-[#0088ff] hover:underline">

                            <a href="#AboutUs">About Us</a>
                        </p>
                    </div>

                    <div className="space-y-2">

                        <p className="hover:text-[#0088ff] hover:underline">
                            <a href="/terms-conditions">Terms and Conditions</a>
                        </p>

                        <p className="hover:text-[#0088ff] hover:underline">

                            <a href="/privacy">Privacy Policy</a>
                        </p>

                        <p className="hover:text-[#0088ff] hover:underline">

                            <a href="/blog">Blogs</a>
                        </p>

                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center pt-5">

                <div className="">
                    <div className="flex justify-center items-center">
                        <img className="h-7" src="/Socials/instagram.avif" alt="Visa On Time Instagram" />
                        <img className="mx-5 h-7" src="/Socials/facebook.avif" alt="Visa On Time Facebook" />
                        <img className="h-7" src="/Socials/twitter.avif" alt="Visa On Time Twitter" />
                    </div>

                    <p className="py-4 text-xs">Copyright © 2023, VisaOnTime by Axon Consultancy</p>
                </div>

            </div>



        </section>








    </div>;
}