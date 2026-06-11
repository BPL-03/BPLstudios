import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PROJECTS_DETAILS = {
  'axon-group-brand-identity': {
    name: "AXON Group",
    type: "Brand Identity System",
    category: "Branding / Identity",
    brief: "AXON Group requested a cohesive and corporate brand identity including stationery, business cards, and digital assets that represent precision, connectivity, and structural growth.",
    approach: "BPL Studios designed a minimalist visual identity relying on high-contrast grids, custom typographic arrangements, and a distinctive emblem that scales seamlessly from small print layouts to giant office signages.",
    outcome: "Delivered a complete brand identity system, stationery sets, business cards, notebooks, and design templates.",
    images: ["/assets/project_brandplus.jpg", "/assets/project_codesign.jpg"],
    nextUrl: "/work/majourneys-brand-identity",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "AXON Group Brand Identity",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Brand identity system for AXON Group including logo, business cards, and stationery.",
      "url": "https://bplstudios.com/work/axon-group-brand-identity",
      "keywords": "brand identity, logo design, Morocco, MENA"
    }
  },
  'majourneys-brand-identity': {
    name: "MAJOURNEYS",
    type: "Brand Identity System",
    category: "Branding / Identity",
    brief: "MAJOURNEYS needed a visual system that encapsulates the adventurous yet luxury spirit of travel across diverse and premium geographic landscapes.",
    approach: "We crafted an identity incorporating organic textures, earthy gold-sand tones, and bold serif typographic layouts reflecting timeless exploration.",
    outcome: "A comprehensive brand identity guidelines handbook, monogram systems, and digital product interface layouts.",
    images: ["/assets/project_majourneys.jpg"],
    nextUrl: "/work/salama-brand-design",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "MAJOURNEYS Brand Identity",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Brand identity system for MAJOURNEYS travel brand designed by BPL Studios.",
      "url": "https://bplstudios.com/work/majourneys-brand-identity",
      "keywords": "brand identity, travel brand, logo design, Morocco"
    }
  },
  'salama-brand-design': {
    name: "SALAMA",
    type: "Brand Design",
    category: "Branding / Identity",
    brief: "SALAMA required an interface and identity system that conveys safety, confidence, and modern simplicity for their digital services.",
    approach: "Designed a clean interface wireframe and logomark, using a vibrant mint green accent color and dark corporate slate to project security and forward-looking engineering.",
    outcome: "Interface design system, brand identity asset package, and website templates.",
    images: ["/assets/project_spim.jpg"],
    nextUrl: "/work/lexieum-visual-identity",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "SALAMA Brand Design",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Brand design for SALAMA digital product interface and branding package.",
      "url": "https://bplstudios.com/work/salama-brand-design",
      "keywords": "brand design, digital interface, UX UI design, Morocco"
    }
  },
  'lexieum-visual-identity': {
    name: "LEXIEUM",
    type: "Visual Identity Project",
    category: "Branding / Identity",
    brief: "LEXIEUM wanted a visual identity reflecting prestigious law and consultation services with quiet confidence and absolute trustworthiness.",
    approach: "Developed a traditional layout structure using gold highlights, black forest elements, and classic serif typographic marks indicating authority and expertise.",
    outcome: "Seal mockup designs, stationery templates, and consultation assets.",
    images: ["/assets/project_farisi.jpg"],
    nextUrl: "/work/abrirbat-branding",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "LEXIEUM Visual Identity",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Visual identity design for LEXIEUM consultancies.",
      "url": "https://bplstudios.com/work/lexieum-visual-identity",
      "keywords": "visual identity, law firm design, logo design, MENA"
    }
  },
  'abrirbat-branding': {
    name: "ABRIRBAT",
    type: "Brand Identity",
    category: "Branding / Identity",
    brief: "ABRIRBAT requested an industrial yet refined identity expressing structural geometry, architecture, and premium building materials.",
    approach: "Used stone grey palettes, bold neon orange highlights, and high-density typography to capture structural and modern architectural values.",
    outcome: "Delivered product mockups, merchandise assets, and a scalable design toolkit.",
    images: ["/assets/project_grain_oil.jpg"],
    nextUrl: "/work/stream-n-identity",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "ABRIRBAT Brand Identity",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Brand identity designed for ABRIRBAT.",
      "url": "https://bplstudios.com/work/abrirbat-branding",
      "keywords": "branding, architectural design, brand identity, Morocco"
    }
  },
  'stream-n-identity': {
    name: "STREAM N.",
    type: "Visual Identity",
    category: "Branding / Identity",
    brief: "STREAM N. required an audio-centric visual system that feels alive, digital, and dynamic for music and digital creators.",
    approach: "Designed around custom vinyl animations, cosmic purple highlights, and custom dark mode interface structures that resonate with creators.",
    outcome: "Complete digital guidelines, audio product interface assets, and custom icon sets.",
    images: ["/assets/project_codesign.jpg"],
    nextUrl: "/work/polo-red-brand",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "STREAM N. Visual Identity",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Visual identity design for STREAM N.",
      "url": "https://bplstudios.com/work/stream-n-identity",
      "keywords": "visual identity, audio app design, music branding, Africa"
    }
  },
  'polo-red-brand': {
    name: "POLO RED",
    type: "Brand Design",
    category: "Branding / Identity",
    brief: "POLO RED needed an editorial, high-end design reflecting premium fashion, editorial publishing, and luxury marketing.",
    approach: "Incorporated deep crimson accents, vintage layout schemes, and classic editorial typography representing high fashion and deep cultural roots.",
    outcome: "Editorial design system, publication layouts, and merchandise branding assets.",
    images: ["/assets/project_brandplus.jpg"],
    nextUrl: "/work/axon-group-brand-identity",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "POLO RED Brand Design",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Brand design for POLO RED publication.",
      "url": "https://bplstudios.com/work/polo-red-brand",
      "keywords": "brand design, fashion editorial, layout design, Europe"
    }
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const proj = PROJECTS_DETAILS[projectId];

  if (!proj) {
    return (
      <div className="bg-[#030303] text-white min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-light mb-4">Project Not Found</h1>
        <Link to="/" className="text-[#DEF81D] hover:underline">&larr; Back to Home</Link>
      </div>
    );
  }

  // Inject metadata into document head dynamically for client-side rendering
  React.useEffect(() => {
    document.title = `${proj.name} ${proj.type} — BPL Studios`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${proj.type} for ${proj.name} — ${proj.brief} Designed by BPL Studios, Agadir.`);
    }

    // Schema injection
    const scriptId = 'project-json-ld';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(proj.schema);

    return () => {
      // Restore default schema/title if desired or leave as is since we transition pages
    };
  }, [proj]);

  return (
    <div className="bg-[#030303] text-[#D8D8D8] min-h-screen py-16 sm:py-24 px-[5%] md:px-[104px]">
      <div className="max-w-[1480px] mx-auto flex flex-col gap-12">
        {/* Navigation Back */}
        <Link to="/" className="text-[#7a7870] hover:text-[#DEF81D] transition-colors inline-flex items-center gap-2 self-start font-dm-sans text-[12px] uppercase tracking-wider">
          &larr; Back to Home
        </Link>

        {/* Title Block */}
        <div className="flex flex-col gap-3 mt-4">
          <span className="bg-white/10 text-white font-dm-sans text-[11px] font-medium tracking-wider px-3.5 py-1.5 rounded-full w-fit uppercase">
            {proj.category}
          </span>
          <h1 className="font-sans font-light text-[42px] sm:text-[68px] leading-tight text-white tracking-tight">
            {proj.name} &mdash; {proj.type}
          </h1>
        </div>

        {/* Core Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-t border-[#383838] pt-10 mt-4">
          <div>
            <h2 className="font-sans text-[12px] font-medium tracking-widest text-[#7a7870] uppercase mb-3">The Challenge</h2>
            <p className="font-syne text-[15px] sm:text-[16px] leading-relaxed text-[#C5C5C5]">{proj.brief}</p>
          </div>
          <div>
            <h2 className="font-sans text-[12px] font-medium tracking-widest text-[#7a7870] uppercase mb-3">Our Approach</h2>
            <p className="font-syne text-[15px] sm:text-[16px] leading-relaxed text-[#C5C5C5]">{proj.approach}</p>
          </div>
          <div>
            <h2 className="font-sans text-[12px] font-medium tracking-widest text-[#7a7870] uppercase mb-3">Outcome</h2>
            <p className="font-syne text-[15px] sm:text-[16px] leading-relaxed text-[#C5C5C5]">{proj.outcome}</p>
          </div>
        </div>

        {/* Images Grid */}
        <div className="flex flex-col gap-8 mt-12">
          {proj.images.map((imgUrl, index) => (
            <div key={index} className="rounded-[4px] border border-[#383838] overflow-hidden bg-zinc-900 aspect-[16/9]">
              <img 
                src={imgUrl} 
                alt={`${proj.name} designed by BPL Studios`}
                loading="lazy"
                width="1440"
                height="810"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-[#383838] pt-12 mt-12 gap-8">
          <Link to={proj.nextUrl} className="font-sans font-light text-[24px] text-white hover:text-[#DEF81D] transition-colors">
            Next project &rarr;
          </Link>
          <a href="mailto:hello@bplstudios.com" className="bg-[#DEF81D] hover:bg-[#cbf00f] text-black font-dm-sans font-medium text-[14px] tracking-wide px-8 py-3.5 rounded-[4px] shadow-lg transition-transform hover:scale-[1.03] active:scale-95">
            Want something like this? Let's talk &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
