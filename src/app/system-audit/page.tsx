import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { SystemAuditForm } from '@/components/lead-gen/SystemAuditForm';

export const metadata = {
  title: 'System Audit | DevinAI',
  description: 'Request a comprehensive system audit from DevinAI. We analyze your technology stack, identify bottlenecks, and deliver a roadmap for predictable software growth.',
};

export default function SystemAuditPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 border-b border-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-terracotta font-mono text-sm tracking-wider uppercase mb-4">
                Strategic Assessment
              </p>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
                Request Your System Audit
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                A comprehensive analysis of your technology stack, processes, and architecture.
                We identify the bottlenecks holding you back and deliver a clear roadmap
                for predictable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white border border-sand rounded-2xl p-8 lg:p-12 shadow-warm">
                <SystemAuditForm />
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 lg:py-24 border-t border-sand bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
                What to Expect
              </h2>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center">
                    <span className="text-terracotta font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">Initial Review</h3>
                    <p className="text-gray-600 text-sm">
                      We review your submission within 2 business days and reach out to
                      schedule a discovery call.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center">
                    <span className="text-terracotta font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">Discovery Session</h3>
                    <p className="text-gray-600 text-sm">
                      A 60-minute deep-dive into your current systems, challenges, and goals.
                      We come prepared with initial observations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center">
                    <span className="text-terracotta font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-1">Audit Report</h3>
                    <p className="text-gray-600 text-sm">
                      A comprehensive report with findings, prioritized recommendations, and
                      a clear roadmap for achieving your desired outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
