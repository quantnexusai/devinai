'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { BlogCategory } from '@/lib/types';

interface BlogCategoryFilterProps {
  categories: BlogCategory[];
  currentCategory?: string | null;
}

export function BlogCategoryFilter({ categories, currentCategory }: BlogCategoryFilterProps) {
  const searchParams = useSearchParams();
  const activeCategory = currentCategory || searchParams.get('category') || null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* All Tab */}
      <Link
        href="/blog"
        className={`relative px-4 py-2 font-sans text-sm transition-colors duration-300 ${
          !activeCategory
            ? 'text-gray-900'
            : 'text-gray-500 hover:text-gray-900'
        }`}
      >
        All
        {!activeCategory && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta" />
        )}
      </Link>

      {/* Category Tabs */}
      {categories.map((category) => {
        const isActive = activeCategory === category.slug;

        return (
          <Link
            key={category.id}
            href={`/blog/category/${category.slug}`}
            className={`relative px-4 py-2 font-sans text-sm transition-colors duration-300 ${
              isActive
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {category.name}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
