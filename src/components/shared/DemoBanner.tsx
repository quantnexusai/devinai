'use client';

import { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';
import { isDemoMode } from '@/lib/supabase';

export function DemoBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if we're in demo mode and banner hasn't been dismissed
    const isDemo = isDemoMode();
    const wasDismissed = sessionStorage.getItem('demo-banner-dismissed') === 'true';

    if (isDemo && !wasDismissed) {
      setVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('demo-banner-dismissed', 'true');

    // Animate out before hiding
    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        dismissed ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="py-3 px-4 bg-terracotta text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 flex-shrink-0 text-white" />
            <p className="text-sm font-medium">
              Running in demo mode &mdash; configure API keys for production functionality.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/quantnexusai/devinai#configuration"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-2 hover:no-underline hidden sm:inline text-white"
            >
              Setup Guide
            </a>

            <button
              onClick={handleDismiss}
              className="p-1.5 rounded-md transition-colors duration-200 hover:bg-white/20"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
