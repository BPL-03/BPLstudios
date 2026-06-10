import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacts" className="bg-[#000000] text-[#e8e6de] pt-12 pb-16 lg:pt-16 lg:pb-20">
      <div className="portfolio-container flex flex-col gap-[32px]">
        
        {/* ─── Top Bar ─── */}
        <div className="flex items-start justify-between">
          {/* Top Left metadata */}
          <div className="flex gap-16 font-inter text-[10px] lg:text-[11px] tracking-[0.15em] font-bold text-[#7a7870] uppercase leading-[1.3]">
            <div className="flex flex-col">
              <span>© BPLAN</span>
              <span>STUDIOS</span>
            </div>
            <div className="flex flex-col">
              <span>PERSONAL</span>
              <span>BRAND</span>
            </div>
          </div>
          
          {/* Top Right metadata */}
          <div className="flex items-start gap-2.5 font-inter text-[10px] lg:text-[11px] tracking-[0.12em] text-[#7a7870] font-bold uppercase">
            <span className="text-[18px] lg:text-[20px] leading-[0.8] text-[#7a7870]">©</span>
            <div className="flex flex-col leading-[1.3]">
              <span>2026 ©</span>
              <span>COPYRIGHT</span>
            </div>
          </div>
        </div>

        {/* ─── Main Content Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          
          {/* Left Column: Panther Logo + Brand Text */}
          <div className="lg:col-span-3 relative">
            <div className="w-[180px] lg:w-[220px] aspect-[908/1024] rounded-[4px] overflow-hidden select-none">
              <img 
                src="/assets/panther_logo_exact.png" 
                alt="BPL Studios Panther Logo"
                loading="lazy"
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
            <div className="absolute -bottom-6 left-0 w-full">
              <span className="font-inter text-[9px] tracking-[0.2em] text-[#555550] uppercase font-bold leading-none">
                ALL RIGHT RESERVED
              </span>
            </div>
          </div>

          {/* Center Column: CTA Text */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[220px] lg:pb-1">
            <div className="flex flex-col">
              <h3 className="font-sans font-light text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[50px] leading-[1.15] text-[#b5b4ad] tracking-tight">
                We are ready<br />
                to discuss your<br />
                project
              </h3>
            </div>
            <div className="mt-8 lg:mt-0 lg:pl-[40%] text-left">
              <p className="font-sans font-light text-[28px] sm:text-[34px] lg:text-[40px] xl:text-[46px] leading-[1.15] text-[#b5b4ad] tracking-tight">
                to discuss your<br />
                project
              </p>
            </div>
          </div>

          {/* Right Column: Work Info + Email + Social Buttons */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-8 text-left lg:text-right">
            {/* Work Info */}
            <p className="font-inter text-[9px] lg:text-[10px] tracking-[0.14em] text-[#7a7870] uppercase leading-[1.6] font-bold max-w-[280px]">
              FROM BRAND IDENTITY TO DIGITAL<br />
              PRODUCT — BUILT FOR MARKETS<br />
              THAT DEMAND MORE.
            </p>

            {/* Email Link */}
            <a 
              href="mailto:hello@bplstudios.com"
              className="font-sans text-[18px] sm:text-[22px] lg:text-[24px] text-[#e8e6de] hover:text-accent transition-colors duration-300 underline decoration-[1px] underline-offset-8 pb-1 inline-block"
            >
              hello@bplstudios.com
            </a>

            {/* Social Pill Buttons */}
            <div className="flex items-center gap-2.5">
              {/* Telegram */}
              <a
                href="https://t.me/bplstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[72px] h-[38px] rounded-full bg-[#141414] border border-[#2a2a29] hover:border-accent/40 hover:bg-[#1a1a19] transition-all duration-300 group"
                aria-label="Telegram"
              >
                <svg className="w-[15px] h-[15px] text-[#e8e6de] group-hover:text-accent transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>

              {/* Behance */}
              <a
                href="https://www.behance.net/bplstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[72px] h-[38px] rounded-full bg-[#141414] border border-[#2a2a29] hover:border-accent/40 hover:bg-[#1a1a19] transition-all duration-300 group"
                aria-label="Behance"
              >
                <span className="font-sans text-[13px] font-bold text-[#e8e6de] group-hover:text-accent transition-colors duration-300">Bē</span>
              </a>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center justify-center w-[72px] h-[38px] rounded-full bg-[#141414] border border-[#2a2a29] hover:border-accent/40 hover:bg-[#1a1a19] transition-all duration-300 group cursor-pointer"
                aria-label="Scroll to top"
              >
                <span className="font-sans text-[12px] font-bold tracking-wide text-[#e8e6de] group-hover:text-accent transition-colors duration-300">Up</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
