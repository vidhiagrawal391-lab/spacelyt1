"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedLinePath() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 10%", "end 90%"]
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 58,
    damping: 22,
    mass: 0.45
  });
  const opacity = useTransform(scrollYProgress, [0, 0.04, 0.96, 1], [0, 1, 1, 0.5]);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 hidden md:block">
      <svg className="sticky top-0 h-screen w-full overflow-visible" viewBox="0 0 1440 980" preserveAspectRatio="none">
        <path
          d="M720 44 C673 44 633 82 633 130 L633 178 C633 222 671 258 720 258 C769 258 807 222 807 178 L807 130 C807 82 767 44 720 44 Z"
          className="fill-none stroke-[#ff2daa]/15 stroke-[1.2]"
        />
        <motion.path
          d="M720 44 C673 44 633 82 633 130 L633 178 C633 222 671 258 720 258 C769 258 807 222 807 178 L807 130 C807 82 767 44 720 44 Z M720 258 C720 340 720 398 720 496 C720 610 610 618 610 720 C610 842 830 828 830 954"
          className="path-glow fill-none stroke-[#ff2daa] stroke-[2.5]"
          style={{ pathLength, opacity }}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M720 258 C720 340 720 398 720 496 C720 610 610 618 610 720 C610 842 830 828 830 954"
          className="fill-none stroke-[#38bdf8]/45 stroke-[1]"
          strokeDasharray="5 13"
          style={{ pathLength, opacity }}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
