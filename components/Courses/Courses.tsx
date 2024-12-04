"use client";

import { Cormorant_Garamond } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CoursesCard from "./CoursesCard";
import "./courses.css";

const cormorant = Cormorant_Garamond({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

interface CoursesProps {
  variant?: "en" | "pt";
}

const texts = {
  en: {
    title: "Courses",
    courses: [
      {
        title: "English - Advanced",
        institution: "People Indaiatuba",
        date: "Aug 2018 - Fev 2024",
      },
      {
        title: "Hardware, Networks and Linux Fundamentals",
        institution: "People Indaiatuba",
        date: "Aug 2018 - Jul 2021",
      },
      {
        title: "Google Cloud AI Foundations",
        institution: "SENAI Indaiatuba",
        date: "Oct 2022 - Nov 2022",
        duration: "80 hours",
        link: "https://www.cloudskillsboost.google/public_profiles/3e64df07-1330-4bfb-95b1-3363b5c4fa5e",
        linkText: "Profile",
      },
    ],
  },
  pt: {
    title: "Cursos",
    courses: [
      {
        title: "Inglês - Avançado",
        institution: "People Indaiatuba",
        date: "Ago 2018 - Fev 2024",
      },
      {
        title: "Hardware, Redes e Fundamentos de Linux",
        institution: "People Indaiatuba",
        date: "Ago 2018 - Jul 2021",
      },
      {
        title: "Google Cloud AI Foundations",
        institution: "SENAI Indaiatuba",
        date: "Out 2022 - Nov 2022",
        duration: "80 horas",
        link: "https://www.cloudskillsboost.google/public_profiles/3e64df07-1330-4bfb-95b1-3363b5c4fa5e",
        linkText: "Perfil",
      },
    ],
  },
};

export default function Courses({ variant }: CoursesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 1,
  });

  return (
    <motion.div
      id="courses"
      className="courses-pc max-lg:hidden w-1/2 container mx-auto p-4"
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <div className="aspect-[2/1] grid grid-cols-4 grid-rows-3">
        <div className="bg-muted col-span-2 row-span-1 pb-4 pr-4 relative">
          <div className="bg-background w-4 h-4 absolute bottom-0 left-0">
            <div className="bg-muted w-4 h-4 absolute bottom-0 left-0 rounded-tl-2xl" />
          </div>

          <div className="bg-background w-4 h-4 absolute top-0 right-0">
            <div className="bg-muted w-4 h-4 absolute bottom-0 left-0 rounded-tl-2xl" />
          </div>

          <div className="w-full h-full bg-background rounded-br-[3rem]">
            <div
              className={`flex justify-center items-center h-full ${cormorant.className}`}
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
                className={`text-2xl tracking-tight lg:text-5xl flex justify-center items-center h-full px-4 ${cormorant.className}`}
              >
                {variant === "pt" ? texts.pt.title : texts.en.title}
              </motion.h1>
            </div>
          </div>
        </div>

        <div className="p-4 pl-0 col-span-2 row-span-1 rounded-2xl rounded-l-none bg-muted relative">
          <CoursesCard
            title={
              variant === "pt"
                ? texts.pt.courses[0].title
                : texts.en.courses[0].title
            }
            institution={
              variant === "pt"
                ? texts.pt.courses[0].institution
                : texts.en.courses[0].institution
            }
            date={
              variant === "pt"
                ? texts.pt.courses[0].date
                : texts.en.courses[0].date
            }
            isInView={isInView}
          />
        </div>

        <div className="p-4 pt-0 col-span-3 row-span-1 rounded-bl-2xl bg-muted">
          <CoursesCard
            title={
              variant === "pt"
                ? texts.pt.courses[1].title
                : texts.en.courses[1].title
            }
            institution={
              variant === "pt"
                ? texts.pt.courses[1].institution
                : texts.en.courses[1].institution
            }
            date={
              variant === "pt"
                ? texts.pt.courses[1].date
                : texts.en.courses[1].date
            }
            isInView={isInView}
          />
        </div>

        <div className="bg-muted col-span-1 row-span-2">
          <div className="bg-background w-full h-full rounded-tl-[3rem] flex justify-center items-center" />
        </div>

        <div className="bg-muted col-span-1 row-span-1">
          <div className="bg-background w-full h-full rounded-tr-[3rem]" />
        </div>

        <div className="p-4 pt-0 col-span-2 row-span-1 bg-muted rounded-b-2xl">
          <CoursesCard
            title={
              variant === "pt"
                ? texts.pt.courses[2].title
                : texts.en.courses[2].title
            }
            institution={
              variant === "pt"
                ? texts.pt.courses[2].institution
                : texts.en.courses[2].institution
            }
            date={
              variant === "pt"
                ? texts.pt.courses[2].date
                : texts.en.courses[2].date
            }
            duration={
              variant === "pt"
                ? texts.pt.courses[2].duration
                : texts.en.courses[2].duration
            }
            link={texts.en.courses[2].link}
            linkText={texts.en.courses[2].linkText}
            isInView={isInView}
          />
        </div>
      </div>
    </motion.div>
  );
}
