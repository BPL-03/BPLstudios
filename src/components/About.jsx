import React from 'react';

export default function About() {
  return (
    <section 
      id="about" 
      className="bg-[#030303] border-b border-[#383838] pt-28 pb-20 select-none overflow-hidden"
    >
      <div className="w-full relative px-[5%] md:px-[104px] max-w-[1860px] mx-auto flex flex-col items-center">
        <div className="w-full lg:w-[1504px] flex flex-col">
          
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
              Ahmed Arjdal
            </h2>
          </div>

          {/* Symmetrical Grid layout (splits into 2 main columns on desktop) */}
          <div className="flex flex-col lg:flex-row gap-8 items-start w-full justify-between">
            
            {/* Left Half (852px max width in desktop) - holding social/text col + portrait image */}
            <div className="flex flex-row gap-8 items-start w-full lg:w-[852px] shrink-0">
              
              {/* Left Column (Column 1 - Quote text at top + social links at bottom) */}
              <div className="hidden sm:flex flex-col justify-between w-[361px] h-[539px] text-right items-end shrink-0 select-none">
                {/* Quote */}
                <p className="font-syne font-medium text-[16px] leading-[1.3] text-white/40 max-w-[361px] text-right">
                  I believe great design is quiet confidence. It doesn't shout it resonates. Every choice is intentional every detail considered
                </p>

                {/* Social media icons stack */}
                <div className="flex flex-col gap-4 items-end">
                  {/* Instagram */}
                  <a 
                    href="https://instagram.com/" 
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
                    href="https://linkedin.com/" 
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
                    href="https://behance.net/" 
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
                    href="https://wa.me/" 
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
                    alt="Ahmed Arjdal Portrait" 
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
                    I believe great design is quiet confidence. It doesn't<br className="hidden lg:inline" />
                    shout it resonates. Every choice is intentional<br className="hidden lg:inline" />
                    every detail considered
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
                With over 8 years of experience in the design industry, I've built a<br className="hidden lg:inline" />
                reputation for creating brand identities and digital experiences that are<br className="hidden lg:inline" />
                both visually striking and strategically sound.<br className="hidden lg:inline" />
                Based in Agadir, Morocco, I work with clients across Africa, Europe,<br className="hidden lg:inline" />
                and the Middle East — helping startups launch with confidence and<br className="hidden lg:inline" />
                established brands find their next visual chapter.
              </p>

              {/* Tags & Lime Button Rows */}
              <div className="flex flex-col gap-y-[10px] -mt-3 w-full lg:max-w-[620px]">
                {/* Row 1 */}
                <div className="flex flex-row flex-wrap items-center justify-end lg:justify-start gap-[12px] ml-auto lg:ml-0">
                  {['Brand Strategy', 'Photography Direction'].map((tag, idx) => (
                    <span 
                      key={tag + '-' + idx}
                      className="border border-white/20 rounded-[4px] h-[48px] px-[18px] flex items-center justify-center text-[#F5F2EC] font-syne font-medium text-[12px] lg:text-[13px] tracking-[0.5px] leading-none select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="flex flex-row flex-wrap items-center justify-end lg:justify-start gap-[12px] ml-auto lg:ml-0">
                  {['Brand Strategy', 'Copywriting'].map((tag, idx) => (
                    <span 
                      key={tag + '-' + idx}
                      className="border border-white/20 rounded-[4px] h-[48px] px-[18px] flex items-center justify-center text-[#F5F2EC] font-syne font-medium text-[12px] lg:text-[13px] tracking-[0.5px] leading-none select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Row 3 */}
                <div className="flex flex-row flex-wrap items-center justify-end lg:justify-start gap-[12px] ml-auto lg:ml-0">
                  {['Photography Direction'].map((tag, idx) => (
                    <span 
                      key={tag + '-' + idx}
                      className="border border-white/20 rounded-[4px] h-[48px] px-[18px] flex items-center justify-center text-[#F5F2EC] font-syne font-medium text-[12px] lg:text-[13px] tracking-[0.5px] leading-none select-none"
                    >
                      {tag}
                    </span>
                  ))}
                  
                  {/* More About Me Button */}
                  <a 
                    href="#about"
                    className="bg-[#DEF81D] hover:bg-[#cbf00f] active:scale-95 transition-all text-black font-syne font-medium text-[12px] lg:text-[13px] tracking-[0.5px] h-[48px] px-[22px] rounded-[4px] inline-flex items-center justify-center gap-2 shadow-lg leading-none select-none"
                  >
                    More About Me <span className="text-sm">&rarr;</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
