"use client";

import { motion, useInView } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import { useRef, useState } from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const cormorant = Cormorant_Garamond({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

interface ProjectsItemProps {
  title: string;
  description: string;
  github: string;
  vercel: string;
  orientation?: "left" | "right";
  delay: number;
}

export default function ProjectsItem({
  title,
  description,
  github,
  vercel,
  orientation,
  delay,
}: ProjectsItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className={`mx-auto p-2 flex max-lg:flex-col justify-between items-center h-full max-lg:gap-4 ${
        orientation === "right" && "flex-row-reverse"
      }`}
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
      transition={{ delay, ease: "easeInOut", duration: 0.3 }}
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
          className={`w-full text-3xl tracking-tight lg:text-5xl max-lg:px-6 ${cormorant.className} lg:text-center`}
          ref={ref}
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -25 }}
          transition={{ delay: 0.3 + delay, ease: "easeInOut", duration: 0.3 }}
        >
          {title}
        </motion.h1>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -25 }}
        transition={{ delay: 0.3 + delay, ease: "easeInOut", duration: 0.3 }}
        className="max-lg:w-full max-lg:px-4"
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

      <motion.div
        className="max-lg:px-6 lg:w-1/2 italic font-light mt-2 max-w-[60ch] tracking-wide leading-relaxed break-words flex flex-col gap-2"
        ref={ref}
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -25 }}
        transition={{ delay: 0.45 + delay, ease: "easeInOut", duration: 0.3 }}
      >
        <motion.p>{description}</motion.p>
        <motion.div
          className="flex gap-4"
          ref={ref}
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -25 }}
          transition={{ delay: 0.6 + delay, ease: "easeInOut", duration: 0.3 }}
        >
          <Button
            variant="link"
            className="flex items-center gap-1 px-1 not-italic"
            asChild
          >
            <Link href={github} target="_blank">
              <GitHubLogoIcon />
              GitHub
            </Link>
          </Button>
          <Button
            variant="link"
            className="flex items-center gap-1 px-1 not-italic"
            asChild
          >
            <Link href={vercel} target="_blank">
              <VercelLogoIcon />
              Vercel
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
