import { FolderGit2 } from 'lucide-react'
import placeholder from './assets/website-thumbnail.png'
import tracktastyweb from './assets/tracktasty-thumbnail.png'
import tracktastyapp from './assets/tracktasty-app-thumbnail.jpg'
import pgxthumbnail from './assets/pgx-thumbnail.png'

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
            imgsrc: tracktastyweb,
            src: "https://tracktasty-website.vercel.app/"
        },
        {
            title: "PGX Group Website", 
            subtitle: "Company website for PGX Group, built to present the organization's services and online presence.", 
            tags: ["Website", "HTML/CSS/JS", "Responsive Design", "Interactive UI"], 
            imgsrc: pgxthumbnail,
            src: "https://pgx.group"
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
            <div className="flex items-center gap-3 pb-5">
                <div className="flex items-center justify-center p-2.5 rounded-xl bg-surface-a20 border border-surface-a30 text-text-primary shadow-sm">
                    <FolderGit2 className="w-5 h-5" />
                </div>
                <h1 className="text-2xl font-bold text-text-primary">
                    Projects
                </h1>
            </div>

            {/* Container for Horizontal Scrolling */}
            <div className='overflow-x-auto snap-x snap-mandatory whitespace-nowrap pb-6 custom-scrollbar pt-2 -mx-4 px-4 sm:mx-0 sm:px-0'>
                <div className="inline-flex flex-row items-stretch gap-4 sm:gap-6">
                    {projectsData.map((project, index) => (
                        <a 
                            key={index} 
                            href={project.src} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group block whitespace-normal snap-center shrink-0 active:scale-[0.98] transition-transform duration-200"
                        >
                            <div className='w-[82vw] sm:w-[480px] md:w-[540px] h-full p-5 sm:p-8 rounded-3xl border-2 border-border-primary/20 bg-surface-a10 transition-all duration-300 sm:hover:-translate-y-1 sm:group-hover:border-primary-a30 sm:group-hover:bg-surface-a20 shadow-md sm:hover:shadow-2xl flex flex-col'>
                                
                                <div className='w-full aspect-video overflow-hidden rounded-2xl mb-4 sm:mb-6 border border-border-primary/5 shrink-0 bg-black/20'>
                                    <img 
                                        className="w-full h-full object-contain transition-transform duration-500 ease-in-out sm:group-hover:scale-105"
                                        src={project.imgsrc} 
                                        alt={project.title}
                                    />
                                </div>
                                
                                <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 sm:group-hover:text-primary-a30 transition-colors text-text-primary'> 
                                    {project.title}
                                </h2>

                                <p className='text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 grow text-text-secondary'>
                                    {project.subtitle}
                                </p>

                                <ul className='flex flex-wrap gap-2 sm:gap-3 mt-auto'>
                                    {project.tags.map((tag, tagIndex) => (
                                        <li 
                                            key={tagIndex} 
                                            className='border border-border-primary/10 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium bg-surface-a20 transition-colors duration-300 sm:group-hover:bg-surface-a10 text-text-secondary'
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