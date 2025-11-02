import React from 'react';
import { Star, Home, Palette, Users, Award } from 'lucide-react';

const pillars = [
  { icon: Home, title: 'Human Scale', desc: 'We design for everyday rituals—light, flow, and comfort.' },
  { icon: Palette, title: 'Material Poetry', desc: 'Quiet palettes, rich textures, and honest materials.' },
  { icon: Users, title: 'Co-Creation', desc: 'Dialogue-first process to align vision and constraints.' },
  { icon: Star, title: 'Longevity', desc: 'Timeless, adaptable spaces that age with grace.' },
];

export default function PhilosophyStory() {
  return (
    <section className="w-full bg-zinc-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Philosophy</h2>
            <p className="mt-2 max-w-2xl text-zinc-600">
              Our craft balances restraint and warmth. We pursue clarity in plan, integrity in detail, and delight in the everyday.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-800 md:flex">
            <Award size={16} /> Award-winning practice
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p.icon className="text-zinc-800" size={22} />
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-zinc-600">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h4 className="text-base font-semibold">Founder</h4>
            <p className="mt-2 text-zinc-600">
              Latif leads with curiosity and care—shaping tactile, light-filled interiors that prioritize human experience.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h4 className="text-base font-semibold">Process</h4>
            <p className="mt-2 text-zinc-600">
              From vision mapping to material studies and on-site prototyping, our work is iterative and collaborative.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h4 className="text-base font-semibold">Impact</h4>
            <p className="mt-2 text-zinc-600">
              We obsess over details that quietly improve daily life—acoustics, circulation, storage, and light.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
