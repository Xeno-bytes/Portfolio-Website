import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Experience() {
    const experiences = [
      { title: "BS Information Technology - 4th Year", subtitle: "STI College SJDM", year: "2025", active: true },
      { title: "Actively Seeking for OJT", subtitle: "Aiming for Mobile or Web Developer", year: "2025", active: true },
      { title: "Capstone Project Lead Developer", subtitle: "TrackTasty: AI-Powered Macro Tracking", year: "2025"},
      { title: "SHS Strand: Information Communication and Technology", subtitle: "Specialized in Mobile and Web Development", year: "2022"},
      { title: "App Development Project Developer", subtitle: "ARECS: Application to Protect Eyes from Blue Light", year: "2020"},
      { title: "Hello World!", subtitle: "Started learning how to code", year: "2020"},
    ];
    return (
      <div>
          <h1 className='pb-10'>
            📖 Experience
          </h1>

          <div className="relative ml-2">
            {experiences.map((item,index) => (
              <div key={index} className='relative pl-8 pb-10 last:pb-0 group'>
                {/* Vertical Line */}
                {index !== experiences.length - 1 && (
                  <div className='absolute left-1.75 top-2 w-0.5 h-full bg-surface-a30' />
                )}

                {/* Dot */}
                <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ring-4 ring-surface-a10 z-10 ${item.active ? 'bg-border-primary animate-pulse-ring' : 'bg-surface-a10 border-2 border-surface-a30 transition-colors duration-400 ease-in-out transform group-hover:bg-border-primary'}`} />
                {/* Content */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className={"font-bold leading-tight ${item.active ? 'text-white' : 'text-gray-300'}"}>
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Year */}
                  <span className='text-[12px] font-bold py-1 px-3 bg-surface-a20 border border-surface-a30 rounded-full text-gray-400 whitespace-nowrap'>
                    {item.year}
                  </span>
                </div>
                </div>
            ))}
          </div>
        </div>
    )
}

export default Experience;