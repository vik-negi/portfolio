"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { faEnvelope, faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowWide } from "../../utils/useWindowWide";
import create from "../../utils/Theme";
import MyData from "../../data/MyData";
import { cn } from "@/utils/cn";

const Contact = () => {
  const theme = create();
  const publicProfile = MyData.about.user;
  const above650 = useWindowWide(650);
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  if (publicProfile == null) return <></>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const contactMethods = [
    {
      icon: faMapLocation,
      title: "Location",
      value: publicProfile?.location ?? "Remote",
      action: null,
      color: "text-rose-400",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/20"
    },
    {
      icon: faEnvelope,
      title: "Email",
      value: publicProfile.email,
      action: `mailto:${publicProfile.email}`,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20"
    },
    {
      icon: faPhone, // Using phone icon for WhatsApp to keep style consistent, or use custom SVG
      title: "WhatsApp",
      value: "Send a message",
      action: `https://wa.me/${publicProfile.mobileNumber}`,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      isWhatsApp: true
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="section py-20 px-4 max-w-7xl mx-auto relative z-10"
    >
      <motion.div
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-16 space-y-4">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium border border-rose-500/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
            Get In Touch
          </motion.div>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Let's Work Together
          </motion.h3>
          <motion.p variants={itemVariants} className="text-slate-400 text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
          variants={containerVariants}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => method.action && window.open(method.action, "_self")}
              className={cn(
                "relative p-8 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-white/5 flex flex-col items-center text-center gap-4 group transition-all duration-300 hover:bg-slate-900/60",
                method.action ? "cursor-pointer hover:border-white/10 hover:shadow-xl" : ""
              )}
            >
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2 transition-transform duration-300 group-hover:scale-110",
                method.bgColor,
                method.color,
                "border",
                method.borderColor
              )}>
                {method.isWhatsApp ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    className="fill-current"
                  >
                    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
                  </svg>
                ) : (
                  <FontAwesomeIcon icon={method.icon} />
                )}
              </div>
              <h4 className="text-xl font-semibold text-white">{method.title}</h4>
              <p className="text-slate-400 font-medium group-hover:text-white transition-colors ">
                {method.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
