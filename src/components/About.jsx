import React, { useState, useEffect, useRef } from 'react';
import SplitText from './SplitText';

export default function About() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const scrollRef = useRef(null);
  const trackerRef = useRef(null);
  const rafRef = useRef(null);
  const currentY = useRef(194.73);
  const targetY = useRef(194.73);

  const startTop = 194.73;

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const pct = scrollHeight - clientHeight > 0 ? scrollTop / (scrollHeight - clientHeight) : 0;
      const endTop = scrollHeight - 77.43 - 120;
      targetY.current = startTop + (endTop - startTop) * pct;
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [isDrawerOpen]);

  useEffect(() => {
    const tick = (timestamp) => {
      const delta = Math.min((timestamp - (rafRef.lastTime || timestamp)) / 16.67, 3);
      rafRef.lastTime = timestamp;

      const t = 1 - Math.pow(0.85, delta); // frame-rate independent lerp
      currentY.current = currentY.current + (targetY.current - currentY.current) * t;

      if (trackerRef.current) {
        trackerRef.current.style.transform = `translateY(${currentY.current}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Reset on drawer close
  useEffect(() => {
    if (!isDrawerOpen) {
      currentY.current = startTop;
      targetY.current = startTop;
    }
  }, [isDrawerOpen]);

  return (
    <section 
      id="about" 
      className="bg-[#030303] border-b border-[#383838] py-[120px] sm:py-[180px] select-none overflow-hidden"
    >
      <div className="w-full relative px-[5%] md:px-[104px] max-w-[1860px] mx-auto flex flex-col items-center">
        <div className="w-full lg:w-[1504px] flex flex-col lg:translate-x-[60px]">
          
          {/* Label and Section Heading */}
          <div className="flex flex-col gap-2 mb-8">
            {/* Label with small line */}
            <div className="flex items-center gap-3">
              <div className="w-[27px] h-[1px] bg-[#D8D8D8]" />
              <span className="font-dm-sans text-[11px] font-medium tracking-[1.866px] text-[#D8D8D8] uppercase">
                The Founder
              </span>
            </div>
            {/* Title heading */}
            <h2 className="font-sans font-light text-[58px] sm:text-[90px] leading-[0.92] text-[#D8D8D8] tracking-tight">
              Ahmed Arjdal <br className="hidden sm:inline" />
              <span className="text-[24px] sm:text-[36px] font-light text-[#7a7870] block mt-2 sm:mt-4">
                Designer &amp; Creative Director
              </span>
            </h2>
          </div>

          {/* Symmetrical Grid layout (splits into 2 main columns on desktop) */}
          <div className="flex flex-col lg:flex-row gap-8 items-start w-full justify-between">
            
            {/* Left Half (852px max width in desktop) - holding social/text col + portrait image */}
            <div className="flex flex-row gap-8 items-start w-full lg:w-[852px] shrink-0">
              
              {/* Left Column (Column 1 - Social links at bottom) */}
              <div className="hidden sm:flex flex-col justify-end w-[361px] h-[539px] text-right items-end shrink-0 select-none">

                {/* Social media icons stack */}
                <div className="flex flex-col gap-4 items-end">
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/bpl.studios/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-[52px] h-[48px] border border-[#4a4a4a] hover:border-[#888888] rounded-[4px] flex items-center justify-center text-[#D8D8D8] hover:bg-white/5 active:scale-95 transition-all focus:outline-none"
                    aria-label="Instagram Profile"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/bpl003" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-[52px] h-[48px] border border-[#4a4a4a] hover:border-[#888888] rounded-[4px] flex items-center justify-center text-[#D8D8D8] hover:bg-white/5 active:scale-95 transition-all focus:outline-none"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Behance */}
                  <a 
                    href="https://www.behance.net/amad003" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-[52px] h-[48px] border border-[#4a4a4a] hover:border-[#888888] rounded-[4px] flex items-center justify-center text-[#D8D8D8] hover:bg-white/5 active:scale-95 transition-all focus:outline-none"
                    aria-label="Behance Portfolio"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 19h-20c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2zm-12.8-5h3.6c.7 0 1.2-.5 1.2-1.2 0-.6-.5-1.1-1.2-1.1h-3.6v2.3zm0-4.5h3.4c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1h-3.4v2.2zm11.7.5h-4.5v1.2h4.5v-1.2zm-2.2 2.3c-.6 0-1.1.5-1.1 1.2 0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c0-.7-.5-1.2-1.1-1.2z" />
                      <path d="M12 9.4c0-1.9-1.5-3.4-3.4-3.4h-5.6v12h5.6c1.9 0 3.4-1.5 3.4-3.4 0-1.1-.5-2.1-1.3-2.7.8-.5 1.3-1.5 1.3-2.5zm-3.4 6.6h-3.6v-2.3h3.6c.7 0 1.2.5 1.2 1.2.1.6-.4 1.1-1.2 1.1zm0-4.5h-3.6V9.3h3.6c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1zm10.4 1.3c0-2.3-1.9-4.2-4.2-4.2s-4.2 1.9-4.2 4.2 1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2zm-4.2 2.3c-.6 0-1.1-.5-1.1-1.2 0-.6.5-1.2 1.1-1.2s1.1.5 1.1 1.2c0 .7-.5 1.2-1.1 1.2z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/212772247633" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-[52px] h-[48px] border border-[#4a4a4a] hover:border-[#888888] rounded-[4px] flex items-center justify-center text-[#D8D8D8] hover:bg-white/5 active:scale-95 transition-all focus:outline-none"
                    aria-label="WhatsApp Chat"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.167 1.456 4.747 1.458 5.4 0 9.792-4.39 9.795-9.795.002-2.618-1.01-5.08-2.85-6.92C16.44 2.057 13.974 1.044 11.36 1.044c-5.396 0-9.786 4.39-9.79 9.796-.001 1.83.49 3.61 1.42 5.176l-.99 3.616 3.7-.971c.002-.001.002-.001.003-.001z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Column 2 - Portrait Image + Bottom Quote stack */}
              <div className="flex flex-col gap-[30px] w-full sm:w-[459px] shrink-0">
                <div className="relative w-full h-auto lg:h-[539px] rounded-[4px] border border-[#383838] overflow-hidden bg-[#18181b] select-none">
                  <img 
                    src="/assets/portrait_ahmed.jpg" 
                    alt="Ahmed Arjdal, Designer and Creative Director at BPL Studios, Agadir Morocco" 
                    width="459"
                    height="539"
                    loading="lazy"
                    className="w-full h-full object-cover pointer-events-none transition-transform duration-700 hover:scale-[1.03]"
                  />
                  {/* Mobile-only overlay title */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:hidden">
                    <h3 className="font-sans font-light text-[36px] leading-[1.08] text-white/80 tracking-tight">
                      Designer &amp; Creative Director
                    </h3>
                  </div>
                </div>

                {/* Bottom Quote (desktop only) */}
                <div className="hidden lg:block select-none text-right max-w-[459px] ml-auto">
                  <p className="font-syne font-medium text-[13px] lg:text-[14px] leading-[1.4] text-white/40 text-right">
                    I believe great design is quiet confidence. It doesn't {' '}<br className="hidden lg:inline" />
                    shout, it resonates. Every choice is intentional, {' '}<br className="hidden lg:inline" />
                    every detail considered.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Half (620px max width in desktop) - holding title, paragraph bio, tags, button */}
            <div className="flex flex-col justify-end gap-8 w-full lg:w-[620px] h-auto lg:h-[539px] shrink-0 select-none">
              
              {/* Designer & Creative Director subheading */}
              <h3 className="hidden lg:block font-sans font-light text-[54px] lg:text-[62px] leading-[0.95] text-[#D8D8D8] tracking-tight max-w-[500px]">
                Designer &amp;<br />Creative Director
              </h3>

              {/* Bio Paragraph */}
              <p className="font-syne font-medium text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.4] text-[#D8D8D8] opacity-80 pl-3 lg:pl-0 max-w-[620px]">
                With over 8 years of experience in the design industry, I've built a {' '}<br className="hidden lg:inline" />
                reputation for creating brand identities and digital experiences that are {' '}<br className="hidden lg:inline" />
                both visually striking and strategically sound. {' '}<br className="hidden lg:inline" />
                Based in Agadir, Morocco, I work with clients across Africa, Europe, {' '}<br className="hidden lg:inline" />
                and the Middle East — helping startups launch with confidence and {' '}<br className="hidden lg:inline" />
                established brands find their next visual chapter.
              </p>

              {/* Tags & Lime Button Rows */}
              <div className="flex flex-col gap-y-[10px] -mt-3 w-full lg:max-w-[620px]">
                {/* Tags Row */}
                <div className="flex flex-row flex-wrap items-center justify-end lg:justify-start gap-[12px] ml-auto lg:ml-0">
                  {['Brand Strategy', 'Photography Direction', 'Copywriting'].map((tag) => (
                    <span 
                      key={tag}
                      className="border border-white/20 rounded-[4px] h-[48px] px-[18px] flex items-center justify-center text-[#F5F2EC] font-syne font-medium text-[12px] lg:text-[13px] tracking-[0.5px] leading-none select-none"
                    >
                      {tag}
                    </span>
                  ))}
                  
                  {/* More About Me Button */}
                  <button 
                    onClick={() => setIsDrawerOpen(true)}
                    className="bg-[#DEF81D] hover:bg-[#cbf00f] active:scale-95 transition-all text-black font-syne font-medium text-[12px] lg:text-[13px] tracking-[0.5px] h-[48px] px-[22px] rounded-[4px] inline-flex items-center justify-center gap-2 shadow-lg leading-none select-none cursor-pointer border-none outline-none"
                  >
                    More About Me <span className="text-sm">&rarr;</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
          
        </div>
      </div>

      {/* Pop-side About Drawer Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[999] backdrop-blur-sm transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Pop-side About Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[719px] z-[1000] shadow-2xl flex flex-col overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(63px)'
        }}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Yellow/Lime accent glow */}
        <div 
          className="absolute pointer-events-none"
          style={{
            width: '1634.56px',
            height: '3853.8px',
            left: '-389.64px',
            top: '-598.23px',
            background: 'rgba(240, 255, 36, 0.05)',
            filter: 'blur(228.746px)',
            borderRadius: '50%'
          }}
        />

        {/* Vertical line indicator (spans the entire drawer height seamlessly) */}
        <div 
          className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-white/20 pointer-events-none z-10"
          style={{ borderColor: 'rgba(255, 255, 255, 0.28)', borderLeftWidth: '1.93px' }}
        />

        {/* Content container */}
        <div 
          ref={scrollRef}
          className="relative z-10 flex flex-col h-full overflow-y-auto no-scrollbar pt-[66.06px] select-text"
        >
          {/* Inner relative container to measure scroll height and contain vertical lines */}
          <div className="relative flex flex-col min-h-full pl-[75.78px] pr-[44px]">
            
            <div 
              ref={trackerRef}
              className="absolute left-[28px] w-[3px] bg-white pointer-events-none shadow-[0px_3.87px_3.87px_rgba(0,0,0,0.25)]"
              style={{ 
                borderLeftWidth: '2.9px', 
                borderLeftColor: '#FFFFFF',
                top: 0,
                height: '77.43px',
                willChange: 'transform'
              }}
            />

          {/* Title Row: Hi! + Close button */}
          <div className="flex justify-between items-start w-full relative">
            <h4 
              className={`font-anek-devanagari text-white select-none reveal-up ${isDrawerOpen ? 'in-view' : ''}`}
              style={{ fontWeight: 500, fontSize: '50.38px', lineHeight: '90%' }}
            >
              Hi!
            </h4>
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="flex items-center justify-center rounded-full hover:opacity-85 transition-all cursor-pointer focus:outline-none shrink-0"
              style={{
                width: '43.19px',
                height: '43.19px',
                background: 'rgba(255, 255, 255, 0.14)',
                border: '0.85px solid rgba(0, 0, 0, 0.1)'
              }}
              aria-label="Close about panel"
            >
              <svg className="w-[10.4px] h-[10.4px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* 01 - About */}
          <div className="flex flex-col mt-[78.29px]">
            <h5 className={`font-anek-gujarati text-[17.5px] font-medium tracking-[0.54px] text-white reveal-up stagger-1 ${isDrawerOpen ? 'in-view' : ''}`}>
              01 - About
            </h5>
            
            <p className={`font-anek-devanagari mt-[26px] text-[15.5px] font-light text-white/95 leading-[1.35] max-w-[596px] reveal-up stagger-2 ${isDrawerOpen ? 'in-view' : ''}`}>
              I'm Ahmed Arjdal, a Graphic & Web Designer based in Agadir, Morocco — and co-founder of Codesign, a design and multi-services agency. My work sits at the intersection of branding, UI/UX, and digital experience. I build complete brand identities from concept to execution, design websites that communicate clearly, and create visual systems that help businesses stand out in competitive markets.
            </p>

            <p className={`font-anek-devanagari mt-[17px] text-[15.5px] font-light text-white/95 leading-[1.35] max-w-[582px] reveal-up stagger-3 ${isDrawerOpen ? 'in-view' : ''}`}>
              Over the years I've worked with coffee shops, restaurants, startups, and software companies — freelancing, collaborating in teams, and now leading as Creative Director. Every project sharpens how I think about design not just as visuals, but as strategy.
            </p>
          </div>

          {/* 02 - Work experience */}
          <div className="flex flex-col gap-6 mt-[97.14px]">
            <h5 className={`font-anek-gujarati text-[17.5px] font-medium tracking-[0.54px] text-white reveal-up stagger-3 ${isDrawerOpen ? 'in-view' : ''}`}>
              02 - Work experience
            </h5>
            
            {/* Exp 1 */}
            <div className={`p-[24px] bg-black/45 rounded-[3.87px] reveal-up stagger-4 ${isDrawerOpen ? 'in-view' : ''}`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[10px] gap-2">
                <h6 className="font-anek-gujarati text-[17.5px] font-medium text-white">Co-Founder & Creative Director</h6>
                <span className="font-syne text-[15.5px] font-medium text-[#4D6336]">Sep 2025 – Present</span>
              </div>
              <p className="font-syne text-[15.5px] font-medium text-white/64 mb-[20px]">Codesign — Design & Multi-services Agency</p>
              <p className="font-anek-devanagari text-[15.5px] font-light text-white/82 leading-[1.27] max-w-[489px]">
                Leading branding and visual identity projects from concept through delivery. Creating UI designs and website experiences across multiple industries.
              </p>
            </div>

            {/* Exp 2 */}
            <div className={`p-[24px] bg-black/45 rounded-[3.87px] reveal-up stagger-5 ${isDrawerOpen ? 'in-view' : ''}`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[10px] gap-2">
                <h6 className="font-anek-gujarati text-[17.5px] font-medium text-white">Video Editor / Social Media Designer</h6>
                <span className="font-syne text-[15.5px] font-medium text-[#4D6336]">Feb 2025 – Sep 2025</span>
              </div>
              <p className="font-syne text-[15.5px] font-medium text-white/64 mb-[20px]">Somosolutions — Marketing Services Company</p>
              <p className="font-anek-devanagari text-[15.5px] font-light text-white/82 leading-[1.27] max-w-[489px]">
                Editing short-form video content for digital platforms — Reels, TikToks, Ads. Leveraging AI tools to generate and enhance content at scale.
              </p>
            </div>

            {/* Exp 3 */}
            <div className={`p-[24px] bg-black/45 rounded-[3.87px] reveal-up stagger-5 ${isDrawerOpen ? 'in-view' : ''}`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[10px] gap-2">
                <h6 className="font-anek-gujarati text-[17.5px] font-medium text-white">Web Designer & UI/UX</h6>
                <span className="font-syne text-[15.5px] font-medium text-[#4D6336]">Dec 2023 – Jan 2025</span>
              </div>
              <p className="font-syne text-[15.5px] font-medium text-white/64 mb-[20px]">Digimperial — Software Development Company</p>
              <p className="font-anek-devanagari text-[15.5px] font-light text-white/82 leading-[1.27] max-w-[489px]">
                Crafting visually striking and user-focused designs across diverse mediums. Collaborating with cross-functional teams and delivering solutions aligned with client objectives and market demands.
              </p>
            </div>

            {/* Exp 4 */}
            <div className={`p-[24px] bg-black/45 rounded-[3.87px] reveal-up stagger-5 ${isDrawerOpen ? 'in-view' : ''}`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[10px] gap-2">
                <h6 className="font-anek-gujarati text-[17.5px] font-medium text-white">Freelance Graphic & Digital Designer</h6>
                <span className="font-syne text-[15.5px] font-medium text-[#4D6336]">April 2018 – Sep 2023</span>
              </div>
              <p className="font-syne text-[15.5px] font-medium text-white/64 mb-[20px]">BPLstudios — Personal Brand</p>
              <p className="font-anek-devanagari text-[15.5px] font-light text-white/82 leading-[1.27] max-w-[535px]">
                Collaborated with diverse clients — coffee shops, restaurants, and small businesses — delivering high-quality graphic and digital designs.
              </p>
            </div>
          </div>

          {/* 03 - Skills & tools */}
          <div className="flex flex-col mt-[96.89px]">
            <h5 className={`font-anek-gujarati text-[17.5px] font-medium tracking-[0.54px] text-white reveal-up stagger-3 ${isDrawerOpen ? 'in-view' : ''}`}>
              03 - Skills & tools
            </h5>
            
            {/* Expertise Areas */}
            <div className={`mt-[42.88px] flex flex-col gap-4 reveal-up stagger-4 ${isDrawerOpen ? 'in-view' : ''}`}>
              <span className="font-syne text-[16.3px] font-medium text-white/73">-- Expertise areas</span>
              
              <div className="flex flex-row flex-wrap items-start gap-4">
                {/* UI/UX */}
                <div className="flex flex-row items-center gap-[9.69px] border border-[#4D6336] rounded-[3.87px] px-[13.5px] py-[13.5px]">
                  <svg className="w-[15px] h-[15px] shrink-0" viewBox="0 0 15 15" fill="none">
                    <rect x="1.5" y="1.5" width="5.5" height="12" rx="1.2" stroke="#F5F2EC" strokeWidth="1.45" />
                    <rect x="8.5" y="1.5" width="5" height="5" rx="1.2" stroke="#F5F2EC" strokeWidth="1.45" />
                    <rect x="8.5" y="8.5" width="5" height="5" rx="1.2" stroke="#F5F2EC" strokeWidth="1.45" />
                  </svg>
                  <span className="font-syne font-medium text-[13.6px] text-[#F5F2EC] tracking-[0.54px]">UI/UX Design</span>
                </div>

                {/* Graphic Design */}
                <div className="flex flex-row items-center gap-[9.69px] border border-[#4D6336] rounded-[3.87px] px-[13.5px] py-[13.5px]">
                  <div className="w-[15px] h-[14.5px] bg-[#F5F2EC] shrink-0" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
                  <span className="font-syne font-medium text-[13.6px] text-[#F5F2EC] tracking-[0.54px]">Graphic Design</span>
                </div>

                {/* Web Design */}
                <div className="flex flex-row items-center gap-[9.69px] border border-[#4D6336] rounded-[3.87px] px-[13.5px] py-[13.5px]">
                  <div className="w-[15px] h-[15px] bg-[#F5F2EC] rounded-full shrink-0" />
                  <span className="font-syne font-medium text-[13.6px] text-[#F5F2EC] tracking-[0.54px]">Web Design</span>
                </div>

                {/* Video Editing */}
                <div className="flex flex-row items-center gap-[9.69px] border border-[#4D6336] rounded-[3.87px] px-[13.5px] py-[13.5px]">
                  <svg className="w-[16px] h-[11px] shrink-0" viewBox="0 0 16 11" fill="none">
                    <rect x="1" y="1" width="14" height="9" rx="1" stroke="#F5F2EC" strokeWidth="1.45" />
                    <path d="M6 3.5l4 2-4 2v-4z" fill="#F5F2EC" />
                  </svg>
                  <span className="font-syne font-medium text-[13.6px] text-[#F5F2EC] tracking-[0.54px]">Video Editing</span>
                </div>

                {/* Social Media */}
                <div className="flex flex-row items-center gap-[9.69px] border border-[#4D6336] rounded-[3.87px] px-[13.5px] py-[13.5px]">
                  <svg className="w-[16px] h-[16px] shrink-0 fill-[#F5F2EC]" viewBox="0 0 16 16">
                    <circle cx="4" cy="8" r="2" />
                    <circle cx="12" cy="4" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <line x1="5.5" y1="6.8" x2="10.5" y2="5.2" stroke="#F5F2EC" strokeWidth="1.45" />
                    <line x1="5.5" y1="9.2" x2="10.5" y2="10.8" stroke="#F5F2EC" strokeWidth="1.45" />
                  </svg>
                  <span className="font-syne font-medium text-[13.6px] text-[#F5F2EC] tracking-[0.54px]">Social Media</span>
                </div>
              </div>
            </div>

            {/* Software Tools */}
            <div className={`mt-[34.88px] flex flex-col gap-4 reveal-up stagger-4 ${isDrawerOpen ? 'in-view' : ''}`}>
              <span className="font-syne text-[16.3px] font-medium text-white/73">-- Software</span>
              
              <div className="flex flex-row flex-wrap items-start gap-4">
                {/* Figma */}
                <div className="flex flex-row items-center gap-[16px] border border-[#4D6336] rounded-[3.87px] px-[13.5px] py-[13.5px]">
                  <svg className="w-[10.6px] h-[16px] shrink-0" viewBox="0 0 11 16" fill="none">
                    <circle cx="3" cy="3" r="2" stroke="#F5F2EC" strokeWidth="1.5" />
                    <circle cx="8" cy="3" r="2" stroke="#F5F2EC" strokeWidth="1.5" />
                    <circle cx="3" cy="8" r="2" stroke="#F5F2EC" strokeWidth="1.5" />
                    <circle cx="8" cy="8" r="2" stroke="#F5F2EC" strokeWidth="1.5" />
                    <path d="M1 13a2 2 0 002 2h2v-4H3a2 2 0 00-2 2z" stroke="#F5F2EC" strokeWidth="1.5" />
                  </svg>
                  <span className="font-syne font-medium text-[13.6px] text-[#F5F2EC] tracking-[0.54px]">Figma</span>
                </div>

                {/* Photoshop */}
                <div className="flex flex-row items-center gap-[16px] border border-[#4D6336] rounded-[3.87px] px-[13.5px] py-[13.5px]">
                  <div className="w-[15.5px] h-[15.5px] border border-[#FFFFFF] flex items-center justify-center text-[9px] font-bold font-sans text-white shrink-0">Ps</div>
                  <span className="font-syne font-medium text-[13.6px] text-[#F5F2EC] tracking-[0.54px]">Photoshop</span>
                </div>

                {/* Illustrator */}
                <div className="flex flex-row items-center gap-[16px] border border-[#4D6336] rounded-[3.87px] px-[13.5px] py-[13.5px]">
                  <div className="w-[15.5px] h-[15.5px] border border-[#FFFFFF] flex items-center justify-center text-[9px] font-bold font-sans text-white shrink-0">Ai</div>
                  <span className="font-syne font-medium text-[13.6px] text-[#F5F2EC] tracking-[0.54px]">Illustrator</span>
                </div>

                {/* AutoCAD */}
                <div className="flex flex-row items-center gap-[16px] border border-[#4D6336] rounded-[3.87px] px-[13.5px] py-[13.5px]">
                  <div className="w-[15.5px] h-[15px] border border-[#FFFFFF] flex items-center justify-center text-[8.5px] font-bold font-sans text-white shrink-0">Au</div>
                  <span className="font-syne font-medium text-[13.6px] text-[#F5F2EC] tracking-[0.54px]">Archicad / AutoCAD</span>
                </div>

                {/* CapCut */}
                <div className="flex flex-row items-center gap-[16px] border border-[#4D6336] rounded-[3.87px] px-[13.5px] py-[13.5px]">
                  <div className="w-[17px] h-[12px] border border-[#F5F2EC] flex items-center justify-center text-[7.5px] font-bold font-sans text-white shrink-0">Cc</div>
                  <span className="font-syne font-medium text-[13.6px] text-[#F5F2EC] tracking-[0.54px]">CapCut</span>
                </div>
              </div>
            </div>
          </div>

          {/* 03 - Qualities */}
          <div className="flex flex-col mt-[96.89px]">
            <h5 className={`font-anek-gujarati text-[17.5px] font-medium tracking-[0.54px] text-white reveal-up stagger-3 ${isDrawerOpen ? 'in-view' : ''}`}>
              03 - Qualities
            </h5>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[32.39px]">
              {/* Quality 1 */}
              <div className={`flex flex-row items-start gap-4 p-5 bg-black/45 rounded-[3.87px] reveal-up stagger-4 ${isDrawerOpen ? 'in-view' : ''}`}>
                <svg className="w-[16.34px] h-[20.27px] text-white mt-1 shrink-0" viewBox="0 0 16 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 2l6 4v8l-6 4-6-4V6l6-4z" />
                  <path d="M8 6a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                <p className="font-anek-devanagari text-[15.5px] font-light text-white/82 leading-[1.27] max-w-[215px]">
                  Passionate learner who stays ahead of design trends and tools
                </p>
              </div>

              {/* Quality 2 */}
              <div className={`flex flex-row items-start gap-4 p-5 bg-black/45 rounded-[3.87px] reveal-up stagger-4 ${isDrawerOpen ? 'in-view' : ''}`}>
                <svg className="w-[17.26px] h-[18.84px] text-white mt-1 shrink-0" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 1a8 8 0 100 16A8 8 0 009 1z" />
                  <path d="M9 5v8M5 9h8" />
                </svg>
                <p className="font-anek-devanagari text-[15.5px] font-light text-white/82 leading-[1.27] max-w-[217px]">
                  Creative thinker with a strong eye for detail and aesthetics
                </p>
              </div>

              {/* Quality 3 */}
              <div className={`flex flex-row items-start gap-4 p-5 bg-black/45 rounded-[3.87px] reveal-up stagger-5 ${isDrawerOpen ? 'in-view' : ''}`}>
                <svg className="w-[18px] h-[18px] text-white mt-1 shrink-0" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="6" cy="9" r="3" />
                  <circle cx="12" cy="9" r="3" />
                </svg>
                <p className="font-anek-devanagari text-[15.5px] font-light text-white/82 leading-[1.27] max-w-[223px]">
                  Strong communicator in cross-functional teams
                </p>
              </div>

              {/* Quality 4 */}
              <div className={`flex flex-row items-start gap-4 p-5 bg-black/45 rounded-[3.87px] reveal-up stagger-5 ${isDrawerOpen ? 'in-view' : ''}`}>
                <svg className="w-[18px] h-[18px] text-white mt-1 shrink-0" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 9h14M9 2l7 7-7 7" />
                </svg>
                <p className="font-anek-devanagari text-[15.5px] font-light text-white/82 leading-[1.27] max-w-[235px]">
                  Adaptive problem-solver in fast moving environments
                </p>
              </div>
            </div>
          </div>

          {/* 04 - Languages */}
          <div className="flex flex-col mt-[93.75px]">
            <h5 className={`font-anek-gujarati text-[17.5px] font-medium tracking-[0.54px] text-white reveal-up stagger-3 ${isDrawerOpen ? 'in-view' : ''}`}>
              04 - Languages
            </h5>

            <div className="flex flex-col gap-3 mt-[22.1px]">
              {/* Tamazight */}
              <div className={`flex flex-row justify-between items-center px-[32px] py-[16px] bg-black/45 rounded-[3.87px] reveal-up stagger-4 ${isDrawerOpen ? 'in-view' : ''}`}>
                <span className="font-anek-gujarati text-[17.5px] font-medium text-white">Tamazight</span>
                <span className="font-syne text-[15.5px] font-medium text-white/64">Native</span>
              </div>

              {/* Arabic */}
              <div className={`flex flex-row justify-between items-center px-[32px] py-[16px] bg-black/45 rounded-[3.87px] reveal-up stagger-4 ${isDrawerOpen ? 'in-view' : ''}`}>
                <span className="font-anek-gujarati text-[17.5px] font-medium text-white">Arabic</span>
                <span className="font-syne text-[15.5px] font-medium text-white/64">Fluent</span>
              </div>

              {/* English */}
              <div className={`flex flex-row justify-between items-center px-[32px] py-[16px] bg-black/45 rounded-[3.87px] reveal-up stagger-5 ${isDrawerOpen ? 'in-view' : ''}`}>
                <span className="font-anek-gujarati text-[17.5px] font-medium text-white">English</span>
                <span className="font-syne text-[15.5px] font-medium text-white/64">Conversational</span>
              </div>

              {/* French */}
              <div className={`flex flex-row justify-between items-center px-[32px] py-[16px] bg-black/45 rounded-[3.87px] reveal-up stagger-5 ${isDrawerOpen ? 'in-view' : ''}`}>
                <span className="font-anek-gujarati text-[17.5px] font-medium text-white">French</span>
                <span className="font-syne text-[15.5px] font-medium text-white/64">Basic</span>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="h-[60px] shrink-0" />

          {/* Bottom CTA */}
          <div className={`flex justify-start w-full reveal-up stagger-2 ${isDrawerOpen ? 'in-view' : ''}`}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(false);
                window.dispatchEvent(new Event('open-contact-drawer'));
              }}
              className="bg-[#DEF81D] hover:bg-[#cbf00f] font-dm-sans flex items-center justify-center cursor-pointer transition-all w-[180px] h-[52px]"
              style={{
                fontWeight: 500,
                fontSize: '14.1px',
                lineHeight: '23px',
                letterSpacing: '0.563px',
                color: '#000000',
                borderRadius: '4px',
                gap: '10px'
              }}
            >
              Let’s Talk <span>→</span>
            </a>
          </div>
          {/* Spacing after the button to allow scrolling past it */}
          <div className="h-[120px] shrink-0" />

          </div>
        </div>
      </div>
    </section>
  );
}
