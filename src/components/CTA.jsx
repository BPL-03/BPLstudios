import { useState, useEffect, useRef } from 'react';

const HOVER_IMAGES = [
  '/assets/project_majourneys.jpg',
  '/assets/project_spim.jpg',
  '/assets/project_farisi.jpg',
  '/assets/project_grain_oil.jpg',
  '/assets/project_codesign.jpg',
  '/assets/project_brandplus.jpg'
];

const TEXT_ROWS = [
  "Have a",
  "project in",
  "mind?",
  "Let's build",
  "something",
  "great",
  "together."
];

export default function CTA() {
  const [activeIdx, setActiveIdx] = useState(0);
  const rowRefs = useRef([]);
  const isMouseActive = useRef(false);
  const hoverTimeoutRef = useRef(null);

  // Debounced hover handler to avoid flickering during rapid scrubbing
  const handleMouseEnter = (idx) => {
    isMouseActive.current = true;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIdx(idx);
    }, 80);
  };

  const handleMouseLeaveSection = () => {
    isMouseActive.current = false;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // If mouse is active inside the section, do not let scroll override it
      if (isMouseActive.current || rowRefs.current.length === 0) return;

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

      // Only update scroll-based index if CTA is visible in the viewport
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
    // Run initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="bg-[#000000] py-[100px] sm:py-[160px] border-b border-[#383838] overflow-hidden select-none">
      <div className="w-full px-[4.5%] md:px-[94px] max-w-[1713px] mx-auto flex flex-col">
        
        {/* Rows Container */}
        <div 
          className="flex flex-col w-full"
          onMouseLeave={handleMouseLeaveSection}
        >
          {TEXT_ROWS.map((text, idx) => {
            const isActive = idx === activeIdx;
            const isLastRow = idx === TEXT_ROWS.length - 1;

            return (
              <div
                key={idx}
                ref={(el) => (rowRefs.current[idx] = el)}
                onMouseEnter={() => handleMouseEnter(idx)}
                className="grid grid-cols-1 lg:grid-cols-12 items-center w-full relative py-1 sm:py-2"
              >
                {/* Left Side: Text Line */}
                <div className="lg:col-span-8 flex items-center">
                  <h2 className={`font-sans font-light text-[62px] sm:text-[98px] lg:text-[138px] xl:text-[158px] leading-[0.85] tracking-tighter cursor-pointer transition-colors duration-300 ${
                    isActive ? 'text-[#DEF81D]' : 'text-[#1A1A1A]'
                  }`}>
                    {text}
                  </h2>
                </div>

                {/* Right Side: Image for rows 1-6, or Button for row 7 */}
                <div className="lg:col-span-4 w-full">
                  {!isLastRow ? (
                    /* Hover Image (Desktop Only) */
                    <div className="hidden lg:block relative h-0 w-full">
                      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-full aspect-[2.2/1] rounded-[4px] overflow-hidden border border-white/5 bg-[#111111] transition-all duration-500 ease-in-out pointer-events-none ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}>
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url("${HOVER_IMAGES[idx]}")` }}
                        />
                      </div>
                    </div>
                  ) : (
                    /* Let's Talk Button aligned with "together." */
                    <div className="flex justify-start lg:justify-end w-full mt-4 lg:mt-0">
                      <a
                        href="mailto:hello@bplstudios.com"
                        className={`w-full lg:w-[460px] h-[58px] border border-[#DEF81D] transition-all duration-300 flex items-center justify-center font-syne font-medium text-[13px] sm:text-[14px] uppercase tracking-wider rounded-[4px] ${
                          isActive
                            ? 'bg-[#DEF81D] text-black'
                            : 'text-[#DEF81D] bg-transparent hover:bg-[#DEF81D] hover:text-black'
                        }`}
                      >
                        Let's Talk &rarr;
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
