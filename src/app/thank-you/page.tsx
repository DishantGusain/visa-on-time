export default function ThankYou() {

    return <div className="flex justify-center desktop:w-[1700px]  items-center min-h-screen text-center mx-auto  px-4 md:px-8 lg:px-4 lg:w-[980px] 2xl:w-[1250px]  ">

        <div className="">
            <div className="flex items-center justify-center">
                <img className="w-28 md:w-36 lg:w-40 " src="/check.webp" alt="Thank You" />
            </div>

            <h1 className=" text-2xl md:text-3xl lg:text-4xl my-10 font-bold">Thank You!</h1>

            <p className="text-lg md:text-xl lg:text-2xl  desktop:text-3xl my-10 font-medium">Your details are submitted with us, one of our executive will be in touch with you within 48 Hours.</p>

            <div className="lg:flex my-10 w-full justify-center font-bold text-center text-white text-lg md:text-xl lg:text-[22px] items-center">
                <a href="https://x.com/visaontime" target="_blank" className="mr-0 lg:mr-6 lg:my-0 my-6 flex justify-center items-center w-full bg-[#00A5E0] py-3 shadow shadow-orange-500  rounded-lg  ">
                    Follow us on Twitter
                </a>

                <a href="/" className=" flex justify-center items-center w-full bg-[#EB560D] py-3 shadow shadow-orange-500  rounded-lg  ">
                    Return to Homepage
                </a>
            </div>
        </div>


    </div>;
}