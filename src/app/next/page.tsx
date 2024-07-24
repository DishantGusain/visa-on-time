import { IoWarningOutline } from "react-icons/io5";
export default function next() {

    return <div className="desktop:w-[1700px] mx-auto px-4 md:px-8 lg:px-4 lg:w-[980px] 2xl:w-[1250px] ">


        <div className="mt-10 mb-6 lg:my-20">
            <h1 className=" mb-6 font-bold text-xl text-center lg:text-2xl desktop:text-4xl">Welcome to VisaOnTime.co US Visa Services!</h1>

            <div className="font-medium text-base lg:text-lg">
                <div className="bg-textsecondary py-2 px-4 rounded-xl text-white flex  items-center">
                    <div className="w-[75px] md:w-[30px] ">
                        <IoWarningOutline className="w-full h-full" />
                    </div>
                    <p className="pl-2 text-lg lg:text-2xl desktop:text-3xl font-bold">Read these points carefully about our service before proceeding further.</p>
                </div>

                <p className="mt-6  lg:leading-8 ">
                    We only provide USA Visitor Visa (B1/B2), <span className="text-textsecondary"> WE DO NOT PROVIDE STUDENT VISAs.</span>
                </p>

                <p className="mt-2 mb-6  lg:leading-8">
                    The total cost of applying a US Visitor Visa with VisaOnTime will be <span className="text-textsecondary"> ₹39,999</span>, this also includes the official US Visa Fees of  <span className="text-textsecondary"> 185$</span>(approx. ₹15,500)
                </p>

                <div className="my-6  lg:leading-8">
                    <h1 className="font-bold mt-6 mb-2">What will be the process?</h1>
                    <h2 className="font-semibold">Filling the DS160 and payment of Visa Fees</h2>
                    <p className="pl-2 lg:pl-6">
                        - Govt. Visa Fees that need to be paid on their website is around ₹15,500 paid from your bank account, debit or credit card.
                    </p>

                    <h2 className="font-semibold mt-2"> Scheduling appointment dates for (a)Fingerprint & (b) Interview</h2>
                    <div className="">

                        <p className="pl-2 lg:pl-6  ">
                            - If you check, all the available dates are generally for 2026 or later.
                            <br />
                            - Our team is constantly checking throughout the day for vacant new dates or cancelled dates in next weeks or month. So we provide you with an appointment slot as early as next week.
                        </p>
                        <p className="pl-2 lg:pl-6 ">
                            - If you have already filled DS160 form and paid the visa fees, we will charge only ₹24,999 for Urgent Slot Booking Service.</p>

                    </div>

                </div>

                <div className="my-6  lg:leading-8">
                    <h1 className="font-bold  mt-6 mb-2">Other Terms & Conditions</h1>
                    <p className="pl-2 lg:pl-6">
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

            <h1 className=" mb-6 font-bold text-sm text-center lg:text-base">Tap PROCEED below to move further, Happy USA Journey:)</h1>

            <div className="flex justify-center items-center">
                <a href="/form" className=" flex justify-center items-center w-[300px] bg-[#EB560D] py-3 shadow shadow-orange-500  rounded-lg font-semibold text-center text-lg text-white ">
                    Proceed
                </a>
            </div>

        </div>


    </div>;
}