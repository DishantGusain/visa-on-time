export default function Footer() {
    return (
        <section className="mx-auto mt-10 lg:mt-20 px-4 pt-6 desktop:w-[1700px]  lg:w-[1000px] 2xl:w-[1300px]   ">
            <div className="lg:flex justify-between items-start">
                <div className="flex justify-center items-center my-10 lg:my-0 text-center lg:text-left">
                    <div className="space-y-2 text-sm desktop:text-lg">
                        <div className="flex justify-center lg:justify-start">
                            <a href="/" className=""> <img src="/logo.avif" alt="Visa On Time Logo" className="w-48  desktop:w-60" /></a>
                        </div>
                        <h1 className="font-semibold">Get your Visas always on time!</h1>
                        <h1 className="">hello@visaontime.co</h1>
                    </div>
                </div>
                <div className="flex justify-around md:justify-center lg:justify-between font-semibold text-sm desktop:text-lg">
                    <div className="space-y-2  md:pr-16">
                        <p className="hover:text-[#0088ff] hover:underline">
                            <a href="/#FAQ">Documents Required</a>
                        </p>

                        <p className="hover:text-[#0088ff] hover:underline">
                            <a href="/#Procedure">Procedure</a>
                        </p>

                        <p className="hover:text-[#0088ff] hover:underline">

                            <a href="/#FAQ">FAQs</a>
                        </p>

                        <p className="hover:text-[#0088ff] hover:underline">

                            <a href="/#AboutUs">About Us</a>
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
                        <a className="" href="">
                            <img className="h-7 w-7" src="/Socials/instagram.avif" alt="Visa On Time Instagram" />
                        </a>
                        <a className="" href="">
                            <img className="mx-5 h-7 w-7" src="/Socials/facebook.avif" alt="Visa On Time Facebook" />
                        </a>
                        <a className="" href="https://x.com/visaontime">
                            <img className="h-7 w-7" src="/Socials/twitter.avif" alt="Visa On Time Twitter" />
                        </a>
                    </div>

                    <p className="py-4 text-xs">Copyright © 2023, VisaOnTime by Axon Consultancy</p>
                </div>

            </div>


        </section>
    );
}
