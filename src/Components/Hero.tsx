import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";

export default function Hero() {
    return (
        <section id="hero" className="relative mt-12 md:mt-20 mb-20 md:mb-20 px-2 md:px-0">


            <div className="md:flex justify-between items-center text-center md:text-left">

                <div className="flex justify-start items-center md:pt-0 md:pb-0 md:w-1/2">
                    <div className="space-y-5 md:space-y-10 md:w-[500px]">
                        <h1 className="font-extrabold text-[#141B52] text-4xl md:text-[44px] md:leading-[60px] leading-[44px] ">
                            US Visitor Visa
                            Appointment in
                            just 30 Days!
                        </h1>

                        <h1 className="font-medium text-base md:text-xl ">
                            VisaOnTime helps you present yourself for the US Visa Interview quicker than anyone else.
                        </h1>
                        <div className="md:flex justify-between items-center place-items-center content-center place-content-center grid grid-cols-2 pb-2">
                            <div className="">
                                <div className='flex -space-x-4 md:mb-2 mb-1'>
                                    <img className='border-2 border-white rounded-full w-11 h-11 md:w-12 md:h-12 ' src='/1.webp' alt='Stacked rounded avatar' />
                                    <img className='border-2 border-white rounded-full w-11 h-11 md:w-12 md:h-12' src='/2.webp' alt='Stacked rounded avatar' />
                                    <img className='border-2 border-white rounded-full  w-11 h-11 md:w-12 md:h-12' src='/3.webp' alt='Stacked rounded avatar' />
                                </div>

                                <div className="flex items-center gap-1 text-amber-500 transition-all duration-500">
                                    <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor"></path>
                                    </svg>
                                    <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor"></path>
                                    </svg>
                                    <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor"></path>
                                    </svg>
                                    <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor"></path>
                                    </svg>
                                    <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor"></path>
                                    </svg>
                                </div>

                            </div>


                            <p className="px-2 md:px-8   font-semibold text-base text-center leading-6">
                                250+ Successful Visa Issuance

                                and counting.
                            </p>

                            <div className="col-span-2 my-4 md:my-0 place-self-center">
                                <h2 className="font-extrabold text-[#141B52] text-3xl">
                                    ₹39,999/-
                                </h2>
                                <p className="text-base text-center">(all inclusive)</p>
                            </div>


                        </div>


                        <div className="shadow shadow-orange-500 hover:shadow-[#141B52] rounded-lg font-semibold text-center text-lg text-white group">


                            <a href="/next" className="group-hover:bg-[#141B52] flex justify-center items-center bg-[#EB560D] py-3 rounded-lg transition duration-300">
                                Apply US Visa
                                <span className="ml-2 text-xl">
                                    <GiCommercialAirplane />
                                </span>
                            </a>



                        </div>
                    </div>
                </div>


                <div className="relative flex justify-center md:justify-end pt-10 md:pt-0 md:w-1/2">

                    <img
                        src="/hero.webp"
                        alt="Visa On Time Hero"
                        className="shadow-2xl rounded-[48px] w-[90%] h-[90%] "
                    />
                </div>

            </div>





        </section>
    );
}
