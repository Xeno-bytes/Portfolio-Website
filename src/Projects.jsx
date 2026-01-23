import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import placeholder from './assets/website-thumbnail.png'
import tracktastyweb from './assets/tracktasty-thumbnail.png'
import tracktastyapp from './assets/tracktasty-app-thumbnail.jpg'


function Projects() {
    const projectsData = [
        {
            title: "TrackTasty", 
            subtitle: "Macro Tracking Application with Predictive Analysis, AI-Powered Chatbot and Real Time Food Recognition through Camera.", 
            tags: ["Mobile Application", "Flutter", "Firebase", "Artificial Intelligence", "API Integration", "HealthTech", "Predictive Analysis"], 
            imgsrc: tracktastyapp, 
            src: "https://tracktasty-website.vercel.app/download"
        },

        {
            title: "TrackTasty Launch Page", 
            subtitle: "Landing page created to promote the mobile application.", 
            tags: ["Website", "React", "Tailwind CSS", "Landing Page", "Responsive Design"], 
            imgsrc:tracktastyweb,
            src: "https://tracktasty-website.vercel.app/"
        },

        {
            title: "Developer Portfolio Page", 
            subtitle: "Personal website to showcase projects that I have created.", 
            tags: ["Website", "React", "Tailwind CSS", "Project Showcase", "UI/UX"], 
            imgsrc: placeholder,
            src: "https://portfolio-lawrence-santos.vercel.app/"
        },
    ]
    return ( 
        <div>
            <h1 className='pb-5'>
                🗂️ Projects
            </h1>

            {/* Container for Horizontal Scrolling */}
            <div className='overflow-x-auto snap-x snap-mandatory whitespace-nowrap pb-10 custom-scrollbar pt-5'>
                <div className="inline-flex flex-row items-stretch gap-8 px-4 ">
                    {projectsData.map((project, index) => (
                        <a 
                            key={index} 
                            href={project.src} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group block whitespace-normal snap-center shrink-0"
                        >
                            <div className='transform ease-in-out hover:-translate-y-1 w-100 md:w-162.5 h-full p-8 rounded-3xl border-2 border-border-primary/20 bg-surface-a10 transition-all duration-500 group-hover:border-primary-a30 group-hover:bg-surface-a20 shadow-md hover:shadow-2xl flex flex-col '>
                                
                                <div className='w-full aspect-video overflow-hidden rounded-2xl mb-8 border border-border-primary/5 shrink-0 bg-black/20'>
                                    <img 
                                        className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
                                        src={project.imgsrc} 
                                        alt={project.title}
                                    />
                                </div>
                                
                                <h2 className='text-3xl font-bold mb-4 group-hover:text-primary-a30 transition-colors'> 
                                    {project.title}
                                </h2>

                                <p className='text-lg mb-6 leading-relaxed grow'>
                                    {project.subtitle}
                                </p>

                                <ul className='flex flex-wrap gap-3 mt-auto'>
                                    {project.tags.map((tag, tagIndex) => (
                                        <li 
                                            key={tagIndex} 
                                            className='border border-border-primary/10 rounded-full px-4 py-1.5 text-sm font-medium bg-surface-a20 transition-colors duration-700 group-hover:bg-surface-a10 text-text-secondary'
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div> 
                        </a>
                    ))}
                </div>
            </div>
            
            
        </div>
    )
}

export default Projects;