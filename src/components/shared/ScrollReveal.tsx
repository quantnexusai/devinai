'use client';

import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  distance?: number;
  once?: boolean;
}

// Simplified ScrollReveal - renders immediately without animation delay
export function ScrollReveal({
  children,
  className = '',
}: ScrollRevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

// Stagger container - renders immediately
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = '',
}: StaggerContainerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

// Stagger item - renders immediately
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
