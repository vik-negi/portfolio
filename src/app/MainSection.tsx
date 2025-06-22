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
import profileImageMobile from "@/assets/images/vikram.jpg"; // Add a smaller image
import MyData from "../data/MyData";
import { mainProfile } from "../data/constants";
import { useRef, useMemo } from "react";
import React from "react";
import Image from "next/image";

export default React.memo(function MainSection() {
  const userInfo = MyData.publicInfo;
  const sectionRef = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    isMobile ? [1, 0] : [1, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

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
      className={`min-h-screen flex flex-col items-center justify-center px-6 ${
        isMobile ? "py-6" : "py-16"
      } relative"
      id="home`}
    >
      {userInfo && (
        // (isMobile ? (
        //   <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-8">
        //     <div className="space-y-4 text-center">
        //       <h1 className="text-4xl font-bold text-white">
        //         Hey, I'm <span className="text-amber-400">{fullName}</span>
        //       </h1>
        //       <p className="text-lg text-slate-300 max-w-2xl">
        //         {userInfo?.profileDescription}
        //       </p>
        //       <button
        //         className="px-6 py-3 bg-amber-400 rounded-full text-slate-900 font-semibold"
        //         onClick={scrollToNextSection}
        //       >
        //         About Me
        //       </button>
        //     </div>
        //     <Image
        //       src={imageSrc}
        //       className="w-[200px] h-[250px] object-cover rounded-2xl"
        //       alt="Profile"
        //       height={250}
        //       width={200}
        //       loading="lazy"
        //     />
        //     <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        //       <ChevronDown
        //         className="w-6 h-6 text-amber-400"
        //         onClick={scrollToNextSection}
        //       />
        //     </div>
        //   </div>
        // ) :
        <motion.div
          style={{ opacity, scale, y }}
          className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <motion.div
            className="flex-1 space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3, delayChildren: 0.2 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
              }}
              className="space-y-2"
            >
              <motion.div
                className="inline-block px-4 py-1.5 rounded-full bg-slate-800/50 text-amber-400 text-sm font-medium mb-4 border border-slate-700/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Welcome to my portfolio
              </motion.div>
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl text-left font-bold text-white leading-tight">
                Hey, I'm{" "}
                <motion.span
                  className="text-amber-400  inline-block "
                  style={{
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    // WebkitTextFillColor: "transparent",
                  }}
                >
                  {userInfo?.user.firstName + " " + userInfo?.user.lastName}
                </motion.span>
              </motion.h1>
            </motion.div>
            <motion.p
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
              }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light"
            >
              {userInfo?.profileDescription}
            </motion.p>
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
              }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full text-slate-900 font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToNextSection}
              >
                About Me <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.div className="flex items-center gap-4 ml-2">
                <motion.a
                  href={userInfo.social_links?.github}
                  target="_blank"
                  className="p-3 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={userInfo.social_links?.linkedin}
                  target="_blank"
                  className="p-3 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={userInfo.social_links?.twitter}
                  target="_blank"
                  className="p-3 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700/50"
                  whileHover={{ scale: 1.1 }}
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
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { duration: 0.8 },
              },
            }}
          >
            <Image
              src={imageSrc}
              className="w-[280px] h-[350px] object-cover rounded-2xl z-10 relative"
              alt="Profile"
              height={350}
              width={280}
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
            onClick={scrollToNextSection}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: 2 }}
          >
            <span className="text-slate-400 text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-amber-400" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
});
