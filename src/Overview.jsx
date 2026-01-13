import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Resume from './assets/Resume.pdf'
import Picture from './assets/ic_santos.jpg'

function Overview() {
  const [activePdf, setActivePdf] = useState(null);

    return (
        <div className='flex items-center space-x-5'>
          <img src={Picture}
            className='border border-solid border-border-primary p-0 rounded-full w-40 h-40 object-cover' />

          <div className='space-y-3'>
             <h1 className='text-3xl md:text-4xl font-bold tracking-tight text-text-primary'>
                Lawrence Ervin Santos
            </h1>
            <div className='space-y-2'>
              <p className='text-lg text-text-primary-light'>📍 Central Luzon, Philippines</p>
              <p className='text-lg text-text-secondary'>BSIT Student / Aspiring Web/Mobile Developer</p>
            </div>
            <div className='flex flex-wrap justify-center md:justify-start gap-3 pt-2'>
            <button 
              className='border border-solid border-surface-a50 hover:border-border-primary transition-all 
              ease-in-out duration-500 transform hover:-translate-y-1 hover:shadow-lg shadow-border-primary/10 cursor-pointer bg-surface-a10 text-base text-text-primary font-semibold rounded-xl px-6 py-2.5 active:scale-95'
              onClick={() => setActivePdf(Resume)}>
                📑 View Resume
            </button>
            <button 
              className='border border-solid border-surface-a50 hover:border-border-primary transition-all 
              ease-in-out duration-500 transform hover:-translate-y-1 hover:shadow-lg shadow-border-primary/10 cursor-pointer bg-primary-a30 text-base text-text-primary font-semibold rounded-xl px-6 py-2.5 active:scale-95'>
              <a
                href="mailto:lawrence39santos04@gmail.com?subject=Portfolio%20Contact&body=Hello%20Lawrence,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you.">
                📨 Send Email
              </a>
            </button>
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

export default Overview;