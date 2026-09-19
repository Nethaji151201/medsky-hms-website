import React from "react";
import {
  Stethoscope,
  HeartHandshake,
  Briefcase,
  Users,
  Pill,
  FlaskConical,
  Receipt,
  Award,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/ui/SectionHeader";
import { Card } from "@/ui/Card";
import { ROLES_DATA } from "@/data/features";
import { ScrollReveal } from "@/ui/ScrollReveal";

const ROLE_ICONS: Record<string, any> = {
  Stethoscope,
  HeartHandshake,
  Briefcase,
  Users,
  Pill,
  FlaskConical,
  Receipt,
  Award,
};

const DIRECTIONS: Array<"left" | "top" | "bottom" | "right"> = [
  "left",
  "top",
  "bottom",
  "right",
];

export function RoleSection() {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-[#060b14] overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <ScrollReveal direction="top" duration={700}>
          <SectionHeader
            badge="Role-Based Experience"
            title="Built for Everyone in"
            titleHighlight="Your Hospital."
            description="Tailored interfaces designed to meet the exact workflow speed, documentation needs, and permission levels of every healthcare team member."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROLES_DATA.map((item, idx) => {
            const Icon = ROLE_ICONS[item.icon] || Stethoscope;
            const direction = DIRECTIONS[idx % 4];

            return (
              <ScrollReveal
                key={item.role}
                direction={direction}
                delay={idx * 110}
                duration={750}
                className="h-full"
              >
                <Card
                  className="p-6 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40 border-slate-200/80 dark:border-slate-800/90"
                  hoverEffect={false}
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-primary dark:text-cyan-400 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {item.role}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-semibold text-primary dark:text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{item.perk}</span>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
