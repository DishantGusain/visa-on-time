export default function form() {
    return <div>




        <div className="flex justify-center items-center">
            <div className="relative mt-20">
                <div className="relative w-full">
                    <div className="relative">
                        <input type="text" id="default-search" className="block border-gray-300 bg-transparent shadow-xs px-4 py-2 border rounded-full w-full max-w-xs font-normal text-gray-900 text-sm leading-relaxed placeholder-gray-400 focus:outline-none" placeholder="First Name" required />
                    </div>
                    <div className="relative">
                        <input type="text" id="default-search" className="block border-gray-300 bg-transparent shadow-xs px-4 py-2 border rounded-full w-full max-w-xs font-normal text-gray-900 text-sm leading-relaxed placeholder-gray-400 focus:outline-none" placeholder="Last Name" required />
                    </div>
                </div>
                <div className="relative">
                    <input type="text" id="default-search" className="block border-gray-300 bg-transparent shadow-xs px-4 py-2 border rounded-full w-full max-w-xs font-normal text-gray-900 text-sm leading-relaxed placeholder-gray-400 focus:outline-none" placeholder="Mobile Number" required />
                </div>


                <div className="block w-full">
                    <label htmlFor="countries" className="block mb-2 w-full font-medium text-gray-600 text-sm">Country</label>
                    <select id="countries" className="block border-gray-300 px-4 py-2.5 border rounded-lg w-full h-12 text-base text-gray-600 focus:outline-none">
                        <option selected>- select -</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>




                <div className="relative">
                    <input type="text" id="default-search" className="block border-gray-300 bg-transparent shadow-xs px-4 py-2 border rounded-full w-full max-w-xs font-normal text-gray-900 text-sm leading-relaxed placeholder-gray-400 focus:outline-none" placeholder="City" required />
                </div>





                <div className="block w-full">
                    <label htmlFor="countries" className="block mb-2 w-full font-medium text-gray-600 text-sm">Country</label>
                    <select id="countries" className="block border-gray-300 px-4 py-2.5 border rounded-lg w-full h-12 text-base text-gray-600 focus:outline-none">
                        <option selected>- select -</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>




            </div>
        </div>













        <div className="flex flex-col justify-center items-center md:p-24 min-h-screen">

            <h1 className="font-semibold text-3xl text-center md:text-5xl">Under Development</h1>

        </div>









    </div>;
}