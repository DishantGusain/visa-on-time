import AboutUs from "@/Components/AboutUs";
import FAQ from "@/Components/FAQ";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Testimonials from "@/Components/Testimonials";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Home() {
  return (

    <main className="mx-auto px-4 md:w-[1000px] 2xl:w-[1300px] font-primary">

      <Hero />

      <section id="Procedure" className="my-10 md:my-20">
        <h1 className="mb-6 font-bold text-center text-xl md:text-2xl">What&apos;s The Procedure</h1>

        <div className="md:flex justify-between items-start text-sm">

          <div className="my-4 md:my-0 md:pr-6 md:w-1/3">
            <h2 className="flex items-start my-2 font-medium text-sm md:text-base"> <span className="pt-1 pr-1 text-[#EB560D]"><IoCheckmarkCircle /></span> Details and documents gathering</h2>
            <p className="">Our experienced executive will gather all your details and documents required to apply for US Visa.</p>
          </div>

          <div className="my-4 md:my-0 md:w-1/3">
            <h2 className="flex items-start my-2 font-medium text-sm md:text-base"> <span className="pt-1 pr-1 text-[#EB560D]"><IoCheckmarkCircle /></span> DS 160 Form Filling & US Visa Fee payment</h2>
            <p className="">Our executive will fill the DS 160 form for US Visa application on your behalf. </p>
          </div>

          <div className="my-4 md:my-0 md:pl-6 md:w-1/3">
            <h2 className="flex items-start my-2 font-medium text-sm md:text-base"> <span className="pt-1 pr-1 text-[#EB560D]"><IoCheckmarkCircle /></span> Booking the earliest appointment slot</h2>
            <p className="">Our team of Visa Experts sit through out the day to spot any new or cancelled vacancies and provide you with the earliest appointment schedule</p>
          </div>

        </div>
      </section>

      <FAQ />

      <AboutUs />

      <Testimonials />





      {/* <div className="flex flex-col justify-center items-center md:p-24 min-h-screen">

        <h1 className="font-semibold text-3xl text-center md:text-5xl">Under Development</h1>

      </div> */}




    </main>
  );
}


