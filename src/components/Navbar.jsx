import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 h-[70px] flex items-center border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-bg/15 backdrop-blur-md border-white/5 shadow-md' 
        : 'bg-transparent border-white/5'
    }`}>
      <div className="portfolio-container w-full flex items-center justify-between relative">
        
        {/* Left Side: Logo Box [Icon | BPL] */}
        <div className="flex-shrink-0 select-none">
          <a href="#home" className="block hover:opacity-80 transition-opacity">
            <img 
              src="/assets/logo_bpl.png" 
              alt="BPL Logo" 
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>

        {/* Center: Navigation Links (Inter Font, all underlined, exact size/weight, absolute centered) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-10 font-inter text-[13px] tracking-[0.15em] font-bold">
          <a href="#home" className="text-white border-b border-white pb-0.5 transition-colors">HOME</a>
          <a href="#work" className="text-text-muted hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors">WORK</a>
          <a href="#about" className="text-text-muted hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors">ABOUT</a>
          <a href="#contacts" className="text-text-muted hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors">CONTACTS</a>
        </nav>

        {/* Right Side: Metadata (© BPLAN STUDIOS / PERSONAL BRAND Double-column Split, exact size/weight) */}
        <div className="hidden lg:flex items-center gap-12 font-inter text-[11px] tracking-[0.15em] leading-[1.15] text-text-muted font-bold select-none">
          <div className="flex flex-col items-end text-right">
            <span>© BPLAN</span>
            <span>STUDIOS</span>
          </div>
          <div className="flex flex-col items-end text-right">
            <span>PERSONAL</span>
            <span>BRAND</span>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-end gap-1.5 w-6 h-6 focus:outline-none z-50"
          aria-label="Toggle Navigation"
        >
          <span className={`h-[1px] bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'}`} />
          <span className={`h-[1px] bg-white transition-all duration-300 w-6 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`h-[1px] bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-4'}`} />
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-bg/95 backdrop-blur-md z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col items-center gap-6 font-inter text-lg tracking-[0.2em] text-white">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-white border-b-2 border-white pb-1">HOME</a>
          <a href="#work" onClick={() => setIsOpen(false)} className="text-text-muted hover:text-white transition-colors">WORK</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-text-muted hover:text-white transition-colors">ABOUT</a>
          <a href="#contacts" onClick={() => setIsOpen(false)} className="text-text-muted hover:text-white transition-colors">CONTACTS</a>
        </nav>

        {/* Mobile Menu Metadata footer */}
        <div className="absolute bottom-10 left-0 w-full portfolio-container flex justify-between items-center font-inter text-[10px] tracking-[0.15em] leading-[1.15] text-text-muted font-bold select-none">
          <div className="flex flex-col items-start text-left">
            <span>© BPLAN</span>
            <span>STUDIOS</span>
          </div>
          <div className="flex flex-col items-end text-right">
            <span>PERSONAL</span>
            <span>BRAND</span>
          </div>
        </div>
      </div>

    </header>
  );
}
