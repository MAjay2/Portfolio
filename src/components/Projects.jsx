import React from 'react';
import Card from './card';

function Projects() {
  return (
    <>
      <div className='bg-black text-white flex py-10 justify-between  px-20'>
      <h1 className='text-6xl font-bold  '>Projects</h1>
        <button className=" font-test h-[40px] border-b border-b-green-500 border-b-4">
          CONTACT ME
        </button>
        </div>
      

      <div className=' grid place-items-center   bg-black text-white grid-cols-1 md:grid-cols-2  '>
      
       
        <Card img="public/images/1.png" siteUrl="https://profound-dusk-a82b40.netlify.app" codeUrl="https://github.com/MAjay2/calendly.git" appName="Calendly" languages="HTML CSS JAVASCRIPT"/>
        <Card img="public/images/news.png" siteUrl="https://portal-orcin-iota.vercel.app/" codeUrl="https://github.com/MAjay2/portal.git" appName="News Portal" languages="REACT JS"/>
        <Card img="public/images/3.png" siteUrl="https://taupe-fox-92a47a.netlify.app" codeUrl="https://github.com/MAjay2/fintory-replica.git" appName="Fintory" languages="HTML CSS JAVASCRIPT"/>
        <Card img="public/images/4.png" siteUrl="https://zippy-valkyrie-03193e.netlify.app" codeUrl="https://github.com/MAjay2/devjobs-app.git" appName="Devjobs" languages="REACT JS"/>
        <Card img="public/images/ecommerce.png" siteUrl="https://ecommerce-site-beige.vercel.app/" codeUrl="https://github.com/MAjay2/Ecommerce-site.git" appName="Ecommerce" languages="REACT JS"/>
        <Card img="public/images/spin.png" siteUrl="https://spinthebottleklm.netlify.app/" codeUrl="https://github.com/blameleo/spin-the-bottle.git" appName="Spin the bottle" languages="HTML CSS JAVASCRIPT"/>
        </div>
      
    </>
  );
}

export default Projects;
