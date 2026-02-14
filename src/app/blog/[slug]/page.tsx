import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { TipTapRenderer } from '@/components/blog/TipTapRenderer';
import { BlogCard } from '@/components/blog/BlogCard';
import { NewsletterCTA } from '@/components/blog/NewsletterCTA';
import { demoBlogPosts } from '@/lib/demo-data';
import { formatShortDate } from '@/lib/utils';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return demoBlogPosts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slug,
    }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = demoBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | DevinAI',
    };
  }

  return {
    title: post.seo_title || `${post.title} | DevinAI`,
    description: post.seo_description || post.excerpt || '',
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt || '',
      type: 'article',
      publishedTime: post.published_at || undefined,
      authors: post.author?.full_name ? [post.author.full_name] : undefined,
      images: post.cover_image ? [post.cover_image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = demoBlogPosts.find((p) => p.slug === slug && p.published);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, different post)
  const relatedPosts = demoBlogPosts
    .filter((p) => p.published && p.id !== post.id && p.category_id === post.category_id)
    .slice(0, 2);

  // If not enough related posts in same category, get other recent posts
  if (relatedPosts.length < 2) {
    const otherPosts = demoBlogPosts
      .filter((p) => p.published && p.id !== post.id && !relatedPosts.find((rp) => rp.id === p.id))
      .slice(0, 2 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  // const author = post.author || demoProfile;

  return (
    <div className="min-h-screen bg-midnight">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 lg:pt-40">
        {/* Back Link */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cloud/60 hover:text-boardroom transition-colors duration-300 font-sans text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Intelligence Briefings
          </Link>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Badge */}
          {post.category && (
            <Link
              href={`/blog/category/${post.category.slug}`}
              className="inline-block px-3 py-1 bg-boardroom text-midnight text-sm font-sans font-medium rounded mb-6 hover:bg-boardroom-400 transition-colors duration-300"
            >
              {post.category.name}
            </Link>
          )}

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cloud mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-cloud/60 font-sans text-sm mb-8">
            {/* Date */}
            {post.published_at && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatShortDate(post.published_at)}</span>
              </div>
            )}

            {/* Reading Time */}
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.reading_time} min read</span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        {post.cover_image && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <article className="max-w-3xl">
            <TipTapRenderer content={post.content} />
          </article>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <NewsletterCTA />
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 border-t border-cloud/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl lg:text-3xl text-cloud mb-8">
              Continue Reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
