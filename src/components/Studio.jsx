import React from 'react';

export default function Studio() {
  return (
    <section 
      id="studio" 
      className="bg-[#030303] border-b border-[#383838] py-16 lg:py-0 lg:h-[880px] flex items-center justify-center select-none overflow-hidden"
    >
      <div className="w-full px-[5%] lg:px-0 lg:w-[1480px] lg:h-[480px] mx-auto flex flex-col lg:justify-between justify-center gap-10 lg:gap-0">
        
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
          {/* Block 1 (Top Left Heading) */}
          <div className="flex flex-col gap-[9px] lg:w-[740px]">
            <div className="flex items-center">
              <span className="font-dm-sans font-medium text-[11.5px] leading-[19px] tracking-[2.074px] uppercase text-[#D8D8D8]">
                The Studio
              </span>
            </div>
            <h2 className="font-sans font-light text-[32px] sm:text-[44px] lg:text-[58.5115px] leading-[0.92] text-[#D8D8D8] tracking-tight max-w-[650px]">
              BPL Studios started at the<br className="hidden lg:inline" /> intersection of spatial<br className="hidden lg:inline" /> <span className="text-[#DEF81D]">thinking</span> and digital <span className="text-[#DEF81D]">design.</span>
            </h2>
          </div>

          {/* Block 2 (Top Right Paragraph) */}
          <div className="flex items-center lg:w-[740px] lg:justify-end mt-[28px] lg:mt-0">
            <p className="font-syne font-medium text-[15px] sm:text-[18px] lg:text-[21.4px] leading-[25px] tracking-[-0.805528px] text-[#C5C5C5] opacity-70 text-left lg:text-right max-w-[740px] lg:ml-auto">
              Great design speaks across borders. But it doesn't speak the<br className="hidden lg:inline" /> same language twice. I build brands that work in Agadir, Paris, and<br className="hidden lg:inline" /> Dubai—not by looking the same, but by understanding what<br className="hidden lg:inline" /> matters in each market.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between w-full mt-[49px] lg:mt-0">
          {/* Block 4 (Bottom Right Heading) */}
          <div className="flex flex-col gap-[16px] items-end lg:w-[740px] lg:ml-auto">
            <div className="w-full text-right">
              <span className="font-dm-sans font-medium text-[11.5px] leading-[19px] tracking-[2.074px] uppercase text-[#D8D8D8]">
                The Studio
              </span>
            </div>
            <h2 className="font-sans font-light text-[32px] sm:text-[44px] lg:text-[58.5115px] leading-[0.92] text-[#D8D8D8] tracking-tight max-w-[600px] text-right">
              A founder's<br className="hidden lg:inline" /> <span className="text-[#DEF81D]">perspective changes</span><br className="hidden lg:inline" /> the work.
            </h2>
          </div>

          {/* Block 3 (Bottom Left Paragraph) */}
          <div className="flex items-center justify-end lg:justify-start lg:w-[740px] mt-[28px] lg:mt-0">
            <p className="font-syne font-medium text-[15px] sm:text-[18px] lg:text-[21.4px] leading-[25px] tracking-[-0.805528px] text-[#C5C5C5] opacity-70 text-right lg:text-left max-w-[740px] ml-auto lg:ml-0">
              Quiet confidence isn't just about minimalism. It's about knowing<br className="hidden lg:inline" /> when to be bold for your market and when to be subtle. The<br className="hidden lg:inline" /> founders I work with know their audience inside out. My job is to<br className="hidden lg:inline" /> make sure the design proves it.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
