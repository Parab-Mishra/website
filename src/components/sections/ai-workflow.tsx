"use client";

import * as React from "react";
import { motion } from "motion/react";
import { CheckCircle2, FileSearch, Hammer, Radar, Rocket, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import { aiWorkflow } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const ICONS = [FileSearch, Radar, Hammer, CheckCircle2, Rocket];

export function AiWorkflow() {
  const [step, setStep] = React.useState(0);
  const active = aiWorkflow[step];
  const ActiveIcon = ICONS[step] ?? Sparkles;

  return (
    <section id="workflow" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="How I build with AI"
          title="AI-native, not AI-dependent"
          description="AI tools accelerate every stage of my workflow \u2014 but architecture decisions, correctness and production judgement stay with me."
        />

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {aiWorkflow.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setStep(i)}
                className={cn(
                  "focus-ring flex shrink-0 items-center gap-3 rounded-[var(--radius-control)] border px-4 py-3 text-left transition-all lg:w-full",
                  step === i
                    ? "border-accent/40 bg-accent/10"
                    : "border-border bg-muted/30 hover:bg-muted/60"
                )}
              >
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full font-mono-tech text-xs",
                    step === i
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {i + 1}
                </span>
                <span
                  className={cn(
                    "whitespace-nowrap text-sm font-medium lg:whitespace-normal",
                    step === i ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="surface-elevated flex flex-col gap-4 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                <ActiveIcon className="size-5" />
              </span>
              <div>
                <p className="font-mono-tech text-xs text-muted-foreground">
                  Step {step + 1} / {aiWorkflow.length}
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {active.title}
                </h3>
              </div>
            </div>
            <p className="text-base text-muted-foreground">{active.description}</p>
            <div className="h-px w-full bg-border" />
            <p className="text-sm text-foreground/90">{active.detail}</p>

            <div className="mt-2 flex gap-1.5">
              {aiWorkflow.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1 flex-1 rounded-full transition-colors",
                    i <= step ? "bg-accent" : "bg-border"
                  )}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
