import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "teal" | "blue" | "neutral" | "emerald" | "amber" | "rose";
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "center" | "left" | "right";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  badge,
  badgeVariant = "teal",
  title,
  titleHighlight,
  description,
  align = "center",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeaderProps) {
  const alignClass = {
    center: "text-center items-center mx-auto",
    left: "text-left items-start",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 sm:mb-16", alignClass, className)}>
      {badge && (
        <Badge variant={badgeVariant} className="mb-4">
          {badge}
        </Badge>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]",
          titleClassName
        )}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="text-[#17a2b8] dark:text-cyan-400 font-extrabold">{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
