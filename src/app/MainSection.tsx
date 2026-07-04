"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import profileImage from "@/assets/images/vikram.jpg";
import { profile, experiences, projects } from "@/data/portfolio";
import React from "react";
import Image from "next/image";
import { getYearsOfExperience } from "@/lib/stats";
import { Magnetic } from "@/components/Magnetic";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default React.memo(function MainSection() {
  const years = getYearsOfExperience(experiences);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 py-32"
      id="home"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto w-full"
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-8">
          <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
            <Image src={profileImage} alt={profile.name} fill className="object-cover" priority />
          </div>
          <p className="font-serif italic text-lg text-ink-muted">
            hey, I&apos;m {profile.name.split(" ")[0]}
          </p>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-serif text-4xl md:text-6xl text-ink tracking-tight leading-[1.15] mb-6"
        >
          {profile.role} who takes systems from <span className="text-accent italic">architecture to production</span> — Flutter, React &amp; Node.js, for {years}+ years.
        </motion.h1>

        <motion.p variants={item} className="text-lg text-ink-muted max-w-2xl leading-relaxed mb-10">
          {profile.tagline} Based in {profile.location} — open to full-time roles and freelance engagements.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-8 mb-10 text-sm">
          <div>
            <span className="text-2xl font-serif text-ink">{years}+</span>
            <span className="text-ink-muted ml-2">yrs experience</span>
          </div>
          <div className="w-px h-6 bg-border" />
          <div>
            <span className="text-2xl font-serif text-ink">{projects.length}+</span>
            <span className="text-ink-muted ml-2">shipped projects</span>
          </div>
          <div className="w-px h-6 bg-border" />
          <div className="flex items-center gap-2 text-ink-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            available for work
          </div>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap items-center gap-6">
          <Magnetic strength={0.3}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded bg-accent text-bg text-sm hover:opacity-90 transition-opacity"
            >
              Get in touch <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Magnetic>
          <Magnetic strength={0.3}>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-ink text-sm border-b border-ink hover:text-accent hover:border-accent transition-colors"
            >
              Resume
            </a>
          </Magnetic>

          <div className="flex items-center gap-1 ml-2">
            {[
              { Icon: Github, href: profile.social.github },
              { Icon: Linkedin, href: profile.social.linkedin },
              { Icon: Twitter, href: profile.social.twitter },
            ].map(({ Icon, href }, index) => (
              <Magnetic key={index} strength={0.5}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded text-ink-muted hover:text-ink transition-colors block"
                >
                  <Icon className="w-5 h-5" />
                </a>
              </Magnetic>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
});
