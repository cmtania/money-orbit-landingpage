import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import Features from './components/Features.jsx';
import { Closing, Faq, Privacy, Pro } from './components/Sections.jsx';
import { startSmoothScroll } from './lib/scroll.js';

export default function App() {
  useEffect(() => startSmoothScroll(), []);
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Showcase />
        <Features />
        <Privacy />
        <Pro />
        <Faq />
      </main>
      <Closing />
    </>
  );
}
