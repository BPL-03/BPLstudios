import React, { useState, useEffect, useRef } from 'react';
import SplitText from './SplitText';

export default function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);
  const trackerRef = useRef(null);
  const rafRef = useRef(null);
  const currentY = useRef(124);
  const targetY = useRef(124);

  const startTop = 124;

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [budget, setBudget] = useState('500$ - 800$');
  const [challenge, setChallenge] = useState('');

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact-drawer', handleOpen);
    return () => window.removeEventListener('open-contact-drawer', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const pct = scrollHeight - clientHeight > 0 ? scrollTop / (scrollHeight - clientHeight) : 0;
      const endTop = scrollHeight - 42.5 - 120;
      targetY.current = startTop + (endTop - startTop) * pct;
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [isOpen]);

  useEffect(() => {
    const tick = (timestamp) => {
      const delta = Math.min((timestamp - (rafRef.lastTime || timestamp)) / 16.67, 3);
      rafRef.lastTime = timestamp;

      const t = 1 - Math.pow(0.85, delta); // frame-rate independent lerp
      currentY.current = currentY.current + (targetY.current - currentY.current) * t;

      if (trackerRef.current) {
        trackerRef.current.style.transform = `translateY(${currentY.current}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Reset on drawer close
  useEffect(() => {
    if (!isOpen) {
      currentY.current = startTop;
      targetY.current = startTop;
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${name}! Your request has been sent.`);
    setIsOpen(false);
  };

  const handleWhatsappSubmit = () => {
    const message = `Hi Ahmed! I'm ${name} from ${company || 'my company'}. I'm interested in starting a project.
Email: ${email}
Phone: ${phone}
Website: ${website}
Budget: ${budget}
Challenge: ${challenge}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/212772247633?text=${encoded}`, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[999] backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[721px] z-[1000] shadow-2xl flex flex-col overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'rgba(0, 0, 0, 0.36)',
          backdropFilter: 'blur(43.25px)'
        }}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Accent Glow (same 5% opacity and blur as about drawer) */}
        <div 
          className="absolute pointer-events-none"
          style={{
            width: '1521.56px',
            height: '1908.77px',
            left: '-464.7px',
            top: '-676.25px',
            background: 'rgba(240, 255, 36, 0.05)',
            filter: 'blur(228.746px)',
            borderRadius: '50%'
          }}
        />

        {/* Fixed vertical line indicator path */}
        <div 
          className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-white/20 pointer-events-none z-10"
          style={{ borderColor: 'rgba(255, 255, 255, 0.28)', borderLeftWidth: '1.93px' }}
        />

        {/* Scrollable container */}
        <div 
          ref={scrollRef}
          className="relative z-10 flex flex-col h-full overflow-y-auto no-scrollbar pt-[124px] select-text"
        >
          {/* Inner content wrapper */}
          <div className="relative flex flex-col min-h-full pl-[55.09px] pr-[44px]">

            {/* Active highlight tracker line */}
            <div 
              ref={trackerRef}
              className="absolute left-[28px] w-[3px] bg-white pointer-events-none shadow-[0px_3.87px_3.87px_rgba(0,0,0,0.25)]"
              style={{ 
                borderLeftWidth: '2.9px', 
                borderLeftColor: '#FFFFFF',
                top: 0,
                height: '42.5px',
                willChange: 'transform'
              }}
            />

            {/* Header: Title + Close Button */}
            <div className="flex justify-between items-start w-full relative mb-4">
              <h4 
                className={`font-anek-devanagari text-white select-none reveal-up ${isOpen ? 'in-view' : ''}`}
                style={{ fontWeight: 500, fontSize: '48px', lineHeight: '100%', maxWidth: '340px' }}
              >
                Tell us about your vision.
              </h4>
              <button 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-full hover:opacity-85 transition-all cursor-pointer focus:outline-none shrink-0"
                style={{
                  width: '42.5px',
                  height: '42.5px',
                  background: 'rgba(255, 255, 255, 0.14)',
                  border: '0.83px solid rgba(0, 0, 0, 0.1)'
                }}
                aria-label="Close form panel"
              >
                <svg className="w-[11px] h-[11px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Subtitle */}
            <p className={`font-anek-devanagari text-[16px] font-medium text-white/83 leading-tight max-w-[482px] mb-[45px] reveal-up stagger-1 ${isOpen ? 'in-view' : ''}`}>
              I work with serious founders and businesses ready to level up. If we are a fit, I will respond within 24 hours. If not, I will point you in the right direction.
            </p>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              {/* 01 - CONTACT SECTION */}
              <div className="flex flex-col gap-4">
                <h5 className={`font-anek-gujarati text-[20px] font-medium tracking-[0.54px] text-white reveal-up stagger-2 ${isOpen ? 'in-view' : ''}`}>
                  01 - CONTACT
                </h5>

                <div className={`p-6 bg-[#000000]/34 rounded-[7.7px] flex flex-col gap-4 reveal-up stagger-3 ${isOpen ? 'in-view' : ''}`}>
                  
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-anek-devanagari text-[14px] font-medium text-white">Name*</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-[41.2px] bg-white border border-white/24 rounded-[3.9px] px-4 font-anek-devanagari text-[14px] text-black/58 placeholder-black/58 focus:outline-none"
                        style={{ color: 'rgba(0, 0, 0, 0.58)' }}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-anek-devanagari text-[14px] font-medium text-white">Email*</label>
                      <input 
                        type="email" 
                        required
                        placeholder="You@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-[41.2px] bg-white border border-white/24 rounded-[3.9px] px-4 font-anek-devanagari text-[14px] text-black/58 placeholder-black/58 focus:outline-none"
                        style={{ color: 'rgba(0, 0, 0, 0.58)' }}
                      />
                    </div>
                  </div>

                  {/* Phone and Brand/Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-anek-devanagari text-[14px] font-medium text-white">Phone number</label>
                      <input 
                        type="tel" 
                        placeholder="+2127XXXXXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-[41.2px] bg-white border border-white/24 rounded-[3.9px] px-4 font-anek-devanagari text-[14px] text-black/58 placeholder-black/58 focus:outline-none"
                        style={{ color: 'rgba(0, 0, 0, 0.58)' }}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-anek-devanagari text-[14px] font-medium text-white">Brand/Company</label>
                      <input 
                        type="text" 
                        placeholder="Brand name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full h-[41.2px] bg-white border border-white/24 rounded-[3.9px] px-4 font-anek-devanagari text-[14px] text-black/58 placeholder-black/58 focus:outline-none"
                        style={{ color: 'rgba(0, 0, 0, 0.58)' }}
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-anek-devanagari text-[14px] font-medium text-white">Website</label>
                      <input 
                        type="text" 
                        placeholder="yourcompany.com"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full h-[41.2px] bg-white border border-white/24 rounded-[3.9px] px-4 font-anek-devanagari text-[14px] text-black/58 placeholder-black/58 focus:outline-none"
                        style={{ color: 'rgba(0, 0, 0, 0.58)' }}
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* 02 - BUDGET SECTION */}
              <div className="flex flex-col gap-4">
                <h5 className={`font-anek-gujarati text-[20px] font-medium tracking-[0.54px] text-white reveal-up stagger-3 ${isOpen ? 'in-view' : ''}`}>
                  02 - BUDGET
                </h5>

                <div className={`p-6 bg-[#000000]/34 rounded-[7.7px] flex flex-col gap-4 reveal-up stagger-4 ${isOpen ? 'in-view' : ''}`}>
                  
                  {/* Investment Range */}
                  <div className="flex flex-col gap-2">
                    <label className="font-anek-devanagari text-[14px] font-medium text-white">Investment range</label>
                    <select 
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full h-[41.2px] bg-white border border-white/24 rounded-[3.9px] px-4 font-anek-devanagari text-[14px] text-black/58 focus:outline-none appearance-none cursor-pointer"
                      style={{ 
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='rgba(0,0,0,0.58)' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`, 
                        backgroundPosition: 'right 12px center', 
                        backgroundRepeat: 'no-repeat',
                        color: 'rgba(0, 0, 0, 0.58)'
                      }}
                    >
                      <option value="500$ - 800$" style={{ color: 'rgba(0, 0, 0, 0.58)', backgroundColor: '#ffffff' }}>500$ - 800$</option>
                      <option value="800$ - 1,200$" style={{ color: 'rgba(0, 0, 0, 0.58)', backgroundColor: '#ffffff' }}>800$ - 1,200$</option>
                      <option value="1,200$ - 2,000$" style={{ color: 'rgba(0, 0, 0, 0.58)', backgroundColor: '#ffffff' }}>1,200$ - 2,000$</option>
                      <option value="2,000$+" style={{ color: 'rgba(0, 0, 0, 0.58)', backgroundColor: '#ffffff' }}>2,000$+</option>
                    </select>
                  </div>

                  {/* Challenge Textarea */}
                  <div className="flex flex-col gap-2">
                    <label className="font-anek-devanagari text-[14px] font-medium text-white">What is the challenge?</label>
                    <textarea 
                      placeholder="What are you building? What is not working? What does success look like?"
                      rows="4"
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                      className="w-full bg-white border border-white/24 rounded-[3.9px] p-4 font-anek-devanagari text-[14px] text-black/58 placeholder-black/58 focus:outline-none resize-none"
                      style={{ color: 'rgba(0, 0, 0, 0.58)' }}
                    />
                  </div>

                </div>
              </div>

              {/* Bottom Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-start mt-4 pl-[24px] reveal-up stagger-2 ${isOpen ? 'in-view' : ''}`}>
                <button
                  type="button"
                  onClick={handleWhatsappSubmit}
                  className="border border-[#DEF81D] hover:bg-[#DEF81D]/10 text-[#DEF81D] px-6 h-[52.37px] rounded-[4px] font-dm-sans font-medium text-[16px] tracking-[0.57px] flex items-center justify-center gap-2 cursor-pointer transition-all shrink-0"
                >
                  Send via Whatsapp <span>→</span>
                </button>
                <button
                  type="submit"
                  className="bg-[#DEF81D] hover:bg-[#cbf00f] text-black px-6 h-[52.37px] rounded-[4px] font-dm-sans font-medium text-[16px] tracking-[0.57px] flex items-center justify-center gap-2 cursor-pointer transition-all shrink-0"
                >
                  Send Request <span>→</span>
                </button>
              </div>

            </form>
            {/* Spacing after the buttons to allow scrolling past them */}
            <div className="h-[120px] shrink-0" />
          </div>
        </div>
      </div>
    </>
  );
}
