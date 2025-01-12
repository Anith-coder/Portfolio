import React from 'react'
import HeroImg from '../assets/Hero.png'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa6";

const Hero = () => {
  const config = {
    subtitle: "I'm An Software Developer",
    social: {
      github: 'https://github.com/Anith-coder',
      linkedin: 'https://www.linkedin.com/in/maria-anith-57b915293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      facebook: 'https://www.facebook.com/mari.anith.9?mibextid=ZbWKwL'
    }
  }
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
      <div className='md:w-1/2 flex-col'>
        <h1 className=' text-white text-6xl font-hero-font'><span className='text-black'>Hi,</span> <br /> I'm <span className='text-black '>Maria</span> Anith
          <p className='text-3xl mt-2 text-black'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
          <a href={config.social.github} className='pr-5 hover:text-white'><FaGithub size={40} /></a>
          <a href={config.social.linkedin} className='pr-5 hover:text-white'><FaLinkedin size={40} /></a>
          <a href={config.social.facebook} className='pr-5 hover:text-white'><FaFacebook size={40} /></a>
        </div>
      </div>
      <img className='md:w-1/3' src={HeroImg} />
    </section>
  )
}

export default Hero
