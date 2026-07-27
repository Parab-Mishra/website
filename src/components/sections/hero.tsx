"use client";

import { motion } from "motion/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArchitectureGraph } from "@/components/hero/architecture-graph";
import { profile } from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden px-4 pt-32 pb-16 sm:pt-40"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <div className="flex flex-col gap-6">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Badge variant="accent" className="gap-1.5">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </Badge>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl"
          >
            I don&apos;t just write code.
            <br />
            <span className="text-gradient-accent">I build systems.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <a href="#projects">
                View systems I&apos;ve built
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <Sparkles className="size-4" />
                Get in touch
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="/resume.pdf" download>
                <Download className="size-4" />
                R&eacute;sum&eacute; PDF
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="surface-elevated relative p-3 sm:p-6"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 px-2">
            <p className="font-mono-tech text-xs text-muted-foreground">
              {"// "}live architecture &middot; hover or tap a node
            </p>
            <div className="flex items-center gap-3 font-mono-tech text-[11px] text-muted-foreground">
              <LegendDot color="var(--accent-2)" label="edge" />
              <LegendDot color="var(--accent)" label="compute" />
              <LegendDot color="var(--success)" label="data" />
              <LegendDot color="var(--warning)" label="AI" />
            </div>
          </div>
          <ArchitectureGraph />
        </motion.div>
      </div>
    </section>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="size-1.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}
