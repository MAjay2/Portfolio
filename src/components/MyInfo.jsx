import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { Link } from 'react-router-dom'


function MyInfo() {
  return (
    <div className=' '>

        <h1 className='  sm:hidden text-white text-4xl  relative font-test z-10 pb-10'>Steve Okyere Oduro-Amoyaw</h1>
        <img className=' absolute left-10 mt-20 z-50 ' src="/Ovalmany.png" alt="" />
    <div className='sm:grid sm:grid-cols-1 flex flex-col-reverse   md:grid-cols-2 bg-black  '>
        <div className='lg:w-[800px] md:w-[400px]   '>
        <h1 className='hidden sm:block text-white text-4xl  relative font-test z-10 pb-10'>Steve Okyere Oduro-Amoyaw</h1>
        <h1 className='text-white text-[25px] text-center sm:text-start lg:text-[90px] md:text-[40px] relative font-test z-10 font-bold'>Nice to meet you!</h1>
        <h1 className='text-white text-[25px] text-center sm:text-start  lg:text-[90px] md:text-[40px] relative font-test font-bold z-10'>I'm <span className='border-b border-b-4 border-b-green-500'>Steve Oduro-Amoyaw</span> </h1>
        <p className='text-white text-center font-test sm:text-start mt-3'> I’m a Results-driven Technology Product Manager  <br/>
         with extensive experience in leading Agile teams, business analysis, <br/>
          and delivering AI solutions.</p>
            
            <div className='text-center sm:text-start bg-black '>
            <button className='border-b border-b-green-500 mt-3 border-b-4 text-white '>CONTACT ME</button>
            </div>
        </div>

        <div>
            <div className='   flex sm:justify-end   relative z-20 md:left-30 xl:left-5 lg:left-24 sm:left-28  '>
               {/*<Link to="https://github.com/MAjay2" target='_blank'><AiFillGithub className='mr-10 hover:text-green-500 text-3xl  text-white'/></Link>*/}
               <Link to="https://www.linkedin.com/in/steve-oduro-amoyaw-1956b3162/" target='_blank'> <BsLinkedin className='mr-10 hover:text-green-500 text-3xl text-white'/></Link>
               <Link to="mailto:steveamoyaw@outlook.com?subject=Regarding%20your%20question"> <SiGmail className=' mr-10 hover:text-green-500  text-3xl text-white'/></Link>
                <Link><AiOutlineWhatsApp className='mr-20 z-40 hover:text-green-500 text-3xl text-white'/></Link>
            </div>

            <div>
                <img src="/steve.jpg" className='h-[500px]  w-96 relative  md:w-96 lg:-top-16 lg:left-60 sm:-top-16 sm:left-20 -top-0 ' alt="" />
                <img src="/Oval.png" className='absolute top-80 right-0 xl:hidden' alt="" />
                <img src="/fulloval.png" className='hidden z-40 md:hidden lg:hidden xl:block absolute fixed top-80 right-80 mr-44' alt="" />
            </div>



            

        </div>
       
    
    </div>
    <hr className='mt-5 '/>
    </div>
    
  )
}

export default MyInfo