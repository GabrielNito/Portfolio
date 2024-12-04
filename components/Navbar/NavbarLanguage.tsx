import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ weight: "700", subsets: ["latin"] });

interface NavbarLanguageProps {
  mobile?: boolean;
  variant?: "en" | "pt";
}

const texts = {
  en: {
    title: "Language",
    languages: [
      {
        text: "English",
        icon: "EN",
        link: "/",
      },
      {
        text: "Portuguese",
        icon: "BR",
        link: "/pt",
      },
    ],
  },
  pt: {
    title: "Linguagem",
    languages: [
      {
        text: "Inglês",
        icon: "EN",
        link: "/",
      },
      {
        text: "Português",
        icon: "BR",
        link: "/pt",
      },
    ],
  },
};

export default function NavbarLanguage({
  mobile,
  variant,
}: NavbarLanguageProps) {
  return (
    <TooltipProvider>
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <Globe className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent className="bg-muted text-foreground">
            <p>{variant === "pt" ? texts.pt.title : texts.en.title}</p>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent
          side={mobile ? "right" : "bottom"}
          className="bg-muted"
        >
          <DropdownMenuLabel>
            {variant === "pt" ? texts.pt.title : texts.en.title}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {variant === "pt"
            ? texts.pt.languages.map((language, index: number) => {
                return (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => (window.location.href = language.link)}
                    className="flex items-center gap-2"
                  >
                    <span className={`${cormorant.className} text-xs mt-[1px]`}>
                      {language.icon}
                    </span>
                    <p>{language.text}</p>
                  </DropdownMenuItem>
                );
              })
            : texts.en.languages.map((language, index: number) => {
                return (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => (window.location.href = language.link)}
                    className="flex items-center gap-2"
                  >
                    <span className={`${cormorant.className} text-xs mt-[1px]`}>
                      {language.icon}
                    </span>
                    <p>{language.text}</p>
                  </DropdownMenuItem>
                );
              })}
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
}
