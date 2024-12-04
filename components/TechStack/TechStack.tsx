"use client";

import { motion, useInView } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import { useRef } from "react";
import TechStackCard from "./TechStackCard";

const cormorant = Cormorant_Garamond({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

interface TechStackProps {
  variant?: "en" | "pt";
}

const stack = [
  { text: "Next.js", image: "/techs/nextjs.svg" },
  { text: "JavaScript", image: "/techs/javascript.png" },
  { text: "TypeScript", image: "/techs/typescript.png" },
  { text: "TailwindCSS", image: "/techs/tailwindcss.png" },
  { text: "Prisma", image: "/techs/prisma.svg" },
  { text: "SQLite", image: "/techs/sqlite.webp" },
  { text: "PostgreSQL", image: "/techs/postgresql.png" },
  { text: "Python", image: "/techs/python.png" },
];

const texts = {
  en: {
    title: "Tech Stack",
  },
  pt: {
    title: "Tecnologias",
  },
};

export default function TechStack({ variant }: TechStackProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.75 });

  return (
    <motion.div
      id="stack"
      className="max-lg:mt-20 max-lg:w-full lg:w-1/2 container mx-auto p-2 max-lg:px-8 h-full"
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
        {variant === "pt" ? texts.pt.title : texts.en.title}
      </motion.h1>

      <div className="mt-4 bg-muted grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 p-4 rounded-2xl">
        {stack.map((tech, index) => (
          <TechStackCard
            text={tech.text}
            image={tech.image}
            index={index}
            key={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
