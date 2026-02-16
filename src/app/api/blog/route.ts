import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin, supabase, isDemoMode } from '@/lib/supabase';
import { markdownToTipTap } from '@/lib/markdown-to-tiptap';

export async function POST(request: NextRequest) {
  try {
    // Demo mode - just return success
    if (isDemoMode()) {
      return NextResponse.json({ success: true, message: 'Demo mode' });
    }

    // Check auth
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (!profile || profile.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Server not configured. SUPABASE_SECRET_KEY required.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const {
      title,
      slug,
      excerpt,
      content,
      category_id,
      reading_time,
      published,
      featured,
      cover_image,
      seo_title,
      seo_description,
    } = body;

    // Convert markdown to TipTap JSON
    const tipTapContent = markdownToTipTap(content || '');

    const { data, error } = await supabaseAdmin.from('blog_posts').insert({
      title,
      slug,
      excerpt: excerpt || null,
      content: tipTapContent,
      category_id: category_id || null,
      reading_time: reading_time || 5,
      published: published || false,
      featured: featured || false,
      cover_image: cover_image || null,
      seo_title: seo_title || title,
      seo_description: seo_description || excerpt,
      author_id: session.user.id,
      published_at: published ? new Date().toISOString() : null,
    }).select().single();

    if (error) {
      console.error('Blog insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Blog API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
