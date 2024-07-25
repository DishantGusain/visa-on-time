"use client"

import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "1uzxj5WLu";

export default function FormComponent() {

    let [active_spinner, setActiveSpinner] = useState(false);

    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [Service, setService] = useState("");
    const [City, setCity] = useState("");
    const [TravelledBefore, setTravelledBefore] = useState("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setActiveSpinner(!active_spinner)
        await submit({
            FirstName,
            LastName,
            MobileNumber,
            Service,
            City,
            TravelledBefore,
        });
        window.location.href = "/thank-you";
    };


    return <div className="desktop:w-[1700px] mx-auto px-4 md:px-8 lg:px-4 lg:w-[980px] 2xl:w-[1250px]">

        <h1 className="my-10 lg:my-20 mb-6 font-bold text-2xl text-center lg:text-3xl">Submit your details</h1>

        <form onSubmit={onSubmit} className="relative font-bold text-base">
            <div className="relative flex justify-between my-6 w-full">
                <div className="relative w-[49%]">
                    <label htmlFor="First Name" className="block w-full">First Name*</label>
                    <input type="text" name="Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} id="default-search" className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none" placeholder="Ayush" required />
                </div>
                <div className="relative w-[49%]">
                    <label htmlFor="Last Name" className="block w-full">Last Name*</label>
                    <input name="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} type="text" id="default-search" className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none" placeholder="Gupta" required />
                </div>
            </div>
            <div className="relative my-6">
                <label htmlFor="MobileNumber" className="block w-full">Mobile Number*</label>
                <input type="number" name="MobileNumber" value={MobileNumber} onChange={(e) => setMobileNumber(e.target.value)} id="default-search" className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none" placeholder="92585XXXXX" required />
            </div>
            <div className="block my-6 w-full">
                <label htmlFor="Service" className="block w-full">Service interested in:*</label>
                <select name="Service" value={Service} onChange={(e) => setService(e.target.value)} id="countries" className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none" required>
                    <option className="font-semibold text-base" value="" disabled> - select - </option>
                    <option className="font-semibold text-base" value="male">Full Visa Application</option>
                    <option className="font-semibold text-base" value="female">Only Early Appointment</option>
                </select>
            </div>
            <div className="relative my-6">
                <label htmlFor="City" className="block w-full">City*</label>
                <input name="City" value={City} onChange={(e) => setCity(e.target.value)} type="text" id="default-search" className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none" placeholder="New Delhi" required />
            </div>
            <div className="block my-6 w-full">
                <label htmlFor="countries" className="block w-full">Have you ever travelled outside of India?*</label>
                <select name="Travelled Before" value={TravelledBefore} onChange={(e) => setTravelledBefore(e.target.value)} id="countries" className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none" required>
                    <option className="font-semibold text-base" value="" disabled>- select -</option>
                    <option className="font-semibold text-base" value="Yes">Yes</option>
                    <option className="font-semibold text-base" value="No">No</option>
                </select>
            </div>

            <button type="submit" disabled={submitting} className="flex justify-center items-center bg-[#EB560D] hover:bg-[#141B52] shadow shadow-orange-500 py-3 rounded-lg w-full font-semibold text-lg text-white transition duration-300">
                <h1 className="pr-3">Submit </h1>

                {active_spinner ? <div
                    className="inline-block border-2 border-current border-r-transparent border-solid rounded-full w-6 h-6 animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite] align-[-0.125em]"
                    role="status">
                </div> : <></>}

            </button>
        </form>


    </div>;
}








