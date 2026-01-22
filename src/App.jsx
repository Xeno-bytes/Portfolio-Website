import { useState, useEffect } from 'react'

import Overview from './Overview'
import AboutMe from './AboutMe'
import Experience from './Experience'
import TechStack from './TechStack'
import BeyondCoding from './BeyondCoding'
import Projects from './Projects'
import Certifications from './Certifications'
import Contacts from './Contacts'

import Resume from './assets/Resume.pdf'

function App() {
  const [theme, setTheme] = useState('dark')
  const [activePdf, setActivePdf] = useState(null);
  

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  return (
    <div className="min-h-screen bg-surface-a0 transition-colors duration-300">
      <div className="flex items-start justify-between px-20 py-15 gap-6 animate-fade-up">
        <Overview onViewResume={() => setActivePdf(Resume)} />

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="
            h-fit px-4 py-2 rounded-xl
            border border-surface-a30
            bg-surface-a10
            text-sm font-medium
            transition-all
            hover:bg-surface-a20
          "
        >
          {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
        </button>
      </div>


      <div className='flex flex-col lg:flex-row gap-10 px-10 lg:px-20 pb-10 items-start '>
        <div className='w-full lg:w-3/5 flex flex-col gap-10'>
          {/* About Me */}
          <div className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl transition-all shadow-surface-a20/40 hover:shadow-xl animate-fade-up delay-100'>
            <AboutMe />
          </div>

          {/* Tech Stack */}
          <div className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl transition-all shadow-surface-a20/40 hover:shadow-xl animate-fade-up delay-200'>
            <TechStack />
          </div>
        </div>

        <div className='w-full lg:w-2/5'>
          {/* Experience */}
          <div className="flex-wrap items-start justify-center pb-10">
            <div className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl shadow-surface-a20/40 hover:shadow-xl animate-fade-up delay-100'>
              <Experience />
            </div>
          </div>

          <div className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl shadow-surface-a20/40 hover:shadow-xl animate-fade-up delay-200'>
            <BeyondCoding />
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className='px-20 pb-10'>
        <div className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl shadow-surface-a20/40 hover:shadow-xl animate-fade-up delay-300'>
          <Projects />
        </div>
      </div>

      {/* Certifications */}
      <div className='flex flex-col lg:flex-row gap-10 px-10 lg:px-20 pb-20 items-stretch'>
        <div className='w-full lg:w-2/5 flex flex-col gap-10'>
          <div className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl shadow-surface-a20/40 hover:shadow-xl animate-fade-up delay-400 h-full'>
            <Certifications onCertClick={(file) => setActivePdf(file)} />
          </div>
        </div>

        {/* Contacts */}
        <div className='w-full lg:w-4/5 flex flex-col gap-10'>
          <div className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl shadow-surface-a20/40 hover:shadow-xl animate-fade-up delay-400 h-full'>
            <Contacts />
          </div>
        </div>
      </div>

      {/* Floating PDF Overlay */}
            {activePdf && (
                <div onClick={() => setActivePdf(null)} 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div onClick={(e) => e.stopPropagation()} 
                        className="relative w-full max-w-5xl h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                        {/* Header with Close Button */}
                        <div className="p-4 border-b flex justify-between items-center bg-surface-a10">
                            <span className="font-bold">Credential View</span>
                            <button 
                                onClick={() => setActivePdf(null)}
                                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                                Close
                            </button>
                        </div>
                        
                        {/* PDF Viewer using iframe */}
                        <iframe 
                            src={activePdf} 
                            className="w-full h-full border-none"
                            title="Certification PDF"
                        />
                    </div>
                </div>
            )}
    </div>
  )
}


export default App