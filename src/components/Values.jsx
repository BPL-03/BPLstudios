import React from 'react';

export default function Values() {
  return (
    <section
      id="values"
      className="bg-[#030303] text-[#D8D8D8] py-[80px] sm:py-[120px] relative overflow-hidden select-none border-b border-[#383838]"
    >
      <div className="w-full relative px-[4.5%] md:px-[94px] max-w-[1713px] mx-auto flex flex-col justify-start">
        
        {/* Header Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-8 mb-[60px] sm:mb-[90px] items-start">
          {/* Left: Title & Label */}
          <div className="lg:col-span-7 flex flex-col items-start gap-[7px]">
            {/* Label Group */}
            <div className="flex items-center gap-[16px]">
              <div className="w-[25px] h-[1px] bg-[#D8D8D8]" />
              <span className="font-dm-sans text-[10px] font-medium tracking-[1.86px] text-[#D8D8D8] uppercase leading-[17px]">
                HOW I WORK
              </span>
            </div>
            {/* Title */}
            <h2 className="font-sans font-light text-[50px] sm:text-[94.42px] leading-[0.95] text-[#D8D8D8] tracking-tight">
              What’s really matter
            </h2>
          </div>

          {/* Right: Tagline Description */}
          <div className="lg:col-start-9 lg:col-span-4 self-start mt-4 lg:-mt-[64px] flex justify-end w-full lg:w-auto">
            {/* Desktop Tagline */}
            <div className="hidden lg:flex font-syne font-medium text-[17px] sm:text-[18px] leading-[1.4] text-[#C1CBCC]/40 w-fit flex flex-col items-end">
              <div className="text-left w-full">Merging Imagination</div>
              <div className="text-right w-full">
                with Innovation to CraftUnforgettable, we transform<br />
                visionary ideas into compelling experiences.
              </div>
            </div>
            {/* Mobile Tagline */}
            <p className="block lg:hidden font-syne font-medium text-[13px] sm:text-[14px] leading-[1.4] text-[#C1CBCC]/40 text-right max-w-[320px] ml-auto">
              Merging Imagination with Innovation to CraftUnforgettable, we transform visionary ideas into compelling experiences.
            </p>
          </div>
        </div>

        {/* Staggered Row List */}
        <div className="flex flex-col w-full relative">
                   {/* Row 1 */}
          <div className="w-full group cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-3 lg:gap-x-8 py-[35px] sm:py-[35px] items-start">
              {/* Label */}
              <div className="lg:col-start-3 lg:col-span-2 flex flex-col items-start lg:items-end text-left lg:text-right lg:group-hover:scale-[1.05] lg:origin-right transition-transform duration-300">
                <span className="font-syne font-medium text-[16px] sm:text-[22.5px] text-[#C3C3C3]/[0.38] lg:group-hover:text-[#DEF81D] transition-colors duration-300 tracking-tight leading-[1.2]">
                  Innovative<br className="hidden lg:inline" /> Creativity
                </span>
              </div>
              {/* Description */}
              <div className="lg:col-start-5 lg:col-span-8 lg:group-hover:scale-[1.01] lg:origin-left transition-transform duration-300">
                <p className="font-syne font-medium text-[16px] sm:text-[22.5px] leading-[21.2px] sm:leading-[1.2] text-[#C1CBCC] tracking-tight max-w-[850px] text-left">
                  We merge art and technology to create solutions that break the mold<br className="hidden lg:inline" /> and capture attention.
                </p>
              </div>
            </div>
            {/* Divider Line */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8">
              <div className="col-span-12 lg:col-start-3 lg:col-span-10 border-b border-[#383838] mr-[-2000px] lg:group-hover:border-[#DEF81D] transition-colors duration-300" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full group cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-3 lg:gap-x-8 py-[35px] sm:py-[35px] items-start">
              {/* Label */}
              <div className="lg:col-start-2 lg:col-span-2 flex flex-col items-end text-right lg:group-hover:scale-[1.05] lg:origin-right transition-transform duration-300">
                <span className="font-syne font-medium text-[16px] sm:text-[22.5px] text-[#DEF81D] lg:text-[#C3C3C3]/[0.38] lg:group-hover:text-[#DEF81D] transition-colors duration-300 tracking-tight leading-[1.2]">
                  design that<br className="hidden lg:inline" /> crosses borders
                </span>
              </div>
              {/* Description */}
              <div className="lg:col-start-4 lg:col-span-9 lg:group-hover:scale-[1.01] lg:origin-left transition-transform duration-300">
                <p className="font-syne font-medium text-[16px] sm:text-[22.5px] leading-[21.2px] sm:leading-[1.2] text-[#C1CBCC] tracking-tight max-w-[850px] text-right lg:text-left">
                  Your vision unite to form a powerful team, ensuring that every project<br className="hidden lg:inline" /> reflects your unique identity.
                </p>
              </div>
            </div>
            {/* Divider Line */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8">
              <div className="col-span-12 lg:col-start-1 lg:col-span-12 border-b border-[#DEF81D] lg:border-[#383838] mr-[-2000px] lg:group-hover:border-[#DEF81D] transition-colors duration-300" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="w-full group cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-3 lg:gap-x-8 py-[35px] sm:py-[35px] items-start">
              {/* Label */}
              <div className="lg:col-start-3 lg:col-span-2 flex flex-col items-start lg:items-end text-left lg:text-right lg:group-hover:scale-[1.05] lg:origin-right transition-transform duration-300">
                <span className="font-syne font-medium text-[16px] sm:text-[22.5px] text-[#C3C3C3]/[0.38] lg:group-hover:text-[#DEF81D] transition-colors duration-300 tracking-tight leading-[1.2]">
                  Transparent<br className="hidden lg:inline" /> Communication
                </span>
              </div>
              {/* Description */}
              <div className="lg:col-start-5 lg:col-span-8 lg:group-hover:scale-[1.01] lg:origin-left transition-transform duration-300">
                <p className="font-syne font-medium text-[16px] sm:text-[22.5px] leading-[21.2px] sm:leading-[1.2] text-[#C1CBCC] tracking-tight max-w-[850px] text-left">
                  We maintain open, honest dialogue throughout every step of the<br className="hidden lg:inline" /> creative process, ensuring you're always.
                </p>
              </div>
            </div>
            {/* Divider Line */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8">
              <div className="col-span-12 lg:col-start-3 lg:col-span-10 border-b border-[#383838] mr-[-2000px] lg:group-hover:border-[#DEF81D] transition-colors duration-300" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="w-full group cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-3 lg:gap-x-8 py-[35px] sm:py-[35px] items-start">
              {/* Label */}
              <div className="lg:col-start-4 lg:col-span-2 flex flex-col items-end text-right lg:group-hover:scale-[1.05] lg:origin-right transition-transform duration-300">
                <span className="font-syne font-medium text-[16px] sm:text-[22.5px] text-[#C3C3C3]/[0.38] lg:group-hover:text-[#DEF81D] transition-colors duration-300 tracking-tight leading-[1.2]">
                  Passion<br className="hidden lg:inline" /> for Impact
                </span>
              </div>
              {/* Description */}
              <div className="lg:col-start-6 lg:col-span-7 lg:group-hover:scale-[1.01] lg:origin-left transition-transform duration-300">
                <p className="font-syne font-medium text-[16px] sm:text-[22.5px] leading-[21.2px] sm:leading-[1.2] text-[#C1CBCC] tracking-tight max-w-[850px] text-right lg:text-left">
                  Driven by creativity and a commitment to excellence, we create<br className="hidden lg:inline" /> experiences that not only look impressive.
                </p>
              </div>
            </div>
            {/* Divider Line */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8">
              <div className="col-span-12 lg:col-start-4 lg:col-span-9 border-b border-[#383838] mr-[-2000px] lg:group-hover:border-[#DEF81D] transition-colors duration-300" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
