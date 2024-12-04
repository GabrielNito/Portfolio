import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, File, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface CoursesCardProps {
  title: string;
  institution: string;
  date: string;
  duration?: string;
  link?: string;
  linkText?: string;
  isInView: boolean;
}

export default function CoursesCard({
  title,
  institution,
  date,
  duration,
  link,
  linkText,
  isInView,
}: CoursesCardProps) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
      transition={{ delay: 0.3, ease: "easeInOut", duration: 0.3 }}
      className="w-full h-full relative"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="h-full"
      >
        <Card className="p-4 h-full relative z-20">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="mt-2 flex gap-1 items-center">
            <MapPin size={16} />
            {institution}
          </CardDescription>
          {duration && (
            <p className="text-sm text-muted-foreground flex items-center absolute pointer-events-none right-4 top-4">
              <Clock className="mr-2 h-4 w-4" />
              {duration}
            </p>
          )}
          <CardContent className="w-[91%] absolute bottom-4 left-4 p-0 flex justify-between">
            <p className="text-sm text-muted-foreground flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {date}
            </p>
            {link && (
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
                  {linkText}
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
