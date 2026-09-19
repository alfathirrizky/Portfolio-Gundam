import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full flex justify-center fixed top-0 z-50">
            {/* Layar kecil normal persegi, layar menengah ke atas trapesium 8% */}
            <nav className="w-full max-w-7xl bg-gray-950/95 backdrop-blur-md shadow-2xl md:[clip-path:polygon(0_0,100%_0,92%_100%,8%_100%)] transition-all duration-300 relative border-b border-gray-800"
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', 
                     backgroundSize: '20px 20px',
                     backgroundPosition: 'center center'
                 }}>
                {/* Aksen mekanikal tambahan */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-0.5 md:h-1 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                
                <div className="flex justify-between items-center py-3 px-10 md:px-24 relative z-10">
                    
                    {/* Bagian Logo dan Nama */}
                    <div className="flex items-center gap-3">
                        <img className="h-10 md:h-10" src="/logo.png" alt="Logo" />
                        <h1 className="text-md md:text-md font-bold text-white">PORTFOLIO</h1>
                    </div>
                    
                    {/* Bagian Menu Navigasi (Desktop) */}
                    <ul className="hidden md:flex items-center gap-8 md:gap-12">
                        <li>
                            <a href="#" className="relative text-gray-300 hover:text-amber-500 transition-colors duration-300 font-semibold tracking-widest text-xs uppercase group">
                                01// Home
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#About" className="relative text-gray-300 hover:text-amber-500 transition-colors duration-300 font-semibold tracking-widest text-xs uppercase group">
                                02// About
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#Projects" className="relative text-gray-300 hover:text-amber-500 transition-colors duration-300 font-semibold tracking-widest text-xs uppercase group">
                                03// Projects
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#Certificate" className="relative text-gray-300 hover:text-amber-500 transition-colors duration-300 font-semibold tracking-widest text-xs uppercase group">
                                04// Certificate
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>

                    {/* Tombol Hamburger (Mobile) */}
                    <button 
                        className="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none" 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Menu Dropdown (Mobile) */}
                {isOpen && (
                    <div className="md:hidden bg-gray-950 border-t border-gray-800 shadow-xl">
                        <ul className="flex flex-col items-center gap-6 py-6 pb-8">
                            <li>
                                <a href="#" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-amber-500 transition-colors duration-300 font-semibold tracking-widest text-sm uppercase">Home</a>
                            </li>
                            <li>
                                <a href="#About" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-amber-500 transition-colors duration-300 font-semibold tracking-widest text-sm uppercase">About</a>
                            </li>
                            <li>
                                <a href="#Projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-amber-500 transition-colors duration-300 font-semibold tracking-widest text-sm uppercase">Projects</a>
                            </li>
                            <li>
                                <a href="#Certificate" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-amber-500 transition-colors duration-300 font-semibold tracking-widest text-sm uppercase">Contact</a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
}
