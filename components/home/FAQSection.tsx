import React from "react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Accordion } from "@/ui/Accordion";
import { FAQ_DATA } from "@/data/faq";
import { ScrollReveal } from "@/ui/ScrollReveal";

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white dark:bg-[#060b14]">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <ScrollReveal direction="top" duration={700}>
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Answers that simplify your"
            titleHighlight="MedSky decision."
            description="Explore key concerns with elegant clarity and premium motion, built for modern healthcare buyers."
          />
        </ScrollReveal>

        {/* Single Column FAQ Layout */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto w-full">
          <ScrollReveal direction="bottom" delay={100} duration={750} className="w-full">
            <Accordion items={FAQ_DATA} allowMultiple />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
