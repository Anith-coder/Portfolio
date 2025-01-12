import React from 'react'
import ResumeImg from '../assets/resume.jpg'

const Resume = () => {
  const config = {
    resumeLink: '/Maria_Anith_P.pdf'
  }
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
      <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
        <img className='w-[300px]' src={ResumeImg}></img>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white font-hero-font'>
          <h1 className='text-5xl border-b-4 border-secondary mb-5 w-[195px] font-bold text-black'>Resume</h1>
          <p className='pb-6 text-2xl'>You Can View My Resume <a className='button' href={config.resumeLink} download="Maria_Anith_P_Resume.pdf">Download</a></p>
        </div>
      </div>
    </section>
  )
}

export default Resume
