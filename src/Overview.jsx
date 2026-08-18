import { MapPin, FileText, Mail } from 'lucide-react'

import DarkPicture from './assets/ic_santos.jpg'
import LightPicture from './assets/ic_santos_light.jpg'

function Overview({ theme, onViewResume }) {
  const imageSrc = theme === 'light' ? LightPicture : DarkPicture;

  return (
    <div className='flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 w-full'>
      <img 
        src={imageSrc}
        alt="Lawrence Ervin Santos"
        className='border border-solid border-border-primary rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover shrink-0' 
      />

      <div className='space-y-3 w-full'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary'>
          Lawrence Ervin Santos
        </h1>
        <div className='space-y-2'>
          <p className='flex items-center justify-center sm:justify-start gap-1.5 text-base sm:text-lg text-text-primary-light'>
            <MapPin className="w-5 h-5 shrink-0" /> Central Luzon, Philippines
          </p>
          <p className='text-base sm:text-lg text-text-secondary'>BSIT Graduate / Web/Mobile Developer</p>
        </div>

        {/* Buttons flex container */}
        <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 pt-2 w-full'>
          <button 
            className='flex-1 sm:flex-initial flex items-center justify-center gap-2 border border-solid border-surface-a50 sm:hover:border-border-primary transition-all 
            ease-in-out duration-300 sm:hover:-translate-y-1 sm:hover:shadow-lg shadow-border-primary/10 cursor-pointer bg-surface-a10 text-base text-text-primary font-semibold rounded-xl px-6 py-2.5 active:scale-95'
            onClick={onViewResume}>
            <FileText className="w-5 h-5" /> View Resume
          </button>
          <a
            href="mailto:lawrence39santos04@gmail.com?subject=Portfolio%20Contact&body=Hello%20Lawrence,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you."
            className='flex-1 sm:flex-initial flex items-center justify-center gap-2 border border-solid border-surface-a50 sm:hover:border-border-primary transition-all 
            ease-in-out duration-300 sm:hover:-translate-y-1 sm:hover:shadow-lg shadow-border-primary/10 cursor-pointer bg-primary-a30 text-base text-text-primary font-semibold rounded-xl px-6 py-2.5 active:scale-95'
          >
            <Mail className="w-5 h-5" /> Send Email
          </a>
        </div>
      </div>
    </div>
  )
}

export default Overview;