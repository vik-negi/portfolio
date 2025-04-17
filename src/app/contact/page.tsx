"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { faEnvelope, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowWide } from "../../utils/useWindowWide";
import create from "../../utils/Theme";
import MyData from "../../data/MyData";

const Contact = () => {
  const theme = create();
  const publicProfile = MyData.about.user;
  const above650 = useWindowWide(650);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (publicProfile == null) return <></>;

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

  return (
    <section
      id="contact"
      ref={ref}
      className={`section sm:mt-[4px] mt-[24px] lg:mt-[128px] ${
        !above650 && "p-10"
      } relative`}
    >
      <motion.div
        className="w-full max-w-[1024px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="mb-5" variants={itemVariants}>
          <motion.div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-amber-500/10 text-amber-400 border border-amber-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.div>
          <h3 className="mt-2 text-4xl font-bold text-white mb-10">
            Don't be shy! Hit me up! 👇
          </h3>
        </motion.div>

        <motion.div className={`flex flex-wrap gap-8`}>
          <motion.div
            className="flex mb-10 mr-[5rem]"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="rounded-full bg-gradient-to-br from-slate-800 to-slate-900 h-[55px] w-[55px] flex items-center justify-center mr-5 shadow-lg border border-slate-700/50"
              whileHover={{
                boxShadow: "0 0 15px rgba(251, 191, 36, 0.3)",
                background:
                  "linear-gradient(to bottom right, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.2))",
                borderColor: "rgba(251, 191, 36, 0.5)",
              }}
            >
              <FontAwesomeIcon
                className="text-amber-400 h-10"
                icon={faMapLocation}
                width="55px"
                height="55px"
              />
            </motion.span>
            <div className="contact__info">
              <h3 className="text-2xl font-semibold text-white">Location</h3>
              <p className="text-slate-400">
                {publicProfile?.location ?? "Remote"}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex mb-10 mr-[5rem]"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="rounded-full bg-gradient-to-br from-slate-800 to-slate-900 h-[55px] w-[55px] flex items-center justify-center mr-5 shadow-lg border border-slate-700/50"
              whileHover={{
                boxShadow: "0 0 15px rgba(251, 191, 36, 0.3)",
                background:
                  "linear-gradient(to bottom right, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.2))",
                borderColor: "rgba(251, 191, 36, 0.5)",
              }}
            >
              <FontAwesomeIcon
                className="text-amber-400 h-10"
                icon={faEnvelope}
                width="55px"
                height="55px"
              />
            </motion.span>
            <div className="contact__info">
              <h3 className="text-2xl font-semibold text-white">Mail</h3>
              <p className="text-slate-400">{publicProfile.email}</p>
            </div>
          </motion.div>

          <motion.div
            className="flex mb-10 mr-[5rem] hover:cursor-pointer"
            onClick={() =>
              window.open(`https://wa.me/${publicProfile.mobileNumber}`)
            }
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="rounded-full bg-gradient-to-br from-slate-800 to-slate-900 h-[55px] w-[55px] flex items-center justify-center mr-5 shadow-lg border border-slate-700/50"
              whileHover={{
                boxShadow: "0 0 15px rgba(251, 191, 36, 0.3)",
                background:
                  "linear-gradient(to bottom right, rgba(251, 191, 36, 0.2), rgba(245, 158, 11, 0.2))",
                borderColor: "rgba(251, 191, 36, 0.5)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="34"
                height="34"
                viewBox="0 0 50 50"
                className="animate-pulse"
              >
                <circle cx="25" cy="25" r="24" fill="#25D366" />

                <path
                  fill="#FFFFFF"
                  d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"
                ></path>

                <path
                  fill="#25D366"
                  d="M21.53,29.12c1.16,1.17,2.34,2.02,3.55,2.6c0.58,0.29,1.05,0.25,1.44-0.15c0.44-0.46,0.88-1,1.27-1.51
    c0.3-0.41,0.86-0.53,1.32-0.35c0.98,0.36,2.57,1.04,3.68,1.47c0.58,0.22,0.96,0.36,1.14,0.64c0.19,0.3,0.19,0.76,0.1,1.1
    c-0.34,1.33-1.77,2.12-2.89,2.25c-1.34,0.15-2.84-0.16-4.54-0.84c-1.95-0.78-4.1-2.28-5.91-4.13c-1.79-1.84-3.29-3.97-4.08-5.91
    c-0.68-1.7-0.98-3.19-0.84-4.54c0.13-1.12,0.92-2.55,2.25-2.89c0.33-0.09,0.79-0.09,1.1,0.1c0.27,0.18,0.42,0.57,0.64,1.14
    c0.43,1.11,1.11,2.7,1.47,3.68c0.18,0.46,0.06,1.02-0.35,1.32c-0.51,0.39-1.05,0.83-1.51,1.27C21.28,28.07,21.24,28.55,21.53,29.12z"
                />
              </svg>
            </motion.span>
            <div className="contact__info">
              <h3 className="text-2xl font-semibold text-white">WhatsApp</h3>
              <p className="text-slate-400">Send me a message</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
