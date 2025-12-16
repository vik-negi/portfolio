"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import create from "../../utils/Theme";
import MyData from "../../data/MyData";
import { cn } from "@/utils/cn";

const Skills = () => {
  const theme = create();
  const skills = MyData.skills;
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const getAccentColor = (index: number) => {
    const colors = [
      "from-indigo-500 to-violet-500",
      "from-emerald-500 to-teal-500",
      "from-amber-500 to-orange-500",
      "from-rose-500 to-pink-500",
      "from-cyan-500 to-sky-500",
      "from-fuchsia-500 to-purple-500",
    ];
    return colors[index % colors.length];
  };

  return (
    <div
      id="Skills"
      className="section py-16 px-4 mx-auto flex flex-col justify-center items-center relative z-10"
      ref={ref}
    >
      <div className="w-full max-w-7xl flex flex-col items-center">
        {/* Header */}
        <div
          className="mb-16 text-center space-y-4"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            My Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            My skill set developed and applied throughout my journey, constantly expanding.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={`skill-${index}`}
              variants={cardVariants}
              className="group relative h-full bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
            >
              {/* Hover Gradient Background */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br",
                getAccentColor(index)
              )} />

              <div className="p-6 h-full flex flex-col relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                    style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} // Fallback/hack, better with dynamic classes
                  >
                    <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", getAccentColor(index))}>
                      {skill.category}
                    </span>
                  </h3>
                  <div className={cn("h-2 w-2 rounded-full bg-gradient-to-r", getAccentColor(index))} />
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skill.skills.map((item, index_x) => (
                    <motion.div
                      key={`skill-x-${index_x}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/80 border border-white/5 hover:border-white/20 rounded-lg py-2 px-3 transition-all duration-200 cursor-default"
                    >
                      <div className="relative w-5 h-5 flex items-center justify-center grayscale-[50%] group-hover:grayscale-0 transition-all">
                        <img
                          src={item?.skill?.image || "/placeholder.svg"}
                          alt={item?.skill?.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-300 group-hover:text-slate-100">
                        {item?.skill?.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
