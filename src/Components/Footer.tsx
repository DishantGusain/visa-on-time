export default function Footer() {
    return (
        <section className="">
            <div className="md:flex justify-between items-start">
                <div className="flex justify-center items-center my-10 md:my-0 text-center md:text-left">
                    <div className="space-y-2 text-xs">
                        <div className="flex justify-center md:justify-start">
                            <img src="/logo.avif" className="w-40" alt="Visa On Time Logo" /></div>
                        <h1 className="font-semibold">Get your Visas always on time!</h1>
                        <h1 className="">hello@visaontime.co</h1>
                    </div>
                </div>
                <div className="flex justify-between text-sm">
                    <div className="space-y-2 md:pr-16">
                        <p className="hover:text-[#0088ff] hover:underline">
                            <a href="/">Documents Required</a>
                        </p>

                        <p className="hover:text-[#0088ff] hover:underline">
                            <a href="/">Procedure</a>
                        </p>

                        <p className="hover:text-[#0088ff] hover:underline">

                            <a href="/">FAQs</a>
                        </p>

                        <p className="hover:text-[#0088ff] hover:underline">

                            <a href="/">About Us</a>
                        </p>
                    </div>

                    <div className="space-y-2">

                        <p className="hover:text-[#0088ff] hover:underline">
                            <a href="/">Terms and Conditions</a>
                        </p>

                        <p className="hover:text-[#0088ff] hover:underline">

                            <a href="/">Privacy Policy</a>
                        </p>

                        <p className="hover:text-[#0088ff] hover:underline">

                            <a href="/">Blogs</a>
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

                    <p className="py-5 text-xs">Copyright © 2023, VisaOnTime by Axon Consultancy</p>
                </div>

            </div>



        </section>
    );
}
