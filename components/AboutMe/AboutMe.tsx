"use client";

import { motion, useInView } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import { useRef } from "react";
import { Separator } from "../ui/separator";

const cormorant = Cormorant_Garamond({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

interface AboutMeProps {
  variant?: "en" | "pt";
}

const texts = {
  en: [
    "About me",
    "I'm a Multiplatform Software Development student, mainly focused in React and Next.js, exploring new ways to make better UIs",
  ],
};

export default function AboutMe({ variant }: AboutMeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.75 });

  const highlightVariants = {
    initial: { width: "0%" },
    animate: { width: "100%", transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      id="about"
      className="max-lg:w-full lg:w-1/2 mx-auto p-8 max-lg:mt-20 flex max-lg:flex-col max-lg:gap-4 justify-between items-center h-full"
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
        className="max-lg:w-full lg:w-1/2"
      >
        <motion.h1
          className={`w-full text-4xl tracking-tight lg:text-5xl px-4 ${cormorant.className} lg:text-right`}
          ref={ref}
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -25 }}
          transition={{ delay: 0.15, ease: "easeInOut", duration: 0.3 }}
        >
          About me
        </motion.h1>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -25 }}
        transition={{ delay: 0.3, ease: "easeInOut", duration: 0.3 }}
        className="max-lg:w-full"
      >
        <Separator
          orientation="vertical"
          className="h-[100px] bg-muted-foreground mx-12 max-lg:hidden"
        />
        <Separator
          orientation="horizontal"
          className="bg-muted-foreground lg:hidden"
        />
      </motion.div>

      <motion.p
        className="max-lg:hidden w-1/2 italic font-light lg:mt-2 max-w-[60ch] tracking-wide leading-relaxed break-words"
        ref={ref}
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -25 }}
        transition={{ delay: 0.45, ease: "easeInOut", duration: 0.3 }}
      >
        I am a student on the{" "}
        <motion.span className="relative inline-block">
          Multiplatform Software Development
          <motion.span
            className="absolute inset-0 bg-highlight mix-blend-multiply dark:mix-blend-normal dark:bg-white/20"
            initial="initial"
            animate="animate"
            variants={highlightVariants}
          />
        </motion.span>{" "}
        course aiming for a career in{" "}
        <motion.span className="relative inline-block">
          Web Development
          <motion.span
            className="absolute inset-0 bg-highlight mix-blend-multiply dark:mix-blend-normal dark:bg-white/20"
            initial="initial"
            animate="animate"
            variants={highlightVariants}
          />
        </motion.span>
        , seeking an entry-level position to improve my knowledge with practice.
      </motion.p>

      <motion.p
        className="lg:hidden w-full italic font-light lg:mt-2 max-w-[60ch] tracking-wide leading-relaxed break-words px-4"
        ref={ref}
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -25 }}
        transition={{ delay: 0.45, ease: "easeInOut", duration: 0.3 }}
      >
        I am a student on the{" "}
        <span className="bg-highlight dark:bg-white/20">
          Multiplatform Software Development
        </span>{" "}
        course aiming for a career in{" "}
        <span className="bg-highlight dark:bg-white/20">Web Development</span> ,
        seeking an entry-level position to improve my knowledge with practice.
      </motion.p>
    </motion.div>
  );
}
