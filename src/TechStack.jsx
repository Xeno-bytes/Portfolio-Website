import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Experience() {
  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Flutter', 'Tailwind CSS', 'ASP.NET'];
  const backendSkills = ['Firebase', 'SQL'];
  const designTools = ['Figma', 'Github', 'VS Code', 'Android Studio'];
  const softSkills = ['Adaptability', 'Time Management', 'Communication', 'Critical Thinker', 'Receptive to Feedback']

  const SkillList = ({skills, title}) => {
    return (
      <div className='pb-5'>
        <h2 className='pb-3'>
          {title}
        </h2>

        <ul className='list-image-none p-0 m-0 space-x-3'>
          {skills.map((skill, index) => (
            <li className='inline-block border border-solid 
              px-4 py-2 rounded-lg bg-surface-a20 text-m'>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    )
  }
    return (
        <div>
            <h1 className='pb-5'>
              🛠️Tech Stack
            </h1>

            <SkillList skills={frontendSkills} title={"Front End"} />
            <SkillList skills={backendSkills} title={"Back End"} />
            <SkillList skills={designTools} title={"Design & Tools"} />
            <SkillList skills={softSkills} title={"Soft Skills"} />
        </div>
    )
}

export default Experience;