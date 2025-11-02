import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';

const testimonials = [
  {
    name: 'Amira K.',
    role: 'Homeowner',
    quote:
      'Every decision felt considered. The result is calm, warm, and perfectly suited to our routines.',
  },
  {
    name: 'Studio VARA',
    role: 'Collaborator',
    quote:
      'Latif brings a rare balance of rigor and empathy—elevating details while honoring the big picture.',
  },
];

export default function TestimonialsContact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Testimonials */}
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Voices</h2>
            <div className="mt-6 space-y-4">
              {testimonials.map((t) => (
                <blockquote key={t.name} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <div className="mb-2 flex items-center gap-1 text-amber-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-zinc-800">“{t.quote}”</p>
                  <footer className="mt-2 text-sm text-zinc-600">{t.name} · {t.role}</footer>
                </blockquote>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Start a project</h2>
            <p className="mt-2 text-zinc-600">Tell us about your space. We typically reply within 1–2 business days.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-zinc-700">Name</label>
                <input required className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none ring-0 focus:border-zinc-400" placeholder="Your full name" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-zinc-700">Email</label>
                <input type="email" required className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none ring-0 focus:border-zinc-400" placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-zinc-700">Project details</label>
                <textarea rows={5} required className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none ring-0 focus:border-zinc-400" placeholder="Scope, location, timeline, budget..." />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-black/90">
                Send inquiry <Send size={18} />
              </button>
              {submitted && (
                <p className="text-sm text-emerald-600">Thanks! Your message was captured locally for this demo.</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Latif Studio. All rights reserved.
        </div>
      </div>
    </section>
  );
}
