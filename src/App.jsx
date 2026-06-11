import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function ScrollToTopAndScan() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll page to top on page navigation
    window.scrollTo(0, 0);

    // Scan for animations
    if (window.scanScrollReveals) {
      window.scanScrollReveals();
    }
  }, [pathname]);

  return null;
}

function MainApp() {
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
      <ScrollToTopAndScan />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:projectId" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <MainApp />
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}
