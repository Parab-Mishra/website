"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Boxes, Gauge, Layers } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/data/portfolio";

export function Projects() {
  const [selected, setSelected] = React.useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow="Selected systems"
          title="Production systems, not toy projects"
          description="Each of these shipped to real users \u2014 with real constraints around scale, uptime and data integrity."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="group flex h-full flex-col transition-transform duration-300 hover:-translate-y-1">
                <div
                  className="h-1 w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent), var(--accent-2))",
                  }}
                  aria-hidden
                />
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {project.name}
                    </h3>
                    <Badge variant="success" className="shrink-0 capitalize">
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-5">
                  <div className="grid grid-cols-3 gap-2 rounded-[var(--radius-control)] border border-border bg-muted/40 p-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex flex-col gap-0.5">
                        <span className="font-mono-tech text-[11px] text-muted-foreground">
                          {metric.label}
                        </span>
                        <span className="font-mono-tech text-xs font-medium text-foreground">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-2">
                    <Button size="sm" variant="outline" onClick={() => setSelected(project)}>
                      <Layers className="size-3.5" />
                      View architecture
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.name}</DialogTitle>
                <DialogDescription>{selected.longDescription}</DialogDescription>
              </DialogHeader>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-accent">
                    <Boxes className="size-4" />
                    <h4 className="font-mono-tech text-xs uppercase tracking-wide">
                      Key features
                    </h4>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {selected.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2 text-accent">
                    <Gauge className="size-4" />
                    <h4 className="font-mono-tech text-xs uppercase tracking-wide">
                      Architecture notes
                    </h4>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {selected.architecture.map((note) => (
                      <li key={note} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent-2" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border pt-4">
                {selected.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
