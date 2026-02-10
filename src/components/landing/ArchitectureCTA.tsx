'use client';

import Link from 'next/link';
import { ArrowRight, Target, Route, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Growth Gap Analysis',
    description: 'Identify the friction points limiting your growth trajectory',
  },
  {
    icon: Route,
    title: 'Stack Optimization Roadmap',
    description: 'Clear, prioritized plan to modernize your architecture',
  },
  {
    icon: TrendingUp,
    title: '12-Month Outcome Projection',
    description: 'Concrete metrics forecast based on our methodology',
  },
];

export function ArchitectureCTA() {
  return (
    <section className="relative bg-terracotta py-24 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <span className="text-white/80 text-sm font-mono uppercase tracking-wider">
                Start Here
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Request a System Architecture Audit
              </h2>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                A comprehensive analysis of your current stack, growth blockers,
                and a clear roadmap to predictable scaling. No commitment required.
              </p>

              <Link
                href="/system-audit"
                className="group inline-flex items-center bg-white hover:bg-cream text-terracotta px-8 py-4 rounded-lg text-base font-medium transition-all duration-200 shadow-warm-lg mt-8"
              >
                Request Your Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="mt-4 text-white/60 text-sm">
                Free consultation. Response within 24 hours.
              </p>
            </div>

            {/* Right Column - Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
