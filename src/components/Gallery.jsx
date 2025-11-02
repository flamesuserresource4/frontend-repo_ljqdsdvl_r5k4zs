import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Desert Light Living Room',
    category: 'Residential',
    desc: 'Soft plaster, oak, and linen with sculptural lighting.',
    color: 'from-rose-200 to-orange-200',
  },
  {
    title: 'Palm Court Kitchen',
    category: 'Residential',
    desc: 'Calacatta stone, matte graphite, and warm brass details.',
    color: 'from-amber-200 to-lime-200',
  },
  {
    title: 'Boutique Workspace',
    category: 'Commercial',
    desc: 'Muted concrete, acoustic timber fins, and greenery.',
    color: 'from-sky-200 to-violet-200',
  },
  {
    title: 'Majlis Renewal',
    category: 'Residential',
    desc: 'Hand-tufted rugs and clay textures meet modern silhouettes.',
    color: 'from-emerald-200 to-teal-200',
  },
  {
    title: 'Studio Atelier Office',
    category: 'Commercial',
    desc: 'Modular storage and daylight choreography for focus.',
    color: 'from-fuchsia-200 to-rose-200',
  },
  {
    title: 'Courtyard Dining',
    category: 'Residential',
    desc: 'Tadelakt walls, oiled walnut, and bronze accents.',
    color: 'from-indigo-200 to-cyan-200',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Selected Works</h2>
          <p className="mt-2 text-slate-600">A glimpse into living rooms, kitchens, and offices we've shaped.</p>
        </div>
      </div>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]"></div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className={`relative h-56 w-full bg-gradient-to-tr ${p.color}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.35),transparent_40%)] mix-blend-overlay" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30" style={{ backgroundImage: 'url(data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 10 10\'><path d=\'M0 5 L10 0 L10 10 Z\' fill=\'%23ffffff\' opacity=\'0.2\'/></svg>)', backgroundSize: '20px 20px' }} />
            </div>
            <div className="p-5">
              <div className="mb-2 text-xs uppercase tracking-wider text-slate-500">{p.category}</div>
              <h3 className="font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
