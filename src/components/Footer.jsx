import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-bg-alt py-16 border-t border-text-primary/5 text-text-muted">
      <div className="portfolio-container portfolio-grid items-start gap-y-12">
        
        {/* Left Column: Mascot & Brand Name (4 Cols) */}
        <div className="col-span-12 md:col-span-4 flex items-center gap-medium">
          <div className="w-16 h-16 rounded-2xl bg-white overflow-hidden flex items-center justify-center p-1 border border-text-primary/10 select-none">
            <img 
              src="/assets/panther_footer.png" 
              alt="BPL Studios Panther Logo"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-lg tracking-tight text-text-primary uppercase font-light leading-tight">BPL Studios</span>
            <span className="font-mono text-[9px] text-text-ghost uppercase tracking-widest mt-1">Based in Agadir, Morocco</span>
          </div>
        </div>

        {/* Center Column: Description & Reach (4 Cols) */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-2">
          <span className="text-[10px] font-mono tracking-widest text-text-ghost uppercase">Operational worldwide</span>
          <p className="text-[12px] leading-relaxed text-text-muted">
            Building premium visual systems and interactive landmarks at the intersection of cultural insights and digital rigor.
          </p>
        </div>

        {/* Right Column: Links & Copyright (4 Cols) */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-start md:items-end gap-small">
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Behance</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
          
          <span className="font-mono text-[10px] text-text-ghost uppercase tracking-wider mt-4 md:text-right">
            &copy; 2026 BPL Studios. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
