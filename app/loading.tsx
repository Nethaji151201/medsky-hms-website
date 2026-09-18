import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 flex items-center justify-center animate-spin">
        <Loader2 className="w-6 h-6" />
      </div>
      <p className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
        Loading Medsky HMS...
      </p>
    </div>
  );
}
