"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { profile, experiences, projects } from "@/data/portfolio";
import profileImage from "@/assets/images/vikram.jpg";
import { getYearsOfExperience } from "@/lib/stats";
import { Magnetic } from "@/components/Magnetic";

const About = () => {
  const yearsExp = useMemo(() => getYearsOfExperience(experiences), []);

  const socialLinks = [
    { label: "GitHub", url: profile.social.github, Icon: Github },
    { label: "LinkedIn", url: profile.social.linkedin, Icon: Linkedin },
    { label: "Twitter", url: profile.social.twitter, Icon: Twitter },
  ];

  const bioParagraphs = profile.bio.split("\n\n");

  return (
    <section id="about" className="relative py-12">
      <div className="mb-12 border-t border-border pt-6">
        <p className="text-sm text-ink-muted uppercase tracking-wide mb-3">01 / About</p>
        <h2 className="font-serif text-3xl md:text-5xl text-ink tracking-tight">
          A Glimpse Into My World
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-40 h-40 md:w-full md:h-52 rounded-full md:rounded-lg overflow-hidden">
            <Image
              src={profileImage}
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 160px, 220px"
              className="object-cover"
            />
          </div>
          <h3 className="text-ink font-semibold text-lg mt-4">{profile.name}</h3>
          <p className="text-accent text-sm">{profile.role}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="text-ink-muted leading-relaxed space-y-4 max-w-2xl">
            {bioParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <p className="text-ink-muted text-sm">
            {profile.passions.join(" · ")}
          </p>

          <div className="flex flex-wrap items-center gap-8 py-4 border-y border-border">
            <div>
              <span className="text-2xl font-serif text-ink">{yearsExp}+</span>
              <span className="text-ink-muted text-sm ml-2">years experience</span>
            </div>
            <div>
              <span className="text-2xl font-serif text-ink">{projects.length}+</span>
              <span className="text-ink-muted text-sm ml-2">projects completed</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Magnetic strength={0.3}>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-ink text-sm border-b border-ink hover:text-accent hover:border-accent transition-colors"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </Magnetic>
            {socialLinks.map(({ label, url, Icon }) => (
              <Magnetic key={label} strength={0.3}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-ink-muted text-sm hover:text-ink transition-colors"
                >
                  <Icon className="w-4 h-4" /> {label}
                </a>
              </Magnetic>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(About);
