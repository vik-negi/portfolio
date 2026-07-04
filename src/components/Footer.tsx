"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Magnetic } from "@/components/Magnetic";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub", url: profile.social.github },
    { label: "LinkedIn", url: profile.social.linkedin },
    { label: "Twitter", url: profile.social.twitter },
  ];

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-ink-muted">
          © {year} {profile.name}
        </p>

        <div className="flex items-center gap-3">
          {links.map((link, i) => (
            <span key={link.label} className="flex items-center gap-3">
              {i > 0 && <span className="text-border">/</span>}
              <Magnetic strength={0.4}>
                <a href={link.url} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-ink transition-colors">
                  {link.label}
                </a>
              </Magnetic>
            </span>
          ))}
          <span className="text-border">/</span>
          <Magnetic strength={0.5}>
            <a href="#home" aria-label="Back to top" className="text-ink-muted hover:text-accent transition-colors block">
              <ArrowUp className="w-4 h-4" />
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
