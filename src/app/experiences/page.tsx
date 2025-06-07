"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import DateTimeFormatter from "../../utils/dateTime_functionality";
import Link from "next/link";
import MyData from "../../data/MyData";
import AddSectionDetailsBtn from "../../utils/AddSectionDetailsBtn";
import React from "react";

const TimelineIcon = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-10 w-10"
  >
    <path
      fillRule="evenodd"
      d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
      clipRule="evenodd"
    />
  </svg>
));

const ExperienceTimeline = React.memo(
  ({ experience, index }: { experience: any; index: number }) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    // Memoize date formatting
    const formattedFrom = useMemo(
      () =>
        experience.from && DateTimeFormatter.getFormattedDate(experience.from),
      [experience.from]
    );
    const formattedTo = useMemo(
      () =>
        experience.to
          ? DateTimeFormatter.getFormattedDate(experience.to)
          : "Present",
      [experience.to]
    );

    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0, y: isMobile ? 0 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: isMobile ? 0.3 : 0.6,
          ease: "easeOut",
          delay: isMobile ? 0 : index * 0.2,
        },
      },
    };

    const iconVariants = {
      hidden: { scale: 0, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: isMobile ? 0 : index * 0.2 + 0.3,
        },
      },
    };

    const contentVariants = {
      hidden: { opacity: 0, x: isMobile ? 0 : -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: isMobile ? 0.3 : 0.5,
          delay: isMobile ? 0 : index * 0.2 + 0.5,
        },
      },
    };

    if (isMobile) {
      return (
        <div className="flex-start mb-10">
          <div className="relative -ml-[23px] flex h-[45px] w-[65px] items-center justify-center rounded-full border border-2 bg-slate-900 text-amber-400 z-10">
            <TimelineIcon />
          </div>
          <div className="ml-6 block max-w-5xl rounded-lg p-6 bg-slate-900/30">
            <div className="mb-4 flex gap-3 items-center">
              <Link href="#" className="text-md text-amber-400">
                {experience.title}
              </Link>
              <p className="text-[12px] text-slate-400">
                {formattedFrom} - {formattedTo}
              </p>
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              @{experience.company} | {experience.location}
            </h3>
            <div className="mb-4 flex flex-wrap gap-2">
              {experience.skills.map((skill: string, index_x: number) => (
                <span
                  key={index_x}
                  className="rounded-2xl border px-6 py-2 text-[10px] font-semibold text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mb-6 text-[14px] text-slate-300">
              {experience.description.length > 200
                ? experience.description.substring(0, 200) + "..."
                : experience.description}
            </p>
            <button
              type="button"
              className="btn btn-primary mr-4 rounded-md py-2 text-[14px] font-semibold text-white bg-amber-500 hover:bg-amber-400"
            >
              View Details
            </button>
          </div>
        </div>
      );
    }

    return (
      <motion.div
        className="flex-start md:flex"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          className="relative -ml-[23px] flex h-[45px] w-[45px] px-4 items-center justify-center rounded-full border border-2 border-amber-500/30 bg-slate-900 text-amber-400 z-10"
          variants={iconVariants}
        >
          <TimelineIcon />
        </motion.div>
        <motion.div
          className="mb-20 ml-6 block max-w-5xl rounded-lg p-6 backdrop-blur-sm border border-slate-800/50 bg-slate-900/30"
          variants={contentVariants}
        >
          <div className="mb-4 flex gap-3 items-center">
            <Link
              href="#"
              className="text-md text-amber-400 transition duration-150 ease-in-out hover:text-amber-300"
            >
              {experience.title}
            </Link>
            <p className="text-[12px] text-slate-400">
              {formattedFrom} - {formattedTo}
            </p>
          </div>
          <h3 className="mb-4 text-2xl font-semibold text-white">
            @{experience.company} | {experience.location}
          </h3>
          <motion.div
            className="mb-4 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {experience.skills.map((skill: string, index_x: number) => (
              <motion.span
                key={index_x}
                className="rounded-2xl border border-amber-500/30 px-6 py-2 text-[10px] font-semibold text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index_x * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 12px rgba(251, 191, 36, 0.2)",
                  borderColor: "rgba(251, 191, 36, 0.5)",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
          <p className="mb-6 text-[14px] text-slate-300">
            {experience.description.length > 200
              ? experience.description.substring(0, 200) + "..."
              : experience.description}
          </p>
          <motion.span
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <button
              type="button"
              className="btn btn-primary mr-4 rounded-md py-2 text-[14px] font-semibold text-white relative overflow-hidden group"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <span className="relative z-10">View Details</span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
            </button>
            <motion.div
              className="hidden sm:inline ml-2 text-amber-400"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: 2,
                repeatType: "reverse",
              }}
            >
              <FontAwesomeIcon
                className="icon-move-animation"
                icon={faArrowRight}
              />
            </motion.div>
          </motion.span>
        </motion.div>
      </motion.div>
    );
  }
);

export default function Experiences() {
  const experiences = MyData.experience.experiences;
  const ref = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const isInView = useInView(ref, {
    once: true,
    margin: isMobile ? "-50px" : "-100px",
  });

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: isMobile ? 0 : -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.6 },
    },
  };

  return (
    <section
      className="section experience-section py-16 md:py-24 lg:py-32 container mx-auto px-4 sm:px-6 lg:px-8 relative"
      id="experience"
      ref={ref}
    >
      <div
        style={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-amber-500/10 text-amber-400 border border-amber-500/20"
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
            whileTap={{ scale: isMobile ? 1 : 0.95 }}
          >
            Work History
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-white">
            Experience
          </h2>
          <p className="text-lg text-slate-400">
            These are the experiences where I've previously worked.
          </p>
        </motion.div>

        {experiences == null ? (
          <AddSectionDetailsBtn title={"Add Experience"} route={undefined} />
        ) : (
          <ol className="border-l-2 border-amber-500/30">
            {experiences.map((experience, index) => (
              <ExperienceTimeline
                key={experience._id + index}
                experience={experience}
                index={index}
              />
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
