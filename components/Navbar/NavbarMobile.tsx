"use client";

import { Cormorant_Garamond } from "next/font/google";
import {
  Home,
  Folder,
  User,
  Mail,
  Menu,
  BriefcaseBusiness,
} from "lucide-react";
import "./cards.css";
import { Button } from "../ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "../ModeToggle";
import NavbarLanguage from "./NavbarLanguage";

const cormorant = Cormorant_Garamond({ weight: "700", subsets: ["latin"] });

const navItems = {
  en: [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Experience", href: "#experience", icon: BriefcaseBusiness },
    { name: "Courses", href: "#courses", icon: Mail },
  ],
  pt: [
    { name: "Home", href: "/", icon: Home },
    { name: "Projetos", href: "#projects", icon: Folder },
    { name: "Experiência", href: "#experience", icon: BriefcaseBusiness },
    { name: "Cursos", href: "#courses", icon: Mail },
  ],
};

interface NavbarMobileProps {
  variant?: "en" | "pt";
}

export default function NavbarMobile({ variant }: NavbarMobileProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="hidden max-lg:flex sticky top-0 left-0 z-50 px-8 py-2">
      <motion.div
        layout
        initial={{ height: "3rem" }}
        animate={{ height: navbarOpen ? "13rem" : "3rem" }}
        transition={{
          layout: { duration: 0.3, ease: "easeInOut" },
        }}
        className="w-full bg-background rounded-2xl border dark:border-[#303030] border-muted"
      >
        <div className="w-full h-full px-4 py-1 flex flex-col justify-between items-center relative z-[5]">
          <div className="flex w-full justify-between items-center mt-[2px]">
            <h1
              className={`${cormorant.className} text-2xl max-md:text-3xl font-black tracking-wide`}
            >
              GN
            </h1>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Menu />
            </Button>
          </div>
          <div
            className={`${!navbarOpen && "hidden"} flex w-full justify-between`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: navbarOpen ? 1 : 0 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="w-fit flex flex-col gap-1 justify-center"
            >
              <ModeToggle variant={variant} mobile />
              <NavbarLanguage variant={variant} mobile />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: navbarOpen ? 1 : 0 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="w-fit flex flex-col gap-1"
            >
              {variant === "pt"
                ? navItems.pt.map((item, index: number) => {
                    return (
                      <Button
                        key={index}
                        onClick={() => (window.location.href = item.href)}
                        variant="ghost"
                        className="justify-end flex gap-1"
                      >
                        {item.name}
                        <item.icon size={16} />
                      </Button>
                    );
                  })
                : navItems.en.map((item, index: number) => {
                    return (
                      <Button
                        key={index}
                        onClick={() => (window.location.href = item.href)}
                        variant="ghost"
                        className="justify-end flex gap-1"
                      >
                        {item.name}
                        <item.icon size={16} />
                      </Button>
                    );
                  })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
