import React from 'react'
import projectimg1 from '../assets/Portfolio.png'
import projectimg2 from '../assets/QrCode.png'
import projectimg3 from '../assets/To-Do-List.png'

const Projects = () => {
    const config = {
        projects: [
            {
                image: projectimg1,
                description: "A Portfolio Website, Built With React.js And Tailwind CSS",
                link1: "https://github.com/Anith-coder/PortFolio.git",
                link2: "https://maria-anith-coder.web.app/",
            },
            {
                image: projectimg2,
                description: "A Qr Code Generator And Downloader, Built With React.js",
                link1: "https://github.com/Anith-coder/QrGenerator",
                link2: "https://qrgenerator-anith-coder.web.app/",
            },
            {
                image: projectimg3,
                description: "To Do List , Built WIth HTML, CSS, Javascript",
                link1: "https://github.com/Anith-coder/Todo-List",
                link2: "https://todolist-by-anith-coder.web.app",
            }
        ]
    }
    return (
        <section id='projects' className='flex flex-col py-20 px-5 justify-center text-white bg-secondary font-hero-font'>
            <div className='w-full'>
                <div className='flex flex-col px-10 py-5'>
                    <h1 className='text-5xl border-b-4 mb-5 w-[198px] font-bold border-primary'>Projects</h1>
                    <p className='text-2xl pb-6 text-black'>These Are Some Of My Best Projects. I Have Built This projects With React And Tailwind CSS. Check Them Out.</p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project) => (
                        <div className='relative'>
                            <img className='h-[200px] w-[500px] border-4' src={project.image} />
                            <div className='project-dis'>
                                <p className='text-center px5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='button' target='_blank' href={project.link1}>View code</a>
                                    <a className='button' target='_blank' href={project.link2}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Projects
