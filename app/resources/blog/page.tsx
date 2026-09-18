import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Card } from "@/ui/Card";
import { Badge } from "@/ui/Badge";
import { BLOG_POSTS } from "@/data/blogs";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Healthcare Blog & Insights | Medsky HMS",
  description:
    "Read articles on hospital operations, electronic medical records, pharmacy inventory management, and laboratory automation.",
  path: "/resources/blog",
});

export default function BlogIndexPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SectionHeader
        badge="Healthcare Blog"
        title="Articles & Hospital Management"
        titleHighlight="Insights."
        description="Practical strategies for healthcare administrators, doctors, and clinical IT leaders."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post) => (
          <Card key={post.slug} className="p-8 flex flex-col justify-between" hoverEffect>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="teal" size="sm">
                  {post.category}
                </Badge>
                <span className="text-xs text-slate-400">{post.readTime}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Link href={`/resources/blog/${post.slug}`}>{post.title}</Link>
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {post.author.name}
                </div>
                <div className="text-[11px] text-slate-400">{post.author.role}</div>
              </div>

              <Link
                href={`/resources/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
