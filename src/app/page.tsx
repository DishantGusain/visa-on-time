"use client";
import { useEffect } from "react";
import AboutUs from "@/Components/AboutUs";
import FAQ from "@/Components/FAQ";
import Hero from "@/Components/Hero";
import Testimonials from "@/Components/Testimonials";
import { IoCheckmarkCircle } from "react-icons/io5";

type UTMParams = {
   utmSource: string | null;
   utmName: string | null;
};

export default function Home() {
   useEffect(() => {
      const captureUTMParams = () => {
         const urlParams = new URLSearchParams(window.location.search);

         const utmParams: UTMParams = {
            utmSource: urlParams.get("utm_source"),
            utmName: urlParams.get("utm_name"),
         };

         // Store UTM parameters in local storage
         Object.keys(utmParams).forEach((key) => {
            const value = utmParams[key as keyof UTMParams];
            if (value) {
               localStorage.setItem(key, value);
            }
         });
      };

      captureUTMParams();
   }, []);

   useEffect(() => {
      const logUTMParamsFromLocalStorage = () => {
         const utmParams: UTMParams = {
            utmSource: localStorage.getItem("utmSource"),
            utmName: localStorage.getItem("utmName"),
         };
         console.log("UTM New Parameters");
         // console.log("UTM Params from Local Storage:", utmParams);
      };

      logUTMParamsFromLocalStorage();
   }, []);

   return (
      <main className="desktop:w-[1700px] mx-auto px-4 md:px-8 lg:px-4 lg:w-[980px] 2xl:w-[1250px]">
         <Hero />
         <section
            id="Procedure"
            className="mt-10 lg:mt-16 mb-14 lg:mb-16"
         >
            <h1 className="mb-2 font-bold text-center text-xl lg:text-2xl desktop:text-4xl">
               What&apos;s The Procedure?
            </h1>
            <div className="lg:flex justify-between items-start hidden text-sm">
               <div className="my-4 lg:my-0 lg:pr-6 lg:w-1/3">
                  <h2 className="flex items-start my-1 font-semibold text-base md:text-lg desktop:text-2xl">
                     {" "}
                     <span className="pt-1 pr-1 text-green-500">
                        <IoCheckmarkCircle />
                     </span>{" "}
                     Details and documents gathering
                  </h2>
               </div>
               <div className="my-4 lg:my-0 lg:w-1/3">
                  <h2 className="flex items-start my-1 font-semibold text-base md:text-lg desktop:text-2xl">
                     {" "}
                     <span className="pt-1 pr-1 text-green-500">
                        <IoCheckmarkCircle />
                     </span>{" "}
                     DS 160 Form Filling & US Visa Fee payment
                  </h2>
               </div>
               <div className="my-4 lg:my-0 lg:pl-6 lg:w-1/3">
                  <h2 className="flex items-start my-1 font-semibold text-base md:text-lg desktop:text-2xl">
                     {" "}
                     <span className="pt-1 pr-1 text-green-500">
                        <IoCheckmarkCircle />
                     </span>{" "}
                     Booking the earliest appointment slot
                  </h2>
               </div>
            </div>
            <div className="block lg:hidden text-sm">
               <div className="my-4 lg:my-0 lg:pr-6 lg:w-1/3">
                  <h2 className="flex items-start my-2 font-semibold text-base md:text-lg desktop:text-2xl">
                     {" "}
                     <span className="pt-1 pr-1 text-green-500">
                        <IoCheckmarkCircle />
                     </span>{" "}
                     Details and documents gathering
                  </h2>
                  <p className="font-medium text-sm md:text-base desktop:text-xl">
                     Our experienced executive will gather all your details and
                     documents required to apply for US Visa.
                  </p>
               </div>
               <div className="my-4 lg:my-0 lg:w-1/3">
                  <h2 className="flex items-start my-2 font-semibold text-base md:text-lg desktop:text-2xl">
                     {" "}
                     <span className="pt-1 pr-1 text-green-500">
                        <IoCheckmarkCircle />
                     </span>{" "}
                     DS 160 Form Filling & US Visa Fee payment
                  </h2>
                  <p className="font-medium text-sm md:text-base desktop:text-xl">
                     Our executive will fill the DS 160 form for US Visa
                     application on your behalf.{" "}
                  </p>
               </div>
               <div className="my-4 lg:my-0 lg:pl-6 lg:w-1/3">
                  <h2 className="flex items-start my-2 font-semibold text-base md:text-lg desktop:text-2xl">
                     {" "}
                     <span className="pt-1 pr-1 text-green-500">
                        <IoCheckmarkCircle />
                     </span>{" "}
                     Booking the earliest appointment slot
                  </h2>
                  <p className="font-medium text-sm md:text-base desktop:text-xl">
                     Our team of Visa Experts sit through out the day to spot
                     any new or cancelled vacancies and provide you with the
                     earliest appointment schedule
                  </p>
               </div>
            </div>
         </section>
         <FAQ />
         <AboutUs />
         <Testimonials />
      </main>
   );
}
