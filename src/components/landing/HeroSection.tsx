'use client';

import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D0B8A8 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center bg-white border border-sand rounded-full px-4 py-1.5 mb-8 shadow-warm-sm">
            <span className="text-terracotta text-sm font-mono tracking-wider uppercase">
              Outcome Architecture Agency
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-gray-900 leading-tight mb-8">
            Your Software,{' '}
            <span className="relative">
              <span className="relative z-10 text-terracotta">Engineered</span>
            </span>{' '}
            for Predictable Growth.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
            We don&apos;t just build applications&mdash;we install reliable growth systems
            that scale without drama.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/system-audit"
              className="group bg-terracotta hover:bg-terracotta-500 text-white px-8 py-4 rounded-lg text-base font-medium transition-all duration-200 shadow-warm hover:shadow-warm-lg flex items-center"
            >
              Request System Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group border border-taupe hover:border-terracotta text-gray-700 hover:text-terracotta px-8 py-4 rounded-lg text-base font-medium transition-all duration-200 flex items-center"
            >
              View Case Studies
              <ArrowRight className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-20 pt-12 border-t border-sand">
            <p className="text-gray-400 text-sm font-mono uppercase tracking-wider mb-6">
              Templates Built for Growth-Stage Companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-gray-500">
              <span className="font-serif text-lg">Markey</span>
              <span className="font-serif text-lg">AI Groceries</span>
              <span className="font-serif text-lg">VC Phi</span>
              <span className="font-serif text-lg">Biglabs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-taupe" />
      </div>
    </section>
  );
}
