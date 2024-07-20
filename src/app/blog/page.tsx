
import { CgMenuRight } from "react-icons/cg";
export default function blog() {




    return <div className="mx-auto px-4 md:w-[1000px] 2xl:w-[1300px] font-primary">
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




        <div className="min-h-screen">


            <h1 className="my-10 md:my-20 mb-6 font-bold text-2xl text-center md:text-6xl">Blogs</h1>

            <div className="flex items-center w-full">

                <div className="w-2/12">
                    <img className="rounded-3xl" src="/blogs/1.avif" />
                </div>


                <div className="pl-8 w-10/12">

                    <h1 className="mb-3 font-semibold text-2xl md:text-3xl">
                        US Visa Application Process for Indian Travelers: A Step-by-Step Guide
                    </h1>


                    <p className="">
                        Feb 2, 2024
                    </p>

                </div>



            </div>





        </div>








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