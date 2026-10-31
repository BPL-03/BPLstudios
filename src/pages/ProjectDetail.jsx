import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactDrawer from '../components/ContactDrawer';

const PROJECTS_DETAILS = {
  'zeen-moroccan-jewelry': {
    name: "ZEEN",
    type: "Fine Jewelry Brand Identity & Art Direction",
    category: "Branding / Luxury / Jewelry",
    client: "ZEEN Fine Jewelry",
    year: "2024",
    role: "Brand Identity, Packaging Design, Art Direction",
    behanceUrl: "https://www.behance.net/gallery/255775509/ZEEN-Moroccan-Jewelry-brand",
    tagline: "Heritage Moroccan craftsmanship infused with modern fine jewelry elegance.",
    brief: "ZEEN is a modern Moroccan jewelry brand celebrating the heritage, warmth, and intricate artistry of traditional craftsmanship reinterpreted for contemporary luxury wear.",
    approach: "Crafted a refined visual identity with deep royal noir and warm gold accents, organic geometries inspired by Moroccan filigree, and high-contrast editorial photography that frames every handcrafted piece with prestige.",
    outcome: "A complete brand identity system including logomark, bespoke packaging boxes, certificates of authenticity, ribbon detailing, and an elevated digital art direction.",
    images: [
      "/assets/zeen/2b9c49255775509.6ad4f7dd59753.png",
      "/assets/zeen/f84dc0255775509.6ad4f7dd59ad8.png",
      "/assets/zeen/7147b2255775509.6ad4f7dd57e0b.png",
      "/assets/zeen/16d5af255775509.6ad4f7dd57a4b.png",
      "/assets/zeen/7e8234255775509.6ad4f7dd58cb5.png",
      "/assets/zeen/e7f7ce255775509.6adb298dac97b.png",
      "/assets/zeen/aa3038255775509.6adb298dab9b0.png",
      "/assets/zeen/af8532255775509.6ad4f7dd58562.png",
      "/assets/zeen/ffe2c3255775509.6adb298da9e71.png",
      "/assets/zeen/bf07ed255775509.6adb298dab21b.png",
      "/assets/zeen/6cbd18255775509.6adb298daa81a.png",
      "/assets/zeen/d32c58255775509.6adb298dac1b3.png",
      "/assets/zeen/3bcc19255775509.6adfc46fe1c32.png",
      "/assets/zeen/e32a92255775509.6adfc3d81fba8.png",
      "/assets/zeen/581845255775509.6adfc3d820431.png",
      "/assets/zeen/cf7160255775509.6adb2a26b8f52.png"
    ],
    nextUrl: "/work/ralph-lauren-product-editorial",
    nextName: "RALPH LAUREN",
    nextType: "Luxury Fashion & Editorial",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "ZEEN Moroccan Jewelry Brand Identity",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Brand identity, packaging design, and art direction for ZEEN Moroccan fine jewelry brand.",
      "url": "https://bplstudios.com/work/zeen-moroccan-jewelry",
      "keywords": "jewelry brand identity, Moroccan jewelry, luxury packaging, branding Morocco"
    }
  },

  'ralph-lauren-product-editorial': {
    name: "RALPH LAUREN",
    type: "Product Description & Luxury Fragrance Editorial",
    category: "Fashion / Editorial / Art Direction",
    client: "Ralph Lauren Editorial",
    year: "2024",
    role: "Art Direction, Editorial Layout, Visual Storytelling",
    behanceUrl: "https://www.behance.net/gallery/213110039/RALPH-LAUREN-Product-Description",
    tagline: "High-end editorial presentation reflecting heritage luxury fashion, fragrance notes, and timeless American style.",
    brief: "A comprehensive product description and editorial layout presentation for Ralph Lauren's signature fragrance line, balancing heritage storytelling with contemporary visual precision.",
    approach: "Constructed bold crimson and deep noir typography with structured editorial hierarchy, evocative fragrance note breakdowns, and cinematic product staging.",
    outcome: "An editorial case study layout covering olfactory structure, bottle geometry, advertising copy, and luxury retail visual merchandising.",
    images: [
      "/assets/ralph_lauren/rl_hero.jpg",
      "/assets/ralph_lauren/rl_concept.jpg",
      "/assets/ralph_lauren/rl_bottle.jpg",
      "/assets/ralph_lauren/rl_editorial.jpg",
      "/assets/ralph_lauren/rl_merchandising.jpg",
      "/assets/ralph_lauren/rl_outro.jpg"
    ],
    nextUrl: "/work/majourneys-brand-identity",
    nextName: "MAJOURNEYS",
    nextType: "Brand Identity System",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Ralph Lauren Product Description Editorial",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Editorial layout, product description, and art direction for Ralph Lauren luxury fragrance presentation.",
      "url": "https://bplstudios.com/work/ralph-lauren-product-editorial",
      "keywords": "Ralph Lauren, luxury fashion, fragrance editorial, product design, art direction"
    }
  },

  'majourneys-brand-identity': {
    name: "MAJOURNEYS",
    type: "Brand Identity System & Digital Experience",
    category: "Branding / Identity / Digital",
    client: "Majourneys Travel & Booking Co.",
    year: "2024",
    role: "Brand Strategy, Visual Identity, UI/UX Design",
    behanceUrl: "https://www.behance.net/gallery/213656639/Majourneys-Rebranding-Journey-of-Moroccan-Elegance",
    tagline: "A modern visual expression honoring Moroccan warmth, authentic heritage, and global exploration.",
    brief: "Majourneys was born out of a desire to create a more authentic, connected, and inspiring way to travel. The project required redesigning their identity from the ground up to reflect authenticity, luxury, and the warm hospitality of Morocco.",
    approach: "We modernized the symbol into an iconic monogram uniting 'M' and 'j' with heart geometry that evokes hospitality and travel. Combined with Sahara desert gold, deep midnight navy, refined typography (Aclonica & Poppins), and a cohesive mobile and web experience.",
    outcome: "A full-spectrum brand system delivered across 15 comprehensive touchpoints: brand book, logomark anatomy, visual guidelines, merchandise, travel gear, and physical collateral.",
    images: [
      "/assets/majourneys_opt/9902f8213656639.67579582c9b82.png",
      "/assets/majourneys_opt/a2c795213656639.67579582c7a8d.jpg",
      "/assets/majourneys_opt/f82b64213656639.67579582caaaa.jpg",
      "/assets/majourneys_opt/24ac5c213656639.67579582ca31d.jpg",
      "/assets/majourneys_opt/4887cb213656639.67579582c9395.jpg",
      "/assets/majourneys_opt/9c41df213656639.67579582c8afc.jpg",
      "/assets/majourneys_opt/e3ef64213656639.67579582c81ed.jpg",
      "/assets/majourneys_opt/dfc726213656639.67579582c6a4c.jpg",
      "/assets/majourneys_opt/886015213656639.67579d403f3c5.jpg",
      "/assets/majourneys_opt/460b22213656639.6752417e6a5ab.jpg",
      "/assets/majourneys_opt/931954213656639.6749f3e79b520.jpg",
      "/assets/majourneys_opt/6286a2213656639.6752417e689da.jpg",
      "/assets/majourneys_opt/73c029213656639.6752417e67e92.jpg",
      "/assets/majourneys_opt/de8efa213656639.6752417e6846a.jpg",
      "/assets/majourneys_opt/f845ab213656639.67579d403eb8b.jpg",
      "/assets/majourneys_opt/88fc4e213656639.67579582c72f5.jpg"
    ],
    nextUrl: "/work/abribat-visual-identity",
    nextName: "ABRIBAT",
    nextType: "Visual Identity System",
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

  'abribat-visual-identity': {
    name: "ABRIBAT",
    type: "Visual Identity & Architectural System",
    category: "Branding / Architecture / Construction",
    client: "Abribat Construction Solutions",
    year: "2024",
    role: "Visual Identity, Signage, Stationery, 3D Collateral",
    behanceUrl: "https://www.behance.net/gallery/242729449/Abribat-Visual-Identity",
    tagline: "Industrial precision and structural strength forged into a modern architectural identity system.",
    brief: "Abribat required an identity reflecting engineering excellence, structural durability, and modern architectural materials for large-scale construction projects.",
    approach: "Designed a clean geometric monogram emphasizing modularity, architectural grids, bold vibrant cobalt and orange highlights against dark graphite concrete, and comprehensive site signage.",
    outcome: "A complete visual identity system: logomark geometry, corporate stationery, fleet vehicle livery, construction site signage, safety apparel, and digital collateral.",
    images: [
      "/assets/abribat/4dba4b242729449.697a19f563f1f.png",
      "/assets/abribat/23865b242729449.697a19f5632d6.png",
      "/assets/abribat/b7cd97242729449.697a19f562c85.png",
      "/assets/abribat/13ad35242729449.697a19f561ff4.png",
      "/assets/abribat/23bee2242729449.697a19f55e6e0.png",
      "/assets/abribat/612b7e242729449.697a19f55f81e.png",
      "/assets/abribat/b446fe242729449.697a19f560cfe.png",
      "/assets/abribat/bfce0f242729449.697a19f567c09.png",
      "/assets/abribat/252e57242729449.697a19f561a87.png",
      "/assets/abribat/59c574242729449.697a19f5658c7.png",
      "/assets/abribat/e079be242729449.697a19f56acbb.png",
      "/assets/abribat/ec708e242729449.697a19f568467.png",
      "/assets/abribat/46accd242729449.697a19f569d8a.png",
      "/assets/abribat/d54005242729449.697a19f569414.png",
      "/assets/abribat/96d3b8242729449.697a19f5614b4.png",
      "/assets/abribat/a346b7242729449.697a19f5646cb.png",
      "/assets/abribat/70a9ca242729449.697a19f5672b2.png",
      "/assets/abribat/79e14e242729449.697a19f55effb.png",
      "/assets/abribat/b04d7a242729449.697a19f568b7c.png",
      "/assets/abribat/c007af242729449.697a19f56253a.png",
      "/assets/abribat/9904f7242729449.697a19f56637b.png",
      "/assets/abribat/ba7204242729449.697a19f563888.png",
      "/assets/abribat/68f854242729449.697a19f56bc4c.png",
      "/assets/abribat/e53566242729449.697a19f56051b.png",
      "/assets/abribat/7ba505242729449.697a19f55fe51.png",
      "/assets/abribat/acb21c242729449.697a19f56a561.png",
      "/assets/abribat/b21b80242729449.697a19f56b1e3.png",
      "/assets/abribat/919255242729449.697a19f56b6fa.png"
    ],
    nextUrl: "/work/lexieum-visual-identity",
    nextName: "LEXIEUM",
    nextType: "Legal Visual Identity",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Abribat Visual Identity",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Visual identity and architectural branding designed for Abribat Construction Solutions.",
      "url": "https://bplstudios.com/work/abribat-visual-identity",
      "keywords": "visual identity, architectural branding, construction logo, Morocco"
    }
  },

  'lexieum-visual-identity': {
    name: "LEXIEUM",
    type: "Visual Identity & Corporate System",
    category: "Branding / Legal / Advisory",
    client: "Lexieum Legal Advisors",
    year: "2024",
    role: "Visual Identity, Typography, Executive Stationery",
    behanceUrl: "https://www.behance.net/gallery/249439319/LEXIEUM-LOGO-VESIUAL-IDENTITY",
    tagline: "Prestigious institutional authority and refined sophistication for international law.",
    brief: "Lexieum sought a visual identity that projects absolute integrity, legal acumen, and international sophistication for modern corporate advisory.",
    approach: "Formed a classic yet progressive monogram combining classical Roman typographic proportions with clean geometric lines, luxurious navy and warm bronze accents.",
    outcome: "Comprehensive corporate identity, gold foil stationery, leather binders, executive business cards, digital email templates, and brand book.",
    images: [
      "/assets/lexieum/f47c77249439319.6a0e4af2f0b0f.png",
      "/assets/lexieum/f4f2e4249439319.6a0e4af2f14b3.png",
      "/assets/lexieum/13dd61249439319.6a0e4af2f3f69.png",
      "/assets/lexieum/a1e98a249439319.6a0e4af2ef9c8.png",
      "/assets/lexieum/f24cf4249439319.6a0e4af2f0269.png",
      "/assets/lexieum/22d2ac249439319.6a0e4af2f3a3d.png",
      "/assets/lexieum/79deb8249439319.6a0e4af2f0696.png",
      "/assets/lexieum/d3f717249439319.6a125a892861e.png",
      "/assets/lexieum/771c32249439319.6a0e4af2ef501.png",
      "/assets/lexieum/778d3f249439319.6a0e4af2efe0d.png",
      "/assets/lexieum/518090249439319.6a0e4af2f361f.png",
      "/assets/lexieum/c97faf249439319.6a0e4af2f305e.png",
      "/assets/lexieum/502f04249439319.6a125a8928b59.png",
      "/assets/lexieum/464ef3249439319.6a0e4af2f1a24.png",
      "/assets/lexieum/380605249439319.6a0e4af2f0f4e.png"
    ],
    nextUrl: "/work/salama-visual-identity",
    nextName: "SALAMA",
    nextType: "Digital Security & FinTech",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "LEXIEUM Visual Identity",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Visual identity and legal advisory branding designed for Lexieum Legal Advisors.",
      "url": "https://bplstudios.com/work/lexieum-visual-identity",
      "keywords": "visual identity, law firm branding, legal logo design, MENA"
    }
  },

  'salama-visual-identity': {
    name: "SALAMA",
    type: "Visual Identity & Digital Product System",
    category: "Branding / FinTech / Security",
    client: "Salama Technologies",
    year: "2024",
    role: "Visual Identity, Product Interface, Design System",
    behanceUrl: "https://www.behance.net/gallery/249738989/SALAMA-VISUAL-IDENTITY",
    tagline: "Conveying safety, confidence, and modern simplicity for digital payment & security interfaces.",
    brief: "Salama required a brand identity and interface ecosystem that conveys trustworthiness, digital safety, and modern convenience for users across the MENA region.",
    approach: "Engineered an iconic shield-and-flow emblem with luminous mint green against midnight charcoal tones, crisp sans typography, and modular UI components.",
    outcome: "End-to-end brand identity, app interface mockups, debit card designs, contactless payment touchpoints, and brand architecture.",
    images: [
      "/assets/salama/613ada249738989.6a0e45e5d6da3.png",
      "/assets/salama/aa1ec0249738989.6a1256da267dd.png",
      "/assets/salama/368aa9249738989.6a1272f88dbbe.png",
      "/assets/salama/b01840249738989.6a1256da27dcf.png",
      "/assets/salama/039963249738989.6a1272f88edcb.png",
      "/assets/salama/f03676249738989.6a1272f8909fe.png",
      "/assets/salama/7da166249738989.6a1272f890fca.png",
      "/assets/salama/d2dec0249738989.6a1272f891bec.png",
      "/assets/salama/11cba3249738989.6a1272f8902f7.png",
      "/assets/salama/0eb88e249738989.6a1272f88f4d2.png",
      "/assets/salama/dc138f249738989.6a1272f8915a2.png",
      "/assets/salama/49d74f249738989.6a1272f88fbf2.png",
      "/assets/salama/2600a6249738989.6a1272f88e527.png"
    ],
    nextUrl: "/work/ayla-shopping-store",
    nextName: "AYLA",
    nextType: "E-Commerce & Retail",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "SALAMA Visual Identity",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Visual identity and digital product system for Salama Technologies.",
      "url": "https://bplstudios.com/work/salama-visual-identity",
      "keywords": "visual identity, fintech branding, mobile UI, security design, Morocco"
    }
  },

  'ayla-shopping-store': {
    name: "AYLA",
    type: "Retail Store & E-Commerce Visual Identity",
    category: "Branding / Retail / E-Commerce",
    client: "Ayla Lifestyle Store",
    year: "2024",
    role: "Visual Identity, Packaging, E-Commerce UI",
    behanceUrl: "https://www.behance.net/gallery/256329439/Ayla-Shopping-Store-Visual-Identity",
    tagline: "Effortless elegance and contemporary curation for modern lifestyle retail and e-commerce.",
    brief: "Ayla requested a fresh, warm, and inviting visual identity for a curated lifestyle shopping destination blending physical boutique presence with frictionless online shopping.",
    approach: "Designed a graceful, fluid wordmark with warm pastel tones, clean retail shopping bag packaging, minimal typography, and an intuitive mobile e-commerce interface.",
    outcome: "Complete brand guidelines, retail bag and tag mockups, unboxing experience packaging, social media design kit, and online store UI.",
    images: [
      "/assets/ayla/a55515256329439.6ab9a09faae31.png",
      "/assets/ayla/5619ba256329439.6ab9a09faba2d.png",
      "/assets/ayla/5ef6ab256329439.6ab9a09fab232.png",
      "/assets/ayla/1ac8b6256329439.6ab9a3e960ac5.png",
      "/assets/ayla/4123fe256329439.6ab9a3e96031b.png"
    ],
    nextUrl: "/work/zeen-moroccan-jewelry",
    nextName: "ZEEN",
    nextType: "Fine Jewelry Brand",
    schema: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "AYLA Shopping Store Visual Identity",
      "creator": {
        "@type": "Organization",
        "name": "BPL Studios"
      },
      "description": "Visual identity, retail packaging, and e-commerce UI design for Ayla Lifestyle Store.",
      "url": "https://bplstudios.com/work/ayla-shopping-store",
      "keywords": "retail branding, e-commerce identity, shopping store, packaging design"
    }
  }
};

