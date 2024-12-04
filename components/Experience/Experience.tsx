"use client";

import { Cormorant_Garamond } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ExperienceCard from "./ExperienceCard";

const cormorant = Cormorant_Garamond({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

interface ExperienceProps {
  variant?: "en" | "pt";
}

const text = {
  en: "Experience",
  pt: "Experiência",
};

export default function Experience({ variant }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <motion.div
      id="experience"
      className="max-lg:mt-20 max-lg:w-full lg:w-1/2 container mx-auto p-4 max-lg:p-8"
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 10, scale: 1 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 10,
          scale: 1,
        }}
        whileHover={{ scale: 1.025 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={`w-fit text-4xl tracking-tight lg:text-5xl px-4 ${cormorant.className}`}
      >
        {variant === "pt" ? text.pt : text.en}
      </motion.h1>

      <ExperienceCard isInView={isInView} variant={variant} />
    </motion.div>
  );
}
