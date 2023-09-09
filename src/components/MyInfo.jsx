import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { Link } from 'react-router-dom'


function MyInfo() {
  return (
    <div className='px-40 '>

        <h1 className='  sm:hidden text-white text-4xl  relative font-test z-10 pb-10'>Michaeladjei</h1>
        <img className=' absolute left-10 mt-20 z-50 ' src="/public/images/Ovalmany.png" alt="" />
    <div className='sm:grid sm:grid-cols-1 flex flex-col-reverse   md:grid-cols-2 bg-black  '>
        <div className='lg:w-[800px] md:w-[400px]   '>
        <h1 className='hidden sm:block text-white text-4xl  relative font-test z-10 pb-10'>Michaeladjei</h1>
        <h1 className='text-white text-[25px] text-center sm:text-start lg:text-[90px] md:text-[40px] relative font-test z-10 font-bold'>Nice to meet you!</h1>
        <h1 className='text-white text-[25px] text-center sm:text-start  lg:text-[90px] md:text-[40px] relative font-test font-bold z-10'>I'm <span className='border-b border-b-4 border-b-green-500'>Michael Adjei .</span> </h1>
        <p className='text-white text-center font-test sm:text-start mt-3'>Based in Ghana, I’m a front-end developer <br/>
         passionate about building accessible web apps<br/>
          that users love.</p>
            
            <div className='text-center sm:text-start bg-black '>
            <button className='border-b border-b-green-500 mt-3 border-b-4 text-white '>CONTACT ME</button>
            </div>
        </div>

        <div>
            <div className='   flex sm:justify-end   relative z-20 md:left-30 xl:left-5 lg:left-24 sm:left-28  '>
               <Link to="https://github.com/MAjay2" target='_blank'><AiFillGithub className='mr-10  text-3xl  text-white'/></Link>
               <Link to="https://www.linkedin.com/in/michael-adjei-3a986422a/" target='_blank'> <BsLinkedin className='mr-10  text-3xl text-white'/></Link>
               <Link> <SiGmail className=' mr-10  text-3xl text-white'/></Link>
                <Link><AiOutlineWhatsApp className='mr-10 z-40 text-3xl text-white'/></Link>
            </div>

            <div>
                <img src="public/images/image.jpg" className='h-[700]  w-96 relative  lg:-top-16 lg:left-60 sm:-top-16 sm:left-20 -top-0 ' alt="" />
                <img src="public/images/Oval.png" className='absolute top-80 right-0 xl:hidden' alt="" />
                <img src="public/images/fulloval.png" className='hidden z-40 md:hidden lg:hidden xl:block absolute fixed top-80 right-80 mr-44' alt="" />
            </div>



            

        </div>
       
    
    </div>
    <hr className='mt-5 '/>
    </div>
    
  )
}

export default MyInfo