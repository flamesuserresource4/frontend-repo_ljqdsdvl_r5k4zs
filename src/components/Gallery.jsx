import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Marble House',
    tag: 'Residential',
    colorFrom: 'from-zinc-200',
    colorTo: 'to-zinc-400',
  },
  {
    title: 'Aurora Loft',
    tag: 'Adaptive Reuse',
    colorFrom: 'from-amber-200',
    colorTo: 'to-rose-300',
  },
  {
    title: 'Courtyard Office',
    tag: 'Workspace',
    colorFrom: 'from-sky-200',
    colorTo: 'to-indigo-300',
  },
  {
    title: 'Sand Dune Spa',
    tag: 'Hospitality',
    colorFrom: 'from-stone-200',
    colorTo: 'to-amber-300',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative w-full bg-white py-20 text-zinc-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Selected Projects</h2>
            <p className="mt-2 text-zinc-600">A glimpse into our approach across typologies.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50 md:inline-block">
            Collaborate
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white"
            >
              <div className={`h-56 w-full bg-gradient-to-br ${p.colorFrom} ${p.colorTo}`} />
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-zinc-600">{p.tag}</p>
                </div>
                <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">View</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
