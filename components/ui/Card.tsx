import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glass?: boolean;
  borderTeal?: boolean;
}

export function Card({
  children,
  className = "",
  hoverEffect = true,
  glass = false,
  borderTeal = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300",
        glass
          ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-md"
          : "bg-white dark:bg-slate-900",
        borderTeal
          ? "border-teal-200 dark:border-teal-800/60"
          : "border-slate-200/80 dark:border-slate-800",
        hoverEffect &&
          "hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:border-teal-500/30",
        "shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
