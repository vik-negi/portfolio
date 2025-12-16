"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowUpRight, FiCode, FiBriefcase, FiUser } from "react-icons/fi";
import { social } from "@/assets/svg/social/index.js";
import MyData from "../../data/MyData.jsx";
import { parseStyledText } from "../../utils/text_parser.jsx";
import { cn } from "@/utils/cn";

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "relative overflow-hidden bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 hover:bg-slate-900/60 hover:border-white/10 transition-all duration-300 group flex flex-col",
      className
    )}
  >
    {children}
  </motion.div>
);

const About = () => {
  const about = MyData.about;
  const experiences = MyData.experience?.experiences || [];
  const projects = MyData.projects || [];

  // Calculate Years of Experience
  const startYear = useMemo(() => {
    if (!experiences.length) return new Date().getFullYear();
    const sorted = [...experiences].sort((a, b) => new Date(a.from).getTime() - new Date(b.from).getTime());
    return new Date(sorted[0].from).getFullYear();
  }, [experiences]);

  const yearsExp = new Date().getFullYear() - startYear + (new Date().getMonth() > 6 ? 1 : 0);

  const socialLinks = useMemo(
    () => ({
      github: { url: about.social_links.github, icon: social.github.src },
      linkedin: { url: about.social_links.linkedin, icon: social.linkedin.src },
      twitter: { url: about.social_links.twitter, icon: social.twitter.src },
    }),
    [about.social_links]
  );

  const parsedDescription = useMemo(() => {
    try {
      return about.description ? parseStyledText(about.description) : "";
    } catch (e) { return about.description; }
  }, [about.description]);

  return (
    <section id="about" className="relative py-12 max-w-7xl mx-auto px-4 md:px-8">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col gap-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            A Glimpse Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">My World</span>
          </h2>
        </div>

        {/* Bento Grid - Mobile: Flex Col, Tablet/Desktop: Grid */}
        {/* Changed auto-rows to minmax to preventing squashing */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:auto-rows-[minmax(180px,auto)]">

          {/* 1. Profile Image (2x2) */}
          <BentoCard className="min-h-[300px] md:min-h-0 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 p-0 relative group">
            {about.user?.profilePic ? (
              <img
                src={about.user.profilePic}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">No Image</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-bold text-lg">{about.user?.firstName} {about.user?.lastName}</h3>
              <p className="text-amber-400 text-xs uppercase tracking-wider font-semibold">Software Developer</p>
            </div>
          </BentoCard>

          {/* 2. Bio / Description (2x2 on LG, 2x2 on MD) */}
          <BentoCard className="min-h-[300px] md:min-h-0 md:col-span-2 lg:col-span-2 md:row-span-2 flex flex-col justify-between gap-6" delay={0.1}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-400">
                <FiUser className="text-amber-400/80" /> <span className="text-xs uppercase tracking-wide">Biography</span>
              </div>
              {/* Relaxed line clamp and increased text size */}
              <div className="prose prose-invert prose-sm md:prose-base text-slate-300 font-light leading-relaxed">
                {parsedDescription}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {(about.passion || []).map((p: string, i: number) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300 whitespace-nowrap">
                  {p}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* 3. Stats: Experience (1x1) */}
          <BentoCard className="min-h-[160px] md:min-h-0 md:col-span-1 lg:col-span-1 flex flex-col justify-center items-center text-center gap-2 bg-gradient-to-br from-slate-900/40 to-amber-500/5" delay={0.2}>
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-2">
              <FiBriefcase className="text-xl" />
            </div>
            <span className="text-4xl font-bold text-white">{yearsExp}+</span>
            <span className="text-sm text-slate-400 font-medium">Years Experience</span>
          </BentoCard>

          {/* 4. Stats: Projects (1x1) */}
          <BentoCard className="min-h-[160px] md:min-h-0 md:col-span-1 lg:col-span-1 flex flex-col justify-center items-center text-center gap-2 bg-gradient-to-br from-slate-900/40 to-indigo-500/5" delay={0.3}>
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-2">
              <FiCode className="text-xl" />
            </div>
            <span className="text-4xl font-bold text-white">{projects.length}+</span>
            <span className="text-sm text-slate-400 font-medium">Projects Completed</span>
          </BentoCard>

          {/* 5. Resume & Socials (2x1) */}
          <BentoCard className="min-h-[120px] md:min-h-0 md:col-span-2 lg:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" delay={0.4}>
            <div className="space-y-1">
              <h4 className="text-white font-semibold flex items-center gap-2">
                Let's Connect <FiArrowUpRight className="text-slate-500" />
              </h4>
              <p className="text-sm text-slate-400 max-w-xs">
                Open for collaborations and new opportunities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {Object.values(socialLinks).map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white transition-all border border-white/5">
                  <img src={link.icon} alt="social" className="w-4 h-4 invert opacity-70 hover:opacity-100" />
                </a>
              ))}

              <a
                href={about.resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-500 text-slate-950 font-semibold text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
              >
                <FiDownload /> Resume
              </a>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
