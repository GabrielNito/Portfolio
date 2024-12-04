import { motion } from "framer-motion";
import { ElementType, useState } from "react";
import { ModeToggle } from "../ModeToggle";
import NavbarLanguage from "./NavbarLanguage";

interface Item {
  name: string;
  href: string;
  icon: ElementType;
}

interface NavbarPCProps {
  navItems: Item[];
  states: string[];
  setStates: (value: string[]) => void;
  options: string[][];
  variant?: "en" | "pt";
}

export default function NavbarPC({
  states,
  setStates,
  navItems,
  options,
  variant,
}: NavbarPCProps) {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  return (
    <div className="max-lg:hidden flex gap-1">
      {navItems.map((item, index: number) => (
        <motion.button
          key={index}
          onHoverStart={() => setStates(options[index])}
          onHoverEnd={() => setStates(options[4])}
          className={`relative left-0 font-medium px-2 transition-all duration-300 flex items-center gap-1 ${states[index]}`}
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={() => (window.location.href = item.href)}
        >
          <div
            className={`absolute transition-all duration-300 flex items-center ${
              hoveredLink === index ? "-left-3 opacity-100" : "left-0 opacity-0"
            }`}
          >
            <item.icon size={16} />
          </div>
          <span className="font-light text-sm">{item.name}</span>
        </motion.button>
      ))}
      <ModeToggle variant={variant} />

      <NavbarLanguage variant={variant} />
    </div>
  );
}
