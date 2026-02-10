'use client';

import { Zap, Layers, Shield } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Frictionless Velocity Engine',
    outcome: 'Ship 3x faster without debt',
    description:
      'Automated CI/CD pipelines, feature flags, and staged rollouts that eliminate production incidents while accelerating feature delivery.',
  },
  {
    icon: Layers,
    title: 'Sovereign Stack Foundation',
    outcome: 'Tech that scales predictably',
    description:
      'Modern, type-safe architecture with Next.js, Supabase, and Vercel. Built for 100x growth without replatforming surprises.',
  },
  {
    icon: Shield,
    title: 'Continuous Certainty Protocol',
    outcome: 'Crystal-clear visibility',
    description:
      'Comprehensive monitoring, automated testing, and real-time performance dashboards. Know exactly what\'s happening, always.',
  },
];

export function ThreePillarsSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-terracotta text-sm font-mono uppercase tracking-wider">
            Our Methodology
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
            The 3-Pillar System Architecture
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Every engagement is built on three interlocking pillars that ensure
            predictable outcomes, not just deliverables.
          </p>
        </div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-cream rounded-2xl p-8 border border-sand hover:border-taupe transition-all duration-200 hover:shadow-warm group"
            >
              {/* Number + Icon */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-mono text-terracotta/30 font-bold">
                  0{index + 1}
                </span>
                <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors">
                  <pillar.icon className="w-6 h-6 text-terracotta" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif text-gray-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-terracotta font-medium text-sm mb-4">
                {pillar.outcome}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom connector line */}
        <div className="mt-16 lg:mt-20 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="w-16 lg:w-24 h-px bg-gradient-to-r from-transparent to-taupe" />
            <span className="text-gray-400 text-sm font-mono">Integrated System</span>
            <div className="w-16 lg:w-24 h-px bg-gradient-to-l from-transparent to-taupe" />
          </div>
        </div>
      </div>
    </section>
  );
}
