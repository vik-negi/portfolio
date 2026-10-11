import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle, FileText, Github, Globe } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
import { ProjectPlaceholder } from "@/components/ProjectPlaceholder";

/**
 * One server-rendered page per project, so a project can be linked to
 * directly and is readable by crawlers and link unfurlers — the home page
 * only shows projects inside a client-side modal.
 */

type Params = Promise<{ id: string }>;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  const description = project.outcome ?? project.description;
  const images = project.image.length ? [project.image[0]] : undefined;
  return {
    title: `${project.title} · ${profile.name}`,
    description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: { type: "article", title: project.title, description, images },
    twitter: { card: "summary_large_image", title: project.title, description, images },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="min-h-screen bg-bg">
      <header className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> All projects
        </Link>
        <Link href="/" className="font-serif italic text-lg text-ink hover:text-accent transition-colors">
          {profile.name.split(" ")[0]}
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        <div className="pt-10 pb-8 border-b border-border">
          <p className="text-sm text-ink-muted uppercase tracking-wide mb-3">
            {[project.year, project.platform, project.status].filter(Boolean).join(" · ")}
            {project.personalProject === false && " · Client work"}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-ink tracking-tight leading-tight">
            {project.title}
          </h1>
          {project.outcome && (
            <p className="text-lg text-ink-muted leading-relaxed mt-6 max-w-3xl">{project.outcome}</p>
          )}

          <div className="flex flex-wrap gap-3 mt-8">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded bg-accent text-bg hover:opacity-90 transition-opacity flex items-center gap-2 text-sm font-semibold"
              >
                <Globe className="w-4 h-4" /> Live site
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded bg-surface text-ink-muted hover:text-ink transition-colors flex items-center gap-2 text-sm font-medium border border-border"
              >
                <Github className="w-4 h-4" /> Code
              </a>
            )}
            {project.projectDoc && (
              <a
                href={project.projectDoc}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded bg-surface text-ink-muted hover:text-ink transition-colors flex items-center gap-2 text-sm font-medium border border-border"
              >
                <FileText className="w-4 h-4" /> Project document
              </a>
            )}
          </div>
        </div>

        <div className="py-10 space-y-6">
          {project.image.length > 0 ? (
            project.image.map((src, i) => (
              <div
                key={src}
                className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-border bg-surface"
              >
                <Image
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  fill
                  sizes="(max-width: 896px) 100vw, 848px"
                  className="object-cover object-top"
                  priority={i === 0}
                />
              </div>
            ))
          ) : (
            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-border">
              <ProjectPlaceholder name={project.name} />
            </div>
          )}
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-px bg-border border border-border rounded-lg overflow-hidden mb-12">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex-1 min-w-0 bg-bg px-5 py-4">
                <p className="font-serif text-2xl text-ink break-words">{metric.value}</p>
                <p className="text-sm text-ink-muted mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-[1fr_240px] gap-12">
          <div className="space-y-10">
            {project.problem && (
              <section>
                <h2 className="font-serif text-2xl text-ink mb-3">The problem</h2>
                <p className="text-ink-muted leading-relaxed">{project.problem}</p>
              </section>
            )}

            <section>
              <h2 className="font-serif text-2xl text-ink mb-3">What it does</h2>
              <p className="text-ink-muted leading-relaxed">{project.description}</p>
              {project.highlights && (
                <ul className="mt-5 space-y-2.5">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5 text-ink-muted leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {project.engineering && project.engineering.length > 0 && (
              <section>
                <h2 className="font-serif text-2xl text-ink mb-4">Under the hood</h2>
                <ul className="space-y-4">
                  {project.engineering.map((item) => (
                    <li
                      key={item}
                      className="text-ink-muted leading-relaxed pl-4 border-l-2 border-accent/30"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="space-y-8 md:pt-1">
            {project.role && (
              <div>
                <p className="text-ink-muted uppercase tracking-wider text-[11px] mb-2">My role</p>
                <p className="text-ink text-sm leading-relaxed">{project.role}</p>
              </div>
            )}
            <div>
              <p className="text-ink-muted uppercase tracking-wider text-[11px] mb-2">Technologies</p>
              <ul className="flex flex-wrap gap-2">
                {project.skillsUsed.map((skill) => (
                  <li
                    key={skill}
                    className="text-xs text-ink-muted border border-border rounded px-2 py-1 bg-surface"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
          <div>
            <p className="text-ink-muted text-sm">Have a project like this in mind?</p>
            <a
              href={`mailto:${profile.email}`}
              className="text-ink border-b border-ink hover:text-accent hover:border-accent transition-colors"
            >
              {profile.email}
            </a>
          </div>
          {next && next.id !== project.id && (
            <Link
              href={`/projects/${next.id}`}
              className="group inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              Next: {next.name}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
