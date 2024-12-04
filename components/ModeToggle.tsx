"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ModeToggleProps {
  mobile?: boolean;
  variant?: "en" | "pt";
}

const texts = {
  en: ["Toggle Theme", "Theme", "Light", "Dark", "System"],
  pt: ["Mudar Tema", "Tema", "Claro", "Escuro", "Sistema"],
};

export function ModeToggle({ mobile, variant }: ModeToggleProps) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">
            {variant === "pt" ? texts.pt[0] : texts.en[0]}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side={mobile ? "right" : "bottom"}
        className="bg-muted"
        align="end"
      >
        <DropdownMenuLabel>
          {variant === "pt" ? texts.pt[1] : texts.en[1]}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex gap-2 items-center"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-4 w-4" />
          {variant === "pt" ? texts.pt[2] : texts.en[2]}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2 items-center"
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-4 w-4" />
          {variant === "pt" ? texts.pt[3] : texts.en[3]}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2 items-center"
          onClick={() => setTheme("system")}
        >
          <Laptop className="h-4 w-4" />
          {variant === "pt" ? texts.pt[4] : texts.en[4]}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
