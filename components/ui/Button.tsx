import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "navy" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isExternal?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  isExternal = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-full gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-full gap-2",
    lg: "px-6 py-3 text-base rounded-full gap-2.5 font-semibold",
    xl: "px-8 py-3.5 text-lg rounded-full gap-3 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#17a2b8] hover:bg-[#13899c] text-white shadow-md shadow-[#17a2b8]/20 focus:ring-[#17a2b8] border border-[#17a2b8]/20",
    secondary:
      "bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-600/20 focus:ring-sky-500 border border-sky-500/20",
    outline:
      "border-2 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-[#17a2b8] shadow-sm",
    ghost:
      "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-[#17a2b8]",
    navy:
      "bg-slate-900 dark:bg-slate-800 hover:bg-slate-950 dark:hover:bg-slate-700 text-white shadow-md shadow-slate-900/20 focus:ring-slate-700 border border-slate-700/30",
    danger:
      "bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/20 focus:ring-red-500 border border-red-500/20",
  };

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {leftIcon}
          {children}
          {rightIcon}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  );
}
