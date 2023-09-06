import React from "react";




export default function Skills() {
  
  return (
    <div className="   sm:mt-0   mt-32  text-white grid md:grid-cols-2 relative bg-black lg:grid-cols-3 text-center gap-y-10 place-items-center sm:place-items-center   pb-20 ">
      <div>
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px] sm:text-left">
            HTML
          </h1>
          
        </div>

        <p className="text-center sm:text-left">1 Years Experience</p>
      </div>
      <div >
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px] text-center sm:text-left">
            CSS
          </h1>
         
        </div>
        <p className="text-center sm:text-left">1 Years Experience</p>
      </div>
      <div >
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px] sm:text-left">
            JAVASCRIPT
          </h1>
         
        </div>
        <p className="text-center sm:text-left">1 Years Experience</p>
      </div>
      <div>
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px]">REACT</h1>
         
        </div>
        <p className="text-center sm:text-left">1 Year Experience</p>
      </div>
      <div data-aos="zoom-in" data-aos-delay="800">
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px]">GIT</h1>
          
        </div>
        <p className="text-center sm:text-left">1 Year Experience</p>
      </div>
      <div>
        {" "}
        <div className="flex items-center">
          <h1 className="font-bold text-[32px] sm:text-[48px]">TAILWINDCSS</h1>
         
        </div>
        <p className="text-center sm:text-left">1 Year Experience</p>
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