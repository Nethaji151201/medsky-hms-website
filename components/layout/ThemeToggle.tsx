"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { isDark, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#131d33] border border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      aria-label="Toggle light and dark mode"
      title={mounted && isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mounted && isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-90" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-400 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
