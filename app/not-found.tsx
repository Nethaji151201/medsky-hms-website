import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Hospital } from "lucide-react";
import { Button } from "@/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto shadow-xl">
          <Hospital className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-teal-600 uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button variant="primary" size="lg" href="/">
            Back to Home
          </Button>
          <Button variant="outline" size="lg" href="/modules">
            Explore Medsky HMS
          </Button>
        </div>
      </div>
    </div>
  );
}
