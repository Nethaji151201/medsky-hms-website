import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "teal" | "blue" | "neutral" | "emerald" | "amber" | "rose";
  size?: "sm" | "md";
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = "teal",
  size = "md",
  className = "",
  dot = false,
}: BadgeProps) {
  const variantStyles = {
    teal: "bg-cyan-50 text-[#0e7490] border-cyan-200/80 dark:bg-cyan-950/50 dark:text-cyan-300 dark:border-cyan-800",
    blue: "bg-sky-50 text-sky-700 border-sky-200/80 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800",
    neutral: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800",
    amber: "bg-amber-50 text-amber-800 border-amber-200/80 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800",
    rose: "bg-rose-50 text-rose-700 border-rose-200/80 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800",
  };

  const dotStyles = {
    teal: "bg-[#17a2b8]",
    blue: "bg-sky-500",
    neutral: "bg-slate-400",
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
    rose: "bg-rose-500",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-medium",
    md: "px-3.5 py-1 text-xs font-semibold uppercase tracking-wider",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotStyles[variant])} />}
      {children}
    </span>
  );
}
