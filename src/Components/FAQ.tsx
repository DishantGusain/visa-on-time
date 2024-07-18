import React from "react";

export default function FAQ() {
  return (

    <section className="relative px-2 md:px-0 py-10 md:py-16 font-semibold">
      
      <h1 className="mb-3 font-bold text-2xl text-center">FAQs</h1>


        <div className="faq-content">


          <div className="relative py-4 border border-b-gray-300 rounded-t-xl faq-question">
            <input id="q1" type="checkbox" className="panel" />
            <div className="plus">+</div>
            <label htmlFor="q1" className="top-0 absolute bg-transparent w-full h-full text-transparent">
              What documents are needed?
            </label>
            <label htmlFor="q1" className="panel-title">
              What documents are needed?
            </label>
            <div className="z-10 panel-content">
              Mainly you will only need your Passport and ID eg. Aadhar Card. You need to have supporting documents like academic, marriage certificates etc.
            </div>
          </div>



          <div className="relative py-4 border border-b-gray-300 faq-question">
            <input id="q2" type="checkbox" className="panel" />
            <div className="plus">+</div>
            <label htmlFor="q2" className="top-0 absolute w-full h-full text-transparent">
              Can I get appointment on a specific date or location?
            </label>
            <label htmlFor="q2" className="panel-title">
              Can I get appointment on a specific date or location?
            </label>
            <div className="panel-content">
              Unfortunately there are only a few dates available if we want to book in a month or two and we have to be as quick as possible to book them. However, if you want to book after a year, then we can choose a desired date. For location, we can try for a particular location if you have a preference, but for the earliest date it is advisable to take up any location.
            </div>
          </div>



          <div className="relative py-4 border border-b-gray-300 faq-question">
            <input id="q3" type="checkbox" className="panel" />
            <div className="plus">+</div>
            <label htmlFor="q3" className="top-0 absolute w-full h-full text-transparent">
              How & When do I need to pay?
            </label>
            <label htmlFor="q3" className="panel-title">
              How & When do I need to pay?
            </label>
            <div className="panel-content">
              You need to pay 185$ as US Visa Fee to submit the DS160 Form. And you need to pay the remaining amount(i.e.₹39,999-$185) after we book your earliest appointment date.
            </div>
          </div>


          <div className="relative py-4 border border-b-gray-300 faq-question">
            <input id="q4" type="checkbox" className="panel" />
            <div className="plus">+</div>
            <label htmlFor="q4" className="top-0 absolute w-full h-full text-transparent">
              Will I get confirmed US Visa?
            </label>
            <label htmlFor="q4" className="panel-title">
              Will I get confirmed US Visa?
            </label>
            <div className="panel-content">
              NO. We will just provide guaranteed US Visa APPOINTMENT within 45 days. Getting a confirmed US Visa depends upon a lot of factors, we will surely help you with the best information possible but we can not guarantee confirmed Visa.
              <a href="https://en.wikipedia.org/wiki/The_Unanswered_Question" target="_blank">
                unanswered
              </a>
            </div>
          </div>


          <div className="relative py-4 border rounded-b-xl faq-question">
            <input id="q5" type="checkbox" className="panel" />
            <div className="plus">+</div>
            <label htmlFor="q5" className="top-0 absolute w-full h-full text-transparent">
              Why choose VisaOnTime?
            </label>
            <label htmlFor="q5" className="panel-title">
              Why choose VisaOnTime?
            </label>
            <div className="panel-content">
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
