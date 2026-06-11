import React, { useState, useRef, useEffect, useCallback } from 'react';
import SplitText from './SplitText';

const SERVICES_DATA = [
  {
    id: 'uxui',
    num: '◈',
    name: 'UX/UI Design',
    gradient: 'from-[#0D3BFF] to-[#040C54]',
    fullImage: '/assets/service_uxui.png',
    subtitle: 'Transforming digital experiences with intuitive UX/UI design that drives engagement and loyalty',
    detailedDesc: 'We craft seamless interfaces blending aesthetics and usability, ensuring every click feels natural and every journey inspires lasting connection.',
    features: [
      'E-commerce',
      'CRM, ERP, SaaS',
      'Promo',
      'Corporate',
      'Desktop app',
      'Mobile app',
      'etc.'
    ],
    desc: (
      <div className="flex flex-col gap-1 w-full">
        {/* Top layer (aligned right) */}
        <div className="flex justify-end w-full">
          <p className="font-syne font-medium text-[17px] leading-[17px] tracking-[-0.5px] text-[#C5C5C5] opacity-70 text-right flex items-center justify-end">
            We pride ourselves on our
          </p>
        </div>
        {/* Bottom layer (aligned left) */}
        <div className="flex justify-start w-full">
          <p className="font-syne font-medium text-[17px] leading-[17px] tracking-[-0.5px] text-[#C5C5C5] opacity-70 text-left flex items-center w-[390px]">
            ability to craft digital products that not only meet<br className="hidden md:inline" /> but exceed the expectations of our clients.
          </p>
        </div>
      </div>
    ),
    graphic: (
      <div className="absolute inset-0 flex flex-col justify-end p-5 select-none overflow-hidden">
        {/* Glowing graph line chart */}
        <div className="relative w-full h-[60%] flex flex-col justify-end mb-3.5">
          <svg className="w-full h-full text-white overflow-visible" viewBox="0 0 450 220" fill="none">
            {/* Shadow curve background */}
            <path
              d="M 10 140 C 100 240, 200 60, 300 90"
              stroke="#0D3BFF"
              strokeWidth="8"
              strokeLinecap="round"
              className="opacity-40 blur-[4px]"
            />
            {/* Main sharp curve (Solid part) */}
            <path
              d="M 10 140 C 100 240, 200 60, 300 90"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            />
            {/* Dotted continuation curve */}
            <path
              d="M 300 90 C 350 105, 400 130, 440 145"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="6 6"
              className="opacity-40"
            />

            {/* Glowing Peak Dot */}
            <circle cx="300" cy="90" r="5" fill="white" />
            <circle cx="300" cy="90" r="10" stroke="white" strokeWidth="1.5" className="opacity-20 animate-ping" />
          </svg>

          {/* Legend above peak dot */}
          <div className="absolute left-[63%] top-[30%] -translate-x-1/2 -translate-y-full mb-1.5 bg-[#0C0C0C]/80 border border-white/10 px-2 py-0.5 rounded text-[9px] text-white font-mono tracking-wider shadow-md">
            12,552
          </div>
        </div>

        {/* Bottom Legend */}
        <div className="flex justify-between items-center text-[9px] text-white/50 font-mono tracking-widest pt-2 border-t border-white/10">
          <span>MAY</span>
          <span>APR</span>
        </div>
      </div>
    )
  },
  {
    id: 'graphic',
    num: '▣',
    name: 'Graphic Design',
    gradient: 'from-[#FF5E00] to-[#401300]',
    fullImage: '/assets/service_graphic.png',
    subtitle: 'Creating memorable visual narratives that establish a strong brand identity',
    detailedDesc: 'With custom layouts, high-fidelity brand assets, 3D representations, and print collateral, we translate your ideas into coherent and impactful visual language.',
    features: [
      'Logo design',
      'Branding & Identity',
      'Brand Styleguides',
      'Print & Packaging',
      '3D assets',
      'Marketing materials'
    ],
    desc: (
      <div className="flex items-center w-full">
        <p className="font-syne font-medium text-[14.4px] leading-[14.4px] text-white/40 max-w-[358px] text-left flex items-center">
          With a wealth of experience and expertise in<br className="hidden md:inline" /> the field of digital product development, we<br className="hidden md:inline" /> understand how to design user-friendly<br className="hidden md:inline" /> interfaces that captivate and engage audiences.
        </p>
      </div>
    ),
    graphic: (
      <div className="absolute inset-0 flex items-center justify-center p-5 select-none overflow-hidden">
        {/* Tilted 3D iPhone container mockup */}
        <div className="w-[162px] h-[252px] bg-[#0c0c0d] rounded-[28px] border-[3.6px] border-[#242426] shadow-2xl relative p-2.5 flex flex-col justify-between overflow-hidden transform rotate-[-8deg] translate-y-5 hover:rotate-0 transition-transform duration-500">
          {/* Status Bar */}
          <div className="flex justify-between items-center text-[7px] text-white/40 font-mono">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex items-end gap-0.5 h-1">
                <div className="w-[1px] h-0.5 bg-white/40" />
                <div className="w-[1px] h-0.8 bg-white/40" />
                <div className="w-[1px] h-1.2 bg-white" />
              </div>
              <span className="text-[5px]">📶</span>
              <div className="w-2.5 h-1 border border-white/40 rounded-sm p-[1px] flex items-center">
                <div className="h-full w-[80%] bg-white" />
              </div>
            </div>
          </div>

          {/* Dynamic Island */}
          <div className="w-14 h-3.5 bg-black rounded-full absolute top-2 left-1/2 -translate-x-1/2 border border-white/5" />

          {/* App Core visual */}
          <div className="my-auto flex flex-col items-center justify-center text-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#FF5E00] to-[#ffa366] rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1 w-18">
              <div className="h-1 bg-white/20 rounded w-full mx-auto" />
              <div className="h-1 bg-white/10 rounded w-2/3 mx-auto" />
            </div>
          </div>

          {/* Mobile App specs lines */}
          <div className="flex flex-col gap-1 border-t border-white/10 pt-2 text-[7px] text-white/30 font-mono uppercase text-left">
            <span>Logo design</span>
            <span>Branding</span>
            <span>Identity</span>
            <span className="text-[#FF5E00] font-semibold">3D Assets</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'art',
    num: '⬡',
    name: 'Art Direction',
    gradient: 'from-[#606D5C] to-[#252C23]',
    fullImage: '/assets/service_art.png',
    subtitle: 'Coordinating visual styles and artistic themes to communicate ideas with elegance',
    detailedDesc: 'We direct aesthetic standards and execute design concepts across all platforms, ensuring your project reflects consistency and visual harmony.',
    features: [
      'Creative Direction',
      'Theme Concepting',
      'Aesthetic Standards',
      'Color & Typography systems',
      'Project Consultation',
      'Design Supervision'
    ],
    desc: null,
    graphic: (
      <div className="absolute inset-0 flex items-center justify-center p-5 select-none overflow-hidden">
        {/* Subtle mesh contour line */}
        <svg className="absolute inset-0 w-full h-full text-white/5" viewBox="0 0 100 100" fill="none">
          <path d="M 0 40 Q 25 15 50 40 T 100 40" stroke="currentColor" strokeWidth="0.75" />
          <path d="M 0 55 Q 25 30 50 55 T 100 55" stroke="currentColor" strokeWidth="0.75" />
          <path d="M 0 70 Q 25 45 50 70 T 100 70" stroke="currentColor" strokeWidth="0.75" />
        </svg>

        {/* Frosted glass overlay 1 */}
        <div className="w-[140px] h-[81px] backdrop-blur-md bg-white/[0.07] border border-white/20 rounded-xl shadow-lg p-2.5 flex flex-col justify-between absolute top-10 left-5 transform rotate-[-6deg] hover:rotate-0 hover:-translate-y-1 transition-all duration-300 z-20">
          <div className="flex items-center gap-1 text-[8px] text-white/50 font-mono">
            <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM9 10l12-3" />
            </svg>
            <span>Consultation</span>
          </div>
          <div className="flex justify-end">
            <span className="text-white/80 font-bold font-mono text-[21px] leading-none">01</span>
          </div>
        </div>

        {/* Frosted glass overlay 2 */}
        <div className="w-[140px] h-[81px] backdrop-blur-md bg-white/[0.07] border border-white/20 rounded-xl shadow-lg p-2.5 flex flex-col justify-between absolute bottom-10 right-5 transform rotate-[8deg] hover:rotate-0 hover:-translate-y-1 transition-all duration-300 z-20">
          <div className="flex items-center gap-1 text-[8px] text-white/50 font-mono">
            <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.243.577 1.823l-3.97 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.888a1 1 0 00-1.175 0l-3.97 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.97-2.888c-.784-.58-.385-1.823.577-1.823h4.907a1 1 0 00.95-.69l1.519-4.674z" />
            </svg>
            <span>Project Support</span>
          </div>
          <div className="flex justify-end">
            <span className="text-white/80 font-bold font-mono text-[21px] leading-none">02</span>
          </div>
        </div>

        {/* Floating play button in center */}
        <button className="w-11 h-11 bg-white/10 hover:bg-white/25 border border-white/30 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm z-30 transition-all transform hover:scale-105 active:scale-95">
          <svg className="w-3.5 h-3.5 text-white fill-white ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    )
  },
  {
    id: 'development',
    num: '⬢',
    name: 'Development',
    gradient: 'from-[#A800FF] to-[#006080]',
    subtitle: 'Building modern, secure, and blazing-fast web applications',
    detailedDesc: 'From custom interactive frontend components to robust web standards, our development processes match top-tier styling with highly performant, accessible code.',
    features: [
      'React / Next.js',
      'Clean HTML5 & Tailwind CSS',
      'Responsive design',
      'Performance optimization',
      'Custom API integrations',
      'Animations & Transitions'
    ],
    desc: null,
    graphic: (
      <div className="absolute inset-0 flex flex-col justify-end p-5 select-none overflow-hidden">
        {/* Dotted horizontal line running behind the cylinders */}
        <div className="absolute top-[60%] left-0 right-0 border-t border-dashed border-white/20 z-0" />

        {/* Two vertical glassmorphism cylinders */}
        <div className="relative z-10 w-full h-[65%] flex items-end justify-center gap-10 mb-3.5">

          {/* Left Pillar (Jan) */}
          <div className="flex flex-col items-center">
            <div className="w-[47px] h-[153px] rounded-full bg-gradient-to-b from-white/25 to-white/5 border border-white/20 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2.7px] bg-gradient-to-b from-white/40 via-white/5 to-transparent blur-[0.5px]" />
            </div>
          </div>

          {/* Right Pillar (Feb) */}
          <div className="flex flex-col items-center">
            <div className="w-[47px] h-[99px] rounded-full bg-gradient-to-b from-white/25 to-white/5 border border-white/20 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2.7px] bg-gradient-to-b from-white/40 via-white/5 to-transparent blur-[0.5px]" />
            </div>
          </div>

        </div>

        {/* Bottom Labels */}
        <div className="flex justify-center gap-14 items-center text-[9px] text-white/50 font-mono tracking-widest pt-2 border-t border-white/10 z-10">
          <span>JAN</span>
          <span>FEB</span>
        </div>
      </div>
    )
  },
  {
    id: 'marketing',
    num: '✦',
    name: 'Marketing',
    gradient: 'from-[#7B2CBF] to-[#0D3BFF]',
    subtitle: 'Crafting impactful growth strategies to amplify your digital reach',
    detailedDesc: 'We analyze target user groups, set up structured digital campaigns, and monitor detailed performance indicators to optimize engagement and scale your online footprint.',
    features: [
      'Growth Strategy',
      'Digital Campaigns',
      'Analytics Tracking',
      'Social Media assets',
      'SEO & Conversion Optimization',
      'Creative Copywriting'
    ],
    desc: null,
    graphic: (
      <div className="absolute inset-0 flex flex-col justify-end p-5 select-none overflow-hidden">
        {/* Dotted horizontal line running behind the cylinders */}
        <div className="absolute top-[60%] left-0 right-0 border-t border-dashed border-white/20 z-0" />

        {/* Three vertical glassmorphism cylinders */}
        <div className="relative z-10 w-full h-[65%] flex items-end justify-center gap-8 mb-3.5">

          {/* Jan Pillar */}
          <div className="flex flex-col items-center">
            <div className="w-[40px] h-[99px] rounded-full bg-white/15 border border-white/20 shadow-xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.8px] bg-gradient-to-b from-white/30 via-white/5 to-transparent" />
            </div>
          </div>

          {/* Feb Pillar */}
          <div className="flex flex-col items-center">
            <div className="w-[40px] h-[72px] rounded-full bg-white/15 border border-white/20 shadow-xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.8px] bg-gradient-to-b from-white/30 via-white/5 to-transparent" />
            </div>
          </div>

          {/* Mar Pillar */}
          <div className="flex flex-col items-center relative">
            <div className="absolute top-[-27px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
              <span className="text-[9px] text-white font-mono font-bold">74%</span>
              <div className="w-[1.3px] h-1.3 bg-[#DEF81D]" />
            </div>

            <div className="w-[40px] h-[144px] rounded-full bg-gradient-to-b from-[#FF007F] via-[#7B2CBF] to-[#0D3BFF] border border-white/40 shadow-2xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2.7px] bg-gradient-to-b from-white/50 via-white/10 to-transparent" />
              <div className="absolute top-[40%] w-1.8 h-1.8 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,1)]" />
              <div className="absolute top-[40%] w-3.6 h-3.6 border border-white/30 rounded-full animate-ping" />
            </div>
          </div>

        </div>

        {/* Bottom Labels */}
        <div className="flex justify-center gap-10 items-center text-[9px] text-white/50 font-mono tracking-widest pt-2 border-t border-white/10 z-10">
          <span>JAN</span>
          <span>FEB</span>
          <span className="text-white font-bold">MAR</span>
        </div>
      </div>
    )
  },
  {
    id: 'support',
    num: '●',
    name: 'Support',
    gradient: 'from-[#05A374] to-[#09573F]',
    fullImage: '/assets/service_support.png',
    subtitle: 'Ensuring long-term stability and reliability for your digital solutions',
    detailedDesc: 'We offer dedicated ongoing maintenance, fast security updates, performance reviews, and technical advice to keep your systems running smoothly.',
    features: [
      'Regular updates',
      'Bug fixing & Maintenance',
      'Performance reviews',
      'Technical consulting',
      'Feature additions',
      'Security auditing'
    ],
    desc: null,
    graphic: (
      <div className="absolute inset-0 flex flex-col justify-end p-5 select-none overflow-hidden">
        {/* Grid of vertical dashed lines */}
        <div className="absolute inset-0 flex justify-between px-9 pointer-events-none opacity-[0.07]">
          <div className="border-l border-dashed border-white h-full" />
          <div className="border-l border-dashed border-white h-full" />
          <div className="border-l border-dashed border-white h-full" />
          <div className="border-l border-dashed border-white h-full" />
          <div className="border-l border-dashed border-white h-full" />
          <div className="border-l border-dashed border-white h-full" />
        </div>

        {/* Wave curve accent */}
        <svg className="absolute inset-0 w-full h-full text-white/[0.08]" viewBox="0 0 100 100" fill="none">
          <path d="M 0 85 Q 50 115 100 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        {/* Stack of horizontal rounded pill bars */}
        <div className="relative z-10 w-full h-[60%] flex flex-col justify-between mb-3.5">

          <div className="w-[126px] h-[25px] rounded-full bg-white/15 border border-white/20 shadow-md flex items-center px-3.5 self-start transform hover:translate-x-1 transition-transform">
            <span className="text-[8px] text-white/90 font-mono font-bold">01 -</span>
          </div>

          <div className="w-[130px] h-[25px] rounded-full bg-white/20 border border-white/25 shadow-md flex items-center px-3.5 ml-[36px] self-start transform hover:translate-x-1 transition-transform">
            <span className="text-[8px] text-white/90 font-mono font-bold">02 -</span>
          </div>

          <div className="w-[144px] h-[25px] rounded-full bg-white/15 border border-white/20 shadow-md flex items-center px-3.5 ml-[18px] self-start transform hover:translate-x-1 transition-transform">
            <span className="text-[8px] text-white/90 font-mono font-bold">03 -</span>
          </div>

          <div className="w-[135px] h-[25px] rounded-full bg-white/20 border border-white/25 shadow-md flex items-center px-3.5 ml-[72px] self-start transform hover:translate-x-1 transition-transform">
            <span className="text-[8px] text-white/90 font-mono font-bold">04 -</span>
          </div>

        </div>

        <div className="w-full border-t border-white/15 pt-2 z-10" />
      </div>
    )
  }
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isProgrammatic, setIsProgrammatic] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isDrawerOpen]);

  const handleCardClick = (service) => {
    if (isDragging) return;
    setSelectedService(service);
    setIsDrawerOpen(true);
  };

  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const isProgrammaticScroll = useRef(false);
  const targetScrollLeft = useRef(null);
  const scrollTimeout = useRef(null);

  const clonedServices = [
    SERVICES_DATA[4],
    SERVICES_DATA[5],
    ...SERVICES_DATA,
    SERVICES_DATA[0],
    SERVICES_DATA[1]
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!scrollRef.current) return;
      const cardElement = scrollRef.current.querySelector('.service-card');
      if (!cardElement) return;
      const cardWidth = cardElement.clientWidth;
      const gap = 18;
      const itemWidth = cardWidth + gap;
      scrollRef.current.scrollLeft = 2 * itemWidth;
    }, 50);

    const el = scrollRef.current;
    const handleScrollEndNative = () => {
      handleScrollEnd();
    };
    if (el) {
      el.addEventListener('scrollend', handleScrollEndNative);
    }

    return () => {
      clearTimeout(timer);
      if (el) {
        el.removeEventListener('scrollend', handleScrollEndNative);
      }
    };
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardElement = scrollRef.current.querySelector('.service-card');
    if (!cardElement) return;
    const cardWidth = cardElement.clientWidth;
    const gap = 18;
    const itemWidth = cardWidth + gap;

    const numRealCards = 6;
    const minScroll = 2 * itemWidth;
    const maxScroll = 7 * itemWidth;

    // Instant wrap-around check for native scrolling (wheel, trackpad, swipe)
    if (!isDragging && !isProgrammaticScroll.current) {
      if (scrollLeft < minScroll - 10) {
        scrollRef.current.style.scrollBehavior = 'auto';
        scrollRef.current.scrollLeft = scrollLeft + numRealCards * itemWidth;
        return;
      } else if (scrollLeft > maxScroll + 10) {
        scrollRef.current.style.scrollBehavior = 'auto';
        scrollRef.current.scrollLeft = scrollLeft - numRealCards * itemWidth;
        return;
      }
    }

    // Update active index
    const currentScrollLeft = scrollRef.current.scrollLeft;
    const relativeScroll = currentScrollLeft - 2 * itemWidth;
    const newIdx = Math.round(relativeScroll / itemWidth);

    const normalizedIdx = (newIdx + numRealCards) % numRealCards;
    if (normalizedIdx !== activeIdx && normalizedIdx >= 0 && normalizedIdx < numRealCards) {
      setActiveIdx(normalizedIdx);
    }

    // Debounce scroll end detection to clean up drag-release snaps and programmatic motions
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      handleScrollEnd();
    }, 80);
  };

  const handleScrollEnd = () => {
    if (!scrollRef.current) return;
    isProgrammaticScroll.current = false;
    setIsProgrammatic(false);

    const scrollLeft = scrollRef.current.scrollLeft;
    const cardElement = scrollRef.current.querySelector('.service-card');
    if (!cardElement) return;
    const cardWidth = cardElement.clientWidth;
    const gap = 18;
    const itemWidth = cardWidth + gap;

    const numRealCards = 6;
    const minScroll = 2 * itemWidth;
    const maxScroll = 7 * itemWidth;

    let targetLeft = scrollLeft;
    if (scrollLeft < minScroll - 10) {
      targetLeft = scrollLeft + numRealCards * itemWidth;
      scrollRef.current.style.scrollBehavior = 'auto';
      scrollRef.current.scrollLeft = targetLeft;
    } else if (scrollLeft > maxScroll + 10) {
      targetLeft = scrollLeft - numRealCards * itemWidth;
      scrollRef.current.style.scrollBehavior = 'auto';
      scrollRef.current.scrollLeft = targetLeft;
    }

    targetScrollLeft.current = targetLeft;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX;
    startScrollLeft.current = scrollRef.current.scrollLeft;
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = 'auto';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const walk = (e.pageX - startX.current);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = startScrollLeft.current - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = 'smooth';

      const cardElement = scrollRef.current.querySelector('.service-card');
      if (!cardElement) return;
      const cardWidth = cardElement.clientWidth;
      const gap = 18;
      const itemWidth = cardWidth + gap;

      const scrollLeft = scrollRef.current.scrollLeft;
      const nearestIdx = Math.round(scrollLeft / itemWidth);

      isProgrammaticScroll.current = true;
      setIsProgrammatic(true);

      scrollRef.current.scrollTo({
        left: nearestIdx * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    if (!scrollRef.current) return;
    const cardElement = scrollRef.current.querySelector('.service-card');
    if (!cardElement) return;
    const cardWidth = cardElement.clientWidth;
    const gap = 18;
    const itemWidth = cardWidth + gap;

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    const scrollLeft = scrollRef.current.scrollLeft;
    let currentIdx = Math.round(scrollLeft / itemWidth);

    // If we are at the left boundary (index 2) or left clone, wrap to the right clone first
    if (currentIdx <= 2) {
      currentIdx = currentIdx + 6; // e.g. index 2 becomes index 8
      scrollRef.current.style.scrollBehavior = 'auto';
      scrollRef.current.scrollLeft = currentIdx * itemWidth;
    }

    const targetIdx = currentIdx - 1;
    targetScrollLeft.current = targetIdx * itemWidth;

    isProgrammaticScroll.current = true;
    setIsProgrammatic(true);

    scrollRef.current.style.scrollBehavior = 'smooth';
    scrollRef.current.scrollTo({
      left: targetScrollLeft.current,
      behavior: 'smooth'
    });
  };

  const handleNext = () => {
    if (!scrollRef.current) return;
    const cardElement = scrollRef.current.querySelector('.service-card');
    if (!cardElement) return;
    const cardWidth = cardElement.clientWidth;
    const gap = 18;
    const itemWidth = cardWidth + gap;

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    const scrollLeft = scrollRef.current.scrollLeft;
    let currentIdx = Math.round(scrollLeft / itemWidth);

    // If we are at the right boundary (index 7) or right clone, wrap to the left clone first
    if (currentIdx >= 7) {
      currentIdx = currentIdx - 6; // e.g. index 7 becomes index 1
      scrollRef.current.style.scrollBehavior = 'auto';
      scrollRef.current.scrollLeft = currentIdx * itemWidth;
    }

    const targetIdx = currentIdx + 1;
    targetScrollLeft.current = targetIdx * itemWidth;

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
      id="services"
      className="bg-bg border-b border-[#383838] py-[120px] sm:py-[180px] select-none overflow-hidden"
    >
      <div className="portfolio-container w-full">

        {/* Label and Section Heading */}
        <div className="flex flex-col gap-2 mb-3 pl-0 md:pl-[104px]">
          {/* Label with small line */}
          <div className="flex items-center gap-3">
            <div className="w-[27px] h-[1px] bg-[#D8D8D8]" />
            <span className="font-dm-sans text-[11px] font-medium tracking-[1.866px] text-[#D8D8D8] uppercase">
              Services
            </span>
          </div>
          {/* Title heading */}
          <h2 className="font-sans font-light text-[58px] sm:text-[90px] leading-[0.92] text-[#D8D8D8] tracking-tight">
            What we do
          </h2>
        </div>

        {/* Carousel container holding side chevrons + cards slider */}
        <div className="relative w-full flex items-center justify-between select-none gap-[18px]">

          {/* Dark Grey Scroll Left Button (Centered beside cards) */}
          <button
            onClick={handlePrev}
            className="hidden md:flex w-[77px] h-[47px] border border-[#383838] bg-[#1B1B1B] rounded-[4px] items-center justify-center active:bg-zinc-800 transition-all focus:outline-none shrink-0"
            aria-label="Previous Slide"
          >
            <svg className="w-5 h-5 text-[#DEF81D]/75" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Horizontally scrolling list of service cards */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`w-full flex flex-row overflow-x-auto no-scrollbar gap-[18px] py-3 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
              } ${(isDragging || isProgrammatic) ? '' : 'snap-x snap-mandatory'
              }`}
          >
            {clonedServices.map((service, idx) => (
              <div
                key={`${service.id}-clone-${idx}`}
                className="shrink-0 snap-start flex flex-col w-[260px] xs:w-[288px] md:w-[406px]"
              >
                {/* Colored Card Visual */}
                <div
                  onClick={() => handleCardClick(service)}
                  className="service-card relative w-full h-[324px] xs:h-[378px] md:h-[486px] rounded-[4px] border border-[#383838] overflow-hidden bg-zinc-900 group cursor-pointer"
                >
                  {/* Background Gradient or Image */}
                  {service.fullImage ? (
                    <img 
                      src={service.fullImage} 
                      alt={
                        service.id === 'uxui' ? 'UX/UI Design service — digital product interface design by BPL Studios' :
                        service.id === 'graphic' ? 'Graphic Design service — visual communication design by BPL Studios' :
                        service.id === 'art' ? 'Art Direction service by BPL Studios' :
                        service.id === 'development' ? 'Web Development service by BPL Studios' :
                        service.name
                      } 
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover select-none z-10 transition-transform duration-1000 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-95 transition-transform duration-1000 group-hover:scale-[1.03]`} />
                  )}

                  {/* Static Icon (Top Left) */}
                  <span className="absolute top-[14.5px] left-[25px] font-sans font-normal text-[32px] text-[#F5F2EC]/85 leading-none select-none z-20 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105">
                    {service.num}
                  </span>

                  {/* Service Heading 3 (Centered horizontally, with down chevron below) */}
                  <div className="absolute top-[86px] left-0 right-0 text-center px-4 z-20 pointer-events-none flex flex-col items-center">
                    <h3 className="font-inter font-medium text-[28px] sm:text-[36px] leading-none text-white tracking-[-2.16px] select-none transition-all duration-500 ease-out group-hover:-translate-y-2.5 group-hover:scale-[1.03]">
                      {service.name}
                    </h3>
                    <svg className="w-3 h-3 text-white/45 mt-2 transition-all duration-500 ease-out group-hover:translate-y-2 group-hover:scale-125" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* SVG/CSS Graphic Container (Centered) */}
                  {!service.fullImage && (
                    <div className="absolute inset-0 z-10 pointer-events-none">
                      {service.graphic}
                    </div>
                  )}

                  {/* Vignette overlays for card contrast */}
                  <div className="absolute top-0 left-0 right-0 h-[35%] bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-15" />
                  <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-black/35 to-transparent pointer-events-none z-15" />
                </div>
                {/* Mobile Description Text (moves with card, hidden on desktop) */}
                {service.desc && (
                  <div className="mt-5 w-full md:hidden">
                    {service.desc}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Desktop Static Descriptions + controls row */}
        <div className="hidden md:flex flex-row items-center justify-between w-full mt-3 pl-0 md:pl-[95px] pr-0 select-none">
          
          {/* Static Descriptions container (aligned with cards) */}
          <div className="flex flex-row gap-[18px] flex-grow">
            {/* Card 1 Description (UX/UI Design) */}
            <div className="w-[406px] shrink-0">
              {SERVICES_DATA[0].desc}
            </div>

            {/* Card 2 Description (Graphic Design) */}
            <div className="w-[406px] shrink-0 flex items-center">
              {SERVICES_DATA[1].desc}
            </div>
          </div>

          {/* Right Side Controls (Vertical Divider + Next Button) */}
          <div className="flex items-center shrink-0">
            {/* Vertical Divider */}
            <div className="w-[1px] h-[44px] bg-[#383838] mx-6" />

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-[77px] h-[47px] bg-[#DEF81D] hover:bg-[#cbf00f] active:scale-95 transition-all rounded-[4px] flex items-center justify-center shrink-0 focus:outline-none shadow-lg"
              aria-label="Next Slide"
            >
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Section Layout: Only the static next-button is on the right */}
        <div className="flex justify-end w-full pr-0 mt-6 md:hidden">
          {/* Lime Green Button (Scrolls Right) */}
          <button
            onClick={handleNext}
            className="w-[77px] h-[47px] bg-[#DEF81D] hover:bg-[#cbf00f] active:scale-95 transition-all rounded-[4px] flex items-center justify-center shrink-0 focus:outline-none shadow-lg"
            aria-label="Next Slide"
          >
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>

      {/* Pop-side Card Drawer Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[999] backdrop-blur-sm transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Pop-side Card Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[712px] z-[1000] shadow-2xl flex flex-col overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: selectedService?.id === 'uxui' ? '#0A35C6' :
                           selectedService?.id === 'graphic' ? '#C44800' :
                           selectedService?.id === 'art' ? '#3D4A39' :
                           selectedService?.id === 'development' ? '#7A00BF' :
                           selectedService?.id === 'marketing' ? '#5A1D8C' :
                           selectedService?.id === 'support' ? '#037A55' : '#0A35C6'
        }}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Blurred accent glow */}
        <div 
          className="absolute pointer-events-none"
          style={{
            width: '1423px',
            height: '1970px',
            left: '-623px',
            top: '-598px',
            background: selectedService?.id === 'uxui' ? '#919AD4' :
                         selectedService?.id === 'graphic' ? '#D49191' :
                         selectedService?.id === 'art' ? '#91D4A0' :
                         selectedService?.id === 'development' ? '#C491D4' :
                         selectedService?.id === 'marketing' ? '#B491D4' :
                         selectedService?.id === 'support' ? '#91D4C4' : '#919AD4',
            filter: 'blur(236px)',
            opacity: 0.4
          }}
        />

        {/* Content container */}
        <div className="relative z-10 flex flex-col h-full overflow-y-auto no-scrollbar" style={{ padding: '50px 44px 56px 40px' }}>

          {/* Title row + Close button */}
          <div className="flex justify-between items-start w-full">
            <h4 
              className={`font-anek-devanagari text-white select-none reveal-up ${isDrawerOpen ? 'in-view' : ''}`}
              style={{ 
                fontWeight: 500, 
                fontSize: '52px', 
                lineHeight: '90%'
              }}
            >
              {selectedService?.name}
            </h4>
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="flex items-center justify-center rounded-full hover:opacity-80 transition-all cursor-pointer focus:outline-none shrink-0"
              style={{
                width: '44.58px',
                height: '44.58px',
                background: 'rgba(217, 217, 217, 0.1)',
                border: '0.88px solid rgba(255, 255, 255, 0.36)'
              }}
              aria-label="Close details"
            >
              <svg className="w-[11px] h-[11px]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Subtitle */}
          <p 
            className={`font-anek-devanagari text-white mt-[74px] reveal-up stagger-1 ${isDrawerOpen ? 'in-view' : ''}`}
            style={{ 
              fontWeight: 500, 
              fontSize: '26px', 
              lineHeight: '100%', 
              maxWidth: '582px'
            }}
          >
            {selectedService?.subtitle}
          </p>

          {/* Description */}
          <p 
            className={`font-anek-devanagari mt-[20px] reveal-up stagger-2 ${isDrawerOpen ? 'in-view' : ''}`}
            style={{ 
              fontWeight: 500, 
              fontSize: '16px', 
              lineHeight: '100%', 
              color: 'rgba(255, 255, 255, 0.6)', 
              maxWidth: '582px'
            }}
          >
            {selectedService?.detailedDesc}
          </p>

          {/* Features List */}
          <div 
            className="flex flex-col select-text mt-[59px]"
            style={{ maxWidth: '582px' }}
          >
            {selectedService?.features?.map((feat, fIdx) => {
              const staggerClass = fIdx === 0 ? 'stagger-3' :
                                   fIdx === 1 ? 'stagger-4' : 'stagger-5';
              return (
                <span 
                  key={fIdx} 
                  className={`font-anek-devanagari text-white reveal-up ${staggerClass} ${isDrawerOpen ? 'in-view' : ''}`}
                  style={{ 
                    fontWeight: 500, 
                    fontSize: '42px', 
                    lineHeight: '90%'
                  }}
                >
                  {feat}
                </span>
              );
            })}
          </div>

          {/* Spacer */}
          <div className="flex-grow min-h-[60px]" />

          {/* Bottom CTA */}
          <div 
            className={`flex justify-start w-full reveal-up stagger-5 ${isDrawerOpen ? 'in-view' : ''}`}
          >
            <a
              href="#contacts"
              onClick={() => setIsDrawerOpen(false)}
              className="bg-white hover:bg-white/90 font-dm-sans flex items-center justify-center cursor-pointer transition-all"
              style={{
                fontWeight: 500,
                fontSize: '14.1px',
                lineHeight: '23px',
                letterSpacing: '0.563px',
                color: '#030303',
                padding: '14px 18px',
                gap: '10px',
                borderRadius: '4px'
              }}
            >
              Get in touch <span>→</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
