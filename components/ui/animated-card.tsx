"use client";

import { motion } from "framer-motion";
import { Card } from "./card";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="w-full h-full"
    >
      <Card className={`h-full shadow-lg hover:shadow-xl transition-all duration-200 ${className || ''}`}>{children}</Card>
    </motion.div>
  );
}


