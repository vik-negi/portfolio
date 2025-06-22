"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import create from "../../utils/Theme";
import MyData from "../../data/MyData";

const Skills = () => {
  const theme = create();
  const skills = MyData.skills;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // const controls = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     controls.start("visible");
  //   }
  // }, [isInView, controls]);

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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  // Custom color based on theme
  const getGradient = (index: number) => {
    const gradients = [
      "from-slate-800/80 to-indigo-900/20",
      "from-slate-800/80 to-emerald-900/20",
      "from-slate-800/80 to-amber-900/20",
      "from-slate-800/80 to-rose-900/20",
      "from-slate-800/80 to-violet-900/20",
      "from-slate-800/80 to-cyan-900/20",
    ];
    return gradients[index % gradients.length];
  };

  const getBorderColor = (index: number) => {
    const colors = [
      "border-indigo-500/30",
      "border-emerald-500/30",
      "border-amber-500/30",
      "border-rose-500/30",
      "border-violet-500/30",
      "border-cyan-500/30",
    ];
    return colors[index % colors.length];
  };

  const getAccentColor = (index: number) => {
    const colors = [
      "bg-indigo-500",
      "bg-emerald-500",
      "bg-amber-500",
      "bg-rose-500",
      "bg-violet-500",
      "bg-cyan-500",
    ];
    return colors[index % colors.length];
  };

  return (
    <div
      id="Skills"
      className="section py-20 lg:py-28 px-4 mx-auto flex flex-col justify-center items-center relative z-10"
      ref={ref}
    >
      <div className="w-full max-w-7xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <motion.div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-amber-500/10 text-amber-400 border border-amber-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            My Expertise
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My skill set developed and applied throughout my journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          // initial="hidden"
          // animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={`skill-${index}`}
              variants={cardVariants}
              className={`h-full bg-gradient-to-br ${getGradient(
                index
              )} backdrop-blur-sm border ${getBorderColor(index)} 
                rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 shadow-slate-900/50`}
            >
              <motion.div
                className="px-6 py-8 h-full flex flex-col"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="flex items-center justify-between mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-white">
                    {skill.category}
                  </h3>
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${getAccentColor(
                      index
                    )} animate-pulse`}
                  ></div>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-2.5"
                  variants={containerVariants}
                >
                  {skill.skills.map((item, index_x) => (
                    <motion.div
                      key={`skill-x-${index_x}`}
                      variants={skillItemVariants}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 4px 12px rgba(79, 70, 229, 0.2)",
                      }}
                      className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg py-2 px-3 transition-all duration-300"
                    >
                      <div className="relative w-6 h-6 flex items-center justify-center">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 to-amber-600/20 opacity-0"
                          whileHover={{ opacity: 1, scale: 1.2 }}
                        />
                        <img
                          src={item?.skill?.image || "/placeholder.svg"}
                          alt={item?.skill?.name}
                          className="w-5 h-5 object-contain relative z-10"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-200">
                        {item?.skill?.name}
                      </span>

                      {/* Skill level indicator with animation */}
                      {item?.skill?.level && (
                        <div className="ml-auto h-1.5 w-12 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full ${getAccentColor(
                              index
                            )} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${item.skill.level}%` }}
                            transition={{
                              delay: 0.5 + index_x * 0.05,
                              duration: 1,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500/10 to-amber-600/10 blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-amber-600/10 to-amber-500/10 blur-xl"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
