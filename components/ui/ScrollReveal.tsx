"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom" | "scale";
  delay?: number; // ms
  duration?: number; // ms
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  direction = "bottom",
  delay = 0,
  duration = 750,
  className,
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && domRef.current) {
              observer.unobserve(domRef.current);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold, once]);

  const getInitialTransform = () => {
    switch (direction) {
      case "left":
        return "translate3d(-40px, 0, 0)";
      case "right":
        return "translate3d(40px, 0, 0)";
      case "top":
        return "translate3d(0, -35px, 0)";
      case "scale":
        return "scale(0.94) translate3d(0, 20px, 0)";
      case "bottom":
      default:
        return "translate3d(0, 35px, 0)";
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0) scale(1)" : getInitialTransform(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionProperty: "opacity, transform",
        willChange: "opacity, transform",
      }}
      className={cn("transition-all", className)}
    >
      {children}
    </div>
  );
}
