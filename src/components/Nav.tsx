"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/Magnetic";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled ? "bg-bg/90 backdrop-blur-sm border-b border-border" : "border-b border-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Magnetic strength={0.3}>
          <a href="#home" className="font-serif italic text-lg text-ink hover:text-accent transition-colors">
            Vikram
          </a>
        </Magnetic>

        <ul className="hidden md:flex items-center gap-3 text-sm">
          {LINKS.map((link, i) => (
            <li key={link.href} className="flex items-center gap-3">
              {i > 0 && <span className="text-border">/</span>}
              <Magnetic strength={0.4}>
                <a
                  href={link.href}
                  className={cn(
                    "transition-colors",
                    active === link.href ? "text-accent" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {link.label}
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Magnetic strength={0.3}>
            <a
              href="#contact"
              className="text-sm text-ink border-b border-ink hover:text-accent hover:border-accent transition-colors"
            >
              Get in touch
            </a>
          </Magnetic>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-ink-muted hover:text-ink transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <ul className="flex flex-col text-sm px-6 py-4 gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "transition-colors",
                    active === link.href ? "text-accent" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block text-accent hover:text-ink transition-colors"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
