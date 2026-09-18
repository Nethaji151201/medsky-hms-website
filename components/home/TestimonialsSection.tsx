"use client";

import React, { useState, useRef } from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS_DATA, TestimonialItem } from "@/data/testimonials";
import { SectionHeader } from "@/ui/SectionHeader";

function TestimonialCard({ item }: { item: TestimonialItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-[300px] sm:w-[330px] md:w-[350px] flex-shrink-0 bg-white dark:bg-[#0f172a] rounded-[20px] p-6 sm:p-7 border border-slate-100/90 dark:border-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] dark:hover:border-teal-500/30 select-none">
      {/* Top Profile Header */}
      <div className="space-y-3.5">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-teal-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex-shrink-0 flex items-center justify-center">
            {!imgError && item.avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.avatar}
                alt={item.name}
                className="w-full h-full object-cover pointer-events-none"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            ) : (
              <span className="font-semibold text-xs text-teal-700 dark:text-teal-300">
                {item.initials}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-[15px] text-[#1e293b] dark:text-white leading-tight truncate">
              {item.name}
            </h4>
            <p className="text-xs text-slate-400 dark:text-slate-400 font-normal mt-0.5 truncate">
              {item.specialty}
            </p>
          </div>
        </div>

        {/* Review Quote */}
        <p className="text-[13px] sm:text-[13.5px] text-slate-500 dark:text-slate-300 leading-relaxed font-normal">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      {/* 5-Star Rating */}
      <div className="pt-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < item.rating
                ? "text-amber-400 fill-amber-400"
                : "text-slate-200 dark:text-slate-700 fill-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function DraggableRow({
  items,
  reverse = false,
}: {
  items: TestimonialItem[];
  reverse?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Smooth multiplier
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      className={`flex overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing overscroll-x-contain ${
        isDragging ? "select-none" : ""
      }`}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div
        className={`${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } flex gap-5 sm:gap-6 py-2 px-4 will-change-transform`}
        style={isDragging ? { animationPlayState: "paused" } : undefined}
      >
        {items.map((item, index) => (
          <TestimonialCard
            key={`${reverse ? "rev" : "fwd"}-${item.id}-${index}`}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const row1 = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];
  const row2 = [
    ...TESTIMONIALS_DATA.slice().reverse(),
    ...TESTIMONIALS_DATA.slice().reverse(),
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-white dark:bg-[#060b14] gpu-layer">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-12 sm:mb-16">
        <SectionHeader
          badge="Patient & Specialist Reviews"
          title="Loved by Patients &"
          titleHighlight="Healthcare Providers"
          description="Discover how clinical staff and patients across clinics and multi-specialty hospitals experience care with Medsky HMS."
        />
      </div>

      {/* Testimonial Rows with Deep Shaded Gradient Overlays */}
      <div className="relative w-full overflow-hidden space-y-6 sm:space-y-7">
        {/* Left Side Deep Shade Gradient Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-28 sm:w-56 md:w-72 lg:w-96 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-[#060b14] dark:via-[#060b14]/90 dark:to-transparent z-20"
        />

        {/* Right Side Deep Shade Gradient Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-28 sm:w-56 md:w-72 lg:w-96 bg-gradient-to-l from-white via-white/90 to-transparent dark:from-[#060b14] dark:via-[#060b14]/90 dark:to-transparent z-20"
        />

        {/* Row 1 - Smooth 60fps Horizontal Flow (Leftwards + Drag) */}
        <DraggableRow items={row1} reverse={false} />

        {/* Row 2 - Smooth 60fps Horizontal Flow (Rightwards + Drag) */}
        <DraggableRow items={row2} reverse={true} />
      </div>
    </section>
  );
}
