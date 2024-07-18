import AboutUs from "@/Components/AboutUs";
import FAQ from "@/Components/FAQ";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Home() {
  return (

    <main className="mx-auto px-4 md:w-[1200px] font-primary">
      <Navbar />
      <Hero />


      <div>
        <h1 className="mb-3 font-bold text-2xl text-center">What&apos;s the procedure</h1>

        <div className="md:flex justify-between items-start text-sm">

          <div className="my-4 md:my-0 md:pr-3 md:w-1/3">
            <h2 className="flex items-center my-2 font-semibold"> <span className="pr-1 text-green-500 text-lg"><IoCheckmarkCircle /></span> Details and documents gathering</h2>
            <p className="">Our experienced executive will gather all your details and documents required to apply for US Visa.</p>
          </div>

          <div className="my-4 md:my-0 md:px-6 md:w-1/3">
            <h2 className="flex items-center my-2 font-semibold"> <span className="pr-1 text-green-500 text-lg"><IoCheckmarkCircle /></span> DS 160 Form Filling & US Visa Fee payment</h2>
            <p className="">Our executive will fill the DS 160 form for US Visa application on your behalf. </p>
          </div>

          <div className="my-4 md:my-0 md:pl-3 md:w-1/3">
            <h2 className="flex items-center my-2 font-semibold"> <span className="pr-1 text-green-500 text-lg"><IoCheckmarkCircle /></span> Booking the earliest appointment slot</h2>
            <p className="">Our team of Visa Experts sit through out the day to spot any new or cancelled vacancies and provide you with the earliest appointment schedule</p>
          </div>

        </div>
      </div>


<FAQ/>



<AboutUs/>










      <div className="flex flex-col justify-center items-center md:p-24 min-h-screen">

        <h1 className="font-semibold text-3xl text-center md:text-5xl">Under Development</h1>


      </div>






    </main>
  );
}


