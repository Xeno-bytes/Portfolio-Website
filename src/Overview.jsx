import { useState } from 'react'

import Picture from './assets/ic_santos.jpg'

function Overview({ onViewResume }) {
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
              onClick={onViewResume}>
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
        </div>
    )
}

export default Overview;