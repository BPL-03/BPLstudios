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
      className="bg-[#030303] text-[#D8D8D8] pt-[120px] sm:pt-[180px] pb-[144px] sm:pb-[216px] relative overflow-hidden select-none border-b border-[#383838]"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {/* Main Container - scaled up 5% from baseline */}
      <div className="w-full relative px-[4.5%] md:px-[94px] max-w-[1799px] mx-auto flex flex-col justify-start">
        
        {/* Header Section (Ways to Work Together & Investment Title) */}
        <div className="w-full flex flex-col items-end gap-[7px] mb-[92px] relative z-10">
          {/* Label Group */}
          <div className="flex items-center gap-[17px]">
            <div className="w-[26px] h-[1px] bg-[#D8D8D8]" />
            <span className="font-dm-sans text-[10px] font-medium tracking-[1.95px] text-[#D8D8D8] uppercase leading-[18px]">
              Ways to Work Together
            </span>
          </div>
          {/* Title */}
          <h2 className="font-sans font-light text-[66px] sm:text-[99px] leading-[91px] text-[#D8D8D8] tracking-tight">
            Investment
          </h2>
        </div>

        {/* Grouped Blocks Container to prevent justify-between from stretching the vertical spacing */}
        <div className="w-full flex flex-col items-center z-10">

          {/* Top descriptions Row (aligned perfectly to match the columns layout spacing) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[28px] items-end w-full max-w-[1384px] px-[14px] mx-auto mb-[24px] relative z-10">
            {/* Starter outer description (left) */}
            <div className="max-w-[354px] pl-[21px] lg:pl-[24px]">
              <p className="font-syne font-medium text-[14px] leading-[1.3] text-[#ffffff]/40">
                We don’t sell design. We<br className="lg:hidden" /> build direction.
              </p>
            </div>
            <div className="hidden lg:block" />
            {/* Signature outer description (right) */}
            <div className="max-w-[354px] lg:pl-[24px] hidden lg:block">
              <p className="font-syne font-medium text-[14px] leading-[1.3] text-[#ffffff]/40">
                If you're scaling across markets, building for different cultures, or launching in a region where cookie-cutter design fails—let's talk.
              </p>
            </div>
          </div>

          {/* Relative Cards Wrap to center background grid lines with card boundaries */}
          <div 
            ref={cardsWrapRef}
            className="relative w-full max-w-[1384px] mx-auto px-[14px]"
            style={{
              '--mouse-x': `${mousePos.x}px`,
              '--mouse-y': `${mousePos.y}px`,
            }}
          >
            {/* Soft background spotlight glow */}
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0 hidden lg:block"
              style={{
                background: `radial-gradient(circle 330px at var(--mouse-x) var(--mouse-y), rgba(222, 248, 29, 0.05), transparent 80%)`,
                opacity: isHovered ? 1 : 0,
              }}
            />

            {/* Static Base Grid Lines (Always faintly visible) */}
            {/* Horizontal Line 1 (Top Edge) - Mobile (Green) */}
            <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-[linear-gradient(to_right,rgba(15,15,15,0)_0%,#DEF81D_20%,rgba(22,22,22,0)_80%)] opacity-35 shadow-[0_0_4px_#DEF81D] lg:hidden z-0" />

            {/* Horizontal Line 2 (Bottom Edge) - Mobile (Green) */}
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-[linear-gradient(to_left,rgba(15,15,15,0)_0%,#DEF81D_20%,rgba(22,22,22,0)_80%)] opacity-35 shadow-[0_0_4px_#DEF81D] lg:hidden z-0" />

            {/* Vertical Line 1 (Left Edge) - goes to_bottom, green peak near top (30%) */}
            <div className="absolute left-[14px] top-[-567px] bottom-[-567px] w-[1px] bg-[linear-gradient(to_bottom,rgba(15,15,15,0)_0%,#DEF81D_30%,rgba(22,22,22,0)_70%)] opacity-35 shadow-[0_0_4px_#DEF81D] z-0 lg:hidden" />

            {/* Vertical Line 4 (Right Edge) - goes to_top, green peak near bottom (30% from bottom) */}
            <div className="absolute right-[14px] top-[-567px] bottom-[-567px] w-[1px] bg-[linear-gradient(to_top,rgba(15,15,15,0)_0%,#DEF81D_30%,rgba(22,22,22,0)_70%)] opacity-35 shadow-[0_0_4px_#DEF81D] z-0 lg:hidden" />

            {/* Interactive Spotlight Glow Grid Lines */}
            <div 
              className="absolute top-[-284px] bottom-[-284px] left-[-284px] right-[-284px] pointer-events-none z-20 transition-opacity duration-300 hidden lg:block"
              style={{
                opacity: isHovered ? 1 : 0,
                WebkitMaskImage: `radial-gradient(circle 236px at calc(var(--mouse-x) + 284px) calc(var(--mouse-y) + 284px), black, transparent)`,
                maskImage: `radial-gradient(circle 236px at calc(var(--mouse-x) + 284px) calc(var(--mouse-y) + 284px), black, transparent)`
              }}
            >
              {/* Horizontal Line 1 (Top Edge) - goes to_right, green peak on the left (20%) */}
              <div className="absolute top-[284px] left-[-100vw] right-[-100vw] h-[1px] bg-[linear-gradient(to_right,rgba(15,15,15,0)_0%,#DEF81D_20%,rgba(22,22,22,0)_80%)] shadow-[0_0_8px_#DEF81D]" />

              {/* Horizontal Line 2 (Bottom Edge) - goes to_left, green peak on the right (20% from right) */}
              <div className="absolute bottom-[284px] left-[-100vw] right-[-100vw] h-[1px] bg-[linear-gradient(to_left,rgba(15,15,15,0)_0%,#DEF81D_20%,rgba(22,22,22,0)_80%)] shadow-[0_0_8px_#DEF81D]" />

              {/* Vertical Lines */}
              <div className="absolute top-0 bottom-0 left-[284px] right-[284px] grid grid-cols-3 gap-[28px] px-[14px] pointer-events-none hidden lg:grid">
                {/* Column 1 Center Gap Line */}
                <div className="relative w-full h-full">
                  <div className="absolute right-[-14px] top-0 bottom-0 w-[1px] bg-[#DEF81D] shadow-[0_0_8px_#DEF81D]" />
                </div>
                {/* Column 2 Center Gap Line */}
                <div className="relative w-full h-full">
                  <div className="absolute right-[-14px] top-0 bottom-0 w-[1px] bg-[#DEF81D] shadow-[0_0_8px_#DEF81D]" />
                </div>
                <div className="relative w-full h-full" />
              </div>

              {/* Vertical Line 1 (Left Edge) - goes to_bottom, green peak near top (30%) */}
              <div className="absolute left-[298px] top-0 bottom-0 w-[1px] bg-[linear-gradient(to_bottom,rgba(15,15,15,0)_0%,#DEF81D_30%,rgba(22,22,22,0)_70%)] shadow-[0_0_8px_#DEF81D]" />

              {/* Vertical Line 4 (Right Edge) - goes to_top, green peak near bottom (30% from bottom) */}
              <div className="absolute right-[298px] top-0 bottom-0 w-[1px] bg-[linear-gradient(to_top,rgba(15,15,15,0)_0%,#DEF81D_30%,rgba(22,22,22,0)_70%)] shadow-[0_0_8px_#DEF81D]" />
            </div>

          {/* Cards Row - Starter, Core, Signature */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-[28px] relative z-10 w-full">
          
          {/* 1. Starter Card */}
          <div className="w-full lg:max-w-[433px] mx-auto min-h-[478px] p-5 sm:pt-[29px] sm:pb-[38px] sm:px-[24px] flex flex-col justify-between lg:border-none relative">
            <div>
              {/* Tier Label */}
              <h3 className="font-dm-sans font-medium text-[13px] tracking-[2.5px] uppercase text-[#D8D8D8]/60 leading-none">
                Starter
              </h3>

              {/* Price — dominant element */}
              <div className="flex items-baseline gap-2 mt-4 mb-2">
                <span className="font-sans font-light text-[68px] leading-[68px] text-[#D8D8D8] font-anek">
                  $500
                </span>
                <span className="font-syne font-medium text-[13px] text-[#D8D8D8]/50 leading-[14px]">
                  Starting From
                </span>
              </div>

              {/* Tagline */}
              <div className="text-right mb-[23px] mt-1">
                <p className="font-dm-sans font-medium text-[13px] tracking-[1.95px] uppercase text-[#D8D8D8] leading-[15px]">
                  For early-stage brands<br />that need clarity.
                </p>
              </div>
            </div>

            {/* Features & Outcome */}
            <div className="text-left">
              <p className="font-syne font-medium text-[14px] leading-[18px] text-[#D8D8D8]/80 whitespace-pre-line">
                Includes:<br /><br />
                Brand direction session<br />
                Basic visual identity<br />
                Simple landing page<br /><br />
                Outcome: A clear and usable starting point
              </p>
            </div>
            {/* Mobile Divider Line extending beyond screen edges */}
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-[linear-gradient(to_right,rgba(15,15,15,0)_0%,#DEF81D_20%,rgba(22,22,22,0)_80%)] opacity-35 shadow-[0_0_4px_#DEF81D] lg:hidden" />
          </div>

          {/* 2. Core Card */}
          <div className="w-full lg:max-w-[433px] mx-auto min-h-[478px] p-5 sm:pt-[29px] sm:pb-[38px] sm:px-[24px] flex flex-col justify-between lg:border-none relative">
            <div>
              {/* Tier Label */}
              <h3 className="font-dm-sans font-medium text-[13px] tracking-[2.5px] uppercase text-[#D8D8D8]/60 leading-none">
                Core
              </h3>

              {/* Price — dominant element */}
              <div className="flex items-baseline gap-2 mt-4 mb-2">
                <span className="font-sans font-light text-[68px] leading-[68px] text-[#D8D8D8] font-anek">
                  $800
                </span>
                <span className="font-syne font-medium text-[13px] text-[#D8D8D8]/50 leading-[14px]">
                  Starting From
                </span>
              </div>

              {/* Tagline */}
              <div className="text-right mb-[23px] mt-1">
                <p className="font-dm-sans font-medium text-[13px] tracking-[1.95px] uppercase text-[#D8D8D8] leading-[15px]">
                  For brands ready to<br />build something serious.
                </p>
              </div>
            </div>

            {/* Features & Outcome */}
            <div className="text-left">
              <p className="font-syne font-medium text-[14px] leading-[18px] text-[#D8D8D8]/80 whitespace-pre-line">
                Includes:<br /><br />
                Full brand strategy<br />
                Complete visual identity system<br />
                UI/UX for key screens<br />
                Website or landing page<br /><br />
                Outcome: A cohesive and scalable brand
              </p>
            </div>
            {/* Mobile Divider Line extending beyond screen edges */}
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-[linear-gradient(to_right,rgba(15,15,15,0)_0%,#DEF81D_20%,rgba(22,22,22,0)_80%)] opacity-35 shadow-[0_0_4px_#DEF81D] lg:hidden" />
          </div>

          {/* 3. Signature Card */}
          <div className="w-full lg:max-w-[433px] mx-auto min-h-[478px] p-5 sm:pt-[29px] sm:pb-[38px] sm:px-[24px] flex flex-col justify-between lg:border-none relative">
            <div>
              {/* Tier Label */}
              <div className="flex justify-end">
                <h3 className="font-dm-sans font-medium text-[13px] tracking-[2.5px] uppercase text-[#D8D8D8]/60 leading-none">
                  Signature
                </h3>
              </div>

              {/* Price — dominant element */}
              <div className="flex items-baseline gap-2 mt-4 mb-2">
                <span className="font-sans font-light text-[68px] leading-[68px] text-[#D8D8D8] font-anek">
                  $1,200
                </span>
                <span className="font-syne font-medium text-[13px] text-[#D8D8D8]/50 leading-[14px]">
                  Starting From
                </span>
              </div>

              {/* Tagline */}
              <div className="text-left mb-[23px] mt-1">
                <p className="font-dm-sans font-medium text-[13px] tracking-[1.95px] uppercase text-[#D8D8D8] leading-[15px]">
                  For brands that want<br />impact and depth.
                </p>
              </div>
            </div>

            {/* Features & Outcome */}
            <div className="text-right">
              <p className="font-syne font-medium text-[14px] leading-[18px] text-[#D8D8D8]/80 whitespace-pre-line">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] items-start relative z-10 w-full max-w-[1384px] px-[14px] mx-auto mt-[24px]">
          {/* Empty column (Starter bottom) */}
          <div className="hidden lg:block" />

          {/* Description 3 (Core bottom) */}
          <div className="max-w-[354px] ml-auto mr-0 pr-[21px] lg:pr-[24px] text-right -mt-[2px]">
            <p className="font-syne font-medium text-[14px] leading-[1.3] text-[#ffffff]/40">
              Every project is different<br />
              These are starting points, final pricing depends on scope, timeline, and ambition
            </p>
          </div>

          {/* Lime CTA Button (Signature bottom) */}
          <div className="flex justify-end pr-[21px] lg:justify-start lg:pl-[24px]">
            <a 
              href="#contact"
              className="bg-[#DEF81D] hover:bg-[#cbf00f] active:scale-95 transition-all text-[#030303] font-dm-sans font-medium text-[13px] tracking-[0.5px] leading-[22px] px-[17px] py-[13px] rounded-[4px] inline-flex items-center gap-2 shadow-lg select-none"
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
