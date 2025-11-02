import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Pinterest, Star, Download, Send } from 'lucide-react';

const testimonials = [
  {
    name: 'Rasha A.',
    role: 'Residential Client',
    text: 'Every corner feels intentional. The palette is poetic yet practical.',
    hue: 'from-rose-200 to-amber-200'
  },
  {
    name: 'Omar K.',
    role: 'Office Fit-out',
    text: 'They choreographed light for focus and calm—beautifully executed.',
    hue: 'from-emerald-200 to-teal-200'
  },
  {
    name: 'Mina L.',
    role: 'Hospitality',
    text: 'Materials selection was visionary—durable, tactile, and cohesive.',
    hue: 'from-sky-200 to-violet-200'
  }
];

const materials = [
  { name: 'Oiled Walnut', tone: 'from-amber-700 to-amber-500' },
  { name: 'Calacatta Marble', tone: 'from-slate-100 to-slate-200' },
  { name: 'Tadelakt', tone: 'from-stone-300 to-stone-200' },
  { name: 'Linen Weave', tone: 'from-zinc-200 to-zinc-100' },
  { name: 'Brushed Brass', tone: 'from-yellow-400 to-amber-300' },
  { name: 'Patinated Bronze', tone: 'from-amber-900 to-stone-700' },
];

export default function TestimonialsContact() {
  const [fileName, setFileName] = useState('');

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-rose-50 to-amber-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Voices & Materials</h2>
            <p className="mt-2 max-w-prose text-slate-700">What clients feel—and the materials we love to compose with.</p>

            <div className="mt-8 grid gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className={`h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gradient-to-br ${t.hue} shadow`}></div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">{t.name}</div>
                      <span className="text-xs text-slate-500">• {t.role}</span>
                      <div className="ml-auto flex items-center text-amber-500">
                        <Star className="h-4 w-4 fill-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500" />
                        <Star className="h-4 w-4 fill-amber-500" />
                      </div>
                    </div>
                    <p className="mt-2 text-slate-700">{t.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="font-semibold">Materials Board</h3>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {materials.map((m, i) => (
                  <motion.div
                    key={m.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.05 }}
                    className={`group relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${m.tone} p-3 shadow-sm`}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 6px)' }} />
                    <div className="absolute bottom-3 left-3 right-3 rounded-md bg-white/80 px-2 py-1 text-xs font-medium text-slate-800 backdrop-blur">
                      {m.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div id="contact" className="">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <h3 className="font-display text-2xl">Start Your Project</h3>
              <p className="mt-1 text-sm text-slate-600">Tell us about your space, mood, and desired timeline.</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! We\'ll be in touch shortly.');
                }}
                className="mt-6 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm text-slate-600">Name</label>
                    <input required type="text" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-rose-200 focus:ring" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Email</label>
                    <input required type="email" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-rose-200 focus:ring" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-slate-600">Project Ideas</label>
                  <textarea required rows={5} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-rose-200 focus:ring" placeholder="Tell us about the space, style, and budget..." />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Upload Brief or Moodboard</label>
                  <div className="mt-1 flex items-center gap-3">
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-rose-50 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-rose-100">
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                      />
                      <Download className="h-4 w-4" /> Choose file
                    </label>
                    <span className="text-xs text-slate-500">{fileName || 'PDF, JPG, PNG (max 10MB)'}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button type="submit" className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800">
                    <Send className="mr-2 h-4 w-4" /> Send Request
                  </button>
                  <button type="button" onClick={() => window.print()} className="text-sm underline underline-offset-4">Download Portfolio PDF</button>
                </div>
              </form>
            </div>

            <div className="mt-10 flex items-center justify-between rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-rose-50 p-5">
              <div>
                <div className="text-sm text-slate-600">Follow our process</div>
                <div className="font-semibold">Instagram & Pinterest</div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 px-4 py-2 text-white shadow hover:opacity-90"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-400 to-amber-400 px-4 py-2 text-white shadow hover:opacity-90"
                >
                  <Pinterest className="h-4 w-4" /> Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row">
          <div>© {new Date().getFullYear()} Latif Studio • Abu Dhabi</div>
          <div className="flex gap-6">
            <a href="#gallery" className="hover:text-slate-900">Gallery</a>
            <a href="#philosophy" className="hover:text-slate-900">Philosophy</a>
            <a href="#contact" className="hover:text-slate-900">Start Your Project</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
