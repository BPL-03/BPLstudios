import React from 'react';

export default function Values() {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const rowRefs = React.useRef([]);
  const isMouseMoving = React.useRef(false);
  const mouseMoveTimeout = React.useRef(null);
  const hoverTimeoutRef = React.useRef(null);

  React.useEffect(() => {
    const handleMouseMove = () => {
      isMouseMoving.current = true;
      if (mouseMoveTimeout.current) clearTimeout(mouseMoveTimeout.current);
      mouseMoveTimeout.current = setTimeout(() => {
        isMouseMoving.current = false;
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseMoveTimeout.current) clearTimeout(mouseMoveTimeout.current);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (idx) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIdx(idx);
    }, 20);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (isMouseMoving.current || rowRefs.current.length === 0) return;

      const viewportCenter = window.innerHeight / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      rowRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      const sectionElement = rowRefs.current[0]?.closest('section');
      if (sectionElement) {
        const sectionRect = sectionElement.getBoundingClientRect();
        const isInViewport = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;
        if (isInViewport) {
          setActiveIdx(closestIdx);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="values"
      className="bg-[#030303] text-[#D8D8D8] pt-[156px] sm:pt-[234px] pb-[120px] sm:pb-[180px] relative overflow-hidden select-none border-b border-[#383838]"
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
              What really matters
            </h2>
          </div>

          {/* Right: Tagline Description */}
          <div className="lg:col-start-9 lg:col-span-4 self-start mt-4 lg:-mt-[64px] flex justify-end w-full lg:w-auto">
            {/* Desktop Tagline */}
            <div className="hidden lg:flex font-syne font-medium text-[17px] sm:text-[18px] leading-[1.4] text-[#C1CBCC]/40 w-fit flex flex-col items-end">
              <div className="text-left w-full">Merging Imagination</div>
              <div className="text-right w-full">
                with Innovation to Craft Unforgettable, we transform<br />
                visionary ideas into compelling experiences.
              </div>
            </div>
            {/* Mobile Tagline */}
            <p className="block lg:hidden font-syne font-medium text-[13px] sm:text-[14px] leading-[1.4] text-[#C1CBCC]/40 text-right max-w-[320px] ml-auto">
              Merging Imagination with Innovation to Craft Unforgettable, we transform visionary ideas into compelling experiences.
            </p>
          </div>
        </div>

        {/* Staggered Row List */}
        <div className="flex flex-col w-full relative">
          {/* Row 1 */}
          <div 
            ref={(el) => (rowRefs.current[0] = el)}
            onMouseEnter={() => handleMouseEnter(0)}
            className="w-full group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-3 lg:gap-x-8 py-[35px] sm:py-[35px] items-start">
              {/* Label */}
              <div className={`lg:col-start-3 lg:col-span-2 flex flex-col items-start lg:items-end text-left lg:text-right origin-right transition-all duration-500 ease-out ${
                activeIdx === 0 ? 'scale-[1.05]' : 'scale-100'
              }`}>
                <span className={`font-syne font-medium text-[16px] sm:text-[22.5px] transition-colors duration-500 ease-out tracking-tight leading-[1.2] ${
                  activeIdx === 0 ? 'text-[#DEF81D]' : 'text-[#C3C3C3]/[0.38]'
                }`}>
                  Innovative<br className="hidden lg:inline" /> Creativity
                </span>
              </div>
              {/* Description */}
              <div className={`lg:col-start-5 lg:col-span-8 origin-left transition-all duration-500 ease-out ${
                activeIdx === 0 ? 'scale-[1.01]' : 'scale-100'
              }`}>
                <p className="font-syne font-medium text-[16px] sm:text-[22.5px] leading-[21.2px] sm:leading-[1.2] text-[#C1CBCC] tracking-tight max-w-[850px] text-left">
                  We merge art and technology to create solutions that break the mold<br className="hidden lg:inline" /> and capture attention.
                </p>
              </div>
            </div>
            {/* Divider Line */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8">
              <div className={`col-span-12 lg:col-start-3 lg:col-span-10 border-b mr-[-2000px] transition-colors duration-500 ease-out ${
                activeIdx === 0 ? 'border-[#DEF81D]' : 'border-[#383838]'
              }`} />
            </div>
          </div>

          {/* Row 2 */}
          <div 
            ref={(el) => (rowRefs.current[1] = el)}
            onMouseEnter={() => handleMouseEnter(1)}
            className="w-full group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-3 lg:gap-x-8 py-[35px] sm:py-[35px] items-start">
              {/* Label */}
              <div className={`lg:col-start-2 lg:col-span-2 flex flex-col items-end text-right origin-right transition-all duration-500 ease-out ${
                activeIdx === 1 ? 'scale-[1.05]' : 'scale-100'
              }`}>
                <span className={`font-syne font-medium text-[16px] sm:text-[22.5px] transition-colors duration-500 ease-out tracking-tight leading-[1.2] ${
                  activeIdx === 1 ? 'text-[#DEF81D]' : 'text-[#C3C3C3]/[0.38]'
                }`}>
                  design that<br className="hidden lg:inline" /> crosses borders
                </span>
              </div>
              {/* Description */}
              <div className={`lg:col-start-4 lg:col-span-9 origin-left transition-all duration-500 ease-out ${
                activeIdx === 1 ? 'scale-[1.01]' : 'scale-100'
              }`}>
                <p className="font-syne font-medium text-[16px] sm:text-[22.5px] leading-[21.2px] sm:leading-[1.2] text-[#C1CBCC] tracking-tight max-w-[850px] text-right lg:text-left">
                  Your vision unite to form a powerful team, ensuring that every project<br className="hidden lg:inline" /> reflects your unique identity.
                </p>
              </div>
            </div>
            {/* Divider Line */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8">
              <div className={`col-span-12 lg:col-start-1 lg:col-span-12 border-b mr-[-2000px] transition-colors duration-500 ease-out ${
                activeIdx === 1 ? 'border-[#DEF81D]' : 'border-[#383838]'
              }`} />
            </div>
          </div>

          {/* Row 3 */}
          <div 
            ref={(el) => (rowRefs.current[2] = el)}
            onMouseEnter={() => handleMouseEnter(2)}
            className="w-full group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-3 lg:gap-x-8 py-[35px] sm:py-[35px] items-start">
              {/* Label */}
              <div className={`lg:col-start-3 lg:col-span-2 flex flex-col items-start lg:items-end text-left lg:text-right origin-right transition-all duration-500 ease-out ${
                activeIdx === 2 ? 'scale-[1.05]' : 'scale-100'
              }`}>
                <span className={`font-syne font-medium text-[16px] sm:text-[22.5px] transition-colors duration-500 ease-out tracking-tight leading-[1.2] ${
                  activeIdx === 2 ? 'text-[#DEF81D]' : 'text-[#C3C3C3]/[0.38]'
                }`}>
                  Transparent<br className="hidden lg:inline" /> Communication
                </span>
              </div>
              {/* Description */}
              <div className={`lg:col-start-5 lg:col-span-8 origin-left transition-all duration-500 ease-out ${
                activeIdx === 2 ? 'scale-[1.01]' : 'scale-100'
              }`}>
                <p className="font-syne font-medium text-[16px] sm:text-[22.5px] leading-[21.2px] sm:leading-[1.2] text-[#C1CBCC] tracking-tight max-w-[850px] text-left">
                  We maintain open, honest dialogue throughout every step of the<br className="hidden lg:inline" /> creative process, ensuring you're always.
                </p>
              </div>
            </div>
            {/* Divider Line */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8">
              <div className={`col-span-12 lg:col-start-3 lg:col-span-10 border-b mr-[-2000px] transition-colors duration-500 ease-out ${
                activeIdx === 2 ? 'border-[#DEF81D]' : 'border-[#383838]'
              }`} />
            </div>
          </div>

          {/* Row 4 */}
          <div 
            ref={(el) => (rowRefs.current[3] = el)}
            onMouseEnter={() => handleMouseEnter(3)}
            className="w-full group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-3 lg:gap-x-8 py-[35px] sm:py-[35px] items-start">
              {/* Label */}
              <div className={`lg:col-start-4 lg:col-span-2 flex flex-col items-end text-right origin-right transition-all duration-500 ease-out ${
                activeIdx === 3 ? 'scale-[1.05]' : 'scale-100'
              }`}>
                <span className={`font-syne font-medium text-[16px] sm:text-[22.5px] transition-colors duration-500 ease-out tracking-tight leading-[1.2] ${
                  activeIdx === 3 ? 'text-[#DEF81D]' : 'text-[#C3C3C3]/[0.38]'
                }`}>
                  Passion<br className="hidden lg:inline" /> for Impact
                </span>
              </div>
              {/* Description */}
              <div className={`lg:col-start-6 lg:col-span-7 origin-left transition-all duration-500 ease-out ${
                activeIdx === 3 ? 'scale-[1.01]' : 'scale-100'
              }`}>
                <p className="font-syne font-medium text-[16px] sm:text-[22.5px] leading-[21.2px] sm:leading-[1.2] text-[#C1CBCC] tracking-tight max-w-[850px] text-right lg:text-left">
                  Driven by creativity and a commitment to excellence, we create<br className="hidden lg:inline" /> experiences that not only look impressive.
                </p>
              </div>
            </div>
            {/* Divider Line */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8">
              <div className={`col-span-12 lg:col-start-4 lg:col-span-9 border-b mr-[-2000px] transition-colors duration-500 ease-out ${
                activeIdx === 3 ? 'border-[#DEF81D]' : 'border-[#383838]'
              }`} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