// Aliases for backwards compatibility:
PROJECTS_DETAILS['salama-brand-design'] = PROJECTS_DETAILS['salama-visual-identity'];
PROJECTS_DETAILS['abrirbat-branding'] = PROJECTS_DETAILS['abribat-visual-identity'];
PROJECTS_DETAILS['polo-red-brand'] = PROJECTS_DETAILS['ralph-lauren-product-editorial'];
PROJECTS_DETAILS['axon-group-brand-identity'] = PROJECTS_DETAILS['zeen-moroccan-jewelry'];
PROJECTS_DETAILS['stream-n-identity'] = PROJECTS_DETAILS['ayla-shopping-store'];

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

    // Trigger scroll-reveal scanner
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
        
        {/* Editorial Header & Narrative Container */}
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
              <div className="flex flex-col items-start gap-1">
                <span className="font-sans text-[15px] sm:text-[16px] text-[#DEF81D] font-light">BPL Studios</span>
                {proj.behanceUrl && (
                  <a 
                    href={proj.behanceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-inter text-[11px] text-[#7a7870] hover:text-[#DEF81D] transition-colors uppercase tracking-[0.15em]"
                  >
                    <span>View on Behance</span>
                    <span className="text-[12px]">&nearr;</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Editorial Narrative Split (Typography First) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-24 reveal-up stagger-3">
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

        </div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* BEHANCE CASE STUDY CONTINUOUS EXHIBITION (EXACTLY 0px GAP)          */}
        {/* Vertical: 1 image in a row — "image-under-image" with 0px between them */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1400px] mx-auto select-none my-10 sm:my-16">
          <div className="flex flex-col gap-0 w-full m-0 p-0">
            {proj.images?.map((imgUrl, idx) => (
              <div 
                key={idx} 
                className="w-full block leading-none m-0 p-0 overflow-hidden"
              >
                <img 
                  src={imgUrl} 
                  alt={`${proj.name} — Behance Presentation Module ${idx + 1}`}
                  loading={idx < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-auto block m-0 p-0 border-0 outline-none select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Next Project Navigation */}
        <div className="portfolio-container">
          <nav className="mt-16 lg:mt-24 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 select-none reveal-up">
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
