import { motion } from "framer-motion";
import { useRef } from "react";
import { Separator } from "../ui/separator";
import { Calendar } from "lucide-react";

interface ExperienceCardProps {
  isInView: boolean;
  variant?: "en" | "pt";
}

const texts = {
  en: [
    "Administrative Assistant",
    "Zumstein Comércio e Serviços LTDA",
    "Nov 2020 - May 2021",
    "Managed employee documentation, studied and effectively used the Omie platform to streamline administrative processes, carried out a stock reorganization project, and provided technical support, using existing technological knowledge to assist with daily tasks.",
  ],
  pt: [
    "Auxiliar Administrativo",
    "Zumstein Comércio e Serviços LTDA",
    "Nov 2020 - Maio 2021",
    "Gerenciei documentação de colaboradores, estudei e utilizei efetivamente plataforma Omie para agilizar processos administrativos, executei projeto de reorganização do estoque, e forneci suporte técnico, aproveitando o conhecimento tecnológico existente para auxiliar nas tarefas diárias.",
  ],
};

export default function ExperienceCard({
  isInView,
  variant,
}: ExperienceCardProps) {
  const ref = useRef(null);

  return (
    <motion.div
      className="flex flex-col gap-2 mt-8 ml-8"
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
      transition={{ delay: 0.15, ease: "easeInOut", duration: 0.3 }}
    >
      <h1 className={`text-xl tracking-tight lg:text-3xl font-bold`}>
        {variant === "pt" ? texts.pt[0] : texts.en[0]}
      </h1>
      <div className="relative ml-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 1, height: "0%" }}
          animate={{
            opacity: isInView ? 1 : 1,
            height: isInView ? "100%" : "0%",
          }}
          transition={{ delay: 0.3, ease: "easeOut", duration: 0.3 }}
          className="absolute"
        >
          <Separator
            orientation="vertical"
            className="absolute left-0 bg-muted-foreground"
          />
        </motion.div>
        <div className="ml-6">
          <h2 className="max-lg:text-lg lg:text-xl font-semibold">
            {variant === "pt" ? texts.pt[1] : texts.en[1]}
          </h2>
          <p className="text-sm text-muted-foreground flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {variant === "pt" ? texts.pt[2] : texts.en[2]}
          </p>
          <p className="italic font-light mt-2 indent-8 max-w-[60ch] tracking-wide leading-relaxed break-words">
            {variant === "pt" ? texts.pt[3] : texts.en[3]}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
