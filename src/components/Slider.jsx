import React from 'react';

const DEFAULT_SERVICES = [
  'GRAPHIC DESIGN',
  'BRANDING',
  'WEB DESIGN',
  'UI/UX DESIGN',
  'MOTION DESIGN',
  'SOCIAL MEDIA',
  'PACKAGING',
  'PRINT DESIGN',
];

function SliderTrack({ items }) {
  return (
    <div className="flex flex-row items-center gap-0 shrink-0">
      {items.map((service, i) => (
        <div key={i} className="flex items-center gap-0 shrink-0">
          {/* Service Label */}
          <span className="slider-label whitespace-nowrap select-none">
            {service}
          </span>
          {/* Lime Dot Separator */}
          <span className="slider-dot" />
        </div>
      ))}
    </div>
  );
}

export default function Slider({ items = DEFAULT_SERVICES }) {
  const upperItems = items.map(item => item.toUpperCase());

  return (
    <section className="relative w-full border-y-2 border-white/10 overflow-hidden bg-transparent select-none">
      <div className="portfolio-container flex items-center h-[63px]">
        {/* Animated Marquee Track — two copies for seamless loop */}
        <div className="slider-marquee flex items-center">
          <SliderTrack items={upperItems} />
          <SliderTrack items={upperItems} />
        </div>
      </div>
    </section>
  );
}
