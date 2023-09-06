import React from "react";
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="border-t px-6 sm:px-10 lg:px-[165px] bg-neutral-900 text-white">
      <div className=" sm:flex items-center justify-between ">
        <div className="sm:flex items-center">
          <h1 className="  relative z-20 text-center text-[24px] sm:text-[32px] py-5 font-black font-test">
            MichaelAdjei
          </h1>
          <FaLaptopCode className="hidden sm:block text-3xl ml-2 text-primary-green" />
        </div>

        <div className=" flex w-[174px]  mx-auto sm:mx-0 sm:w-40 text-xl relative z-20 sm:justify-between justify-around   ">
          <Link to="https://github.com/MAjay2 " target="_blank">
            <SiGithub className="hover:text-green-500"/>
          </Link>

          <Link
            to="https://www.linkedin.com/in/michael-adjei-3a986422a/"
            target="_blank"
          >
            <SiLinkedin  className="hover:text-green-500"/>
          </Link>

          <Link
            to="mailto:adjeimichael405@gmail.com?subject=Regarding%20your%20question"
            target="_blank"
          >
            <SiGmail className="hover:text-green-500"/>
          </Link>

          <Link to="https://wa.me/233572564119" target="_blank">
            <SiWhatsapp className="hover:text-green-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}