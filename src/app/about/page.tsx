"use client";

import type React from "react";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { social } from "@/assets/svg/social/index.ts";
import create from "../../utils/Theme.jsx";
import MyData from "../../data/MyData.jsx";
import { parseStyledText } from "../../utils/text_parser.jsx";
import StringUtils from "../../utils/String.js";

const About = () => {
  const about = MyData.about;
  const store = create();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const passionVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  // Text animation for description
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        delayChildren: 0.5,
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

  // Animated text component
  const AnimatedText = ({ text }: { text: string | React.ReactNode }) => {
    // If text is already parsed HTML, we need to handle it differently
    if (typeof text !== "string") {
      return (
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
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
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  const socialLinks = {
    github: {
      url: about?.social_links.github,
      icon: social.github.src,
    },
    linkedin: {
      url: about?.social_links.linkedin,
      icon: social.linkedin.src,
    },
    twitter: {
      url: about?.social_links.twitter,
      icon: social.twitter.src,
    },
    facebook: {
      url: about?.social_links.facebook,
      icon: social.facebook.src,
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden py-16 md:py-24 px-4 md:px-8 mb-24 md:mb-32 max-w-7xl mx-auto"
    >
      <motion.div
        className="relative z-10 grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-start p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-slate-800/50 bg-slate-900/30"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="space-y-8">
          {/* Section title */}
          <motion.div variants={itemVariants} className="space-y-2">
            <motion.div
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-2 bg-amber-500/10 text-amber-400 border border-amber-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Get to know me
            </h2>
          </motion.div>

          {/* Passions/Professions */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-medium text-slate-300">My Passions</h3>
            <div className="flex flex-wrap gap-3">
              {about?.passion == null ? (
                <>
                  <motion.p
                    custom={0}
                    variants={passionVariants}
                    className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all bg-slate-800 border border-slate-700 text-slate-200 hover:border-amber-500 hover:bg-slate-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Your Passion
                  </motion.p>
                  <motion.p
                    custom={1}
                    variants={passionVariants}
                    className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all bg-slate-800 border border-slate-700 text-slate-200 hover:border-amber-500 hover:bg-slate-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    E.g., Singing
                  </motion.p>
                </>
              ) : (
                about?.passion.map((profession, index) => (
                  <motion.p
                    key={index}
                    custom={index}
                    variants={passionVariants}
                    className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all bg-slate-800 border border-slate-700 text-slate-200 hover:border-amber-500 hover:bg-slate-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {profession}
                  </motion.p>
                ))
              )}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-medium text-slate-300">My Story</h3>
            <div className="prose max-w-none text-slate-300">
              {about?.description != null && about?.description != undefined ? (
                <AnimatedText
                  text={
                    about?.description.length > 450
                      ? parseStyledText(
                          about?.description.slice(0, 450) + "..."
                        )
                      : parseStyledText(about?.description)
                  }
                />
              ) : (
                <AnimatedText text="Tell your story here. What drives you, what you're passionate about, and what makes you unique." />
              )}
            </div>
          </motion.div>

          {/* Resume button */}
          <motion.div variants={itemVariants}>
            <motion.a
              href={about?.resume}
              download={
                StringUtils.capitalizeString(about?.user?.firstName || "") +
                StringUtils.capitalizeString(about?.user?.lastName || "") +
                "Resume"
              }
              target="_blank"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-medium text-base transition-all bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 20px 25px -5px rgba(251, 191, 36, 0.4), 0 8px 10px -6px rgba(251, 191, 36, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.8, duration: 0.5 },
              }}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} className="text-sm" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Social media links */}
        <motion.div
          className="flex md:flex-col items-center justify-center gap-4 md:gap-6"
          variants={itemVariants}
        >
          <h3 className="hidden md:block text-lg font-medium mb-2 text-slate-300">
            Connect
          </h3>
          <div className="flex md:flex-col items-center gap-4">
            {Object.values(socialLinks).map((socialLink, index) => (
              <motion.button
                key={index}
                custom={index}
                // variants={socialVariants}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="p-3 cursor-pointer rounded-full transition-all bg-slate-800 shadow-md shadow-black/20 hover:bg-slate-700 border border-slate-700/50"
              >
                <img
                  className="h-6 w-6"
                  src={socialLink.icon || "/placeholder.svg"}
                  alt="Social media"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
