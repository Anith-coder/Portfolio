import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {
  const config = {
    line1: "Hi, My Name Is Maria Anith. I'm a passionate Software Developer specializing in front-end and back-end technologies, with a focus on building efficient and user-friendly web applications.",
    line2: "I'm Proficient In Java, React.js, JavaScript, MongoDB, and Tailwind CSS. I leverage these technologies to develop scalable and dynamic web applications."
  }
  return (
    <section id='about' className='flex flex-col md:flex-row bg-primary px-5'>
      <div className='md:w-1/2'>
        <img src={AboutImg}></img>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white font-hero-font'>
          <h1 className='text-5xl border-b-4 border-secondary mb-5 w-[235px] font-bold'><span className='text-black'>About</span> Me</h1>
          <p className='pb-6 text-2xl'>{config.line1}</p>
          <p className='pb-6 text-2xl'>{config.line2}</p>
        </div>
      </div>
    </section>
  )
}

export default About
