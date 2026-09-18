import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, FileText, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Card } from "@/ui/Card";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { BLOG_POSTS } from "@/data/blogs";
import { CTASection } from "@/components/home/CTASection";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Healthcare Informatics Resources & Blog",
  description:
    "Guides, clinical IT whitepapers, and best practices on modernizing hospital OPD queues, IPD discharge workflows, and pharmacy operations.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <div className="py-12 sm:py-20 space-y-24">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Badge variant="teal" size="md">
          Healthcare Knowledge Hub
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          Clinical Informatics & Hospital{" "}
          <span className="text-teal-600 dark:text-teal-400">Best Practices.</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Actionable insights on optimizing hospital throughput, preventing medication dispensing errors, and accelerating cashless insurance settlements.
        </p>
      </section>

      {/* 2. Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <CTASection />
    </div>
  );
}
