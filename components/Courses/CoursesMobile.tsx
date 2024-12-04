"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, File, MapPin } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const cormorant = Cormorant_Garamond({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

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

interface CoursesMobileProps {
  variant?: "en" | "pt";
}

export default function CoursesMobile({ variant }: CoursesMobileProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 1,
  });

  return (
    <motion.div
      id="courses"
      className="max-lg:mt-20 lg:hidden w-full container mx-auto p-4 px-8"
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
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
        className={`text-4xl tracking-tight lg:text-5xl flex items-center h-full px-4 ${cormorant.className}`}
      >
        Courses
      </motion.h1>

      <div className="flex flex-col gap-4 bg-muted p-4 rounded-2xl mt-4 mx-4">
        {variant === "pt"
          ? texts.pt.courses.map((course, index) => {
              return (
                <Card key={index} className="p-4 h-32 bg-background relative">
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription className="mt-1 flex gap-1 items-center">
                    <MapPin size={16} />
                    {course.institution}
                  </CardDescription>
                  <CardContent className="w-[91%] absolute bottom-4 left-4 p-0 flex justify-between">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {course.date}
                    </p>
                    {course.link && (
                      <Button
                        variant="link"
                        className="text-sm text-muted-foreground flex items-center p-0 h-fit"
                        asChild
                      >
                        <Link href={course.link} target="_blank">
                          <File className="mr-2 h-4 w-4" />
                          {course.linkText}
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })
          : texts.en.courses.map((course, index) => {
              return (
                <Card key={index} className="p-4 h-32 bg-background relative">
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription className="mt-1 flex gap-1 items-center">
                    <MapPin size={16} />
                    {course.institution}
                  </CardDescription>
                  <CardContent className="w-[91%] absolute bottom-4 left-4 p-0 flex justify-between">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {course.date}
                    </p>
                    {course.link && (
                      <Button
                        variant="link"
                        className="text-sm text-muted-foreground flex items-center p-0 h-fit"
                        asChild
                      >
                        <Link href={course.link} target="_blank">
                          <File className="mr-2 h-4 w-4" />
                          {course.linkText}
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}

        {/* <Card className="p-4 h-32 bg-background relative">
          <CardTitle>Hardware, Networks and Linux Fundamentals</CardTitle>
          <CardDescription className="mt-1 flex gap-1 items-center">
            <MapPin size={16} />
            People Indaiatuba
          </CardDescription>
          <CardContent className="w-[91%] absolute bottom-4 left-4 p-0 flex justify-between">
            <p className="text-sm text-muted-foreground flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Aug 2018 - Jul 2021
            </p>
            <Button
              variant="link"
              className="text-sm text-muted-foreground flex items-center p-0 h-fit"
              onClick={() => (window.location.href = "/")}
            >
              <File className="mr-2 h-4 w-4" />
              PDF
            </Button>
          </CardContent>
        </Card>

        <Card className="p-4 h-32 bg-background relative">
          <CardTitle>Google Cloud AI Foundations</CardTitle>
          <CardDescription className="mt-1 flex gap-1 items-center">
            <MapPin size={16} />
            SENAI Indaiatuba
          </CardDescription>
          <p className="text-sm text-muted-foreground flex items-center absolute pointer-events-none right-4 top-4">
            <Clock className="mr-2 h-4 w-4" />
            80 hours
          </p>
          <CardContent className="w-[91%] absolute bottom-4 left-4 p-0 flex justify-between">
            <p className="text-sm text-muted-foreground flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Oct 2022 - Nov 2022
            </p>
            <Button
              variant="link"
              className="text-sm text-muted-foreground flex items-center p-0 h-fit"
              asChild
            >
              <Link
                href="https://www.cloudskillsboost.google/public_profiles/3e64df07-1330-4bfb-95b1-3363b5c4fa5e"
                target="_blank"
              >
                <File className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </Button>
          </CardContent>
        </Card> */}
      </div>
    </motion.div>
  );
}
