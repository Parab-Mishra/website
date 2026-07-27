"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { profile } from "@/data/portfolio";

const CONTACT_CARDS = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "/in/parab-mishra",
    href: "https://www.linkedin.com/in/parab-mishra/",
  },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

export function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n\u2014\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something that scales"
          description="Open to backend, full-stack and systems-focused roles. Reach out directly or send a note below."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            {CONTACT_CARDS.map((card) => (
              <Card key={card.label} className="p-0">
                <CardContent className="flex items-center gap-4 p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <card.icon className="size-4" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-mono-tech text-[11px] uppercase tracking-wide text-muted-foreground">
                      {card.label}
                    </span>
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                        className="focus-ring text-sm font-medium text-foreground hover:text-accent"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-foreground">{card.value}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      required
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about the system you're building..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="self-start">
                    <Send className="size-4" />
                    {sent ? "Opening your mail client\u2026" : "Send message"}
                  </Button>
                  <p className="font-mono-tech text-xs text-muted-foreground">
                    Opens your email client with this message pre-filled &mdash; nothing is
                    stored on a server.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
