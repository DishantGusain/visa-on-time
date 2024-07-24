
export default function blog() {

    return <div className="desktop:w-[1700px] mx-auto px-4 md:px-8 lg:px-4 lg:w-[980px] 2xl:w-[1250px]">

        <div className="min-h-screen">
            <h1 className="my-10 lg:my-20 mb-6 font-bold text-4xl text-center lg:text-6xl">Blogs</h1>
            <a href="/us-visa-application-process-for-indian-travelers-a-step-by-step-guide" className="">
                <div className="relative md:flex items-center w-full">
                    <div className="md:w-3/12 lg:w-2/12 ">
                        <img className="rounded-3xl h-[180px] w-full object-cover" alt="blog" src="/blogs/1.webp" />
                    </div>

                    <div className="md:pl-8 md:w-9/12 lg:w-10/12">
                        <h1 className="mt-3 lg:mt-0 mb-3 font-bold text-xl md:text-3xl">
                            US Visa Application Process for Indian Travelers: A Step-by-Step Guide
                        </h1>

                        <p className=" font-medium">
                            Feb 2, 2024
                        </p>
                    </div>
                </div>
            </a>
        </div>

    </div>;
}