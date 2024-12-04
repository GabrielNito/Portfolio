"use client";

import { motion, useInView } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import { useRef } from "react";

const cormorant = Cormorant_Garamond({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

interface HomeProps {
  variant?: "en" | "pt";
}

const texts = {
  en: [
    "Hi, i'm Gabriel Nito",
    "I'm a Multiplatform Software Development student, mainly focused in React and Next.js, exploring new ways to make better UIs",
  ],
  pt: [
    "Olá, eu sou Gabriel Nito",
    "Sou um estudante de Desenvolvimento de Software Multiplataforma, focado em React e Next.js, explorando novas maneiras de fazer melhores UIs",
  ],
};

export default function Home({ variant }: HomeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <motion.div
      id="home"
      className="max-lg:w-full lg:w-1/2 mx-auto p-8 max-lg:mt-20 flex max-lg:flex-col max-lg:gap-4 justify-between items-end h-full"
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <motion.div
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
        className="max-lg:w-full lg:w-1/2 flex flex-col gap-2"
      >
        <motion.h1
          className={`w-full text-4xl tracking-tight lg:text-5xl px-4 ${cormorant.className} lg:text-right`}
          ref={ref}
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -25 }}
          transition={{ delay: 0.15, ease: "easeInOut", duration: 0.3 }}
        >
          {variant === "pt" ? texts.pt[0] : texts.en[0]}
        </motion.h1>
        <motion.p
          className={`w-full tracking-wide px-4 lg:text-right font-light`}
          ref={ref}
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -25 }}
          transition={{ delay: 0.15, ease: "easeInOut", duration: 0.3 }}
        >
          {variant === "pt" ? texts.pt[1] : texts.en[1]}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
