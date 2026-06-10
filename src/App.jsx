import React from 'react';
import Home from './pages/Home';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <>
      <Home />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
