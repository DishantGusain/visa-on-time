import React from "react";

export default function FAQ() {
  return (

    <section id="FAQ" className="relative my-10 md:my-16 font-semibold">
      <h1 className="mb-6 font-bold text-center text-xl md:text-2xl desktop:text-4xl">Frequently Asked Questions</h1>

      <div className="rounded-2xl divide-y faq-content">
        <div className="relative bg-[#F2F2F2] py-5 rounded-t-xl faq-question">
          <input id="q1" type="checkbox" className="panel" />
          <div className="top-3 ml-5 font-light text-[40px] text-gray-400 plus">+</div>
          <label htmlFor="q1" className="top-0 z-10 absolute w-full h-full text-transparent cursor-pointer">

          </label>
          <div id="q1" className="md:hidden pl-14 text-gray-800 panel-title">
            <label htmlFor="q1" className="">
              What documents are needed?
            </label>
          </div>

          <label htmlFor="q1" className="md:block hidden pl-14 text-gray-800 panel-title">
            What documents are needed?
          </label>

          <div className="text-gray-500 panel-content">
            Mainly you will only need your Passport and ID eg. Aadhar Card. You need to have supporting documents like academic, marriage certificates etc.
          </div>
        </div>

        <div className="relative bg-[#F2F2F2] py-5 faq-question">
          <input id="q2" type="checkbox" className="panel" />

          <div className="top-3 ml-5 font-light text-[40px] text-gray-400 plus">+</div>
          <label htmlFor="q2" className="top-0 z-10 absolute w-full h-full text-transparent cursor-pointer">

          </label>
          <div id="q2" className="md:hidden pl-14 text-gray-800 panel-title">
            <label htmlFor="q2" className="">
              Can I get appointment on a specific date or location?
            </label>
          </div>

          <label htmlFor="q2" className="md:block hidden pl-14 text-gray-800 panel-title">
            Can I get appointment on a specific date or location?
          </label>

          <div className="text-gray-500 panel-content">
            Unfortunately there are only a few dates available if we want to book in a month or two and we have to be as quick as possible to book them. However, if you want to book after a year, then we can choose a desired date. For location, we can try for a particular location if you have a preference, but for the earliest date it is advisable to take up any location.
          </div>
        </div>

        <div className="relative bg-[#F2F2F2] py-5 faq-question">
          <input id="q3" type="checkbox" className="panel" />

          <div className="top-3 ml-5 font-light text-[40px] text-gray-400 plus">+</div>
          <label htmlFor="q3" className="top-0 z-10 absolute w-full h-full text-transparent cursor-pointer">

          </label>
          <div id="q3" className="md:hidden pl-14 text-gray-800 panel-title">
            <label htmlFor="q3" className="">
              How & When do I need to pay?
            </label>
          </div>

          <label htmlFor="q3" className="md:block hidden pl-14 text-gray-800 panel-title">
            How & When do I need to pay?
          </label>

          <div className="text-gray-500 panel-content">
            You need to pay 185$ as US Visa Fee to submit the DS160 Form. And you need to pay the remaining amount(i.e.₹39,999-$185) after we book your earliest appointment date.
          </div>
        </div>

        <div className="relative bg-[#F2F2F2] py-5 faq-question">
          <input id="q4" type="checkbox" className="panel" />

          <div className="top-3 ml-5 font-light text-[40px] text-gray-400 plus">+</div>
          <label htmlFor="q4" className="top-0 z-10 absolute w-full h-full text-transparent cursor-pointer">

          </label>
          <div id="q4" className="md:hidden pl-14 text-gray-800 panel-title">
            <label htmlFor="q4" className="">
              Will I get confirmed US Visa?
            </label>
          </div>

          <label htmlFor="q4" className="md:block hidden pl-14 text-gray-800 panel-title">
            Will I get confirmed US Visa?
          </label>

          <div className="text-gray-500 panel-content">
            NO. We will just provide guaranteed US Visa APPOINTMENT within 45 days. Getting a confirmed US Visa depends upon a lot of factors, we will surely help you with the best information possible but we can not guarantee confirmed Visa.
            <a href="https://en.wikipedia.org/wiki/The_Unanswered_Question" target="_blank">
              unanswered
            </a>
          </div>
        </div>



        <div className="relative bg-[#F2F2F2] py-5 rounded-b-xl faq-question">
          <input id="q5" type="checkbox" className="panel" />

          <div className="top-3 ml-5 font-light text-[40px] text-gray-400 plus">+</div>
          <label htmlFor="q5" className="top-0 z-10 absolute w-full h-full text-transparent cursor-pointer">

          </label>
          <div id="q5" className="md:hidden pl-14 text-gray-800 panel-title">
            <label htmlFor="q5" className="">
              Why choose VisaOnTime?
            </label>
          </div>

          <label htmlFor="q5" className="md:block hidden pl-14 text-gray-800 panel-title">
            Why choose VisaOnTime?
          </label>
          <div className="text-gray-500 panel-content">
            We take pride in being the only company globally to provide the Urgent US Visa Services at the most affordable rate and with the best success rate.
            <a href="https://en.wikipedia.org/wiki/The_Unanswered_Question" target="_blank">
              unanswered
            </a>
          </div>
        </div>


      </div>

    </section>
  );
}
