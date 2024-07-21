import { IoWarningOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
export default function next() {




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

        <div className="mt-10 mb-6 md:my-20">
            <h1 className=" mb-6 font-bold text-xl text-center md:text-2xl">Welcome to VisaOnTime.co US Visa Services!</h1>

            <div className="font-medium text-base md:text-lg">


                <div className="bg-textsecondary py-2 px-4 rounded-xl text-white flex  items-center">
                    <div className="w-[75px] md:w-[30px] ">
                        <IoWarningOutline className="w-full h-full" />
                    </div>
                    <p className="pl-2 text-xl md:text-2xl font-bold">Read these points carefully about our service before proceeding further.</p>
                </div>


                <p className="mt-6  md:leading-8 ">
                    We only provide USA Visitor Visa (B1/B2), <span className="text-textsecondary"> WE DO NOT PROVIDE STUDENT VISAs.</span>
                </p>

                <p className="mt-2 mb-6  md:leading-8">

                    The total cost of applying a US Visitor Visa with VisaOnTime will be <span className="text-textsecondary"> ₹39,999</span>, this also includes the official US Visa Fees of  <span className="text-textsecondary"> 185$</span>(approx. ₹15,500)

                </p>




                <div className="my-6  md:leading-8">
                    <h1 className="font-bold mt-6 mb-2">What will be the process?</h1>
                    <h2 className="font-semibold">Filling the DS160 and payment of Visa Fees</h2>
                    <p className="pl-2 md:pl-6">
                        - Govt. Visa Fees that need to be paid on their website is around ₹15,500 paid from your bank account, debit or credit card.
                    </p>

                    <h2 className="font-semibold mt-2"> Scheduling appointment dates for (a)Fingerprint & (b) Interview</h2>
                    <div className="">

                        <p className="pl-2 md:pl-6  ">
                            - If you check, all the available dates are generally for 2026 or later.
                            <br />
                            - Our team is constantly checking throughout the day for vacant new dates or cancelled dates in next weeks or month. So we provide you with an appointment slot as early as next week.
                        </p>
                        <p className="pl-2 md:pl-6 ">
                            - If you have already filled DS160 form and paid the visa fees, we will charge only ₹24,999 for Urgent Slot Booking Service.</p>

                    </div>

                </div>










                <div className="my-6  md:leading-8">
                    <h1 className="font-bold  mt-6 mb-2">Other Terms & Conditions</h1>
                    <p className="pl-2 md:pl-6">
                        - $185 Visa Fee has to be paid by you on official US Visa Scheduling website

                        <br />
                        - You need to provide us with your Username, Password & Security Question-Answers for usvisascheduling.com account for booking the appointment slot.
                        <br />

                        -  <span className="text-textsecondary"> We cannot guarantee any specific date</span> requested by you it all depends on US Embassy. We will try to get earliest date, and that could be NEXT WEEK or NEXT MONTH not late than that.
                        <br />

                        <span className="text-textsecondary">NO BARGAINS PLEASE </span>, We really work very hard to get you the earliest date among lakhs of US Visa applicants and we also have people that need to be paid.

                    </p>
                </div>


            </div>




            <h1 className=" mb-6 font-bold text-sm text-center md:text-base">Tap PROCEED below to move further, Happy USA Journey:)</h1>

            <div className="flex justify-center items-center">

                <a href="/form" className=" flex justify-center items-center w-[300px] bg-[#EB560D] py-3 shadow shadow-orange-500  rounded-lg font-semibold text-center text-lg text-white ">
                    Proceed
                </a>

            </div>


        </div>










        <section className="mx-auto mt-10 md:mt-20 px-4 pt-6 md:w-[1000px] 2xl:w-[1300px] font-primary">
            <div className="md:flex justify-between items-start">
                <div className="flex justify-center items-center mb-10 md:my-0 text-center md:text-left">
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