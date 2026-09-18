import React from "react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Accordion } from "@/ui/Accordion";
import { FAQ_DATA } from "@/data/faq";
import { ScrollReveal } from "@/ui/ScrollReveal";

export function FAQSection() {
  const half = Math.ceil(FAQ_DATA.length / 2);
  const col1 = FAQ_DATA.slice(0, half);
  const col2 = FAQ_DATA.slice(half);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-100/80 dark:bg-[#0c1527]">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <ScrollReveal direction="top" duration={700}>
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Answers that simplify your"
            titleHighlight="MedSky decision."
            description="Explore key concerns with elegant clarity and premium motion, built for modern healthcare buyers."
          />
        </ScrollReveal>

        {/* Expansive Wide 2-Column FAQ Layout Spanning Full Container Width */}
        <div className="mt-10 sm:mt-14 w-full grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
          <ScrollReveal direction="left" delay={100} duration={750} className="w-full">
            <Accordion items={col1} defaultOpenId="faq-1" allowMultiple />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200} duration={750} className="w-full">
            <Accordion items={col2} defaultOpenId="faq-5" allowMultiple />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
