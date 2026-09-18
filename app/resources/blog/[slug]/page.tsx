import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { createMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return createMetadata({
      title: "Article Not Found",
      description: "The requested healthcare article could not be found.",
    });
  }

  return createMetadata({
    title: `${post.title} | Medsky Resources`,
    description: post.excerpt,
    path: `/resources/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-20 space-y-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/blog" className="hover:text-teal-600 transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-teal-600 font-semibold truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Header */}
        <div className="space-y-4">
          <Badge variant="teal" size="md">
            {post.category}
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-y border-slate-100 dark:border-slate-800 py-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 font-bold flex items-center justify-center text-xs">
                {post.author.name[0]}
              </div>
              <span className="font-semibold text-slate-900 dark:text-slate-100">{post.author.name}</span>
              <span className="text-slate-400">• {post.author.role}</span>
            </div>
            <div className="flex items-center gap-1.5 ml-auto">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Lead Excerpt */}
        <div className="p-6 rounded-2xl bg-teal-50/60 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800 text-teal-950 dark:text-teal-100 text-base leading-relaxed font-medium">
          {post.excerpt}
        </div>

        {/* Main Content Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pt-4">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 mr-2">Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Back Link */}
        <div className="pt-4">
          <Button variant="outline" size="md" href="/resources/blog" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Back to All Articles
          </Button>
        </div>
      </article>

      <CTASection />
    </div>
  );
}
