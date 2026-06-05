import React, { useState, useRef, useEffect } from 'react';

const PROJECTS_DATA = [
  {
    id: 'majourneys',
    name: 'MAJOURNEYS',
    bgImage: '/assets/project_majourneys.jpg',
    tagline: 'From brand identity to product interfaces everything your business needs to look and work at its best.',
    theme: {
      accent: '#DEF81D',
      bgDark: '#040033',
    },
    bento: {
      card1: {
        bg: '#E9E9E9',
        type: 'tshirt',
        accentColor: '#C58B37',
      },
      card2: {
        bgImage: '/assets/project_majourneys.jpg',
        type: 'image',
      },
      card3: {
        bg: '#040036',
        type: 'monogram',
        monogramText: 'MJ',
        textColor: '#E6B975',
      },
      card4: {
        bg: 'linear-gradient(135deg, #040033 0%, #08004f 100%)',
        type: 'banner',
        text: 'Journey with us',
        bottleImage: true,
      },
      card5: {
        type: 'colors',
        colors: ['#040033', '#C58B37', '#E6B975', '#FFEED4', '#FBFBFB'],
      },
      card6: {
        bg: '#0a0a09',
        type: 'typo',
        text: 'Aa',
        fontClass: 'font-aclonica',
      }
    }
  },
  {
    id: 'salama',
    name: 'SALAMA',
    bgImage: '/assets/project_spim.jpg',
    tagline: 'From brand identity to product interfaces everything your business needs to look and work at its best.',
    theme: {
      accent: '#00FFB2',
      bgDark: '#061712',
    },
    bento: {
      card1: {
        bg: '#F4F7F6',
        type: 'app-wireframe',
        accentColor: '#00FFB2',
      },
      card2: {
        bgImage: '/assets/project_spim.jpg',
        type: 'image',
      },
      card3: {
        bg: '#061712',
        type: 'monogram',
        monogramText: 'S',
        textColor: '#00FFB2',
      },
      card4: {
        bg: 'linear-gradient(135deg, #061712 0%, #0d2b22 100%)',
        type: 'banner',
        text: 'Salama Pay',
        bottleImage: false,
        cardMockup: true,
      },
      card5: {
        type: 'colors',
        colors: ['#061712', '#00FFB2', '#00B37D', '#B3FFE9', '#FFFFFF'],
      },
      card6: {
        bg: '#111',
        type: 'typo',
        text: 'S',
        fontClass: 'font-sans',
      }
    }
  },
  {
    id: 'lexieum',
    name: 'LEXIEUM',
    bgImage: '/assets/project_farisi.jpg',
    tagline: 'From brand identity to product interfaces everything your business needs to look and work at its best.',
    theme: {
      accent: '#D4AF37',
      bgDark: '#120E08',
    },
    bento: {
      card1: {
        bg: '#FFFBF5',
        type: 'tshirt',
        accentColor: '#D4AF37',
      },
      card2: {
        bgImage: '/assets/project_farisi.jpg',
        type: 'image',
      },
      card3: {
        bg: '#120E08',
        type: 'monogram',
        monogramText: 'L',
        textColor: '#D4AF37',
      },
      card4: {
        bg: 'linear-gradient(135deg, #120E08 0%, #1f190f 100%)',
        type: 'banner',
        text: 'Prestige Law',
        bottleImage: false,
        sealMockup: true,
      },
      card5: {
        type: 'colors',
        colors: ['#120E08', '#D4AF37', '#AA7C11', '#F5E6C8', '#FFFBF5'],
      },
      card6: {
        bg: '#151515',
        type: 'typo',
        text: 'Lx',
        fontClass: 'font-serif',
      }
    }
  },
  {
    id: 'abrirbat',
    name: 'ABRIRBAT',
    bgImage: '/assets/project_grain_oil.jpg',
    tagline: 'From brand identity to product interfaces everything your business needs to look and work at its best.',
    theme: {
      accent: '#FF4D00',
      bgDark: '#1C1512',
    },
    bento: {
      card1: {
        bg: '#EBE6E3',
        type: 'tshirt',
        accentColor: '#FF4D00',
      },
      card2: {
        bgImage: '/assets/project_grain_oil.jpg',
        type: 'image',
      },
      card3: {
        bg: '#1C1512',
        type: 'monogram',
        monogramText: 'AB',
        textColor: '#FF4D00',
      },
      card4: {
        bg: 'linear-gradient(135deg, #1c1512 0%, #322520 100%)',
        type: 'banner',
        text: 'Raw Stone',
        bottleImage: false,
        rulerMockup: true,
      },
      card5: {
        type: 'colors',
        colors: ['#1C1512', '#FF4D00', '#C43B00', '#F2D0C2', '#EBE6E3'],
      },
      card6: {
        bg: '#111',
        type: 'typo',
        text: 'Ab',
        fontClass: 'font-sans',
      }
    }
  },
  {
    id: 'streamn',
    name: 'STREAM N.',
    bgImage: '/assets/project_codesign.jpg',
    tagline: 'From brand identity to product interfaces everything your business needs to look and work at its best.',
    theme: {
      accent: '#BF00FF',
      bgDark: '#0D0514',
    },
    bento: {
      card1: {
        bg: '#1F122B',
        type: 'app-wireframe',
        accentColor: '#BF00FF',
      },
      card2: {
        bgImage: '/assets/project_codesign.jpg',
        type: 'image',
      },
      card3: {
        bg: '#0D0514',
        type: 'monogram',
        monogramText: 'N',
        textColor: '#BF00FF',
      },
      card4: {
        bg: 'linear-gradient(135deg, #0d0514 0%, #1b0a2b 100%)',
        type: 'banner',
        text: 'Audio Sphere',
        bottleImage: false,
        vinylMockup: true,
      },
      card5: {
        type: 'colors',
        colors: ['#0D0514', '#BF00FF', '#7F00B3', '#EBD4FF', '#F9F5FC'],
      },
      card6: {
        bg: '#000',
        type: 'typo',
        text: 'N.',
        fontClass: 'font-mono',
      }
    }
  },
  {
    id: 'polored',
    name: 'POLO RED',
    bgImage: '/assets/project_brandplus.jpg',
    tagline: 'From brand identity to product interfaces everything your business needs to look and work at its best.',
    theme: {
      accent: '#FF003C',
      bgDark: '#140508',
    },
    bento: {
      card1: {
        bg: '#E5D6DA',
        type: 'tshirt',
        accentColor: '#FF003C',
      },
      card2: {
        bgImage: '/assets/project_brandplus.jpg',
        type: 'image',
      },
      card3: {
        bg: '#140508',
        type: 'monogram',
        monogramText: 'P',
        textColor: '#FF003C',
      },
      card4: {
        bg: 'linear-gradient(135deg, #140508 0%, #2b0b12 100%)',
        type: 'banner',
        text: 'Red Editorial',
        bottleImage: false,
        tagMockup: true,
      },
      card5: {
        type: 'colors',
        colors: ['#140508', '#FF003C', '#B3002A', '#F7D4DC', '#FCF5F6'],
      },
      card6: {
        bg: '#111',
        type: 'typo',
        text: 'Pr',
        fontClass: 'font-serif',
      }
    }
  }
];

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProj = PROJECTS_DATA[activeIdx];
  const hoverTimeoutRef = useRef(null);
  
  const [isProgrammatic, setIsProgrammatic] = useState(false);
  const targetScrollLeft = useRef(null);
  const scrollTimeout = useRef(null);
  const isProgrammaticScroll = useRef(false);

  const clonedProjects = [
    PROJECTS_DATA[PROJECTS_DATA.length - 1],
    ...PROJECTS_DATA,
    PROJECTS_DATA[0]
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!scrollRef.current) return;
      const width = scrollRef.current.clientWidth;
      if (width === 0) return;
      scrollRef.current.scrollLeft = 1 * width;
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (idx) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // 180ms delay before swapping the active showcase to prevent rapid mouse scrubbing bugs
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIdx(idx);
    }, 180);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth;
    if (width === 0) return;

    const numRealProjects = PROJECTS_DATA.length;
    const minScroll = 0.5 * width;
    const maxScroll = (numRealProjects + 0.5) * width;



    const currentScrollLeft = scrollRef.current.scrollLeft;
    const newIdx = Math.round(currentScrollLeft / width) - 1;
    const normalizedIdx = (newIdx + numRealProjects) % numRealProjects;
    if (normalizedIdx !== activeIdx && normalizedIdx >= 0 && normalizedIdx < numRealProjects) {
      setActiveIdx(normalizedIdx);
    }

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      handleScrollEnd();
    }, 100);
  };

  const handleScrollEnd = () => {
    if (!scrollRef.current) return;
    isProgrammaticScroll.current = false;
    setIsProgrammatic(false);

    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth;
    if (width === 0) return;

    const numRealProjects = PROJECTS_DATA.length;
    const minScroll = 0.5 * width;
    const maxScroll = (numRealProjects + 0.5) * width;

    let targetLeft = scrollLeft;
    if (scrollLeft < minScroll) {
      targetLeft = scrollLeft + numRealProjects * width;
      scrollRef.current.style.scrollBehavior = 'auto';
      scrollRef.current.scrollLeft = targetLeft;
    } else if (scrollLeft > maxScroll) {
      targetLeft = scrollLeft - numRealProjects * width;
      scrollRef.current.style.scrollBehavior = 'auto';
      scrollRef.current.scrollLeft = targetLeft;
    }

    targetScrollLeft.current = targetLeft;
  };

  const scrollToIdx = (idx) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    if (width === 0) return;

    const targetClonedIdx = idx + 1;
    targetScrollLeft.current = targetClonedIdx * width;

    isProgrammaticScroll.current = true;
    setIsProgrammatic(true);

    scrollRef.current.style.scrollBehavior = 'smooth';
    scrollRef.current.scrollTo({
      left: targetScrollLeft.current,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      id="work" 
      className="bg-bg border-y border-[#383838] pt-28 pb-20 select-none"
    >
      <div className="portfolio-container w-full">
        
        {/* Selected Work Label with left line */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[1px] bg-[#D8D8D8]" />
          <span className="font-dm-sans text-[12px] font-medium tracking-[2px] text-[#D8D8D8] uppercase">
            Selected Work
          </span>
        </div>

        {/* Section Heading & Columns Layout */}
        <div className="grid grid-cols-12 gap-8 items-end">
          
          {/* Left Title: 100px large header */}
          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-sans font-light text-[64px] sm:text-[100px] leading-[0.92] text-[#D8D8D8] tracking-tight">
              Projects
            </h2>
          </div>

          {/* Right Header is empty matching source of truth */}
          <div className="hidden lg:block col-span-3" />

        </div>

        {/* Showcase Container Grid (Desktop Only) */}
        <div className="hidden lg:grid grid-cols-12 gap-y-12 lg:gap-x-8 mt-6 items-start">
          
          {/* Left Side: Bento Showcase Container & Description Text (9 Cols) */}
          <div className="col-span-12 lg:col-span-9 flex flex-col gap-8">
            
            {/* Bento Showcase Box */}
            <div 
              className="relative w-full h-[320px] sm:h-[480px] lg:h-[560px] xl:h-[608px] rounded-[4px] overflow-hidden border border-[#383838] flex items-center justify-center p-4 sm:p-8 group"
            >
              {/* Animated Zoom Wrapper */}
              <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105 z-0 pointer-events-none">
                {/* Layered Cross-Fading Background Images */}
                {PROJECTS_DATA.map((proj, idx) => (
                  <div 
                    key={proj.id}
                    className={`absolute inset-0 bg-cover bg-center transition-showcase-image ${
                      idx === activeIdx ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    style={{ backgroundImage: `url("${proj.bgImage}")` }}
                  />
                ))}
              </div>

              {/* Fade Gradient Backdrop Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/80 via-transparent to-[#0C0C0C]/80 z-10 pointer-events-none" />

              {/* Bento Box Container (Centered) */}
              <div 
                className="relative z-20 w-full max-w-[95%] md:max-w-[90%] lg:max-w-[95%] xl:max-w-[1228px] h-full max-h-[85%] bg-[#0C0C0C] border border-white/5 rounded-[20px] p-4 sm:p-6 flex flex-col md:flex-row gap-4 sm:gap-5 select-none"
              >
                
                {/* Bento Left Part (2 Rows of cards - col-span-8 equivalent) */}
                <div className="flex-grow flex flex-col justify-between gap-4 sm:gap-5 md:w-[66%]">
                  
                  {/* Top Row: Tshirt & Image */}
                  <div className="flex flex-row gap-4 sm:gap-5 h-[62%]">
                    
                    {/* Card 1: Premium Product Mockup (Tshirt/Device) */}
                    <div 
                      className="rounded-xl flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 hover:scale-[1.01]"
                      style={{ 
                        backgroundColor: activeProj.bento.card1.bg,
                        width: '34%'
                      }}
                    >
                      {activeProj.bento.card1.type === 'tshirt' ? (
                        <div className="flex flex-col items-center justify-center text-center w-full h-full p-2">
                          {/* Stylized premium tshirt illustration */}
                          <div className="relative w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center">
                            {/* Shirt shape SVG */}
                            <svg className="w-full h-full text-zinc-800 drop-shadow-md" viewBox="0 0 100 100" fill="currentColor">
                              <path d="M30,15 L40,22 L45,18 L55,18 L60,22 L70,15 L82,27 L74,35 L70,33 L70,85 L30,85 L30,33 L26,35 L18,27 Z" />
                            </svg>
                            {/* Tiny Monogram Print on shirt */}
                            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-black">
                              <span className="font-aclonica text-[9px] sm:text-[12px] opacity-75">♥</span>
                              <span className="font-dm-sans font-bold text-[5px] sm:text-[6px] tracking-wider uppercase opacity-60">
                                {activeProj.name}
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 font-dm-sans text-[7px] sm:text-[9px] text-zinc-400 tracking-[0.2em] uppercase font-medium">
                            {activeProj.name}
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center w-full h-full p-3">
                          {/* Premium App Screen Wireframe representation */}
                          <div className="w-[85%] h-[85%] bg-zinc-950 rounded-lg border border-white/10 p-2 flex flex-col justify-between">
                            <div className="flex justify-between items-center text-[6px] text-white/40">
                              <span>SALAMA</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00FFB2]" />
                            </div>
                            <div className="flex flex-col gap-1 my-auto">
                              <div className="h-2 bg-white/5 rounded w-1/3" />
                              <div className="h-4 bg-white/10 rounded w-full flex items-center px-1">
                                <div className="w-2 h-2 rounded-full bg-[#00FFB2]" />
                              </div>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full w-full" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card 2: Dunes landscape / background crop */}
                    <div 
                      className="rounded-xl bg-cover bg-center overflow-hidden relative transition-all duration-300 hover:scale-[1.01]"
                      style={{ 
                        backgroundImage: `url("${activeProj.bento.card2.bgImage}")`,
                        width: '66%'
                      }}
                    >
                      {/* Subtle dark layout overlay */}
                      <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300" />
                    </div>

                  </div>

                  {/* Bottom Row: Banner, Colors & Typo */}
                  <div className="flex flex-row gap-4 sm:gap-5 h-[38%]">
                    
                    {/* Card 4: Journey with us banner */}
                    <div 
                      className="rounded-xl p-3 sm:p-5 flex items-center justify-between relative overflow-hidden transition-all duration-300 hover:scale-[1.01]"
                      style={{ 
                        background: activeProj.bento.card4.bg,
                        width: '54%'
                      }}
                    >
                      <div className="flex flex-col text-left justify-center">
                        <span className="font-aclonica text-[12px] sm:text-[18px] xl:text-[24px] text-white/95 leading-tight">
                          {activeProj.bento.card4.text.split(' ')[0]}
                        </span>
                        <span className="font-aclonica text-[12px] sm:text-[18px] xl:text-[24px] text-white/90 leading-tight">
                          {activeProj.bento.card4.text.split(' ').slice(1).join(' ')}
                        </span>
                      </div>
                      
                      {/* Interactive graphic elements to mimic Figma screenshots */}
                      <div className="flex items-center justify-center shrink-0 pr-1 sm:pr-2">
                        {activeProj.bento.card4.bottleImage ? (
                          <div className="w-7 h-10 sm:w-10 sm:h-14 relative flex items-center justify-center">
                            {/* Cylinder bottle shape */}
                            <div className="w-4 h-9 sm:w-6 sm:h-13 bg-[#C58B37] rounded-md relative flex flex-col items-center justify-between py-1 border border-white/10 shadow-md">
                              <div className="w-2.5 h-1 bg-[#ffe6c0] rounded-sm absolute -top-1" />
                              <div className="w-1.5 h-1.5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                                <span className="text-[3px] text-white font-serif uppercase">MJ</span>
                              </div>
                              <div className="w-3 h-0.5 bg-black/20" />
                            </div>
                          </div>
                        ) : activeProj.bento.card4.cardMockup ? (
                          <div className="w-11 h-7 sm:w-14 sm:h-10 bg-zinc-950 border border-white/10 rounded-md relative p-1 flex flex-col justify-between shadow-lg">
                            <div className="w-2 h-2 rounded bg-[#00FFB2]" />
                            <div className="h-1 bg-white/20 rounded w-full" />
                          </div>
                        ) : activeProj.bento.card4.sealMockup ? (
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#D4AF37] relative flex items-center justify-center shadow-md">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-black/10 flex items-center justify-center text-[5px] sm:text-[7px] text-[#120E08] font-bold">
                              LEX
                            </div>
                          </div>
                        ) : activeProj.bento.card4.vinylMockup ? (
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900 border border-white/20 relative flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-black border border-white/10" />
                          </div>
                        ) : activeProj.bento.card4.rulerMockup ? (
                          <div className="w-10 h-6 sm:w-12 sm:h-8 bg-zinc-900 rounded border border-white/5 flex items-center justify-around px-1 font-mono text-[4px] text-white/40">
                            <span>0m</span>
                            <span>|</span>
                            <span>5m</span>
                          </div>
                        ) : (
                          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded bg-[#FF003C] relative flex items-center justify-center shadow-md">
                            <span className="text-[5px] sm:text-[7px] text-white font-bold tracking-widest">PR</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card 5: Color Swatches Strip */}
                    <div 
                      className="rounded-xl overflow-hidden flex flex-row relative transition-all duration-300 hover:scale-[1.01]"
                      style={{ width: '18%' }}
                    >
                      {activeProj.bento.card5.colors.map((color, idx) => (
                        <div 
                          key={idx} 
                          className="h-full flex-grow hover:flex-grow-[1.4] transition-all duration-300"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    {/* Card 6: Aa Typography preview */}
                    <div 
                      className="rounded-xl flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 hover:scale-[1.01]"
                      style={{ 
                        backgroundColor: activeProj.bento.card6.bg,
                        width: '28%'
                      }}
                    >
                      {/* Graphic grid lines behind typo */}
                      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:10px_10px]" />
                      <span className={`${activeProj.bento.card6.fontClass} text-[28px] sm:text-[36px] xl:text-[44px] leading-none text-[#FCF9F9] tracking-tighter relative z-10`}>
                        {activeProj.bento.card6.text}
                      </span>
                    </div>

                  </div>

                </div>

                {/* Bento Right Part (Card 3: Large Crest Monogram - col-span-4 equivalent) */}
                <div 
                  className="rounded-xl flex flex-col items-center justify-center p-6 relative overflow-hidden md:w-[34%] h-full transition-all duration-300 hover:scale-[1.01] border border-white/5"
                  style={{ backgroundColor: activeProj.bento.card3.bg }}
                >
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Monogram crest */}
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border flex items-center justify-center mb-6"
                      style={{ borderColor: `${activeProj.bento.card3.textColor}35` }}
                    >
                      <span 
                        className="font-aclonica text-[22px] sm:text-[26px]"
                        style={{ color: activeProj.bento.card3.textColor }}
                      >
                        {activeProj.bento.card3.monogramText}
                      </span>
                    </div>
                    
                    <span 
                      className="font-sans font-light tracking-[0.25em] text-[9px] sm:text-[11px] uppercase mt-2"
                      style={{ color: activeProj.bento.card3.textColor }}
                    >
                      {activeProj.name}
                    </span>
                  </div>
                </div>

              </div>

            </div>
            
            {/* Description displayed under bento box aligned to right edge */}
            <div className="flex justify-end">
              <p className="font-syne font-medium text-[16px] sm:text-[18px] xl:text-[20px] leading-[1.3] text-[#C5C5C5] opacity-70 text-right max-w-sm sm:max-w-md xl:max-w-lg">
                {activeProj.tagline}
              </p>
            </div>

          </div>

          {/* Right Side: Projects titles selector + "All Projects" Button (3 Cols) */}
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-between h-auto lg:h-[560px] xl:h-[608px] pl-0 lg:pl-0">
            
            {/* Project titles list */}
            <div className="flex flex-col items-start gap-y-2">
              {PROJECTS_DATA.map((proj, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => {
                      if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                      }
                      setActiveIdx(idx);
                    }}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                    className="focus:outline-none transition-all duration-300"
                  >
                    <span 
                      className={`font-anek-devanagari font-light text-[36px] sm:text-[44px] xl:text-[51px] leading-[0.85] transition-all duration-300 block ${
                        isActive 
                          ? 'text-[#D8D8D8] opacity-100' 
                          : 'text-[#888888] opacity-25 hover:opacity-100 hover:text-accent'
                      }`}
                    >
                      {proj.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* "All Projects →" button */}
            <div className="flex justify-start">
              <a 
                href="#all-projects" 
                className="bg-[#DEF81D] hover:bg-[#cbf00f] text-[#030303] font-dm-sans font-medium text-[14px] tracking-[0.56px] px-8 py-3.5 rounded-[4px] inline-flex items-center gap-2 transition-all hover:scale-[1.03] active:scale-95 shadow-lg"
              >
                All Projects <span className="text-sm font-sans font-bold">&rarr;</span>
              </a>
            </div>

          </div>

        </div>

        {/* ─── MOBILE & TABLET SWIPABLE SLIDER LAYOUT (lg:hidden) ─── */}
        <div className="lg:hidden mt-6 flex flex-col gap-6 w-full">
          
          {/* Main Card Slider Container with Side Chevrons */}
          <div className="relative w-full flex items-center justify-center select-none">
            
            {/* Left Dim Chevron */}
            <button 
              onClick={() => {
                const prevIdx = activeIdx === 0 ? PROJECTS_DATA.length - 1 : activeIdx - 1;
                scrollToIdx(prevIdx);
              }}
              className="absolute left-[-24px] sm:left-[-32px] text-white/30 hover:text-white/80 transition-colors z-20 focus:outline-none"
              aria-label="Previous Project"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Swipable Card Frame */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-[4px] border border-[#383838] overflow-hidden">
              
              {/* Static Overlay: Project Titles List (Top-Left) */}
              <div className="absolute top-6 left-6 z-20 flex flex-col items-start gap-y-1">
                {PROJECTS_DATA.map((proj, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <span 
                      key={proj.id}
                      className={`font-anek-devanagari text-[24px] xs:text-[27px] sm:text-[31px] font-light leading-[1.1] uppercase transition-all duration-300 block ${
                        isActive 
                          ? 'text-white' 
                          : 'text-[#888888] opacity-35'
                      }`}
                    >
                      {proj.name}
                    </span>
                  );
                })}
              </div>

              {/* Native Scroll Snapping Container */}
              <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className={`w-full h-full flex flex-row overflow-x-auto no-scrollbar scroll-smooth ${
                  isProgrammatic ? '' : 'snap-x snap-mandatory'
                }`}
              >
                {clonedProjects.map((proj, idx) => (
                  <div 
                    key={`${proj.id}-clone-${idx}`}
                    className="w-full h-full shrink-0 snap-center relative bg-zinc-900"
                  >
                    {/* Project Image */}
                    <img 
                      src={proj.bgImage} 
                      alt={proj.name}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </div>
                ))}
              </div>

              {/* Static Gradient overlays for contrast (top readability shadow & bottom vignette) */}
              <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-black/75 via-black/25 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />

            </div>

            {/* Right Dim Chevron */}
            <button 
              onClick={() => {
                const nextIdx = activeIdx === PROJECTS_DATA.length - 1 ? 0 : activeIdx + 1;
                scrollToIdx(nextIdx);
              }}
              className="absolute right-[-24px] sm:right-[-32px] text-white/30 hover:text-white/80 transition-colors z-20 focus:outline-none"
              aria-label="Next Project"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

          {/* Tagline Description under card */}
          <div className="text-left mt-2">
            <p className="font-syne font-medium text-[14px] sm:text-[16px] leading-[1.4] text-[#C5C5C5] opacity-70">
              {activeProj.tagline}
            </p>
          </div>

          {/* Bottom Control Bar: Left Box Button, Dots pagination, Right Box Button */}
          <div className="flex items-center justify-between mt-2 select-none w-full">
            
            {/* Boxed Chevron Left */}
            <button 
              onClick={() => {
                const prevIdx = activeIdx === 0 ? PROJECTS_DATA.length - 1 : activeIdx - 1;
                scrollToIdx(prevIdx);
              }}
              className="w-16 h-11 border border-[#383838] rounded-[4px] flex items-center justify-center bg-[#0C0C0C]/50 active:bg-zinc-800 transition-all focus:outline-none"
              aria-label="Previous Page"
            >
              <svg className="w-3.5 h-3.5 text-[#DEF81D]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-7 sm:gap-9">
              {PROJECTS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIdx(idx)}
                  className={`rounded-full transition-all duration-300 focus:outline-none ${
                    idx === activeIdx 
                      ? 'w-2.5 h-2.5 bg-[#DEF81D]' 
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Boxed Chevron Right */}
            <button 
              onClick={() => {
                const nextIdx = activeIdx === PROJECTS_DATA.length - 1 ? 0 : activeIdx + 1;
                scrollToIdx(nextIdx);
              }}
              className="w-16 h-11 border border-[#383838] rounded-[4px] flex items-center justify-center bg-[#0C0C0C]/50 active:bg-zinc-800 transition-all focus:outline-none"
              aria-label="Next Page"
            >
              <svg className="w-3.5 h-3.5 text-[#DEF81D]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
