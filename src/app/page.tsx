"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
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

library.add(faBars, faTimes);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    // Animate sections as they come into view
    const handleScroll = () => {
      controls.start({ opacity: 1, y: 0 });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      ref={containerRef}
    >
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Common background elements that persist across the entire page */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-[10%] right-[15%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-amber-500/10 to-amber-700/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-blue-500/10 to-indigo-700/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.015]" />

        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02]" />
      </div>

      <MainSection />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10"
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10"
      >
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-10"
      >
        <Projects />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-10"
      >
        <Experiences />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10"
      >
        <Contact />
      </motion.div>

      <div className="w-full md:h-[120px] sm:h-[48px] h-[24px]"></div>
    </div>
  );
}
