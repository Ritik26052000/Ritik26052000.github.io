"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading = ({
  title,
  highlight,
  subtitle,
  className,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("text-center mb-16", className)}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {title}{" "}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
      </div>
    </motion.div>
  );
};
