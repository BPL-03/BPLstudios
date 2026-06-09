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
  const isMouseMoving = useRef(false);
  const mouseMoveTimeout = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Track active mouse movement to coordinate between scroll and mouse hover
  useEffect(() => {
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
    // Snappy hover activation
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIdx(idx);
    }, 20);
  };

  useEffect(() => {
    const handleScroll = () => {
      // If user is actively moving their mouse, let the hover handler take priority
      if (isMouseMoving.current || rowRefs.current.length === 0) return;

      // Fallback for page bottom: force last row active when scrolled to absolute bottom
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveIdx(TEXT_ROWS.length - 1);
        return;
      }

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

      // Only update if the section is in view
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
    };
  }, []);

  return (
    <section id="contact" className="bg-[#000000] py-[100px] sm:py-[160px] border-b border-[#383838] overflow-hidden select-none">
      <div className="w-full px-[4.5%] md:px-[94px] max-w-[1713px] mx-auto flex flex-col">
        
        {/* Rows Container */}
        <div className="flex flex-col w-full">
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
                <div className="lg:col-span-7 flex items-center">
                  <h2 className={`font-sans font-light text-[66px] sm:text-[104px] lg:text-[148px] xl:text-[168px] leading-[0.85] tracking-tighter cursor-pointer transition-colors duration-150 ease-out ${
                    isActive ? 'text-[#DEF81D]' : 'text-[#1A1A1A]'
                  }`}>
                    {text}
                  </h2>
                </div>

                {/* Right Side: Image for rows 1-6, or Button for row 7 */}
                <div className="lg:col-span-5 w-full">
                  {!isLastRow ? (
                    /* Hover Image (Desktop Only) */
                    <div className="hidden lg:block relative h-0 w-full">
                      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-full aspect-[3.1/1] rounded-[4px] overflow-hidden border border-white/5 bg-[#111111] transition-all duration-200 ease-out pointer-events-none ${
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
                        className={`w-full lg:w-[460px] h-[58px] border border-[#DEF81D] transition-all duration-150 ease-out flex items-center justify-center font-syne font-medium text-[13px] sm:text-[14px] uppercase tracking-wider rounded-[4px] ${
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
