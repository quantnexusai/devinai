'use client';

import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: number | string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    direction: 'up' | 'down';
  };
  suffix?: string;
}

export function StatsCard({ label, value, icon: Icon, trend, suffix }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-sand">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
            {label}
          </p>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-3xl font-bold text-terracotta font-mono tabular-nums">
              {typeof value === 'number' ? value.toLocaleString() : value}
            </span>
            {suffix && (
              <span className="text-sm text-gray-600">{suffix}</span>
            )}
          </div>
          {trend && (
            <div className="mt-2 flex items-center gap-1">
              {trend.direction === 'up' ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <span
                className={`text-sm font-medium ${
                  trend.direction === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {trend.value}%
              </span>
              <span className="text-xs text-gray-500">vs last week</span>
            </div>
          )}
        </div>
        {Icon && (
          <div className="w-12 h-12 bg-sand rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-gray-700" />
          </div>
        )}
      </div>
    </div>
  );
}
