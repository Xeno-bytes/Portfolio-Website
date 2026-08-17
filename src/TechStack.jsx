import { 
  Layers, 
  RefreshCw, 
  Clock, 
  MessageSquare, 
  Users, 
  Brain, 
  Ear 
} from 'lucide-react'

function TechStack() {
  const iconMap = {
    // Frontend
    'HTML': 'html5',
    'CSS': 'css3', 
    'JavaScript': 'javascript',
    'TypeScript': 'typescript',
    'React': 'react',
    'Flutter': 'flutter',
    'Tailwind CSS': 'tailwindcss',

    // Backend & Databases
    'Firebase': 'firebase',
    'Payload CMS': 'postgresql',
    'ASP.NET Core': 'dotnetcore',
    'Python': 'python',
    'PostgreSQL': 'postgresql',
    'MongoDB': 'mongodb',

    // DevOps & Tools
    'GitHub': 'github',
    'GitLab': 'gitlab',
    'Docker': 'docker',
    'VS Code': 'vscode',
    'Android Studio': 'androidstudio',
    'Figma': 'figma'
  };

  const lucideIconMap = {
    'Adaptability': RefreshCw,
    'Time Management': Clock,
    'Communication': MessageSquare,
    'Collaboration': Users,
    'Critical Thinker': Brain,
    'Giving and Receiving Feedback': Ear
  };

  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Flutter', 'Tailwind CSS'];  
  const backendSkills = ['Firebase', 'Payload CMS', 'ASP.NET Core', 'Python', 'PostgreSQL', 'MongoDB'];
  const devOpsTools = ['GitHub', 'GitLab', 'Docker', 'VS Code', 'Android Studio', 'Figma'];
  const softSkills = ['Adaptability', 'Time Management', 'Communication', 'Collaboration', 'Critical Thinker', 'Giving and Receiving Feedback'];

  const SkillList = ({skills, title}) => {
    return (
      <div className='pb-8'>
        <h2 className='pb-4 font-semibold text-text-primary text-xl'>
          {title}
        </h2>

        <div className='flex flex-wrap gap-x-4 gap-y-5'>
          {skills.map((skill, index) => {
            const iconName = iconMap[skill];
            const LucideIcon = lucideIconMap[skill];
            
            return (
              <div 
                key={index}
                className='group flex items-center border border-solid border-surface-a50 
                  px-4 py-2 rounded-xl bg-surface-a20 text-m transition-all duration-500 
                  ease-in-out hover:bg-surface-a30 hover:border-primary-a30 cursor-default
                  hover:shadow-lg whitespace-nowrap'
              >
                {/* Icon Container */}
                {(iconName || LucideIcon) && (
                  <div className="w-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:w-7 group-hover:opacity-100 flex items-center">
                    {iconName && (
                      <img 
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-original.svg`}
                        alt={skill}
                        className="w-5 h-5 min-w-5" 
                      />
                    )}
                    {!iconName && LucideIcon && (
                      <LucideIcon className="w-4 h-4 min-w-4 text-text-primary" />
                    )}
                  </div>
                )}
                
                <span className="font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                  {skill}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-full overflow-hidden">
      <div className="flex items-center gap-3 pb-8">
        <div className="flex items-center justify-center p-2.5 rounded-xl bg-surface-a20 border border-surface-a30 text-text-primary shadow-sm">
          <Layers className="w-5 h-5" />
        </div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">
          Tech Stack
        </h1>
      </div>

      <SkillList skills={frontendSkills} title={"Front End"} />
      <SkillList skills={backendSkills} title={"Back End"} />
      <SkillList skills={devOpsTools} title={"Design & Tools for Collaboration"} />
      <SkillList skills={softSkills} title={"Soft Skills"} />
    </div>
  )
}

export default TechStack;