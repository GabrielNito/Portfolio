import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

interface TechStackCardProps {
  text: string;
  image: string;
  index: number;
}

export default function TechStackCard({
  text,
  image,
  index,
}: TechStackCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.75 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
      transition={{
        delay: index * 0.15 + 0.3,
        ease: "easeInOut",
        duration: 0.3,
      }}
      className="w-full h-full relative"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="h-full"
      >
        <Card className="h-full">
          <CardHeader className="flex flex-col justify-between items-center gap-2 h-full">
            <Image src={image} alt={text} width={50} height={50} />
            <CardTitle>{text}</CardTitle>
          </CardHeader>
        </Card>
      </motion.div>
    </motion.div>
  );
}
