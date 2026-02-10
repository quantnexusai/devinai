'use client';

import { useState } from 'react';
import { Filter } from 'lucide-react';

interface IndustryFilterProps {
  industries: string[];
  activeIndustry: string | null;
  onFilterChange: (industry: string | null) => void;
  className?: string;
}

export function IndustryFilter({
  industries,
  activeIndustry,
  onFilterChange,
  className = '',
}: IndustryFilterProps) {
  return (
    <div className={`flex items-center gap-2 flex-wrap ${className}`}>
      {/* Filter Icon */}
      <div className="flex items-center gap-2 pr-4 border-r border-sand mr-2">
        <Filter className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-sans text-gray-500">Filter:</span>
      </div>

      {/* All Filter */}
      <button
        onClick={() => onFilterChange(null)}
        className={`
          px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all duration-200
          ${
            activeIndustry === null
              ? 'bg-terracotta text-white'
              : 'bg-white text-gray-600 hover:bg-sand/50 hover:text-gray-900 border border-sand'
          }
        `}
      >
        All Projects
      </button>

      {/* Industry Filters */}
      {industries.map((industry) => (
        <button
          key={industry}
          onClick={() => onFilterChange(industry)}
          className={`
            px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all duration-200
            ${
              activeIndustry === industry
                ? 'bg-terracotta text-white'
                : 'bg-white text-gray-600 hover:bg-sand/50 hover:text-gray-900 border border-sand'
            }
          `}
        >
          {industry}
        </button>
      ))}
    </div>
  );
}
