import React from "react";




export default function Skills() {
  
  return (
    <div className="   sm:mt-0   mt-32 lg:mt-5 text-white grid md:grid-cols-2 relative bg-black lg:grid-cols-3 text-center gap-y-10 place-items-center sm:place-items-center   pb-20 ">

      
      <div>
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[20px] sm:text-left">
          AI Product Development (Machine Learning, NLP)
          </h1>
          
        </div>

        <p className="text-center sm:text-left"></p>
      </div>
      <div >
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[20px] text-center sm:text-left">
          Stakeholder Engagement
          </h1>
         
        </div>
        <p className="text-center sm:text-left"></p>
      </div>
      <div >
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[20px] sm:text-left">
          Business Process Modeling
          </h1>
         
        </div>
        <p className="text-center sm:text-left"></p>
      </div>
      <div>
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[20px]">Team Leadership and Collaboration</h1>
         
        </div>
        <p className="text-center sm:text-left"></p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="800">
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[20px]">Data Analysis for Marketing Insights</h1>
          
        </div>
        <p className="text-center sm:text-left"></p>
      </div>
      <div>
        {" "}
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[20px]"> User Testing and Swimlane Diagrams</h1>
         
        </div>
        <p className="text-center sm:text-left"></p>
      </div>
      <img
        className=" absolute -right-6 bottom-[20px] md:-right-10 md:-bottom-[30px] lg:-right-30 lg:-bottom-1"
        src="/images/Group 26.png"
        alt=""
      />
      <hr className="bg-white w-full sm:hidden" />
    </div>
  );
}