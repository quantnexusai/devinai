'use client';

import { Header, Footer } from '@/components/shared';
import { Users, Target, Award, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Outcome-Focused',
    description: 'We measure success by business results, not just code delivered. Every decision maps to your growth objectives.',
  },
  {
    icon: Zap,
    title: 'Velocity Without Debt',
    description: 'Speed matters, but not at the cost of stability. We build systems that accelerate without accumulating technical burden.',
  },
  {
    icon: Users,
    title: 'Partnership Over Projects',
    description: 'We invest in understanding your business deeply. Our best work comes from long-term partnerships, not quick engagements.',
  },
  {
    icon: Award,
    title: 'Predictable Excellence',
    description: 'No surprises, no drama. Clear communication, realistic timelines, and consistent delivery you can count on.',
  },
];

const expertise = [
  'Full-Stack Development (React, Next.js, Node.js)',
  'AI/LLM Integration (Claude, GPT-4, Custom Models)',
  'Cloud Architecture (AWS, GCP, Vercel)',
  'Database Design (PostgreSQL, Supabase)',
  'DevOps & CI/CD Automation',
  'Legacy System Modernization',
  'Performance Optimization',
  'Security Best Practices',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h1 className="text-display-1 font-serif text-gray-900 mb-6">
                Building Software That Grows With You
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                DevinAI is a software development consultancy focused on helping ambitious
                businesses build technology that scales predictably. We combine deep technical
                expertise with a relentless focus on business outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-display-2 font-serif text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    After years of watching talented teams struggle with technology decisions
                    that seemed right at the time but became liabilities later, we set out to
                    do things differently.
                  </p>
                  <p>
                    The problem wasn&apos;t usually the technology itself—it was the approach.
                    Teams were building for today&apos;s requirements without architecting for
                    tomorrow&apos;s growth.
                  </p>
                  <p>
                    DevinAI was founded on a simple premise: <strong className="text-gray-900">
                    software development should be predictable</strong>. Not in a rigid,
                    waterfall way, but in the sense that you should be able to trust your
                    technology foundation to support your ambitions.
                  </p>
                  <p>
                    Today, we help companies ranging from funded startups to established
                    enterprises build systems that scale without drama. Our Outcome Architecture
                    approach has helped clients reduce development costs, accelerate feature
                    delivery, and finally escape the cycle of constant firefighting.
                  </p>
                </div>
              </div>
              <div className="bg-sand rounded-2xl p-8 lg:p-12">
                <h3 className="text-display-3 font-serif text-gray-900 mb-6">
                  What We Believe
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Good architecture pays dividends for years
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      AI should augment human expertise, not replace judgment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      The best code is the code you don&apos;t have to maintain
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Transparency builds trust; trust enables great work
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Simple solutions beat clever ones every time
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-display-2 font-serif text-gray-900 text-center mb-12">
              How We Work
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-terracotta/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-terracotta" />
                  </div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-display-2 font-serif text-gray-900 mb-6">
                  Technical Expertise
                </h2>
                <p className="text-gray-600 mb-8">
                  Our team brings deep experience across the modern technology stack, with
                  particular strength in building scalable, maintainable systems that
                  integrate AI capabilities thoughtfully.
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  {expertise.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-cream rounded-2xl p-8 lg:p-12">
                <h3 className="text-display-3 font-serif text-gray-900 mb-6">
                  The Stack We Trust
                </h3>
                <p className="text-gray-600 mb-6">
                  We&apos;ve standardized on a powerful, proven technology stack that balances
                  developer productivity with production reliability:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-sand">
                    <h4 className="font-medium text-gray-900 mb-1">Frontend</h4>
                    <p className="text-sm text-gray-600">Next.js, React, TypeScript, Tailwind CSS</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-sand">
                    <h4 className="font-medium text-gray-900 mb-1">Backend & Data</h4>
                    <p className="text-sm text-gray-600">Supabase, PostgreSQL, Edge Functions</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-sand">
                    <h4 className="font-medium text-gray-900 mb-1">AI Integration</h4>
                    <p className="text-sm text-gray-600">Claude API, Custom LLM Pipelines, RAG Systems</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-sand">
                    <h4 className="font-medium text-gray-900 mb-1">Infrastructure</h4>
                    <p className="text-sm text-gray-600">Vercel, AWS, GitHub Actions, Monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-terracotta">
          <div className="container-wide text-center">
            <h2 className="text-display-2 font-serif text-white mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s talk about your project and see if we&apos;re the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/system-audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-terracotta font-semibold rounded-lg hover:bg-cream transition-colors duration-200"
              >
                Request a System Audit
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/50 hover:border-white hover:bg-white/10 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
