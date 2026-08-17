import { Mail, Inbox, Send, Phone, Link2 } from 'lucide-react'
import linkedinIcon from './assets/linkedin.svg'
import githubIcon from './assets/github.svg'
import facebookIcon from './assets/facebook.svg'

function Contacts() {
  return (
    <div>
      {/* Header Container */}
      <div className="flex items-center gap-3 pb-5">
        <div className="flex items-center justify-center p-2.5 rounded-xl bg-surface-a20 border border-surface-a30 text-text-primary shadow-sm">
          <Mail className="w-5 h-5" />
        </div>
        <h1 className="text-2xl font-bold text-text-primary">
          Contact & Social Links
        </h1>
      </div>
    
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Contact Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Inbox className="w-5 h-5 text-text-primary" />
            <h2 className='text-xl font-semibold text-text-primary'>Get in Touch</h2>
          </div>

          <div className='group w-full border border-solid border-border-primary/20 rounded-xl p-4 mb-3 cursor-pointer transition-all hover:border-primary-a30 transform duration-300 ease-in-out hover:-translate-y-1 shadow-md hover:shadow-2xl'>
            <a href="mailto:lawrence39santos04@gmail.com?subject=Portfolio%20Contact&body=Hello%20Lawrence,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you.">
              <h2 className="flex items-center gap-2 text-lg font-semibold transition-colors duration-300 ease-in-out group-hover:text-primary-a30">
                <Send className="w-4 h-4" /> Email
              </h2>
            </a>
            <p className="mt-1 text-text-secondary">lawrence39santos04@gmail.com</p>
          </div>

          <div className='group w-full border border-solid border-border-primary/20 rounded-xl p-4 cursor-pointer transition-all hover:border-primary-a30 transform duration-300 ease-in-out hover:-translate-y-1 shadow-md hover:shadow-2xl'>
            <h2 className="flex items-center gap-2 text-lg font-semibold transition-colors duration-300 ease-in-out group-hover:text-primary-a30">
              <Phone className="w-4 h-4" /> Phone
            </h2>
            <p className="mt-1 text-text-secondary">+63 976 132 2067</p>
          </div>
        </div>
        
        {/* Social Links */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Link2 className="w-5 h-5 text-text-primary" />
            <h2 className='text-xl font-semibold text-text-primary'>Connect with Me</h2>
          </div>

          <div className='space-y-3'>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/lawrence-santos-7880a8386/" target="_blank" rel="noreferrer noopener"
              className='group flex items-center gap-3 w-full border border-solid border-border-primary/20 rounded-xl p-4 cursor-pointer transition-all hover:border-primary-a30 transform duration-300 ease-in-out hover:-translate-y-1 shadow-md hover:shadow-2xl'>
              <img src={linkedinIcon} alt="LinkedIn" className="theme-icon w-6 h-6 group-hover:brightness-125" />
              <span className='text-text-primary group-hover:text-primary-a30 transition-colors'>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Xeno-bytes" target="_blank" rel="noreferrer noopener"
              className='group flex items-center gap-3 w-full border border-solid border-border-primary/20 rounded-xl p-4 cursor-pointer transition-all hover:border-primary-a30 transform duration-300 ease-in-out hover:-translate-y-1 shadow-md hover:shadow-2xl'>
              <img src={githubIcon} alt="GitHub" className="theme-icon w-6 h-6 group-hover:brightness-125" />
              <span className='text-text-primary group-hover:text-primary-a30 transition-colors'>GitHub</span>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/Xenobytes09" target="_blank" rel="noreferrer noopener"
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