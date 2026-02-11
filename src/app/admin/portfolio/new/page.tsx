'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { supabase, isDemoMode } from '@/lib/supabase';
import { ArrowLeft, Save, Loader2, Plus, X } from 'lucide-react';

export default function NewPortfolioProjectPage() {
  const router = useRouter();
  const { isDemo } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    client_name: '',
    project_title: '',
    slug: '',
    industry: '',
    duration: '',
    challenge_title: '',
    challenge_description: '',
    solution_title: '',
    solution_description: '',
    testimonial: '',
    testimonial_author: '',
    testimonial_role: '',
    featured_image: '',
    published: false,
    featured: false,
    display_order: 0,
  });
  const [techStack, setTechStack] = useState<string[]>([]);
  const [newTech, setNewTech] = useState('');

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleClientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const client_name = e.target.value;
    setFormData((prev) => ({
      ...prev,
      client_name,
      slug: generateSlug(client_name),
    }));
  };

  const addTechStack = () => {
    if (newTech.trim() && !techStack.includes(newTech.trim())) {
      setTechStack([...techStack, newTech.trim()]);
      setNewTech('');
    }
  };

  const removeTech = (tech: string) => {
    setTechStack(techStack.filter((t) => t !== tech));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isDemoMode()) {
      setTimeout(() => {
        router.push('/admin/portfolio');
      }, 500);
      return;
    }

    try {
      const { error } = await supabase.from('portfolio_projects').insert({
        client_name: formData.client_name,
        project_title: formData.project_title,
        slug: formData.slug,
        industry: formData.industry || null,
        duration: formData.duration || null,
        challenge: {
          title: formData.challenge_title,
          description: formData.challenge_description,
          pain_points: [],
        },
        solution: {
          title: formData.solution_title,
          description: formData.solution_description,
          pillars: [],
        },
        outcomes: [],
        testimonial: formData.testimonial || null,
        testimonial_author: formData.testimonial_author || null,
        testimonial_role: formData.testimonial_role || null,
        tech_stack: techStack,
        featured_image: formData.featured_image || null,
        published: formData.published,
        featured: formData.featured,
        display_order: formData.display_order,
      });

      if (error) throw error;
      router.push('/admin/portfolio');
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/admin/portfolio"
          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">New Portfolio Project</h1>
          <p className="text-gray-600 mt-1">Add a new case study</p>
        </div>
      </div>

      {isDemo && (
        <div className="bg-terracotta/10 border border-terracotta/30 rounded-lg p-4 mb-6">
          <p className="text-gray-900 text-sm">
            <strong>Demo Mode:</strong> Project will not be saved. Connect Supabase for full functionality.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Client Name *
            </label>
            <input
              type="text"
              value={formData.client_name}
              onChange={handleClientChange}
              required
              className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900"
              placeholder="Acme Corp"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Slug
            </label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
              className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900"
              placeholder="acme-corp"
            />
          </div>
        </div>

        {/* Project Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Title *
          </label>
          <input
            type="text"
            value={formData.project_title}
            onChange={(e) => setFormData((prev) => ({ ...prev, project_title: e.target.value }))}
            required
            className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900"
            placeholder="E-commerce Platform Modernization"
          />
        </div>

        {/* Industry & Duration */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <input
              type="text"
              value={formData.industry}
              onChange={(e) => setFormData((prev) => ({ ...prev, industry: e.target.value }))}
              className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900"
              placeholder="E-commerce"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration
            </label>
            <input
              type="text"
              value={formData.duration}
              onChange={(e) => setFormData((prev) => ({ ...prev, duration: e.target.value }))}
              className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900"
              placeholder="3 months"
            />
          </div>
        </div>

        {/* Challenge Section */}
        <div className="pt-6 border-t border-sand">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">The Challenge</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Challenge Title
              </label>
              <input
                type="text"
                value={formData.challenge_title}
                onChange={(e) => setFormData((prev) => ({ ...prev, challenge_title: e.target.value }))}
                className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900"
                placeholder="Legacy System Modernization"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Challenge Description
              </label>
              <textarea
                value={formData.challenge_description}
                onChange={(e) => setFormData((prev) => ({ ...prev, challenge_description: e.target.value }))}
                rows={3}
                className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900 resize-none"
                placeholder="Describe the client's challenge..."
              />
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="pt-6 border-t border-sand">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">The Solution</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Solution Title
              </label>
              <input
                type="text"
                value={formData.solution_title}
                onChange={(e) => setFormData((prev) => ({ ...prev, solution_title: e.target.value }))}
                className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900"
                placeholder="Outcome Architecture Implementation"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Solution Description
              </label>
              <textarea
                value={formData.solution_description}
                onChange={(e) => setFormData((prev) => ({ ...prev, solution_description: e.target.value }))}
                rows={3}
                className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900 resize-none"
                placeholder="Describe the solution approach..."
              />
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pt-6 border-t border-sand">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tech Stack</h3>
          <div className="flex items-center gap-2 mb-3">
            <input
              type="text"
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechStack())}
              className="flex-1 px-4 py-2 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900"
              placeholder="Add technology..."
            />
            <button
              type="button"
              onClick={addTechStack}
              className="p-2 bg-sand text-gray-700 rounded-lg hover:bg-taupe transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-3 py-1 bg-terracotta/10 text-terracotta rounded-full text-sm"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => removeTech(tech)}
                  className="hover:text-red-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="pt-6 border-t border-sand">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Testimonial</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quote
              </label>
              <textarea
                value={formData.testimonial}
                onChange={(e) => setFormData((prev) => ({ ...prev, testimonial: e.target.value }))}
                rows={3}
                className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900 resize-none"
                placeholder="Client testimonial quote..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author Name
                </label>
                <input
                  type="text"
                  value={formData.testimonial_author}
                  onChange={(e) => setFormData((prev) => ({ ...prev, testimonial_author: e.target.value }))}
                  className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author Role
                </label>
                <input
                  type="text"
                  value={formData.testimonial_role}
                  onChange={(e) => setFormData((prev) => ({ ...prev, testimonial_role: e.target.value }))}
                  className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900"
                  placeholder="CTO"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Featured Image URL
          </label>
          <input
            type="url"
            value={formData.featured_image}
            onChange={(e) => setFormData((prev) => ({ ...prev, featured_image: e.target.value }))}
            className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Display Order */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Display Order
          </label>
          <input
            type="number"
            value={formData.display_order}
            onChange={(e) => setFormData((prev) => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
            min={0}
            className="w-full px-4 py-3 border border-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta text-gray-900"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.published}
              onChange={(e) => setFormData((prev) => ({ ...prev, published: e.target.checked }))}
              className="w-4 h-4 text-terracotta border-sand rounded focus:ring-terracotta"
            />
            <span className="text-sm text-gray-700">Published</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData((prev) => ({ ...prev, featured: e.target.checked }))}
              className="w-4 h-4 text-terracotta border-sand rounded focus:ring-terracotta"
            />
            <span className="text-sm text-gray-700">Featured</span>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 pt-6 border-t border-sand">
          <Link
            href="/admin/portfolio"
            className="px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 bg-terracotta text-white rounded-lg hover:bg-terracotta/90 transition-colors disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Create Project
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
