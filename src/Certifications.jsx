import { Award } from 'lucide-react'
import JavaCert from './assets/JavaFundamentals.pdf'
import SysAdCert from './assets/SysAdFundamentals.pdf'

function Certifications({ onCertClick }) {

    const certifications = [
        { title: 'Java Fundamentals', provider: 'STI College / Oracle Academy', file: JavaCert },
        { title: 'Systems Development', provider: 'STI College / Linux Professional Institute', file: SysAdCert },
    ];

    return (
        <div className="relative">
            <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center p-2.5 rounded-xl bg-surface-a20 border border-surface-a30 text-text-primary shadow-sm">
                    <Award className="w-5 h-5" />
                </div>
                <h1 className="text-2xl font-bold text-text-primary">
                    Recent Certifications
                </h1>
            </div>

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
