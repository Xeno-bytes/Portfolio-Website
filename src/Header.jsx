import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Header() {
    return (
        <header className='bg-blue-200 border-b-2 border-red-500 rounded-b-lg  padding px-10 py-5 text-blue-600 flex justify-between items-center'>
            <img src="" alt="Logo" className="logo" />

            <nav>
                <ul className='flex list-none p-0 m-0 justify-around space-x-5'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;