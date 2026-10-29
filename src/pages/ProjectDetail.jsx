import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactDrawer from '../components/ContactDrawer';

const PROJECTS_DETAILS = {
  'majourneys-brand-identity': {
    name: "MAJOURNEYS",
    type: "Brand Identity System & Digital Experience",
    category: "Branding / Identity / Digital",
    client: "Majourneys Travel & Booking Co.",
    year: "2024",
    role: "Brand Strategy, Visual Identity, UI/UX Design",
    behanceUrl: "https://www.behance.net/amad003",
    tagline: "A modern visual expression honoring Moroccan warmth, authentic heritage, and global exploration.",
    brief: "Majourneys was born out of a desire to create a more authentic, connected, and inspiring way to travel. The project required redesigning their identity from the ground up to reflect authenticity, luxury, and the warm hospitality of Morocco.",
    approach: "We modernized the symbol into an iconic monogram uniting 'M' and 'j' with heart geometry that evokes hospitality and travel. Combined with Sahara desert gold, deep midnight navy, refined typography (Aclonica & Poppins), and a cohesive mobile and web experience.",
    outcome: "A full-spectrum brand system delivered across 15 comprehensive touchpoints: brand book, logomark anatomy, visual guidelines, merchandise, travel gear, and physical collateral.",
    editorialSections: [
      {
        type: "full",
        image: "/assets/majourneys_opt/f82b64213656639.67579582caaaa.jpg",
        alt: "Majourneys New Identity Showcase"
      },
      {
        type: "spread",
        left: {
          image: "/assets/majourneys_opt/a2c795213656639.67579582c7a8d.jpg",
          alt: "Project Scope & Objectives"
        },
        right: {
          image: "/assets/majourneys_opt/24ac5c213656639.67579582ca31d.jpg",
          alt: "Logomark Construction Anatomy"
        }
      },
      {
        type: "spread",
        left: {
          image: "/assets/majourneys_opt/4887cb213656639.67579582c9395.jpg",
          alt: "Brand Typography Hierarchy"
        },
        right: {
          image: "/assets/majourneys_opt/9c41df213656639.67579582c8afc.jpg",
          alt: "Sahara Color Palette"
        }
      },
      {
        type: "full",
        image: "/assets/majourneys_opt/dfc726213656639.67579582c6a4c.jpg",
        alt: "Logomark Scalability & Applications"
      },
      {
        type: "spread",
        left: {
          image: "/assets/majourneys_opt/e3ef64213656639.67579582c81ed.jpg",
          alt: "Artisanal Craft & Gold Sky Crest"
        },
        right: {
          image: "/assets/majourneys_opt/886015213656639.67579d403f3c5.jpg",
          alt: "Travel Gear & Lifestyle Apparel"
        }
      },
      {
        type: "full",
        image: "/assets/majourneys_opt/460b22213656639.6752417e6a5ab.jpg",
        alt: "Sahara Camels Landscape"
      },
      {
        type: "full",
        image: "/assets/majourneys_opt/6286a2213656639.6752417e689da.jpg",
        alt: "Mobile Booking Experience UI"
      },
      {
        type: "spread",
        left: {
          image: "/assets/majourneys_opt/73c029213656639.6752417e67e92.jpg",
          alt: "Lifestyle Onboarding Screens"
        },
        right: {
          image: "/assets/majourneys_opt/de8efa213656639.6752417e6846a.jpg",
          alt: "Web Platform & Social Campaign"
        }
      },
      {
        type: "full",
        image: "/assets/majourneys_opt/f845ab213656639.67579d403eb8b.jpg",
        alt: "Transformation: Legacy vs Rebrand"
      },
      {
        type: "spread",
        left: {
          image: "/assets/majourneys_opt/931954213656639.6749f3e79b520.jpg",
          alt: "Nomad in Sahara Horizon"
        },
        right: {
          image: "/assets/majourneys_opt/88fc4e213656639.67579582c72f5.jpg",
          alt: "Gilded Mark Under Sahara Stars"
        }
      }
    ],
    nextUrl: "/work/axon-group-brand-identity",
    nextName: "AXON Group",
    nextType: "Brand Identity System",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "MAJOURNEYS Brand Identity",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Brand identity and UI/UX design for MAJOURNEYS travel platform by BPL Studios.",
      "url": "https://bplstudios.com/work/majourneys-brand-identity",
      "keywords": "brand identity, travel brand, logo design, Morocco, Agadir"
    }
  },
  'axon-group-brand-identity': {
    name: "AXON Group",
    type: "Brand Identity System",
    category: "Branding / Identity",
    client: "AXON Group Ltd.",
    year: "2024",
    role: "Brand Architecture, Stationery & Digital Assets",
    tagline: "Corporate precision, connectivity, and structural growth represented through minimalist visual systems.",
    brief: "AXON Group requested a cohesive and corporate brand identity including stationery, business cards, and digital assets that represent precision, connectivity, and structural growth.",
    approach: "BPL Studios designed a minimalist visual identity relying on high-contrast grids, custom typographic arrangements, and a distinctive emblem that scales seamlessly from small print layouts to giant office signages.",
    outcome: "Delivered a complete brand identity system, stationery sets, business cards, notebooks, and digital design guidelines.",
    images: ["/assets/project_brandplus.jpg", "/assets/project_codesign.jpg"],
    nextUrl: "/work/salama-brand-design",
    nextName: "SALAMA",
    nextType: "Brand Design",
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
  'salama-brand-design': {
    name: "SALAMA",
    type: "Brand Design & Digital Product",
    category: "Branding / Identity / Product",
    client: "Salama Technologies",
    year: "2024",
    role: "Interface Design & Brand Guidelines",
    tagline: "Conveying safety, confidence, and modern simplicity for digital payment and security services.",
    brief: "SALAMA required an interface and identity system that conveys safety, confidence, and modern simplicity for their digital services.",
    approach: "Designed a clean interface wireframe and logomark, using a vibrant mint green accent color and dark corporate slate to project security and forward-looking engineering.",
    outcome: "Interface design system, brand identity asset package, and responsive web platform templates.",
    images: ["/assets/project_spim.jpg"],
    nextUrl: "/work/lexieum-visual-identity",
    nextName: "LEXIEUM",
    nextType: "Visual Identity Project",
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
    client: "Lexieum Law & Consultancies",
    year: "2024",
    role: "Visual Identity & Seal Design",
    tagline: "Quiet confidence, prestigious law practice, and absolute institutional trustworthiness.",
    brief: "LEXIEUM wanted a visual identity reflecting prestigious law and consultation services with quiet confidence and absolute trustworthiness.",
    approach: "Developed a traditional layout structure using gold highlights, black forest elements, and classic serif typographic marks indicating authority and expertise.",
    outcome: "Seal mockup designs, stationery templates, and consultation assets.",
    images: ["/assets/project_farisi.jpg"],
    nextUrl: "/work/abrirbat-branding",
    nextName: "ABRIRBAT",
    nextType: "Brand Identity",
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
    category: "Branding / Architecture",
    client: "Abrirbat Industrial Co.",
    year: "2024",
    role: "Branding & Material Architecture",
    tagline: "Industrial yet refined identity expressing structural geometry and modern materials.",
    brief: "ABRIRBAT requested an industrial yet refined identity expressing structural geometry, architecture, and premium building materials.",
    approach: "Used stone grey palettes, bold neon orange highlights, and high-density typography to capture structural and modern architectural values.",
    outcome: "Delivered product mockups, merchandise assets, and a scalable design toolkit.",
    images: ["/assets/project_grain_oil.jpg"],
    nextUrl: "/work/stream-n-identity",
    nextName: "STREAM N.",
    nextType: "Visual Identity",
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
    type: "Visual Identity & Audio App",
    category: "Branding / Identity / Audio",
    client: "Stream N. Media",
    year: "2024",
    role: "Identity & Digital Design Guidelines",
    tagline: "An audio-centric visual system that feels alive, digital, and dynamic for music creators.",
    brief: "STREAM N. required an audio-centric visual system that feels alive, digital, and dynamic for music and digital creators.",
    approach: "Designed around custom vinyl animations, cosmic purple highlights, and custom dark mode interface structures that resonate with creators.",
    outcome: "Complete digital guidelines, audio product interface assets, and custom icon sets.",
    images: ["/assets/project_codesign.jpg"],
    nextUrl: "/work/polo-red-brand",
    nextName: "POLO RED",
    nextType: "Brand Design",
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
    type: "Brand Design & Editorial System",
    category: "Branding / Editorial / Fashion",
    client: "Polo Red Fashion House",
    year: "2024",
    role: "Editorial Layout & Lookbook",
    tagline: "High-end editorial aesthetic reflecting luxury fashion, print publishing, and cultural depth.",
    brief: "POLO RED needed an editorial, high-end design reflecting premium fashion, editorial publishing, and luxury marketing.",
    approach: "Incorporated deep crimson accents, vintage layout schemes, and classic editorial typography representing high fashion and deep cultural roots.",
    outcome: "Editorial design system, publication layouts, and merchandise branding assets.",
    images: ["/assets/project_brandplus.jpg"],
    nextUrl: "/work/majourneys-brand-identity",
    nextName: "MAJOURNEYS",
    nextType: "Brand Identity System",
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

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!proj) return;

    document.title = `${proj.name} — ${proj.type} | BPL Studios`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${proj.type} for ${proj.name} — ${proj.brief} Designed by BPL Studios.`);
    }

    const scriptId = 'project-json-ld';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(proj.schema);

    // Trigger homepage scroll-reveal scanner
    const t1 = setTimeout(() => {
      if (window.scanScrollReveals) {
        window.scanScrollReveals();
      }
    }, 60);

    const t2 = setTimeout(() => {
      if (window.scanScrollReveals) {
        window.scanScrollReveals();
      }
    }, 350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [projectId]);

  const openContact = () => {
    window.dispatchEvent(new CustomEvent('open-contact-drawer'));
  };

  if (!proj) {
    return (
      <div className="bg-[#030303] text-white min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex flex-col items-center justify-center p-8 text-center pt-40">
          <span className="font-inter text-[11px] tracking-[0.2em] text-[#7a7870] uppercase mb-4">404</span>
          <h1 className="font-sans font-light text-[36px] sm:text-[48px] text-white mb-6">Project Not Found</h1>
          <Link 
            to="/#work" 
            className="text-black bg-[#DEF81D] hover:bg-[#cbf00f] font-dm-sans font-medium text-[13px] px-6 py-3 rounded-[4px] transition-transform hover:scale-105"
          >
            &larr; Return to Featured Work
          </Link>
        </div>
        <Footer />
        <ContactDrawer />
      </div>
    );
  }

  return (
    <div className="bg-[#030303] text-[#e8e6de] min-h-screen selection:bg-[#DEF81D] selection:text-black">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Editorial Content */}
      <main className="pt-32 sm:pt-40 lg:pt-48 pb-24">
        <div className="portfolio-container">
          
          {/* Back Navigation */}
          <div className="mb-12 reveal-up">
            <Link 
              to="/#work" 
              className="inline-flex items-center gap-2.5 font-inter text-[11px] uppercase tracking-[0.2em] text-[#7a7870] hover:text-white transition-colors group select-none"
            >
              <span className="group-hover:-translate-x-1.5 transition-transform inline-block">&larr;</span>
              <span>Back to Work</span>
            </Link>
          </div>

          {/* Project Title & Category */}
          <header className="mb-12 lg:mb-16 reveal-up stagger-1">
            <span className="font-inter text-[11px] tracking-[0.25em] text-[#DEF81D] uppercase font-bold block mb-4">
              {proj.category}
            </span>
            <h1 className="font-sans font-light text-[48px] sm:text-[76px] lg:text-[100px] leading-[0.94] text-white tracking-tight">
              {proj.name}
            </h1>
            <p className="font-inter text-[13px] sm:text-[15px] tracking-[0.16em] uppercase text-[#7a7870] font-medium mt-6">
              {proj.type}
            </p>
          </header>

          {/* Editorial Metadata Strip (Clean Hairline Borders, No Cards) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 mb-16 lg:mb-24 select-none reveal-up stagger-2">
            <div>
              <span className="font-inter text-[10px] tracking-[0.2em] text-[#7a7870] uppercase block mb-1.5">Client</span>
              <span className="font-sans text-[15px] sm:text-[16px] text-white font-light">{proj.client}</span>
            </div>
            <div>
              <span className="font-inter text-[10px] tracking-[0.2em] text-[#7a7870] uppercase block mb-1.5">Services</span>
              <span className="font-sans text-[15px] sm:text-[16px] text-white font-light">{proj.role || proj.type}</span>
            </div>
            <div>
              <span className="font-inter text-[10px] tracking-[0.2em] text-[#7a7870] uppercase block mb-1.5">Year</span>
              <span className="font-sans text-[15px] sm:text-[16px] text-white font-light">{proj.year}</span>
            </div>
            <div>
              <span className="font-inter text-[10px] tracking-[0.2em] text-[#7a7870] uppercase block mb-1.5">Studio</span>
              <span className="font-sans text-[15px] sm:text-[16px] text-[#DEF81D] font-light">BPL Studios</span>
            </div>
          </div>

          {/* Editorial Narrative Split (Typography First) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 lg:mb-32 reveal-up stagger-3">
            <div className="lg:col-span-5">
              <h2 className="font-sans font-light text-[26px] sm:text-[34px] lg:text-[38px] leading-[1.12] text-white tracking-tight">
                {proj.tagline || proj.brief}
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 text-[#9a9890] font-syne text-[15px] sm:text-[16px] leading-[1.75]">
              <p>{proj.brief}</p>
              <p>{proj.approach}</p>
              <p>{proj.outcome}</p>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════ */}
          {/* EDITORIAL IMAGE EXHIBITION (NO CARDS, PURE MINIMAL) */}
          {/* ═══════════════════════════════════════════════════ */}
          {proj.editorialSections ? (
            <div className="flex flex-col gap-12 sm:gap-16 lg:gap-24">
              {proj.editorialSections.map((section, idx) => {
                if (section.type === 'full') {
                  return (
                    <div 
                      key={idx} 
                      className="w-full overflow-hidden select-none reveal-up"
                    >
                      <img 
                        src={section.image} 
                        alt={section.alt || `${proj.name} visual ${idx + 1}`}
                        loading={idx === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="w-full h-auto block"
                      />
                    </div>
                  );
                }

                if (section.type === 'spread') {
                  return (
                    <div 
                      key={idx} 
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start select-none"
                    >
                      <div className="w-full overflow-hidden reveal-up">
                        <img 
                          src={section.left.image} 
                          alt={section.left.alt || `${proj.name} visual`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto block"
                        />
                      </div>
                      <div className="w-full overflow-hidden reveal-up stagger-1">
                        <img 
                          src={section.right.image} 
                          alt={section.right.alt || `${proj.name} visual`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto block"
                        />
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ) : (
            /* Fallback Clean Minimalist Exhibition for Standard Projects */
            <div className="flex flex-col gap-12 sm:gap-16 lg:gap-24 select-none">
              {proj.images?.map((imgUrl, idx) => (
                <div key={idx} className="w-full overflow-hidden reveal-up">
                  <img 
                    src={imgUrl} 
                    alt={`${proj.name} showcase ${idx + 1}`}
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </div>
          )}

          {/* ═══════════════════════════════════════════════════ */}
          {/* EDITORIAL NEXT PROJECT FOOTER (CLEAN & MINIMAL)     */}
          {/* ═══════════════════════════════════════════════════ */}
          <nav className="mt-24 lg:mt-36 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 select-none reveal-up">
            <div className="flex flex-col">
              <span className="font-inter text-[10px] tracking-[0.2em] text-[#7a7870] uppercase mb-2">
                Next Project
              </span>
              <Link 
                to={proj.nextUrl}
                className="font-sans font-light text-[32px] sm:text-[44px] text-white hover:text-[#DEF81D] transition-colors tracking-tight inline-flex items-center gap-3 group"
              >
                <span>{proj.nextName || "Next Project"}</span>
                <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
              </Link>
              <span className="font-inter text-[11px] text-[#7a7870] mt-1 tracking-[0.15em] uppercase">
                {proj.nextType}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <button 
                onClick={openContact}
                className="font-inter text-[12px] tracking-[0.18em] uppercase text-white hover:text-[#DEF81D] border-b border-white/20 hover:border-[#DEF81D] pb-1 transition-all"
              >
                Start a Project &rarr;
              </button>
            </div>
          </nav>

        </div>
      </main>

      {/* Global Footer & Contact Drawer */}
      <Footer />
      <ContactDrawer />
    </div>
  );
}
