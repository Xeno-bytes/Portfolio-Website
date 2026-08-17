import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import Overview from './Overview'
import AboutMe from './AboutMe'
import Experience from './Experience'
import TechStack from './TechStack'
import BeyondCoding from './BeyondCoding'
import Projects from './Projects'
import Certifications from './Certifications'
import Contacts from './Contacts'
import DarkModeOverlay from './components/ThemeTransitionOverlay'

import Resume from './assets/Resume.pdf'

// Framer Motion entrance animation
const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: customDelay,
    },
  }),
}

function App() {
  const [theme, setTheme] = useState('dark')
  const [activePdf, setActivePdf] = useState(null)

  // Transition States
  const [isAnimating, setIsAnimating] = useState(false)
  const [targetTheme, setTargetTheme] = useState(null)

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  const handleThemeToggle = () => {
    if (isAnimating) return
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTargetTheme(nextTheme)
    setIsAnimating(true)
  }

  return (
    <motion.div 
      className="min-h-screen bg-surface-a0"
      animate={{ backgroundColor: 'var(--color-surface-a0)' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <DarkModeOverlay 
        isTransitioning={isAnimating}
        currentTheme={theme}
        targetTheme={targetTheme}
        onMiddle={() => setTheme(targetTheme)}
        onComplete={() => setIsAnimating(false)}
      />

      <motion.div 
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="flex items-start justify-between px-20 py-15 gap-6"
      >
        <Overview theme={theme} onViewResume={() => setActivePdf(Resume)} />

        <button
          onClick={handleThemeToggle}
          disabled={isAnimating}
          className="
            h-fit px-4 py-2 rounded-xl
            border border-surface-a30
            bg-surface-a10
            text-sm font-medium
            transition-colors duration-500
            hover:bg-surface-a20
            disabled:opacity-50
          "
        >
          {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
        </button>
      </motion.div>

      <div className='flex flex-col lg:flex-row gap-10 px-10 lg:px-20 pb-10 items-start '>
        <div className='w-full lg:w-3/5 flex flex-col gap-10'>
          {/* About Me */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl shadow-surface-a20/40 hover:shadow-xl'
          >
            <AboutMe />
          </motion.div>

          {/* Tech Stack */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl shadow-surface-a20/40 hover:shadow-xl'
          >
            <TechStack />
          </motion.div>
        </div>

        <div className='w-full lg:w-2/5'>
          {/* Experience */}
          <div className="flex-wrap items-start justify-center pb-10">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl shadow-surface-a20/40 hover:shadow-xl'
            >
              <Experience />
            </motion.div>
          </div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl shadow-surface-a20/40 hover:shadow-xl'
          >
            <BeyondCoding />
          </motion.div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className='px-20 pb-10'>
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl shadow-surface-a20/40 hover:shadow-xl'
        >
          <Projects />
        </motion.div>
      </div>

      {/* Certifications & Contacts */}
      <div className='flex flex-col lg:flex-row gap-10 px-10 lg:px-20 pb-20 items-stretch'>
        <div className='w-full lg:w-2/5 flex flex-col gap-10'>
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl shadow-surface-a20/40 hover:shadow-xl h-full'
          >
            <Certifications onCertClick={(file) => setActivePdf(file)} />
          </motion.div>
        </div>

        {/* Contacts */}
        <div className='w-full lg:w-4/5 flex flex-col gap-10'>
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className='border border-solid border-surface-a30 bg-surface-a10 px-20 py-10 rounded-3xl shadow-surface-a20/40 hover:shadow-xl h-full'
          >
            <Contacts />
          </motion.div>
        </div>
      </div>

      {/* Floating PDF Overlay */}
      {activePdf && (
        <div 
          onClick={() => setActivePdf(null)} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative w-full max-w-5xl h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b flex justify-between items-center bg-surface-a10">
              <span className="font-bold">Credential View</span>
              <button 
                onClick={() => setActivePdf(null)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
            
            <iframe 
              src={activePdf} 
              className="w-full h-full border-none"
              title="Certification PDF"
            />
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default App