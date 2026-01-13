import { useState } from 'react'

import JavaCert from './assets/JavaFundamentals.pdf'
import SysAdCert from './assets/SysAdFundamentals.pdf'

function Certifications() {
    const [activePdf, setActivePdf] = useState(null);

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

                        onClick={() => setActivePdf(cert.file)}
                        className='group w-full border border-solid border-border-primary/20 rounded-3xl p-5 cursor-pointer transition-all hover:border-primary-a30 transform duration-300 ease-in-out hover:-translate-y-1 shadow-md hover:shadow-2xl'
                    >
                        <h2 className="font-semibold transition-colors duration-300 ease-in-out group-hover:text-primary-a30">{cert.title}</h2>
                        <p className="">{cert.provider}</p>
                    </div>
                ))}
            </div>

            {/* Floating PDF Overlay */}
            {activePdf && (
                <div onClick={() => setActivePdf(null)} 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div onClick={(e) => e.stopPropagation()} 
                        className="relative w-full max-w-5xl h-[60vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
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

export default Certifications;
