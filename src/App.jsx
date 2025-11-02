import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import PhilosophyStory from './components/PhilosophyStory';
import TestimonialsContact from './components/TestimonialsContact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Gallery />
      <PhilosophyStory />
      <TestimonialsContact />
    </div>
  );
}
