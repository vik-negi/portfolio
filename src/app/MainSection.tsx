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
import MyData from "../data/MyData";
import { mainProfile } from "../data/constants";
import { useRef } from "react";

export default function MainSection() {
  const userInfo = MyData.publicInfo;
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 py-16 relative"
      id="home"
    >
      {userInfo && (
        <motion.div
          style={{ opacity, scale, y }}
          className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <motion.div
            className="flex-1 space-y-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.div
                className="inline-block px-4 py-1.5 rounded-full bg-slate-800/50 text-amber-400 text-sm font-medium mb-4 backdrop-blur-sm border border-slate-700/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Welcome to my portfolio
              </motion.div>
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hey, I'm{" "}
                <motion.span
                  className="text-amber-400 inline-block"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    backgroundImage: [
                      "linear-gradient(45deg, #f59e0b, #f97316)",
                      "linear-gradient(45deg, #f97316, #f59e0b)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {StringUtils.capitalizeString(userInfo?.user.firstName) +
                    " " +
                    StringUtils.capitalizeString(userInfo?.user.lastName)}
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light"
              style={{
                letterSpacing: "0.5px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {userInfo?.profileDescription}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full text-slate-900 font-semibold text-lg transition-all"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                name="about"
                onClick={scrollToNextSection}
              >
                About Me
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.div className="flex items-center gap-4 ml-2">
                <motion.a
                  href={userInfo.social_links?.github}
                  target="_blank"
                  className="p-3 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-all border border-slate-700/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={userInfo.social_links?.linkedin}
                  target="_blank"
                  className="p-3 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-all border border-slate-700/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={userInfo.social_links?.twitter}
                  target="_blank"
                  className="p-3 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-all border border-slate-700/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/20 to-amber-700/20 rounded-2xl blur-xl opacity-70 animate-pulse"></div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                // src={userInfo?.user?.profilePic ?? mainProfile}
                src={profileImage.src}
                className="w-[280px] h-[350px] object-cover rounded-2xl shadow-2xl z-10 relative"
                style={{
                  objectPosition: "center",
                  filter: "contrast(1.05) brightness(1.05)",
                }}
                alt="Profile"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/80 to-transparent opacity-60 z-20"></div>

              {/* Animated border */}
              <motion.div
                className="absolute -inset-1 rounded-2xl z-0 opacity-50"
                animate={{
                  background: [
                    "linear-gradient(0deg, rgba(251,191,36,0) 0%, rgba(251,191,36,0.5) 50%, rgba(251,191,36,0) 100%)",
                    "linear-gradient(90deg, rgba(251,191,36,0) 0%, rgba(251,191,36,0.5) 50%, rgba(251,191,36,0) 100%)",
                    "linear-gradient(180deg, rgba(251,191,36,0) 0%, rgba(251,191,36,0.5) 50%, rgba(251,191,36,0) 100%)",
                    "linear-gradient(270deg, rgba(251,191,36,0) 0%, rgba(251,191,36,0.5) 50%, rgba(251,191,36,0) 100%)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={scrollToNextSection}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <span className="text-slate-400 text-sm mb-2">Scroll Down</span>
        <ChevronDown className="w-6 h-6 text-amber-400" />
      </motion.div>
    </section>
  );
}
