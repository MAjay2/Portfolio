import React from "react";
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import {FaLaptopCode} from 'react-icons/fa'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className=" sm:flex items-center justify-between ">
      <div className="sm:flex items-center">
      <h1 className="relative z-20 text-center text-[24px] text-white sm:text-[32px] py-5 font-black font-test">
      Michael Adjei
      </h1>
      <FaLaptopCode className="hidden sm:block text-3xl ml-2  text-green-500"/>
      </div>


      <div className="flex w-[174px]  mx-auto sm:mx-0 sm:w-40 text-xl relative z-20 sm:justify-between justify-around   ">
        

        <Link to="https://www.linkedin.com/in/michael-adjei-3a986422a/" target="_blank">
        <SiLinkedin className="text-white" />
        </Link>

        <Link to="mailto:adjeimichael405@gmail.com?subject=Regarding%20your%20question" target="_blank">
        <SiGmail className="text-white" />
        </Link>

        <Link to="https://wa.me/233557879580" target="_blank">
        <SiWhatsapp className="text-white" />
        </Link>
       

        

      </div>
    </div>
  );
}