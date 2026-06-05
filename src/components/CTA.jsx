import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="bg-bg portfolio-section border-b border-text-primary/10 overflow-hidden">
      <div className="portfolio-container portfolio-grid items-center relative">
        
        {/* Left Side: Massive Typography Statement */}
        <div className="col-span-12 lg:col-span-8 flex flex-col items-start justify-center">
          <span className="text-label-text text-accent mb-medium">Let's Connect</span>
          
          <h2 className="text-[clamp(48px,8vw,120px)] leading-[0.9] font-sans font-light tracking-tight text-text-primary uppercase max-w-2xl">
            Have a project <br />
            in mind? <br />
            Let's build <br />
            something <em className="text-accent font-display not-italic">great</em> <br />
            together.
          </h2>
          
          <a href="mailto:hello@bplstudios.com" className="btn-solid mt-large text-xs py-4 px-10">
            Start a project &rarr;
          </a>
        </div>

        {/* Right Side: Staggered Editorial Keywords Floating */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center gap-6 mt-12 lg:mt-0 relative h-[450px]">
          
          {/* Staggered keywords with mixed editorial fonts & styling */}
          <div className="flex flex-col items-end pr-4 select-none">
            
            <span className="text-5xl font-sans text-text-ghost uppercase font-semibold leading-none tracking-tighter">
              Brand
            </span>
            
            <span className="text-6xl font-display italic text-text-ghost/60 leading-none mt-2 pr-6">
              Logo Design
            </span>
            
            <span className="text-4xl font-mono text-text-ghost/40 uppercase tracking-widest leading-none mt-4">
              Social Media
            </span>
            
            <span className="text-7xl font-sans text-accent/10 uppercase font-light leading-none mt-2">
              Website
            </span>
            
            <span className="text-5xl font-display italic text-text-ghost/80 leading-none mt-3">
              UI/UX Interfaces
            </span>
            
            <span className="text-4xl font-mono text-text-ghost uppercase leading-none mt-4 pr-12">
              Visual ID
            </span>
            
            <span className="text-5xl font-sans text-text-ghost/50 uppercase font-bold tracking-tight leading-none mt-2">
              Campaigns
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
