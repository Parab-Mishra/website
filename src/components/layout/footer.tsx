import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/80 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-mono-tech text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {profile.socials.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={social.label}
                className="focus-ring flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                {Icon ? <Icon className="size-4" /> : null}
              </a>
            );
          })}
        </div>

        <p className="font-mono-tech text-xs text-muted-foreground">
          Built with Next.js &middot; Tailwind &middot; Motion
        </p>
      </div>
    </footer>
  );
}
