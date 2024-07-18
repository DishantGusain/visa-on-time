import { CgMenuRight } from "react-icons/cg";
export default function Navbar() {
    return <div className="flex justify-between items-center pt-6 text-lg">

        <div className="w-40"><img src="/logo.avif" /></div>


        <div className="md:flex items-center space-x-4 hidden">
          

            <a href="/" className="hover:text-[#0088ff] hover:underline">About Us</a>
            <a href="/" className="hover:text-[#0088ff] underline">Procedure</a>
            <a href="/" className="hover:text-[#0088ff] hover:underline">FAQs</a>


        </div>

        <div className="md:hidden text-3xl">
        <CgMenuRight />
        </div>

    
    </div>;
}