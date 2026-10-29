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
                alt="BPL Studios logo — Made by BPL"
                loading="lazy"
                width="180"
                height="203"
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
              <h2 className="font-sans font-light text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[50px] leading-[1.15] text-[#b5b4ad] tracking-tight">
                We are ready<br />
                to discuss your<br />
                project
              </h2>
            </div>
          </div>

          {/* Right Column: Work Info + Email + Social Buttons */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-8 text-left lg:text-right">
            {/* Work Info */}
            <p className="font-inter text-[9px] lg:text-[10px] tracking-[0.14em] text-[#7a7870] uppercase leading-[1.6] font-bold max-w-[280px]">
              WE WORK IN A WIDE RANGE OF FIELDS:<br />
              FROM COMPLEX SAAS PRODUCTS TO<br />
              AESTHETIC PROMOTIONAL SITES
            </p>

            {/* Email Link */}
            <a 
              href="mailto:hello@bplstudios.com"
              className="font-sans text-[18px] sm:text-[22px] lg:text-[24px] text-[#e8e6de] hover:text-accent transition-colors duration-300 underline decoration-[1px] underline-offset-8 pb-1 inline-block"
            >
              hello@bplstudios.com
            </a>

            {/* Social Pill Buttons */}
            <div className="flex items-center gap-2.5 flex-wrap">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/bpl.studios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#141414] border border-[#2a2a29] hover:border-accent/40 hover:bg-[#1a1a19] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg className="w-[16px] h-[16px] text-[#e8e6de] group-hover:text-accent transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bpl003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#141414] border border-[#2a2a29] hover:border-accent/40 hover:bg-[#1a1a19] transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg className="w-[16px] h-[16px] text-[#e8e6de] group-hover:text-accent transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Behance */}
              <a
                href="https://www.behance.net/amad003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#141414] border border-[#2a2a29] hover:border-accent/40 hover:bg-[#1a1a19] transition-all duration-300 group"
                aria-label="Behance"
              >
                <svg className="w-[17px] h-[17px] text-[#e8e6de] group-hover:text-accent transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.516 1.782 1.368 1.782.836 0 1.336-.541 1.388-1.254h4zm-5.enabled-4.702c0-1.037-.466-1.587-1.339-1.587-.863 0-1.399.55-1.521 1.587h2.86zM1 11.766h4.012c.682 0 1.188.119 1.52.357.331.237.496.598.496 1.082 0 .508-.163.903-.488 1.184-.325.282-.754.422-1.286.422h-4.254V11.766zm0-4.766h3.93c.6 0 1.065.115 1.396.343.33.229.495.587.495 1.073 0 .451-.139.81-.417 1.077-.278.267-.68.4-1.207.4H1V7zm7.645 3.91c.416-.26.625-.693.625-1.298 0-.571-.186-1.013-.558-1.328-.373-.315-.906-.472-1.601-.472H0v9.188h7.27c.73 0 1.318-.175 1.763-.524.446-.35.668-.866.668-1.547 0-.597-.169-1.065-.507-1.401-.338-.337-.829-.554-1.549-.618z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/212600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#141414] border border-[#2a2a29] hover:border-accent/40 hover:bg-[#1a1a19] transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <svg className="w-[16px] h-[16px] text-[#e8e6de] group-hover:text-accent transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#141414] border border-[#2a2a29] hover:border-accent/40 hover:bg-[#1a1a19] transition-all duration-300 group cursor-pointer"
                aria-label="Scroll to top"
              >
                <svg className="w-[14px] h-[14px] text-[#e8e6de] group-hover:text-accent transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
