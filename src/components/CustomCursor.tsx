"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 300, damping: 30, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 300, damping: 30, mass: 0.5 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || prefersReducedMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const handleMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button']"));
    };

    const handleDown = (e: MouseEvent) => {
      const id = Date.now();
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples((r) => r.filter((ripple) => ripple.id !== id)), 500);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mousedown", handleDown);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
    };
  }, [dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none z-[200]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent pointer-events-none z-[200]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          opacity: hovering ? 0.7 : 0.35,
          scale: hovering ? 1 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed top-0 left-0 rounded-full border border-accent pointer-events-none z-[200]"
          style={{ left: ripple.x, top: ripple.y, translateX: "-50%", translateY: "-50%" }}
          initial={{ width: 10, height: 10, opacity: 0.7 }}
          animate={{ width: 70, height: 70, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      ))}
    </>
  );
}
