import { useState } from 'react'

import JavaCert from './assets/JavaFundamentals.pdf'
import SysAdCert from './assets/SysAdFundamentals.pdf'

function Certifications({ onCertClick }) {

    const certifications = [
        { title: 'Java Fundamentals', provider: 'STI College / Oracle Academy', file: JavaCert },
        { title: 'Systems Development', provider: 'STI College / Linux Professional Institute', file: SysAdCert },
    ];

    return (
        <div className="relative">
            <h1 className='mb-5 text-2xl font-bold'>🎖️ Recent Certifications</h1>

            <div className='flex flex-col gap-5'>
                {certifications.map((cert, index) => (
                    <div 
                        key={cert.index}
                        onClick={() => onCertClick(cert.file)}
                        className='group w-full border border-solid border-border-primary/20 rounded-3xl p-5 cursor-pointer transition-all hover:border-primary-a30 transform duration-300 ease-in-out hover:-translate-y-1 shadow-md hover:shadow-2xl'
                    >
                        <h2 className="font-semibold transition-colors duration-300 ease-in-out group-hover:text-primary-a30">{cert.title}</h2>
                        <p className="">{cert.provider}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certifications;
