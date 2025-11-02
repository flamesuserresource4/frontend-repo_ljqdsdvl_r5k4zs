import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('Spline failed to load:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-gradient-to-b from-zinc-900 via-zinc-800 to-black" />
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <ErrorBoundary>
        <div className="absolute inset-0 z-0">
          <Spline
            scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </ErrorBoundary>

      {/* Soft gradient overlay that does not block pointer events */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket size={16} className="text-white/80" />
          <span className="text-xs font-medium tracking-wide text-white/80">Latif Studio · Interior Design</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Spaces that feel like art,
          <br className="hidden sm:block" /> crafted for how you live
        </h1>

        <p className="mt-4 max-w-2xl text-balance text-white/80 md:text-lg">
          We blend materiality, light, and function to shape poetic interiors—calm, minimal, and undeniably yours.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90"
          >
            View work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white/90 transition hover:bg-white/10"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
