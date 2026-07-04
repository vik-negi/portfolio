"use client";

import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences, type Experience } from "@/data/portfolio";

function formatDate(date: string) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const d = new Date(date);
  return `${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

const ExperienceRow = ({ experience, index }: { experience: Experience; index: number }) => {
  const formattedFrom = useMemo(() => formatDate(experience.from), [experience.from]);
  const formattedTo = useMemo(
    () => (experience.to ? formatDate(experience.to) : "Present"),
    [experience.to]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="py-8 border-b border-border group"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <h3 className="font-serif text-xl text-ink group-hover:text-accent transition-colors">
          {experience.title}
        </h3>
        <span className="text-xs text-ink-muted whitespace-nowrap">
          {formattedFrom} — {formattedTo}
        </span>
      </div>

      <p className="text-accent text-sm flex items-center gap-2 mb-4">
        <Briefcase className="w-3 h-3" />
        {experience.company}
        <span className="text-ink-muted px-1">·</span>
        <span className="text-ink-muted">{experience.location}</span>
      </p>

      <p className="text-ink-muted text-sm leading-relaxed mb-3 max-w-3xl">
        {experience.description}
      </p>

      <p className="text-ink-muted text-xs">
        {experience.skills.join(" · ")}
      </p>
    </motion.div>
  );
};

export default function Experiences() {
  const ref = useRef(null);

  return (
    <section className="py-16 md:py-24 relative z-10" id="experience" ref={ref}>
      <div className="mb-12 border-t border-border pt-6">
        <p className="text-sm text-ink-muted uppercase tracking-wide mb-3">04 / Experience</p>
        <h2 className="font-serif text-3xl md:text-5xl text-ink tracking-tight">
          Work Experience
        </h2>
      </div>

      <div className="border-t border-border">
        {experiences.map((experience, index) => (
          <ExperienceRow
            key={`${experience.company}-${experience.from}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
