"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto flex max-w-4xl flex-col gap-12">
        <SectionHeading
          eyebrow="Track record"
          title="Experience timeline"
          description="From junior backend engineer to owning full-stack systems end-to-end."
        />

        <ol className="relative flex flex-col gap-10 border-l border-border pl-8 sm:pl-10">
          {experience.map((item, i) => {
            const Icon = item.stack.includes("DSA") ? GraduationCap : Briefcase;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[42px] top-0 flex size-8 items-center justify-center rounded-full border border-accent/30 bg-card sm:-left-[50px] sm:size-9">
                  <Icon className="size-4 text-accent" />
                </span>
                {item.current && (
                  <span className="absolute -left-[38px] top-1 flex size-1.5 animate-pulse rounded-full bg-success sm:-left-[46px]" />
                )}

                <div className="surface-elevated p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-sm text-accent">{item.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-right">
                      <span className="font-mono-tech text-xs text-muted-foreground">
                        {item.start} &ndash; {item.end}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="size-3" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground">{item.summary}</p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-foreground/90">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
