import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profile } from "@/data/portfolio";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: `Projects · ${profile.name}`,
  description: `Everything ${profile.name} has built and shipped — client work, flagship systems, and earlier projects.`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Home
        </Link>
        <Link href="/" className="font-serif italic text-lg text-ink hover:text-accent transition-colors">
          {profile.name.split(" ")[0]}
        </Link>
      </header>
      <main className="max-w-6xl mx-auto px-6">
        <Projects />
      </main>
    </div>
  );
}
