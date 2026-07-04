"use client";
import React from "react";
import { motion } from "framer-motion";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MainSection from "./MainSection";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";
import Experiences from "@/app/experiences/page";
import Contact from "@/app/contact/page";

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
    <div className="relative min-h-screen bg-bg">
      <Nav />

      <div className="relative z-10">
        <MainSection />

        <div className="max-w-6xl mx-auto px-6 space-y-28">
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

        <Footer />
      </div>
    </div>
  );
}
