"use client";

import { motion, useInView } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import { useRef } from "react";
import ProjectsItem from "./ProjectsItem";

const cormorant = Cormorant_Garamond({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

interface ProjectsProps {
  variant?: "en" | "pt";
}

const texts = {
  en: {
    title: "Projects",
    project: {
      title: "Hidrate-se",
      description:
        "The Hidrate-se app allows you to effectively manage your daily water consumption, setting personalized goals and tracking your progress. Additionally, you can connect with friends, boosting healthy habits in an engaging way.",
      github: "https://github.com/GabrielNito/hidrate-se",
      vercel: "https://hidrate-se.vercel.app/",
    },
  },
  pt: {
    title: "Projetos",
    project: {
      title: "Hidrate-se",
      description:
        "Hidrate-se é um app que permite gerir de forma eficaz o seu consumo diário de água, estabelecendo metas personalizadas e acompanhando o seu progresso. Além disso, você pode se conectar com amigos, engajando hábitos saudáveis de forma interativa.",
      github: "https://github.com/GabrielNito/hidrate-se",
      vercel: "https://hidrate-se.vercel.app/",
    },
  },
};

export default function Projects({ variant }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <motion.div
      id="projects"
      className="max-lg:mt-20 max-lg:w-full lg:w-1/2 container mx-auto p-2 max-lg:px-8 flex flex-col justify-center h-full"
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

      <div className="flex flex-col gap-8 lg:mt-8 mt-4">
        <ProjectsItem
          delay={0}
          title={
            variant === "pt" ? texts.pt.project.title : texts.en.project.title
          }
          description={
            variant === "pt"
              ? texts.pt.project.description
              : texts.en.project.description
          }
          github={
            variant === "pt" ? texts.pt.project.github : texts.en.project.github
          }
          vercel={
            variant === "pt" ? texts.pt.project.vercel : texts.en.project.vercel
          }
        />
      </div>
    </motion.div>
  );
}
