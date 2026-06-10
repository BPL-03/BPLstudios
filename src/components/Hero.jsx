import React from 'react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between bg-bg pt-32 pb-32 lg:pb-16 overflow-hidden"
    >
      
      {/* Background Dark Textured Stone Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100 pointer-events-none"
        style={{ backgroundImage: 'url("/assets/hero_bg.jpg")' }}
      />

      {/* Centered Panther Logo (Absolute positioned in the background layer, visible on desktop) */}
      <div className="hidden lg:flex absolute top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center pointer-events-none z-0">
        
        {/* Subtle Ambient Backlight Glow */}
        <div className="absolute w-[520px] h-[520px] rounded-full bg-white/[0.015] blur-3xl" />

        {/* The Panther Logo Image */}
        <img 
          src="/assets/panther_logo.png" 
          alt="BPL Panther Logo" 
          className="w-[360px] h-[360px] object-contain select-none opacity-85 shadow-[0_0_80px_rgba(255,255,255,0.1)]"
        />

      </div>

      {/* ─── DESKTOP FOREGROUND CONTENT LAYER (Visible on lg/desktop screens) ─── */}
      <div className="hidden lg:flex portfolio-container relative z-10 flex-col justify-between gap-y-12 flex-grow">
        
        {/* Top/Middle Row: Headline & Stats */}
        <div className="grid grid-cols-12 gap-6 items-start mt-6">
          
          {/* Left: 7 Columns - Headline */}
          <div className="col-span-7 flex flex-col items-start text-left">
            <h1 className="text-[54px] xl:text-[60px] leading-[1.08] font-sans font-light text-text-primary tracking-tight max-w-xl">
              The Way Your <br />
              Business Looks <br />
              Changes Everything.
            </h1>
          </div>

          {/* Right: 5 Columns - Stats & Designer Bio */}
          <div className="col-span-5 flex flex-col items-end gap-3 text-right pl-10">
            
            {/* Stats Row */}
            <div className="flex gap-12 w-full justify-end">
              {/* Stat 1 */}
              <div className="flex flex-col items-end">
                <span className="text-[33px] font-sans font-normal text-text-primary leading-none">+7</span>
                <span className="text-[10px] font-syne tracking-wider text-text-muted mt-1 leading-tight text-right">
                  Years of <br /> experience
                </span>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col items-end">
                <span className="text-[33px] font-sans font-normal text-text-primary leading-none">+60</span>
                <span className="text-[10px] font-syne tracking-wider text-text-muted mt-1 leading-tight text-right">
                  Projects <br /> delivered
                </span>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col items-end">
                <span className="text-[33px] font-sans font-normal text-text-primary leading-none">+3</span>
                <span className="text-[10px] font-syne tracking-wider text-text-muted mt-1 leading-tight text-right">
                  Core <br /> services
                </span>
              </div>
            </div>

            {/* Bio Metadata */}
            <p className="text-[15.5px] text-text-muted max-w-xs leading-[1.35] font-syne mt-1">
              I'm Ahmed Arjdal, a designer <br />
              and co-founder based in Agadir
            </p>

          </div>

        </div>

        {/* CTA Buttons Row */}
        <div className="grid grid-cols-12 gap-6 items-center">
          
          {/* Left CTA: 7 Columns */}
          <div className="col-span-7 flex justify-start">
            <a 
              href="#work" 
              className="bg-[#D8FF00] hover:bg-[#c6eb00] text-black font-syne text-[12px] font-semibold tracking-widest px-8 py-3.5 rounded-[4px] inline-flex items-center gap-2 transition-all"
            >
              View Work <span className="text-sm font-sans font-bold">&rarr;</span>
            </a>
          </div>

          {/* Right CTA: 5 Columns */}
          <div className="col-span-5 flex justify-end relative">
            <a 
              href="#contact" 
              className="border border-[#D8FF00] hover:bg-[#D8FF00] hover:text-black text-white font-syne text-[12px] tracking-widest px-8 py-3.5 rounded-[4px] inline-flex items-center gap-2 transition-all"
            >
              Contact us <span className="text-sm font-sans">&rarr;</span>
            </a>
          </div>

        </div>

        {/* Bottom Row: Detailed Descriptions */}
        <div className="grid grid-cols-12 gap-6 items-end border-t border-white/5 pt-8">
          
          {/* Left Description (7 Columns) */}
          <div className="col-span-7 flex flex-col items-start text-left gap-2">
            <span className="text-[11px] font-mono tracking-widest text-[#555555] uppercase font-semibold">
              &mdash; THE STUDIO
            </span>
            <p className="text-[17px] leading-[1.65] text-[#888888] max-w-lg font-syne">
              Design that works in <br />
              Agadir, Paris, and Dubai <br />
              — not by looking the same, <br />
              but by understanding each market.
            </p>
          </div>

          {/* Right Description (5 Columns - Right-aligned) */}
          <div className="col-span-5 flex flex-col items-end text-right pl-10">
            <p className="text-[17px] leading-[1.65] text-[#888888] max-w-md font-syne">
              Every project is approached <br />
              with precision, intention, and <br />
              a commitment to creating work that <br />
              doesn't just look good, but performs
            </p>
          </div>

        </div>

      </div>

      {/* ─── MOBILE & TABLET FOREGROUND CONTENT LAYER (Visible on screens < 1024px) ─── */}
      <div className="flex lg:hidden portfolio-container relative z-10 flex-col justify-between gap-y-8 flex-grow">
        
        {/* Top Section: Left-aligned Headline */}
        <div className="flex flex-col items-start text-left">
          <h1 className="text-[34px] md:text-[46px] leading-[1.08] font-sans font-light text-text-primary tracking-tight max-w-xl">
            The Way Your <br />
            Business Looks <br />
            Changes Everything.
          </h1>
        </div>

        {/* Middle Section: Centered In-flow Panther Logo (Reserves layout space, no overlap) */}
        <div className="relative flex items-center justify-center py-4 mt-12 mb-2 z-10 select-none">
          {/* Subtle Ambient Backlight Glow */}
          <div className="absolute w-[280px] h-[280px] rounded-full bg-white/[0.01] blur-2xl pointer-events-none" />

          {/* The Panther Logo Image */}
          <img 
            src="/assets/panther_logo.png" 
            alt="BPL Panther Logo" 
            className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] object-contain opacity-85 shadow-[0_0_50px_rgba(255,255,255,0.08)]"
          />
        </div>

        {/* Bottom Section: Split 2-Column Grid Layout */}
        <div className="grid grid-cols-12 gap-x-4 gap-y-6 items-end mt-2">
          
          {/* Left Column (8/12 grid cols) - Bio & CTAs */}
          <div className="col-span-8 flex flex-col gap-4 text-left">
            {/* Bio paragraph */}
            <p className="text-[15.5px] md:text-[16.5px] leading-[1.35] text-[#888888] font-syne max-w-sm">
              I'm Ahmed Arjdal, a designer and co-founder based in Agadir
            </p>

            {/* Buttons Row (Outlined first, solid second) */}
            <div className="flex flex-row flex-wrap items-center gap-3">
              <a 
                href="#contact" 
                className="border border-[#D8FF00] hover:bg-[#D8FF00] hover:text-black text-white font-syne text-[11px] sm:text-[12px] tracking-widest px-5 sm:px-6 py-3 rounded-[4px] inline-flex items-center gap-2 transition-all"
              >
                Contact us <span className="text-sm font-sans">&rarr;</span>
              </a>
              <a 
                href="#work" 
                className="bg-[#D8FF00] hover:bg-[#c6eb00] text-black font-syne text-[11px] sm:text-[12px] font-semibold tracking-widest px-5 sm:px-6 py-3 rounded-[4px] inline-flex items-center gap-2 transition-all"
              >
                View Work <span className="text-sm font-sans font-bold">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column (4/12 grid cols) - Stacked Stats */}
          <div className="col-span-4 flex flex-col items-end gap-5 text-right select-none">
            {/* Stat 1 */}
            <div className="flex flex-col items-end">
              <span className="text-[26px] sm:text-[33px] font-sans font-normal text-text-primary leading-none">+7</span>
              <span className="text-[9px] sm:text-[10px] font-syne tracking-wider text-text-muted mt-1 leading-tight text-right">
                Years of <br /> Experience
              </span>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-end">
              <span className="text-[26px] sm:text-[33px] font-sans font-normal text-text-primary leading-none">+3</span>
              <span className="text-[9px] sm:text-[10px] font-syne tracking-wider text-text-muted mt-1 leading-tight text-right">
                Core <br /> Services
              </span>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col items-end">
              <span className="text-[26px] sm:text-[33px] font-sans font-normal text-text-primary leading-none">+60</span>
              <span className="text-[9px] sm:text-[10px] font-syne tracking-wider text-text-muted mt-1 leading-tight text-right">
                Projects <br /> Delivered
              </span>
            </div>
          </div>

        </div>

        {/* Studio Descriptions Footer (Stacked under a divider line on mobile/tablet) */}
        <div className="grid grid-cols-12 gap-y-4 border-t border-white/5 pt-6 mt-4">
          <div className="col-span-12 md:col-span-6 flex flex-col items-start text-left gap-2">
            <span className="text-[10px] font-mono tracking-widest text-[#555555] uppercase font-semibold">
              &mdash; THE STUDIO
            </span>
            <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#888888] font-syne max-w-md">
              Design that works in Agadir, Paris, and Dubai — not by looking the same, but by understanding each market.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col items-start text-left">
            <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#888888] font-syne max-w-md mt-1 md:mt-6">
              Every project is approached with precision, intention, and a commitment to creating work that doesn't just look good, but performs.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
