"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import DateTimeFormatter from "../../utils/dateTime_functionality";
import Link from "next/link";
import MyData from "../../data/MyData";
import AddSectionDetailsBtn from "../../utils/AddSectionDetailsBtn";
import React from "react";
import { cn } from "@/utils/cn";

const ExperienceTimeline = React.memo(
  ({ experience, index, isLast }: { experience: any; index: number; isLast: boolean }) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    // Memoize date formatting
    const formattedFrom = useMemo(
      () =>
        experience.from && DateTimeFormatter.getFormattedDate(experience.from),
      [experience.from]
    );
    const formattedTo = useMemo(
      () =>
        experience.to
          ? DateTimeFormatter.getFormattedDate(experience.to)
          : "Present",
      [experience.to]
    );

    return (
      <div className="relative pl-8 md:pl-0">
        {/* Timeline Line */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-slate-800"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(51, 65, 85, 0.5) 10%, rgba(51, 65, 85, 0.5) 90%, transparent)"
          }}
        />
        <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-800" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={cn(
            "md:flex items-center justify-between w-full mb-12",
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          )}
        >
          <div className="hidden md:block w-[45%]" />

          {/* Center Icon */}
          <div className="absolute left-0 md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-500 z-10 shadow-lg shadow-emerald-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Content Card */}
          <div className="w-full md:w-[45%]">
            <div
              className={cn(
                "relative p-6 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/20 hover:bg-slate-900/60 group",
                "before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-500/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 before:rounded-2xl"
              )}
            >
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {experience.title}
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50 whitespace-nowrap w-fit">
                    {formattedFrom} — {formattedTo}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-emerald-500 font-medium text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faBriefcase} className="w-3 h-3" />
                    {experience.company}
                    <span className="text-slate-600 px-1">•</span>
                    <span className="text-slate-400 font-normal">{experience.location}</span>
                  </p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.skills.slice(0, 4).map((skill: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5 group-hover:border-emerald-500/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                  {experience.skills.length > 4 && (
                    <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5">
                      +{experience.skills.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
);

export default function Experiences() {
  const experiences = MyData.experience.experiences;
  const ref = useRef(null);

  return (
    <section
      className="py-16 md:py-24 lg:py-32 relative z-10"
      id="experience"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center mb-16 space-y-4 text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium border border-violet-500/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
            My Journey
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            My professional path and the companies I've had the privilege to work with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences == null ? (
            <AddSectionDetailsBtn title={"Add Experience"} route={undefined} />
          ) : (
            <div className="relative space-y-8 md:space-y-0">
              {experiences.map((experience, index) => (
                <ExperienceTimeline
                  key={experience._id + index}
                  experience={experience}
                  index={index}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
