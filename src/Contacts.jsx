import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import linkedinIcon from './assets/linkedin.svg'
import githubIcon from './assets/github.svg'
import facebookIcon from './assets/facebook.svg'

function Contacts() {
    return (
        <div>
            <h1 className='text-2xl font-bold pb-5'>
                💬 Contact & Social Links
            </h1>
          
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>
                <h2 className='mb-4 text-xl font-semibold'>📬 Get in Touch</h2>

                <div className='group w-full border border-solid border-border-primary/20 rounded-xl p-4 mb-3 cursor-pointer transition-all hover:border-primary-a30 transform duration-300 ease-in-out hover:-translate-y-1 shadow-md hover:shadow-2xl'>
                    <a
                        href="mailto:lawrence39santos04@gmail.com?subject=Portfolio%20Contact&body=Hello%20Lawrence,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you.">
                        <h2 className="text-lg font-semibold transition-colors duration-300 ease-in-out group-hover:text-primary-a30">
                            📨 Email
                        </h2>
                    </a>
                    <p className="">lawrence39santos04@gmail.com</p>
                </div>

                <div className='group w-full border border-solid border-border-primary/20 rounded-xl p-4 cursor-pointer transition-all hover:border-primary-a30 transform duration-300 ease-in-out hover:-translate-y-1 shadow-md hover:shadow-2xl'>
                    <h2 className="text-lg font-semibold transition-colors duration-300 ease-in-out group-hover:text-primary-a30">
                        📞 Phone
                    </h2>
                    <p className="">+63 976 132 2067</p>
                </div>
                </div>
                
                <div>
                    <h2 className='text-lg font-semibold mb-4'>🔗 Connect with Me</h2>
                    <div className='space-y-3'>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/lawrence-santos-7880a8386/" target="_blank" rel="noreferrer"
                            className='group flex items-center gap-3 w-full border border-solid border-border-primary/20 rounded-xl p-4 cursor-pointer transition-all hover:border-primary-a30 transform duration-300 ease-in-out hover:-translate-y-1 shadow-md hover:shadow-2xl'>
                            <img src={linkedinIcon} alt="LinkedIn" className="theme-icon w-6 h-6 group-hover:brightness-125" />
                            <span className='text-text-primary group-hover:text-primary-a30 transition-colors'>LinkedIn</span>
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/Xeno-bytes" target="_blank" rel="noreferrer"
                            className='group flex items-center gap-3 w-full border border-solid border-border-primary/20 rounded-xl p-4 cursor-pointer transition-all hover:border-primary-a30 transform duration-300 ease-in-out hover:-translate-y-1 shadow-md hover:shadow-2xl'>
                            <img src={githubIcon} alt="GitHub" className="theme-icon w-6 h-6 group-hover:brightness-125" />
                            <span className='text-text-primary group-hover:text-primary-a30 transition-colors'>GitHub</span>
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/Xenobytes09" target="_blank" rel="noreferrer"
                            className='group flex items-center gap-3 w-full border border-solid border-border-primary/20 rounded-xl p-4 cursor-pointer transition-all hover:border-primary-a30 transform duration-300 ease-in-out hover:-translate-y-1 shadow-md hover:shadow-2xl'>
                            <img src={facebookIcon} alt="Facebook" className="theme-icon w-6 h-6 group-hover:brightness-125" />
                            <span className='text-text-primary group-hover:text-primary-a30 transition-colors'>Facebook</span>
                        </a>
                    </div>
                </div>
          </div>
        </div>
    )
}

export default Contacts;