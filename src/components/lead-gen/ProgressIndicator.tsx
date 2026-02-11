'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: number;
  label: string;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
  return (
    <nav aria-label="Progress" className="mb-10">
      <ol className="flex items-center justify-between relative">
        {/* Background connector line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-sand" style={{ left: '2.5rem', right: '2.5rem' }} />

        {/* Progress connector line */}
        <div
          className="absolute top-5 h-0.5 bg-terracotta transition-all duration-500"
          style={{
            left: '2.5rem',
            width: `calc(${((currentStep - 1) / (steps.length - 1)) * 100}% - 5rem)`
          }}
        />

        {steps.map((step) => (
          <li key={step.id} className="relative flex flex-col items-center z-10">
            {step.id < currentStep ? (
              // Completed step
              <div className="flex flex-col items-center">
                <span className="h-10 w-10 rounded-full bg-terracotta flex items-center justify-center shadow-warm">
                  <Check className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <span className="mt-2 text-xs sm:text-sm font-medium text-terracotta text-center">
                  {step.label}
                </span>
              </div>
            ) : step.id === currentStep ? (
              // Current step
              <div className="flex flex-col items-center" aria-current="step">
                <span className="relative flex h-10 w-10 items-center justify-center">
                  <span className="absolute h-14 w-14 rounded-full bg-terracotta/20 animate-pulse" />
                  <span className="relative h-10 w-10 rounded-full bg-terracotta flex items-center justify-center shadow-warm">
                    <span className="text-white font-semibold">{step.id}</span>
                  </span>
                </span>
                <span className="mt-2 text-xs sm:text-sm font-medium text-gray-900 text-center">
                  {step.label}
                </span>
              </div>
            ) : (
              // Upcoming step
              <div className="flex flex-col items-center">
                <span className="h-10 w-10 rounded-full border-2 border-sand bg-white flex items-center justify-center">
                  <span className="text-gray-400 font-medium">{step.id}</span>
                </span>
                <span className="mt-2 text-xs sm:text-sm font-medium text-gray-400 text-center">
                  {step.label}
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
