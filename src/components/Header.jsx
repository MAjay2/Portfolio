import React from "react";
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import {FaLaptopCode} from 'react-icons/fa'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className=" sm:flex items-center justify-between ">
      <div className="sm:flex items-center">
      <h1 className="relative z-20 text-center text-[24px] text-white sm:text-[32px] py-5 font-black font-test">
      Steve Okyere Oduro-Amoyaw
      </h1>
      <FaLaptopCode className="hidden sm:block text-3xl ml-2  text-green-500"/>
      </div>


      <div className="flex w-[174px]  mx-auto sm:mx-0 sm:w-40 text-xl relative z-20 sm:justify-between justify-around   ">
        

        <Link to="https://www.linkedin.com/in/steve-oduro-amoyaw-1956b3162/" target="_blank">
        <SiLinkedin className="text-white" />
        </Link>

        <Link to="mailto:steveamoyaw@outlook.com?subject=Regarding%20your%20question" target="_blank">
        <SiGmail className="text-white" />
        </Link>

        <Link to="https://wa.me/233263161240" target="_blank">
        <SiWhatsapp className="text-white" />
        </Link>
       

        

      </div>
    </div>
  );
}