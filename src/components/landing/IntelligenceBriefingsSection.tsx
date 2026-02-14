'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { demoBlogPosts } from '@/lib/demo-data';
import { formatShortDate } from '@/lib/utils';

export function IntelligenceBriefingsSection() {
  const latestPosts = demoBlogPosts.slice(0, 3);

  return (
    <section className="relative bg-cream py-24 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(208, 184, 168, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(208, 184, 168, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <span className="text-terracotta text-sm font-mono uppercase tracking-wider">
                Insights & Analysis
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                Intelligence Briefings
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Strategic insights on software architecture, scaling patterns,
                and outcome-focused development.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden lg:inline-flex items-center text-terracotta hover:text-terracotta-500 transition-colors duration-200 font-medium mt-6 lg:mt-0"
            >
              View All Insights
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {latestPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 150} duration={800}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full"
              >
                <article className="relative bg-white border border-sand rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-taupe hover:shadow-warm">
                  {/* Cover Image Placeholder */}
                  <div className="relative h-48 bg-sand/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-terracotta/10 to-taupe/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-taupe/40 font-serif text-4xl font-bold">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-terracotta text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full">
                        {post.category?.name || 'Insights'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow p-6 lg:p-8 flex flex-col">
                    {/* Title */}
                    <h3 className="text-lg lg:text-xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-terracotta transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="mt-6 pt-4 border-t border-sand flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        {post.published_at ? formatShortDate(post.published_at) : 'Draft'}
                      </span>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.reading_time} min read
                      </div>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-500" />
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile View All Link */}
        <ScrollReveal delay={600}>
          <div className="mt-12 text-center lg:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center text-terracotta hover:text-terracotta-500 transition-colors duration-200 font-medium"
            >
              View All Insights
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
