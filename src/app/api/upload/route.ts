import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin, isDemoMode } from '@/lib/supabase';

const ALLOWED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'application/pdf',
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const bucket = (formData.get('bucket') as string) || 'uploads';
    const folder = (formData.get('folder') as string) || '';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'File type not allowed. Allowed types: JPEG, PNG, GIF, WebP, PDF' },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File too large. Maximum size: 10MB' },
        { status: 400 }
      );
    }

    // Demo mode: return placeholder URL
    if (isDemoMode()) {
      const extension = file.name.split('.').pop() || 'jpg';
      const placeholderUrl = file.type.startsWith('image/')
        ? `https://placehold.co/800x600/03045E/00B4D8?text=${encodeURIComponent(file.name)}`
        : `/uploads/demo-${Date.now()}.${extension}`;

      return NextResponse.json({
        success: true,
        url: placeholderUrl,
        filename: file.name,
        size: file.size,
        type: file.type,
        message: 'File uploaded (demo mode)',
      });
    }

    // Production mode: upload to Supabase Storage
    if (!supabaseAdmin) {
      console.error('Upload error: SUPABASE_SECRET_KEY not configured');
      return NextResponse.json(
        { error: 'Storage not configured. Please set SUPABASE_SECRET_KEY.' },
        { status: 500 }
      );
    }

    const fileBuffer = await file.arrayBuffer();
    const timestamp = Date.now();
    const sanitizedName = file.name
      .replace(/[^a-zA-Z0-9.-]/g, '-')
      .toLowerCase();
    const filePath = folder
      ? `${folder}/${timestamp}-${sanitizedName}`
      : `${timestamp}-${sanitizedName}`;

    const { data, error } = await supabaseAdmin.storage
      .from(bucket)
      .upload(filePath, fileBuffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('Upload error:', error);
      return NextResponse.json(
        { error: `Upload failed: ${error.message}` },
        { status: 500 }
      );
    }

    // Get public URL
    const { data: urlData } = supabaseAdmin.storage
      .from(bucket)
      .getPublicUrl(data.path);

    return NextResponse.json({
      success: true,
      url: urlData.publicUrl,
      path: data.path,
      filename: file.name,
      size: file.size,
      type: file.type,
    });
  } catch (error) {
    console.error('Upload API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
