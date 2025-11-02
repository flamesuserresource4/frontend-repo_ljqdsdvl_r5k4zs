import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Leaf, Hammer } from 'lucide-react';

const pillars = [
  {
    icon: Palette,
    title: 'Artistic Approach',
    text: 'Spaces composed like paintings—light, shadow, proportion, and rhythm.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    text: 'Conscientious material sourcing and long-life details to reduce waste.'
  },
  {
    icon: Hammer,
    title: 'Craftsmanship',
    text: 'Celebrating joinery, texture, and the hand of the maker.'
  }
];

const milestones = [
  { year: '2016', text: 'Founded Latif Studio in Abu Dhabi—small, nimble, client-focused.' },
  { year: '2018', text: 'First boutique office—acoustic timber and daylight studies.' },
  { year: '2020', text: 'Materials lab—testing stones, woods, clays, and textiles.' },
  { year: '2023', text: 'International collaborations and immersive brand environments.' },
];

export default function PhilosophyStory() {
  return (
    <section id="philosophy" className="relative w-full bg-gradient-to-b from-rose-50 via-amber-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Our Philosophy</h2>
            <p className="mt-3 max-w-prose text-slate-700">
              We believe interiors are stories told with materials. Each project begins with listening—then composing tactile narratives that endure.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-rose-100 bg-white/70 p-5 shadow-sm backdrop-blur"
                >
                  <p.icon className="h-6 w-6 text-rose-500" />
                  <div className="mt-3 font-semibold">{p.title}</div>
                  <p className="mt-1 text-sm text-slate-600">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-200 via-orange-100 to-amber-200 shadow-xl">
              <div className="absolute inset-0 opacity-50 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(120px_100px_at_20%_30%,rgba(255,255,255,0.6),transparent), radial-gradient(120px_100px_at_80%_70%,rgba(255,255,255,0.5),transparent)' }} />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent p-6 text-white">
                <div className="text-sm uppercase tracking-wide">Founder</div>
                <div className="font-display text-2xl">Amir Latif</div>
                <div className="mt-2 text-sm text-white/90">Designer, materialist, and storyteller—crafting interiors with calm, clarity, and soul.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-display text-2xl">Design Milestones</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-amber-100 bg-white p-5 shadow-sm"
              >
                <div className="text-sm font-semibold text-amber-700">{m.year}</div>
                <div className="mt-2 text-slate-700">{m.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
