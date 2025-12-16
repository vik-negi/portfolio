"use client";
import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import "../styles/global.css";
import "../index.css";

import MainSection from "./MainSection";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";
import Experiences from "@/app/experiences/page";
import Contact from "@/app/contact/page";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

library.add(faBars, faTimes);

const SectionWrapper = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="relative z-10 w-full"
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Modern Dynamic Background */}
      <BackgroundBeams className="opacity-30" />

      {/* Subtle persistent gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-slate-950 pointer-events-none z-0" />

      <div className="relative z-10 space-y-24 pb-24 -mt-12 md:-mt-20">
        <MainSection />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <SectionWrapper delay={0.1}>
            <About />
          </SectionWrapper>

          <SectionWrapper delay={0.1}>
            <Skills />
          </SectionWrapper>

          <SectionWrapper delay={0.1}>
            <Projects />
          </SectionWrapper>

          <SectionWrapper delay={0.1}>
            <Experiences />
          </SectionWrapper>

          <SectionWrapper delay={0.1}>
            <Contact />
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
}
