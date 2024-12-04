"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { Home, Folder, User, Mail, BriefcaseBusiness } from "lucide-react";
import { motion, useInView } from "framer-motion";
import NavbarPC from "./NavbarPC";
import "./cards.css";

const cormorant = Cormorant_Garamond({ weight: "700", subsets: ["latin"] });

const navItems = {
  en: [
    { name: "Home", href: "#home", icon: Home },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Experience", href: "#experience", icon: BriefcaseBusiness },
    { name: "Courses", href: "#courses", icon: Mail },
  ],
  pt: [
    { name: "Home", href: "#home", icon: Home },
    { name: "Projetos", href: "#projects", icon: Folder },
    { name: "Experiência", href: "#experience", icon: BriefcaseBusiness },
    { name: "Cursos", href: "#courses", icon: Mail },
  ],
};

const options = [
  ["opacity-100", "opacity-75", "opacity-75", "opacity-75"],
  ["opacity-75 !-left-4", "opacity-100", "opacity-75", "opacity-75"],
  ["opacity-75 !-left-4", "opacity-75 !-left-4", "opacity-100", "opacity-75"],
  [
    "opacity-75 !-left-4",
    "opacity-75 !-left-4",
    "opacity-75 !-left-4",
    "opacity-100",
  ],
  ["opacity-80", "opacity-80", "opacity-80", "opacity-80", "opacity-80"],
  ["opacity-75", "opacity-75", "opacity-75", "opacity-75", "opacity-75"],
];

interface NavbarProps {
  variant?: "en" | "pt";
}

export default function Navbar({ variant }: NavbarProps) {
  const [states, setStates] = useState(options[4]);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShouldShow(false);
      } else {
        setShouldShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const cardsElement = document.getElementById("cards");
    if (cardsElement) {
      cardsElement.onmousemove = (e) => {
        const cards = Array.from(
          document.getElementsByClassName(
            "card"
          ) as HTMLCollectionOf<HTMLElement>
        );

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        });
      };
    }
  }, []);

  return (
    <motion.div
      className="max-lg:hidden w-full flex justify-center sticky md:top-0 z-50"
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: isInView ? (shouldShow ? 1 : 0) : 0,
        y: isInView ? (shouldShow ? 0 : -50) : -50,
      }}
      transition={{ type: "string", stiffness: 300 }}
    >
      <div
        id="cards"
        className="flex flex-wrap gap-2 w-full justify-center items-center h-20"
      >
        <motion.div className="card rounded-lg dark:bg-[#303030] bg-muted flex h-12 relative max-md:w-[calc(100vw-2rem)] w-1/2 after:bg-radial-black-600 before:bg-radial-black-800 dark:after:bg-radial-white-600 dark:before:bg-radial-white-800 before:pointer-events-none before:opacity-0 before:transition-opacity before:duration-500 before:content-[''] before:h-full before:w-full before:absolute before:rounded-[inherit] before:left-0 before:top-0 before:z-[3] after:opacity-0 after:transition-opacity after:duration-500 after:content-[''] after:h-full after:w-full after:absolute after:rounded-[inherit] after:left-0 after:top-0 after:z-[1] hover:before:opacity-100">
          <motion.div
            onHoverStart={() => setStates(options[5])}
            onHoverEnd={() => setStates(options[4])}
            className="card-content bg-background flex items-center absolute z-[2] rounded-[7px] inset-px overflow-hidden"
          >
            <div className="p-1 pl-4 w-full flex justify-between relative z-[5]">
              <div className="flex items-center">
                <h1
                  className={`text-2xl max-md:text-3xl font-black tracking-wide ${cormorant.className}`}
                >
                  GN
                </h1>
              </div>

              <div className="relative z-10">
                <NavbarPC
                  states={states}
                  setStates={setStates}
                  navItems={variant === "pt" ? navItems.pt : navItems.en}
                  options={options}
                  variant={variant}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
