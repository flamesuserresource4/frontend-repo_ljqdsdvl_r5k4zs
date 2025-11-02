import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-rose-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center gap-8 px-6 py-24 md:py-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs md:text-sm backdrop-blur-md"
        >
          Abu Dhabi • Contemporary Interiors • Storytelling Through Space
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl leading-tight md:text-6xl lg:text-7xl"
        >
          Latif Studio
          <br />
          <span className="bg-gradient-to-r from-rose-300 via-amber-200 to-emerald-200 bg-clip-text text-transparent">
            Interior Design & Material Poetry
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl text-base text-slate-200 md:text-lg"
        >
          We compose immersive environments where light, texture, and form converge. From homes to workplaces, our spaces speak with warmth, clarity, and craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center rounded-full bg-white/90 px-6 py-3 text-slate-900 shadow-lg transition hover:bg-white"
          >
            Start Your Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/20"
            aria-label="Download portfolio as PDF"
          >
            Download Portfolio PDF
          </button>
        </motion.div>
      </div>
    </section>
  );
}
