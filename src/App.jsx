import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Home from './pages/Home';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  useEffect(() => {
    // ─── Initialize Lenis Smooth Scroll ───
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // ─── IntersectionObserver for Viewport Reveals ───
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px', // Trigger reveals slightly before entering viewport
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Reveal once
        }
      });
    }, observerOptions);

    // Function to scan and observe reveal elements
    const scanElements = () => {
      const elements = document.querySelectorAll('.reveal-up, .reveal-text');
      elements.forEach((el) => observer.observe(el));
    };

    // Scan initially and after short delay to ensure DOM is ready
    scanElements();
    const timeoutId = setTimeout(scanElements, 400);

    // Expose scanning globally in case of dynamic component mounts
    window.scanScrollReveals = scanElements;

    return () => {
      lenis.destroy();
      observer.disconnect();
      clearTimeout(timeoutId);
      delete window.scanScrollReveals;
    };
  }, []);

  return (
    <>
      <Home />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
