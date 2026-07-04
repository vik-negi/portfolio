"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SkillIconGlyph } from "@/components/SkillIcon";

const Skills = () => {
  const ref = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div id="skills" className="py-16 relative z-10" ref={ref}>
      <div className="mb-12 border-t border-border pt-6">
        <p className="text-sm text-ink-muted uppercase tracking-wide mb-3">02 / Skills</p>
        <h2 className="font-serif text-3xl md:text-5xl text-ink tracking-tight">
          Skills &amp; Technologies
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skillCategory, i) => (
          <motion.div
            key={skillCategory.category}
            variants={rowVariants}
            className={`flex flex-col md:flex-row md:items-start gap-2 md:gap-8 py-5 border-b border-border ${i === 0 ? "border-t" : ""}`}
          >
            <h3 className="text-accent text-sm w-full md:w-40 shrink-0">
              {skillCategory.category}
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {skillCategory.skills.map((item) => (
                <div key={item.name} className="flex items-center gap-2 text-ink-muted">
                  <SkillIconGlyph icon={item.icon} className="w-4 h-4" />
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
