"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenId,
  className = "",
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : [items[0]?.id || ""]
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("flex flex-col gap-3.5 w-full", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl border transition-all duration-200 overflow-hidden",
              isOpen
                ? "bg-white dark:bg-slate-900 border-[#17a2b8]/60 shadow-md shadow-[#17a2b8]/5"
                : "bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
            )}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17a2b8]"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 pr-4">
                {item.question}
              </span>
              <div
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200",
                  isOpen
                    ? "bg-cyan-50 text-[#17a2b8] dark:bg-cyan-950/80 dark:text-cyan-400"
                    : "bg-slate-100 text-[#17a2b8] dark:bg-slate-800 dark:text-cyan-400"
                )}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/80 mt-1">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
