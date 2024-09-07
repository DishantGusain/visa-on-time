"use client";

import React, { useState, useEffect } from "react";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "ta0rBdRwE";
//const FORMSPARK_FORM_ID = "1uzxj5WLu";

export default function FormComponent() {
   let [active_spinner, setActiveSpinner] = useState(false);

   const [utmParams, setUtmParams] = useState({
      utmSource: "",
      utmName: "",
   });

   const [submit, submitting] = useFormspark({
      formId: FORMSPARK_FORM_ID,
   });

   const [FirstName, setFirstName] = useState("");
   const [LastName, setLastName] = useState("");
   const [MobileNumber, setMobileNumber] = useState("");
   const [Service, setService] = useState("");
   const [City, setCity] = useState("");
   const [TravelledBefore, setTravelledBefore] = useState("");

   useEffect(() => {
      const utmParams = {
         utmSource: localStorage.getItem("utmSource") || "",
         utmName: localStorage.getItem("utmName") || "",
      };
      setUtmParams(utmParams);

      // console.log(utmParams);
   }, []);

   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setActiveSpinner(!active_spinner);
      await submit({
         FirstName,
         LastName,
         MobileNumber,
         Service,
         City,
         TravelledBefore,
         ...utmParams,
      });
      if (TravelledBefore === "Yes") {
         window.location.href = "/thank-you";
      } else if (TravelledBefore === "No") {
         window.location.href = "/form-submitted";
      }
   };

   return (
      <div className="desktop:w-[1700px] mx-auto px-4 md:px-8 lg:px-4 lg:w-[980px] 2xl:w-[1250px]">
         <h1 className="my-10 lg:my-20 mb-6 font-bold text-2xl text-center lg:text-3xl">
            Submit your details
         </h1>

         <form
            onSubmit={onSubmit}
            data-formtrack
            data-formtrack-params="utm_source, referrer,ref "
            className="relative font-bold text-base"
         >
            <div className="relative flex justify-between my-6 w-full">
               <div className="relative w-[49%]">
                  <label
                     htmlFor="FirstName"
                     className="block w-full"
                  >
                     First Name*
                  </label>
                  <input
                     type="text"
                     name="FirstName"
                     value={FirstName}
                     onChange={(e) => setFirstName(e.target.value)}
                     id="FirstName"
                     className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                     placeholder="Ayush"
                     required
                  />
               </div>
               <div className="relative w-[49%]">
                  <label
                     htmlFor="LastName"
                     className="block w-full"
                  >
                     Last Name*
                  </label>
                  <input
                     name="LastName"
                     value={LastName}
                     onChange={(e) => setLastName(e.target.value)}
                     type="text"
                     id="LastName"
                     className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                     placeholder="Gupta"
                     required
                  />
               </div>
            </div>
            <div className="relative my-6">
               <label
                  htmlFor="MobileNumber"
                  className="block w-full"
               >
                  Mobile Number*
               </label>
               <input
                  type="number"
                  name="MobileNumber"
                  value={MobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  id="MobileNumber"
                  className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                  placeholder="92585XXXXX"
                  required
               />
            </div>
            <div className="block my-6 w-full">
               <label
                  htmlFor="Service"
                  className="block w-full"
               >
                  Service interested in:*
               </label>
               <select
                  name="Service"
                  value={Service}
                  onChange={(e) => setService(e.target.value)}
                  id="Service"
                  className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 h-10  border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                  required
               >
                  <option
                     className="font-semibold text-base"
                     value=""
                     disabled
                  >
                     {" "}
                     - select -{" "}
                  </option>
                  <option
                     className="font-semibold text-base"
                     value="Full Visa Application"
                  >
                     Full Visa Application
                  </option>
                  <option
                     className="font-semibold text-base"
                     value="Only Early Appointment"
                  >
                     Only Early Appointment
                  </option>
               </select>
            </div>
            <div className="relative my-6">
               <label
                  htmlFor="City"
                  className="block w-full"
               >
                  City*
               </label>
               <input
                  name="City"
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  id="City"
                  className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4 py-2 border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                  placeholder="New Delhi"
                  required
               />
            </div>
            <div className="block my-6 w-full">
               <label
                  htmlFor="TravelledBefore"
                  className="block w-full"
               >
                  Have you ever travelled outside of India?*
               </label>
               <select
                  name="Travelled Before"
                  value={TravelledBefore}
                  onChange={(e) => setTravelledBefore(e.target.value)}
                  id="TravelledBefore"
                  className="block border-gray-300 focus:border-2 bg-gray-100 shadow-xs px-4  h-10  border focus:border-blue-400 rounded-lg w-full font-semibold text-gray-900 transition duration-400 placeholder-gray-400 focus:outline-none"
                  required
               >
                  <option
                     className="font-semibold text-base"
                     value=""
                     disabled
                  >
                     - select -
                  </option>
                  <option
                     className="font-semibold text-base"
                     value="Yes"
                  >
                     Yes
                  </option>
                  <option
                     className="font-semibold text-base"
                     value="No"
                  >
                     No
                  </option>
               </select>
            </div>

            <button
               type="submit"
               disabled={submitting}
               className="flex justify-center items-center bg-[#EB560D] hover:bg-[#141B52] shadow shadow-orange-500 py-3 rounded-lg w-full font-semibold text-lg text-white transition duration-300"
            >
               <h1 className="pr-3">Submit </h1>

               {active_spinner ? (
                  <div
                     className="inline-block border-2 border-current border-r-transparent border-solid rounded-full w-6 h-6 animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite] align-[-0.125em]"
                     role="status"
                  ></div>
               ) : (
                  <></>
               )}
            </button>
         </form>
      </div>
   );
}
