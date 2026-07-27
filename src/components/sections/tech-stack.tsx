"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "@/components/layout/section-heading";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { skillCategories, certifications } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const SKILL_NOTES: Record<string, string> = {
  "Node.js": "Primary runtime for every backend service I ship.",
  "Nest.js": "Structured, DI-driven services for larger domains.",
  Kafka: "Event-driven communication between microservices.",
  MongoDB: "Primary datastore \u2014 schema design for high write throughput.",
  Redis: "Caching, sessions and rate limiting.",
  "Amazon AWS": "Deployment, storage and managed infra.",
  JWT: "Stateless auth across multi-tenant services.",
  WebSocket: "Real-time features: live tracking, notifications.",
  "React.js": "Client applications and admin dashboards.",
  Redux: "Predictable state for complex dashboards.",
  Prisma: "Type-safe data access layer.",
  "CI/CD": "Automated build, test and deploy pipelines.",
};

export function TechStackExplorer() {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <section id="stack" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="Tech stack"
          title="An explorer, not a wall of logos"
          description="Grouped by how I actually use it in production. Hover or tap a chip for context."
        />

        <Tabs defaultValue={skillCategories[0].id}>
          <TabsList>
            {skillCategories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="surface-elevated p-6 sm:p-8">
                <p className="mb-5 font-mono-tech text-xs text-muted-foreground">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onMouseEnter={() => setActive(skill)}
                      onMouseLeave={() => setActive((s) => (s === skill ? null : s))}
                      onFocus={() => setActive(skill)}
                      onClick={() => setActive((s) => (s === skill ? null : skill))}
                      className={cn(
                        "focus-ring rounded-full border px-4 py-2 text-sm font-medium font-mono-tech transition-all",
                        active === skill
                          ? "border-accent/50 bg-accent/10 text-accent"
                          : "border-border bg-muted/40 text-foreground hover:border-accent/30 hover:bg-muted"
                      )}
                    >
                      {skill}
                    </button>
                  ))}
                </div>

                <div className="mt-5 min-h-[44px]">
                  <AnimatePresence mode="wait">
                    {active && SKILL_NOTES[active] && cat.skills.includes(active) && (
                      <motion.p
                        key={active}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="rounded-[var(--radius-control)] border border-accent/20 bg-accent/5 px-4 py-2.5 text-sm text-foreground"
                      >
                        <span className="font-mono-tech text-accent">{active}</span>{" "}
                        &mdash; {SKILL_NOTES[active]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex flex-col gap-3">
          <h3 className="font-mono-tech text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="surface-elevated flex flex-col gap-0.5 px-4 py-3"
              >
                <span className="text-sm font-medium text-foreground">{cert.name}</span>
                <span className="font-mono-tech text-xs text-muted-foreground">
                  {cert.issuer}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
