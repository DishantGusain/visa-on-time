import { CgMenuRight } from "react-icons/cg";
export default function Navbar() {
    return <div className="flex justify-between items-center mx-auto pt-6 md:w-[1000px] 2xl:w-[1300px] font-primary text-lg">

        <div className="w-48"><a href="/" className=""> <img src="/logo.avif" alt="Visa On Time Logo" /></a></div>


        <div className="md:flex items-center space-x-4 hidden">


            <a href="#AboutUs" className="hover:text-[#0088ff] hover:underline">About Us</a>
            <a href="#Procedure" className="hover:text-[#0088ff] underline">Procedure</a>
            <a href="/" className="hover:text-[#0088ff] hover:underline">FAQs</a>


        </div>

        <div className="md:hidden text-3xl">
            <CgMenuRight />
        </div>


    </div>;
}