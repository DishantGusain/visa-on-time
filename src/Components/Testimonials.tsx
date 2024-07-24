export default function Testimonials() {
    return <section className="relative my-10 md:my-16 px-2 md:px-0">

        <h1 className="mb-6 font-bold text-center text-xl md:text-2xl desktop:text-4xl">Our Customer Stories</h1>

        <div className="md:flex justify-center items-center">
            <div className="bg-white shadow-gray-300 shadow-xl md:shadow-2xl p-8 rounded-2xl ring-2 ring-slate-100">
                <div className="flex items-center gap-4 mb-6">
                    <img src="/Testimonials/vinaymehta.webp" alt="Vinay Mehta" width="20%" height="20%" className="rounded-full" />

                    <div className="gap-1 grid">
                        <h1 className="font-semibold text-[#141B52] text-base md:text-xl desktop:text-2xl">Vinay Mehta</h1>
                        <span className="font-medium text-gray-500 text-sm desktop:text-lg">B.Tect (Mechanical) </span>
                    </div>
                </div>

                <p className="font-medium text-base text-gray-500 desktop:text-lg"> Thanks VisaOnTime for making my American dream come true. I had been trying to get US Visitor Visa for a long time without any success.</p>
            </div>

            <div className="bg-white shadow-gray-300 shadow-xl md:shadow-2xl md:mx-8 my-5 md:my-0 p-8 rounded-2xl ring-2 ring-slate-100">
                <div className="flex items-center gap-4 mb-6">
                    <img src="/Testimonials/akashmulani.webp" alt="Akash Mulani" width="20%" height="20%" className="rounded-full" />

                    <div className="gap-1 grid">
                        <h1 className="font-semibold text-[#141B52] text-base md:text-xl desktop:text-2xl">Akash Mulani</h1>
                        <span className="font-medium text-gray-500 text-sm desktop:text-lg">H.S.C Passed</span>
                    </div>
                </div>

                <p className="font-medium text-base text-gray-500 desktop:text-lg">I have been through multiple Visa Consultancy services, no one comes close to this, if you really want to get your US Visa, try VisaOnTime.</p>
            </div>

            <div className="bg-white shadow-gray-300 shadow-xl md:shadow-2xl p-8 rounded-2xl ring-2 ring-slate-100">
                <div className="flex items-center gap-4 mb-6">
                    <img src="/Testimonials/ajeetsingh.webp" alt="Ajeet Singh" width="20%" height="20%" className="rounded-full" />

                    <div className="gap-1 grid">
                        <h1 className="font-semibold text-[#141B52] text-base md:text-xl desktop:text-2xl">Ajeet Singh</h1>
                        <span className="font-medium text-gray-500 text-sm desktop:text-lg">Job @ Infosys</span>
                    </div>
                </div>

                <p className="font-medium text-base text-gray-500 desktop:text-lg">My friends are still surprised how I got US Visa before them even after applying late. Kudos to VisaOnTime, Highly Recommended!</p>
            </div>
        </div>

    </section>;
}