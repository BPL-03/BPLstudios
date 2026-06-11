import React from 'react';
import SplitText from './SplitText';

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#030303] border-b border-[#383838] pt-0 pb-0 select-none overflow-hidden"
    >
      <div className="w-full px-[5%] md:px-[104px] max-w-[1860px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-0">

        {/* Row 1, Column 1 & 2: Heading Block */}
        <div className="lg:col-span-2 flex flex-col justify-end pt-[120px] sm:pt-[180px] pb-16 lg:pb-12 lg:order-1">
          {/* Label with small line */}
          <div className="flex items-center gap-3 mb-3 reveal-up">
            <div className="w-[27px] h-[1px] bg-[#D8D8D8]" />
            <span className="font-dm-sans text-[11.5px] font-medium tracking-[2.074px] text-[#D8D8D8] uppercase">
              How I Work
            </span>
          </div>
          {/* Title heading */}
          <h2 className="font-sans font-light text-[58px] sm:text-[90px] leading-[0.92] text-[#D8D8D8] tracking-tight reveal-text stagger-1">
            <SplitText text="The Process" />
          </h2>
        </div>

        {/* Step 1: Discover */}
        <div className="flex flex-col justify-start gap-10 h-auto lg:h-[350px] pt-8 pb-5 px-8 lg:pt-10 lg:pb-10 lg:pl-0 lg:pr-8 items-end text-right w-full group transition-all duration-300 lg:hover:bg-white/[0.01] mb-5 lg:mb-0 lg:order-4 reveal-up stagger-1">
          {/* Top: Number and Title/Icon */}
          <div className="flex justify-end lg:justify-between items-center lg:items-end lg:h-[140px] w-full lg:w-[60%] lg:ml-auto gap-8 lg:gap-0">
            <span className="font-sans font-bold text-[105px] leading-none text-[#DEF81D] lg:text-[#1C1C1C] lg:group-hover:text-[#DEF81D] transition-colors duration-300 translate-y-0 lg:translate-y-[12px]">1</span>
            <div className="flex items-center gap-2">
              <svg className="w-[22px] h-[22px] text-[#DEF81D] lg:group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              <span className="font-syne font-medium text-[22px] text-[#DEF81D] tracking-tight">Discover</span>
            </div>
          </div>
          {/* Bottom: Description */}
          <p className="font-syne text-[17.5px] lg:text-[18.5px] leading-relaxed text-[#888888] lg:group-hover:text-[#DEF81D] transition-colors duration-300 max-w-[280px] lg:max-w-none text-right ml-auto">
            Deep-dive into your brand,<br className="hidden lg:inline" /> audience, goals, and competitive<br className="hidden lg:inline" /> landscape. No shortcuts —<br className="hidden lg:inline" /> understanding everything first.
          </p>
        </div>

        {/* Step 2: Design (Merged with its Row 3 Column 2 vertical border extension) */}
        <div className="lg:row-span-2 border border-[#505050] lg:border-b-0 -mr-[6vw] md:-mr-[110px] lg:mr-0 bg-[#080808]/40 w-[calc(100%+6vw)] md:w-[calc(100%+110px)] lg:w-full group transition-all duration-300 lg:hover:border-[#DEF81D] flex flex-col justify-between mb-5 lg:mb-0 lg:order-5 reveal-up stagger-2">
          <div className="flex flex-col justify-start gap-10 h-auto lg:h-[350px] py-8 pl-8 pr-[calc(2rem+6vw)] md:pr-[calc(2rem+110px)] lg:p-10 w-full">
            {/* Top: Title/Icon and Number */}
            <div className="flex justify-between items-center lg:items-end lg:h-[140px] w-full">
              <div className="flex items-center gap-2">
                <span className="text-[22px] text-white">✦</span>
                <span className="font-syne font-medium text-[22px] text-white tracking-tight">Design</span>
              </div>
              <span className="font-sans font-bold text-[105px] leading-none text-[#1C1C1C] lg:group-hover:text-[#DEF81D] transition-colors duration-300 translate-y-0 lg:translate-y-[12px]">2</span>
            </div>
            {/* Bottom: Description */}
            <p className="font-syne text-[17.5px] lg:text-[18.5px] leading-relaxed text-[#888888]">
              Concept development and<br className="hidden lg:inline" /> creative exploration. Building<br className="hidden lg:inline" /> from core ideas toward a distinct,<br className="hidden lg:inline" /> intentional visual direction.
            </p>
          </div>
          {/* Bottom spacer for Row 3 */}
          <div className="hidden lg:block flex-grow"></div>
        </div>

        {/* Step 3: Refine (Merged with its Row 1 Column 3 vertical border extension) */}
        <div className="lg:row-span-2 border border-[#505050] lg:border-l lg:border-r lg:border-b lg:border-t-0 -ml-[6vw] md:-ml-[110px] lg:ml-0 w-[calc(100%+6vw)] md:w-[calc(100%+110px)] lg:w-full group transition-all duration-300 lg:hover:border-[#DEF81D] flex flex-col justify-end mb-5 lg:mb-0 lg:order-2 reveal-up stagger-3">
          {/* Top border extension spacer on desktop */}
          <div className="hidden lg:block flex-grow"></div>
          {/* Card 3 Content Container */}
          <div className="flex flex-col justify-start gap-10 h-auto lg:h-[350px] py-8 pr-8 pl-[calc(2rem+6vw)] md:pl-[calc(2rem+110px)] lg:p-10 bg-transparent lg:bg-[#080808]/40 w-full">
            {/* Top: Title/Icon and Number */}
            <div className="flex justify-between items-center lg:items-end lg:h-[140px] w-full">
              <div className="flex items-center gap-2">
                <svg className="w-[22px] h-[22px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
                <span className="font-syne font-medium text-[22px] text-white tracking-tight">Refine</span>
              </div>
              <span className="font-sans font-bold text-[105px] leading-none text-[#1C1C1C] lg:group-hover:text-[#DEF81D] transition-colors duration-300 translate-y-0 lg:translate-y-[12px]">3</span>
            </div>
            {/* Bottom: Description */}
            <p className="font-syne text-[17.5px] lg:text-[18.5px] leading-relaxed text-[#888888]">
              Precision and polish.<br className="hidden lg:inline" /> Iteration based on your<br className="hidden lg:inline" /> feedback until every element<br className="hidden lg:inline" /> earns its place in the final system.
            </p>
          </div>
        </div>

        {/* Spacer below Step 3 */}
        <div className="hidden lg:block pt-5 pb-[120px] sm:pb-[180px] lg:order-8" />

        {/* Step 4: Deliver */}
        <div className="flex flex-col justify-start gap-10 h-auto lg:h-[350px] p-8 lg:p-10 border-[0.5px] border-[#DEF81D] bg-[#DEF81D] lg:bg-[#080808]/40 w-full group transition-all duration-300 lg:hover:bg-[#DEF81D] mb-5 lg:mb-0 lg:order-6 reveal-up stagger-4">
          {/* Top: Title/Icon and Number */}
          <div className="flex justify-between items-center lg:items-end lg:h-[140px] w-full">
            <div className="flex items-center gap-2">
              <div className="w-[11px] h-[11px] rounded-full bg-black lg:hidden" />
              <svg className="hidden lg:block w-[22px] h-[22px] text-black lg:text-[#DEF81D] lg:group-hover:text-black lg:group-hover:scale-110 lg:group-hover:rotate-6 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <span className="font-syne font-medium text-[22px] text-black lg:text-[#DEF81D] lg:group-hover:text-black tracking-tight transition-colors duration-300">Deliver</span>
            </div>
            <span className="font-sans font-bold text-[105px] leading-none text-black lg:text-[#DEF81D] lg:group-hover:text-black transition-colors duration-300 translate-y-0 lg:translate-y-[12px]">4</span>
          </div>
          {/* Bottom: Description */}
          <p className="font-syne text-[17.5px] lg:text-[18.5px] leading-relaxed text-black lg:text-[#DEF81D] lg:group-hover:text-black transition-colors duration-300">
            Final files, guidelines,<br className="hidden lg:inline" /> and handoff. Everything you<br className="hidden lg:inline" /> need to launch and grow —<br className="hidden lg:inline" /> organized, documented, ready.
          </p>
        </div>

        {/* Quote below Step 4 */}
        <div className="pt-1 pb-5 lg:pt-5 lg:pb-[120px] sm:lg:pb-[180px] lg:order-9 reveal-up stagger-5">
          <p className="font-syne text-[14px] leading-[1.4] text-white/40 w-full text-left">
            I believe great design is quiet confidence. It doesn't shout, it resonates. Every choice is intentional, every detail considered.
          </p>
        </div>

        {/* Empty space below Step 1 */}
        <div className="hidden lg:block lg:order-7"></div>

        {/* Column 4 empty spacer block */}
        <div className="hidden lg:block h-full lg:order-3"></div>

      </div>
    </section>
  );
}
