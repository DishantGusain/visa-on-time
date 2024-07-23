export default function ThankYou() {

    return <div className="flex justify-center items-center min-h-screen text-center mx-auto px-4 md:w-[1000px] 2xl:w-[1300px]  ">


        <div className="">
            <div className="flex items-center justify-center">

                <img className="w-40 " src="/check.webp" alt="Thank You" />
            </div>
            <h1 className="text-4xl my-10 font-bold">Thank You!</h1>

            <p className="text-2xl my-10 font-medium">Your details are submitted with us, one of our executive will be in touch with you within 48 Hours.</p>

            <div className="md:flex my-10 w-full justify-center font-bold text-center text-white text-[22px] items-center">

                <a href="https://x.com/visaontime" target="_blank" className="mr-0 md:mr-6 md:my-0 my-6 flex justify-center items-center w-full bg-[#00A5E0] py-3 shadow shadow-orange-500  rounded-lg  ">
                    Follow us on Twitter
                </a>
                <a href="/" className=" flex justify-center items-center w-full bg-[#EB560D] py-3 shadow shadow-orange-500  rounded-lg  ">
                    Return to Homepage
                </a>

            </div>



        </div>


    </div>;
}