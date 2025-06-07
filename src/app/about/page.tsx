"use client";

import React from "react";
import { useRef, useEffect, useMemo } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { social } from "@/assets/svg/social/index.js";
import create from "../../utils/Theme.jsx";
import MyData from "../../data/MyData.jsx";
import { parseStyledText } from "../../utils/text_parser.jsx";
import StringUtils from "../../utils/String.js";

const defaultAbout = {
  social_links: { github: "#", linkedin: "#", twitter: "#", facebook: "#" },
  passion: ["Your Passion", "E.g., Singing"],
  description:
    "Tell your story here. What drives you, what you're passionate about, and what makes you unique.",
  resume: "#",
  user: { firstName: "", lastName: "" },
};

const AnimatedText = React.memo(
  ({ text }: { text: string | React.ReactNode }) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const textVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: isMobile ? 0 : 0.01,
          delayChildren: isMobile ? 0 : 0.5,
        },
      },
    };

    const letterVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.2 },
      },
    };

    if (isMobile) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="leading-relaxed"
        >
          {text}
        </motion.div>
      );
    }

    return (
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="leading-relaxed"
      >
        {typeof text === "string"
          ? text.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))
          : text}
      </motion.div>
    );
  }
);

const About = () => {
  const about = MyData.about || defaultAbout;
  const store = create();
  const ref = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const isInView = useInView(ref, {
    once: true,
    margin: isMobile ? "0px" : "-50px",
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      // Force render after 2 seconds if not in view
      const timer = setTimeout(() => controls.start("visible"), 2000);
      return () => clearTimeout(timer);
    }
  }, [isInView, controls]);

  // Memoize socialLinks
  const socialLinks = useMemo(
    () => ({
      github: { url: about.social_links.github, icon: social.github.src },
      linkedin: { url: about.social_links.linkedin, icon: social.linkedin.src },
      twitter: { url: about.social_links.twitter, icon: social.twitter.src },
      facebook: { url: about.social_links.facebook, icon: social.facebook.src },
    }),
    [about.social_links]
  );

  // Memoize parsed description
  const parsedDescription = useMemo(() => {
    try {
      return about.description
        ? about.description.length > 450
          ? parseStyledText(about.description.slice(0, 450) + "...")
          : parseStyledText(about.description)
        : defaultAbout.description;
    } catch (error) {
      console.error("Error parsing description:", error);
      return defaultAbout.description;
    }
  }, [about.description]);

  // Shimmer placeholder
  if (!MyData.about) {
    return (
      <section
        id="about"
        ref={ref}
        className="relative overflow-hidden py-16 md:py-24 px-4 md:px-8 mb-24 md:mb-32 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-start p-8 md:p-12 rounded-3xl bg-slate-900/30">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-2 bg-amber-500/10 shimmer w-24 h-6"></div>
              <div className="h-10 w-3/4 bg-slate-800 shimmer rounded"></div>
            </div>
            <div className="space-y-4">
              <div className="h-6 w-1/4 bg-slate-800 shimmer rounded"></div>
              <div className="flex flex-wrap gap-3">
                <div className="px-5 py-2.5 rounded-xl bg-slate-800 shimmer w-24 h-6"></div>
                <div className="px-5 py-2.5 rounded-xl bg-slate-800 shimmer w-24 h-6"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-6 w-1/4 bg-slate-800 shimmer rounded"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-slate-800 shimmer rounded"></div>
                <div className="h-4 w-5/6 bg-slate-800 shimmer rounded"></div>
                <div className="h-4 w-3/4 bg-slate-800 shimmer rounded"></div>
              </div>
            </div>
            <div className="h-10 w-40 bg-amber-500 shimmer rounded-xl"></div>
          </div>
          <div className="flex md:flex-col items-center justify-center gap-4 md:gap-6">
            <div className="hidden md:block h-6 w-1/4 bg-slate-800 shimmer rounded"></div>
            <div className="flex md:flex-col items-center gap-4">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-full bg-slate-800 shimmer w-12 h-12"
                  ></div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      ref={ref}
      className={`relative overflow-hidden py-10 md:py-12 px-4 md:px-8 mb-10 md:mb-32 max-w-7xl mx-auto ${
        isMobile
          ? ""
          : "backdrop-blur-sm border border-slate-800/50 bg-slate-900/30"
      }`}
    >
      <motion.div
        className="relative z-10 grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-start p-8 md:p-12 rounded-3xl"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: isMobile ? 0 : 0.2,
              delayChildren: isMobile ? 0 : 0.3,
            },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        <div className="space-y-8">
          {/* Section title */}
          <motion.div
            variants={{
              hidden: { y: isMobile ? 0 : 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: isMobile ? 0.3 : 0.6, ease: "easeOut" },
              },
            }}
            className="space-y-2"
          >
            <motion.div
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-2 bg-amber-500/10 text-amber-400 border border-amber-500/20"
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: isMobile ? 1 : 0.95 }}
            >
              About Me
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Get to know me
            </h2>
          </motion.div>

          {/* Passions/Professions */}
          <motion.div
            variants={{
              hidden: { y: isMobile ? 0 : 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: isMobile ? 0.3 : 0.6, ease: "easeOut" },
              },
            }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-slate-300">My Passions</h3>
            <div className="flex flex-wrap">
              {about.passion == null
                ? defaultAbout.passion.map((profession, index) => (
                    <motion.p
                      key={index}
                      custom={index}
                      variants={{
                        hidden: { scale: isMobile ? 1 : 0.8, opacity: 0 },
                        visible: (i: number) => ({
                          scale: 1,
                          opacity: 1,
                          transition: {
                            delay: isMobile ? 0 : i * 0.1,
                            duration: isMobile ? 0.3 : 0.5,
                            type: "spring",
                            stiffness: 100,
                          },
                        }),
                      }}
                      className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all bg-slate-800 border border-slate-700 text-slate-200"
                      whileHover={{ scale: isMobile ? 1 : 1.05 }}
                      whileTap={{ scale: isMobile ? 1 : 0.95 }}
                    >
                      {profession}
                    </motion.p>
                  ))
                : about.passion.map((profession, index) => (
                    <motion.p
                      key={index}
                      custom={index}
                      variants={{
                        hidden: { scale: isMobile ? 1 : 0.8, opacity: 0 },
                        visible: (i: number) => ({
                          scale: 1,
                          opacity: 1,
                          transition: {
                            delay: isMobile ? 0 : i * 0.1,
                            duration: isMobile ? 0.3 : 0.5,
                            type: "spring",
                            stiffness: 100,
                          },
                        }),
                      }}
                      className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all bg-slate-800 border border-slate-700 text-slate-200"
                      whileHover={{ scale: isMobile ? 1 : 1.05 }}
                      whileTap={{ scale: isMobile ? 1 : 0.95 }}
                    >
                      {profession}
                    </motion.p>
                  ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={{
              hidden: { y: isMobile ? 0 : 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: isMobile ? 0.3 : 0.6, ease: "easeOut" },
              },
            }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-slate-300">My Story</h3>
            <div className="prose max-w-none text-slate-300">
              <AnimatedText text={parsedDescription} />
            </div>
          </motion.div>

          {/* Resume button */}
          <motion.div
            variants={{
              hidden: { y: isMobile ? 0 : 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: isMobile ? 0.3 : 0.6, ease: "easeOut" },
              },
            }}
          >
            <motion.a
              href={about.resume}
              download={
                StringUtils.capitalizeString(about.user?.firstName || "") +
                StringUtils.capitalizeString(about.user?.lastName || "") +
                "Resume"
              }
              target="_blank"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-medium text-base transition-all bg-amber-500 text-slate-900 hover:bg-amber-400"
              whileHover={{ scale: isMobile ? 1 : 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: isMobile ? 0 : 0.8, duration: 0.3 },
              }}
              rel="noreferrer"
            >
              <FiDownload className="text-sm" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Social media links */}
        <motion.div
          className="flex md:flex-col items-center justify-center gap-4 md:gap-6"
          variants={{
            hidden: { y: isMobile ? 0 : 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: isMobile ? 0.3 : 0.6, ease: "easeOut" },
            },
          }}
        >
          <h3 className="hidden md:block text-lg font-medium mb-2 text-slate-300">
            Connect
          </h3>
          <div className="flex md:flex-col items-center gap-4">
            {Object.values(socialLinks).map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 cursor-pointer rounded-full transition-all bg-slate-800 border border-slate-700/50"
              >
                <img
                  className="h-6 w-6"
                  src={socialLink.icon || "/placeholder.svg"}
                  alt="Social media"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default React.memo(About);
