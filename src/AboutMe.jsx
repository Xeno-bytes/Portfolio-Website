import { User } from 'lucide-react'

function AboutMe() {
    return (
        <div>
           <div className="flex items-center gap-3 pb-5">
              <div className="flex items-center justify-center p-2.5 rounded-xl bg-surface-a20 border border-surface-a30 text-text-primary shadow-sm">
                <User className="w-5 h-5" />
              </div>
              <h1 className="text-2xl font-bold text-text-primary">
                About Me
              </h1>
            </div>

            <div className='space-y-4'>
              <p className=''>
                I am a Bachelor of Science in Information Technology graduate at STI College San Jose del Monte. I have hands-on experience in building Android and website applications.
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