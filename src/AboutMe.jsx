import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function AboutMe() {
    return (
        <div>
            <h1 className='pb-5'>
              👤 About Me
            </h1>

            <div className='space-y-4'>
              <p className=''>
                I am a 4th year Bachelor of Science in Information Technology student at STI College San Jose del Monte. I have hands-on experience in building Android and website applications.
              </p>
              
              <p className=''>
                As the programmer specialist for our capstone project, I led the development of TrackTasty, an application that helps its users track their macronutrients with the help of AI through Chatbot and Food Recognition. I built the application using Flutter and Firebase.
              </p>

              <p className=''>
                I can work well on both team-oriented or solo projects. I can communicate my ideas clearly to other team members. My skills of being able to adapt quickly and think critically can help me contribute to any projects.
              </p>

              <p className=''>
                I am eager to apply the skills I have learned in a practical setting and contribute to organizations. I am open to internship and entry-level opportunities in web or app development to gain professional experience and help develop programs that meet company needs.
              </p>
            </div>
        </div>
    )
}

export default AboutMe;