"use client";

import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.08),
        }
      );
    }
  }, [mounted, animate, duration, filter]);

  if (!mounted) {
    return (
      <div className={cn("font-bold", className)}>
        <div className="leading-snug tracking-tight">
          {words}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("font-bold", className)}>
      <div className="leading-snug tracking-tight">
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className="opacity-0 inline-block mr-[0.3em]"
              style={{
                filter: filter ? "blur(8px)" : "none",
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
