import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route or hash navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  // Handle scroll detection and close open mobile menu if user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open to prevent page scrolling underneath
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleContactClick = (e) => {
    setIsOpen(false);
    // Dispatch drawer open event
    window.dispatchEvent(new CustomEvent('open-contact-drawer'));
  };

  return (
    <>
      {/* ─── Global Fixed Header ────────────────────────────────────────────── */}
      <header 
        className={`fixed top-0 left-0 w-full z-40 h-[70px] flex items-center border-b transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0a0a09]/90 backdrop-blur-md border-white/10 shadow-lg' 
            : 'bg-transparent border-white/5'
        }`}
      >
        <div className="portfolio-container w-full flex items-center justify-between relative">
          
          {/* Left Side: Logo Box [Icon | BPL] */}
          <div className="flex-shrink-0 select-none">
            <a href="/#home" className="block hover:opacity-80 transition-opacity">
              <img 
                src="/assets/logo_bpl.png" 
                alt="BPL Logo" 
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>

          {/* Center: Navigation Links (Inter Font, exact size/weight, absolute centered on Desktop) */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-10 font-inter text-[13px] tracking-[0.15em] font-bold">
            <a href="/#home" className="text-white border-b border-white pb-0.5 transition-colors">HOME</a>
            <a href="/#work" className="text-text-muted hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors">WORK</a>
            <a href="/#about" className="text-text-muted hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors">ABOUT</a>
            <button 
              onClick={handleContactClick} 
              className="text-text-muted hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors uppercase cursor-pointer"
            >
              CONTACTS
            </button>
          </nav>

          {/* Right Side: Metadata (© BPLAN STUDIOS / PERSONAL BRAND Double-column Split) */}
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

          {/* Hamburger Menu Toggle Button for Mobile (High z-index to stay above overlay) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[60] flex flex-col justify-center items-end gap-1.5 w-8 h-8 p-1 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation"
            aria-expanded={isOpen}
          >
            <span className={`h-[1.5px] bg-white transition-all duration-300 block ${isOpen ? 'w-6 rotate-45 translate-y-[7.5px]' : 'w-6'}`} />
            <span className={`h-[1.5px] bg-white transition-all duration-300 block w-6 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`h-[1.5px] bg-white transition-all duration-300 block ${isOpen ? 'w-6 -rotate-45 -translate-y-[7.5px]' : 'w-4'}`} />
          </button>

        </div>
      </header>

      {/* ─── Mobile Menu Overlay (Rendered OUTSIDE header to prevent backdrop-filter bugs) ─── */}
      <div 
        className={`fixed inset-0 w-full h-[100dvh] bg-[#0a0a09] z-50 flex flex-col justify-between px-8 pt-24 pb-12 transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        {/* Top Header Row inside Mobile Menu */}
        <div className="flex items-center justify-between w-full">
          <a href="/#home" onClick={() => setIsOpen(false)} className="block hover:opacity-80 transition-opacity">
            <img 
              src="/assets/logo_bpl.png" 
              alt="BPL Logo" 
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>

        {/* Center Navigation Links */}
        <nav className="flex flex-col items-center justify-center gap-8 font-inter text-[22px] tracking-[0.2em] font-medium text-white my-auto select-none">
          <a 
            href="/#home" 
            onClick={() => setIsOpen(false)} 
            className="text-white hover:text-[#DEF81D] border-b border-white/30 pb-1 transition-colors"
          >
            HOME
          </a>
          <a 
            href="/#work" 
            onClick={() => setIsOpen(false)} 
            className="text-white/80 hover:text-[#DEF81D] transition-colors"
          >
            WORK
          </a>
          <a 
            href="/#about" 
            onClick={() => setIsOpen(false)} 
            className="text-white/80 hover:text-[#DEF81D] transition-colors"
          >
            ABOUT
          </a>
          <button 
            onClick={handleContactClick} 
            className="text-white/80 hover:text-[#DEF81D] transition-colors uppercase cursor-pointer"
          >
            CONTACTS
          </button>
        </nav>

        {/* Mobile Menu Metadata Footer */}
        <div className="w-full flex justify-between items-center font-inter text-[11px] tracking-[0.15em] leading-[1.2] text-text-muted font-bold select-none border-t border-white/10 pt-6">
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
    </>
  );
}
