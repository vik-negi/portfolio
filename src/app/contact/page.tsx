"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const Contact = () => {
  const ref = useRef(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 12 },
    visible: {
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const contactMethods = [
    {
      icon: MapPin,
      title: "Location",
      value: profile.location,
      action: null,
    },
    {
      icon: Mail,
      title: "Email",
      value: profile.email,
      action: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "Send a message",
      action: `https://wa.me/${profile.whatsapp}`,
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-12 border-t border-border pt-6">
          <p className="text-sm text-ink-muted uppercase tracking-wide mb-3">05 / Contact</p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink tracking-tight mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-ink-muted text-lg max-w-xl">
            Have a role or a project in mind? I&apos;d welcome the conversation.
          </p>
        </motion.div>

        <div>
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action ?? undefined}
              target={method.action ? "_blank" : undefined}
              rel={method.action ? "noreferrer" : undefined}
              variants={itemVariants}
              className={`group flex items-center justify-between py-5 border-b border-border ${index === 0 ? "border-t" : ""} ${method.action ? "hover:pl-2 transition-all" : ""}`}
            >
              <div className="flex items-center gap-4">
                <method.icon className="w-4 h-4 text-accent" />
                <span className="text-sm text-ink-muted w-24 shrink-0">{method.title}</span>
                <span className="text-ink font-medium">{method.value}</span>
              </div>
              {method.action && (
                <ArrowRight className="w-4 h-4 text-ink-muted -rotate-45 group-hover:rotate-0 group-hover:text-accent transition-transform" />
              )}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
