import React from 'react';

export default function Pricing() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const cardsWrapRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!cardsWrapRef.current) return;
    const rect = cardsWrapRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section 
      id="pricing" 
      className="bg-[#030303] text-[#D8D8D8] py-[100px] relative overflow-hidden select-none border-b border-[#383838]"
    >
      {/* Background Grid System - Absolute lines matching Figma (scaled down 10%) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {/* Horizontal Line 1 */}
        <div className="absolute top-[456.04px] left-0 right-0 h-[1px] bg-[#0F0F0F]" />
        
        {/* Horizontal Line 2 */}
        <div className="absolute top-[938.04px] left-0 right-0 h-[1px] bg-[#0F0F0F]" />

        {/* Vertical Line 1 */}
        <div className="absolute left-[208.25px] top-0 bottom-0 w-[1px] bg-[#0F0F0F]" />

        {/* Vertical Line 2 */}
        <div className="absolute left-[645.59px] top-0 bottom-0 w-[1px] bg-[#0F0F0F]" />

        {/* Vertical Line 3 */}
        <div className="absolute left-[1083.83px] top-0 bottom-0 w-[1px] bg-[#0F0F0F]" />

        {/* Vertical Line 4 */}
        <div className="absolute left-[1523.86px] top-0 bottom-0 w-[1px] bg-[#0F0F0F]" />
      </div>

      {/* Main Container - scaled down 10% */}
      <div className="w-full relative px-[4.5%] md:px-[94px] max-w-[1713px] mx-auto min-h-[1080px] flex flex-col justify-start">
        
        {/* Header Section (Ways to Work Together & Investment Title) */}
        <div className="w-full flex flex-col items-end gap-[7px] mb-[68px] relative z-10">
          {/* Label Group */}
          <div className="flex items-center gap-[16px]">
            <div className="w-[25px] h-[1px] bg-[#D8D8D8]" />
            <span className="font-dm-sans text-[10px] font-medium tracking-[1.86px] text-[#D8D8D8] uppercase leading-[17px]">
              Ways to Work Together
            </span>
          </div>
          {/* Title */}
          <h2 className="font-sans font-light text-[63px] sm:text-[94.42px] leading-[86.87px] text-[#D8D8D8] tracking-tight">
            Investment
          </h2>
        </div>

        {/* Grouped Blocks Container to prevent justify-between from stretching the vertical spacing */}
        <div className="w-full flex flex-col items-center z-10">

          {/* Top descriptions Row (aligned perfectly to match the columns layout spacing) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[27px] items-end w-full max-w-[1318px] px-[14px] mx-auto mb-[23px] relative z-10">
            {/* Starter outer description (left) */}
            <div className="max-w-[337px] lg:pl-[23px]">
              <p className="font-syne font-medium text-[14px] leading-[1.3] text-[#ffffff]/40">
                We don’t sell design. We build direction.
              </p>
            </div>
            <div className="hidden lg:block" />
            {/* Signature outer description (right) */}
            <div className="max-w-[337px] lg:pl-[23px]">
              <p className="font-syne font-medium text-[14px] leading-[1.3] text-[#ffffff]/40">
                If you're scaling across markets, building for different cultures, or launching in a region where cookie-cutter design fails—let's talk.
              </p>
            </div>
          </div>

          {/* Relative Cards Wrap to center background grid lines with card boundaries */}
          <div 
            ref={cardsWrapRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[1318px] mx-auto px-[14px]"
            style={{
              '--mouse-x': `${mousePos.x}px`,
              '--mouse-y': `${mousePos.y}px`,
            }}
          >
            {/* Soft background spotlight glow */}
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
              style={{
                background: `radial-gradient(circle 315px at var(--mouse-x) var(--mouse-y), rgba(222, 248, 29, 0.05), transparent 80%)`,
                opacity: isHovered ? 1 : 0,
              }}
            />

            {/* Static Base Grid Lines (Always faintly visible) */}
            {/* Horizontal Line 1 (Top Edge) */}
            <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-gradient-to-r from-transparent via-[#DEF81D] to-transparent opacity-15 shadow-[0_0_4px_#DEF81D] z-0" />

            {/* Horizontal Line 2 (Bottom Edge) */}
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-gradient-to-r from-transparent via-[#DEF81D] to-transparent opacity-15 shadow-[0_0_4px_#DEF81D] z-0" />

            {/* Vertical Lines */}
            <div className="absolute inset-0 pointer-events-none hidden lg:grid grid-cols-3 gap-[27px] px-[14px] z-0">
              {/* Column 1 Center Gap Line */}
              <div className="relative w-full h-full">
                <div className="absolute right-[-13.5px] top-[-540px] bottom-[-540px] w-[1px] bg-gradient-to-b from-transparent via-[#DEF81D] to-transparent opacity-10 shadow-[0_0_4px_#DEF81D]" />
              </div>
              {/* Column 2 Center Gap Line */}
              <div className="relative w-full h-full">
                <div className="absolute right-[-13.5px] top-[-540px] bottom-[-540px] w-[1px] bg-gradient-to-b from-transparent via-[#DEF81D] to-transparent opacity-10 shadow-[0_0_4px_#DEF81D]" />
              </div>
              <div className="relative w-full h-full" />
            </div>

            {/* Vertical Line 1 (Left Edge) */}
            <div className="absolute left-0 top-[-540px] bottom-[-540px] w-[1px] bg-gradient-to-b from-transparent via-[#DEF81D] to-transparent opacity-10 shadow-[0_0_4px_#DEF81D] z-0 hidden lg:block" />

            {/* Vertical Line 4 (Right Edge) */}
            <div className="absolute right-0 top-[-540px] bottom-[-540px] w-[1px] bg-gradient-to-b from-transparent via-[#DEF81D] to-transparent opacity-10 shadow-[0_0_4px_#DEF81D] z-0 hidden lg:block" />

            {/* Interactive Spotlight Glow Grid Lines */}
            <div 
              className="absolute top-[-270px] bottom-[-270px] left-[-270px] right-[-270px] pointer-events-none z-20 transition-opacity duration-300"
              style={{
                opacity: isHovered ? 1 : 0,
                WebkitMaskImage: `radial-gradient(circle 225px at calc(var(--mouse-x) + 270px) calc(var(--mouse-y) + 270px), black, transparent)`,
                maskImage: `radial-gradient(circle 225px at calc(var(--mouse-x) + 270px) calc(var(--mouse-y) + 270px), black, transparent)`
              }}
            >
              {/* Horizontal Line 1 (Top Edge) */}
              <div className="absolute top-[270px] left-0 right-0 h-[1px] bg-[#DEF81D] shadow-[0_0_8px_#DEF81D]" />

              {/* Horizontal Line 2 (Bottom Edge) */}
              <div className="absolute bottom-[270px] left-0 right-0 h-[1px] bg-[#DEF81D] shadow-[0_0_8px_#DEF81D]" />

              {/* Vertical Lines */}
              <div className="absolute top-0 bottom-0 left-[270px] right-[270px] grid grid-cols-3 gap-[27px] px-[14px] pointer-events-none hidden lg:grid">
                {/* Column 1 Center Gap Line */}
                <div className="relative w-full h-full">
                  <div className="absolute right-[-13.5px] top-0 bottom-0 w-[1px] bg-[#DEF81D] shadow-[0_0_8px_#DEF81D]" />
                </div>
                {/* Column 2 Center Gap Line */}
                <div className="relative w-full h-full">
                  <div className="absolute right-[-13.5px] top-0 bottom-0 w-[1px] bg-[#DEF81D] shadow-[0_0_8px_#DEF81D]" />
                </div>
                <div className="relative w-full h-full" />
              </div>

              {/* Vertical Line 1 (Left Edge) */}
              <div className="absolute left-[270px] top-0 bottom-0 w-[1px] bg-[#DEF81D] shadow-[0_0_8px_#DEF81D] hidden lg:block" />

              {/* Vertical Line 4 (Right Edge) */}
              <div className="absolute right-[270px] top-0 bottom-0 w-[1px] bg-[#DEF81D] shadow-[0_0_8px_#DEF81D] hidden lg:block" />
            </div>

          {/* Cards Row - Starter, Core, Signature */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[27px] relative z-10 w-full">
          
          {/* 1. Starter Card */}
          <div className="w-full lg:max-w-[412px] mx-auto min-h-[455px] p-5 sm:pt-[28px] sm:pb-[36px] sm:px-[23px] flex flex-col justify-between">
            <div>
              {/* Top Row: Name */}
              <div className="flex justify-between items-start">
                <span className="font-sans font-light text-[56px] leading-[56px] text-[#D8D8D8] font-anek">
                  Starter
                </span>
              </div>

              {/* Middle Row: Price */}
              <div className="flex justify-end items-baseline gap-2 mt-10 mb-6">
                <span className="font-syne font-medium text-[14px] text-[#D8D8D8]/80 text-right leading-[14px]">
                  Starting From
                </span>
                <span className="font-sans font-light text-[56px] leading-[56px] text-[#D8D8D8] font-anek">
                  500$
                </span>
              </div>

              {/* Tagline */}
              <div className="text-right mb-[22px] mt-[43px]">
                <p className="font-dm-sans font-medium text-[13px] tracking-[1.86px] uppercase text-[#D8D8D8] leading-[15px]">
                  For early-stage brands<br />that need clarity.
                </p>
              </div>
            </div>

            {/* Features & Outcome */}
            <div className="text-left">
              <p className="font-syne font-medium text-[14px] leading-[17px] text-[#D8D8D8]/80 whitespace-pre-line">
                Includes:<br /><br />
                Brand direction session<br />
                Basic visual identity<br />
                Simple landing page<br /><br />
                Outcome: A clear and usable starting point
              </p>
            </div>
          </div>

          {/* 2. Core Card */}
          <div className="w-full lg:max-w-[412px] mx-auto min-h-[455px] p-5 sm:pt-[28px] sm:pb-[36px] sm:px-[23px] flex flex-col justify-between">
            <div>
              {/* Top Row: Name */}
              <div className="flex justify-between items-start">
                <span className="font-sans font-light text-[56px] leading-[56px] text-[#D8D8D8] font-anek">
                  Core
                </span>
              </div>

              {/* Middle Row: Price */}
              <div className="flex justify-end items-baseline gap-2 mt-10 mb-6">
                <span className="font-syne font-medium text-[14px] text-[#D8D8D8]/80 text-right leading-[14px]">
                  Starting From
                </span>
                <span className="font-sans font-light text-[56px] leading-[56px] text-[#D8D8D8] font-anek">
                  800$
                </span>
              </div>

              {/* Tagline */}
              <div className="text-right mb-[22px] mt-[43px]">
                <p className="font-dm-sans font-medium text-[13px] tracking-[1.86px] uppercase text-[#D8D8D8] leading-[15px]">
                  For brands ready to<br />build something serious.
                </p>
              </div>
            </div>

            {/* Features & Outcome */}
            <div className="text-left">
              <p className="font-syne font-medium text-[14px] leading-[17px] text-[#D8D8D8]/80 whitespace-pre-line">
                Includes:<br /><br />
                Full brand strategy<br />
                Complete visual identity system<br />
                UI/UX for key screens<br />
                Website or landing page<br /><br />
                Outcome: A cohesive and scalable brand
              </p>
            </div>
          </div>

          {/* 3. Signature Card */}
          <div className="w-full lg:max-w-[412px] mx-auto min-h-[455px] p-5 sm:pt-[28px] sm:pb-[36px] sm:px-[23px] flex flex-col justify-between">
            <div>
              {/* Top Row: Name */}
              <div className="flex justify-end items-start">
                <span className="font-sans font-light text-[56px] leading-[56px] text-[#D8D8D8] font-anek">
                  Signature
                </span>
              </div>

              {/* Middle Row: Price */}
              <div className="flex justify-between items-baseline gap-2 mt-10 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-sans font-light text-[56px] leading-[56px] text-[#D8D8D8] font-anek">
                    1,200$
                  </span>
                  <span className="font-syne font-medium text-[14px] text-[#D8D8D8]/80 text-right leading-[14px]">
                    Starting From
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <div className="text-left mb-[22px] mt-[43px]">
                <p className="font-dm-sans font-medium text-[13px] tracking-[1.86px] uppercase text-[#D8D8D8] leading-[15px]">
                  For brands that want<br />impact and depth.
                </p>
              </div>
            </div>

            {/* Features & Outcome */}
            <div className="text-right">
              <p className="font-syne font-medium text-[14px] leading-[17px] text-[#D8D8D8]/80 whitespace-pre-line">
                Includes:<br /><br />
                Deep brand strategy<br />
                Advanced identity system<br />
                Full product or website design<br />
                Creative direction<br />
                Social media direction<br /><br />
                Outcome: A strong, high-end brand presence
              </p>
            </div>
          </div>

          {/* End of Cards Grid */}
          </div>
        {/* End of Cards Wrap */}
        </div>

        {/* Bottom disclaimer & CTA row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[29px] items-start relative z-10 w-full max-w-[1318px] px-[14px] mx-auto mt-[23px]">
          {/* Empty column (Starter bottom) */}
          <div className="hidden lg:block" />

          {/* Description 3 (Core bottom) */}
          <div className="max-w-[337px] mx-auto lg:mr-0 text-center lg:text-right lg:pr-[23px] -mt-[2px]">
            <p className="font-syne font-medium text-[14px] leading-[1.3] text-[#ffffff]/40">
              Every project is different<br />
              These are starting points, final pricing depends on scope, timeline, and ambition
            </p>
          </div>

          {/* Lime CTA Button (Signature bottom) */}
          <div className="flex justify-center lg:justify-start lg:pl-[23px]">
            <a 
              href="#contact"
              className="bg-[#DEF81D] hover:bg-[#cbf00f] active:scale-95 transition-all text-[#030303] font-dm-sans font-medium text-[13px] tracking-[0.5px] leading-[21px] px-[16px] py-[13px] rounded-[4px] inline-flex items-center gap-2 shadow-lg select-none"
            >
              Let's talk →
            </a>
          </div>
        </div>

      {/* End of Grouped Blocks Container */}
      </div>

      {/* End of Main Container */}
      </div>
    </section>
  );
}
