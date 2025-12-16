"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
} from "lucide-react";
import StringUtils from "../utils/String";
import profileImage from "@/assets/images/vikram.jpg";
import profileImageMobile from "@/assets/images/vikram.jpg";
import MyData from "../data/MyData";
import { mainProfile } from "../data/constants";
import { useRef } from "react";
import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

export default React.memo(function MainSection() {
  const userInfo = MyData.publicInfo;
  const sectionRef = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  // Parallax transforms
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const imageSrc = isMobile ? profileImageMobile.src : profileImage.src;

  return (
    <section
      ref={sectionRef}
      className={cn(
        "min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden",
        isMobile ? "py-12" : "py-24"
      )}
      id="home"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-sky-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-500/20 blur-[100px] rounded-full pointer-events-none" />

      {userInfo && (
        <motion.div
          style={{ opacity }}
          className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10"
        >
          <motion.div
            className="flex-1 space-y-8"
            style={{ y: textY }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm text-sky-400 text-sm font-medium mb-6 shadow-lg shadow-sky-900/10"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Available for new projects
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                Building <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-violet-400 to-sky-400 animate-gradient-x">
                  Digital Experiences
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
              className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-light"
            >
              I build beautiful, high-performance and scalable software. Focused on user experience, accessibility, and modern aesthetics.
            </motion.p>

            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.button
                className="group relative px-8 py-4 bg-slate-50 text-slate-950 rounded-full font-semibold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToNextSection}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>

              <div className="flex items-center gap-3 ml-2">
                {[
                  { Icon: Github, href: userInfo.social_links?.github },
                  { Icon: Linkedin, href: userInfo.social_links?.linkedin },
                  { Icon: Twitter, href: userInfo.social_links?.twitter }
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    className="p-3 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/50 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden md:block" // Hidden on mobile for cleaner look if needed, or keep it
            style={{ y: imageY }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { scale: 0.8, opacity: 0, rotate: -5 },
              visible: {
                scale: 1,
                opacity: 1,
                rotate: 0,
                transition: { duration: 0.8, type: "spring" },
              },
            }}
          >
            <div className="relative w-[320px] h-[400px]">
              {/* Decorative border elements */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 rotate-6 scale-105 z-0" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-violet-500/20 -rotate-3 scale-105 blur-xl" />

              <Image
                src={imageSrc}
                className="w-full h-full object-cover rounded-2xl z-10 relative shadow-2xl shadow-sky-500/10 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                alt="Profile"
                height={400}
                width={320}
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
            onClick={scrollToNextSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-slate-500" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
});
