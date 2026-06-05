import React from 'react';

const VALUES = [
  {
    num: '01',
    title: 'Precision',
    desc: 'Every pixel, line, and letter matters. We align structural code with visual layouts without compromise.',
  },
  {
    num: '02',
    title: 'Rigor',
    desc: 'We do not shortcut the design process. Extensive strategy and visual testing precede execution.',
  },
  {
    num: '03',
    title: 'Longevity',
    desc: 'Bespoke design that stands the test of time, rejecting temporary trends in favor of visual landmark concepts.',
  },
  {
    num: '04',
    title: 'Clarity',
    desc: 'Complexity made simple. Streamlined navigation, typography, and functional spacing systems.',
  },
];

export default function Values() {
  return (
    <section id="values" className="bg-bg-alt portfolio-section border-b border-text-primary/10">
      <div className="portfolio-container">
        
        {/* Section Heading */}
        <div className="mb-large">
          <span className="text-label-text text-accent">Philosophies</span>
          <h2 className="text-section-title uppercase mt-2">What really matters</h2>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {VALUES.map((val) => (
            <div 
              key={val.num}
              className="border-t border-text-primary/10 pt-medium flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">{val.num}</span>
                <h3 className="text-xl font-sans tracking-tight text-text-primary uppercase font-light">
                  {val.title}
                </h3>
              </div>
              <p className="text-body-text text-text-muted leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
