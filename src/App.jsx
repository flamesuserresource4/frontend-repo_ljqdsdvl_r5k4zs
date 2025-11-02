import React from 'react';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import PhilosophyStory from './components/PhilosophyStory.jsx';
import TestimonialsContact from './components/TestimonialsContact.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-zinc-900">
      <Hero />
      <Gallery />
      <PhilosophyStory />
      <TestimonialsContact />
    </div>
  );
}
