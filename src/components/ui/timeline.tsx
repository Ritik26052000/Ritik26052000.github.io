"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  location: string;
  items: {
    name: string;
    description: string[];
    tech?: string[];
  }[];
}

export const Timeline = ({
  data,
  className,
}: {
  data: TimelineItem[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className={cn("relative w-full max-w-6xl mx-auto", className)} ref={containerRef}>
      {/* Background Track */}
      <div className="absolute left-[20px] md:left-[39px] top-0 bottom-0 w-[2px] bg-border/40 dark:bg-border/20 rounded-full" />
      
      {/* Animated Scroll Progress Line */}
      <motion.div
        style={{ height }}
        className="absolute left-[20px] md:left-[39px] top-0 w-[2px] bg-gradient-to-b from-purple-600 via-indigo-500 to-transparent rounded-full z-10 shadow-[0_0_12px_rgba(168,85,247,0.5)]"
      />

      <div className="space-y-24">
        {data.map((item, index) => (
          <div key={index} className="relative pl-12 md:pl-24">
            {/* Timeline Dot */}
            <div className="absolute left-[13px] md:left-[32px] top-2 z-20 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200, delay: 0.1 }}
                className="w-[16px] h-[16px] rounded-full bg-background border-[3px] border-purple-600 dark:border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />
            </div>

            {/* Header Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-2">
                {item.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold border border-purple-500/20">
                  {item.company}
                </span>
                <span className="text-muted-foreground font-medium flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {item.period}
                </span>
                <span className="hidden sm:inline-block text-muted-foreground/40">•</span>
                <span className="text-muted-foreground font-medium flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {item.location}
                </span>
              </div>
            </motion.div>

            {/* Projects Wrapper */}
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {item.items.map((project, pIndex) => (
                <motion.div
                  key={pIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: pIndex * 0.15 }}
                  className="group relative"
                >
                  {/* Glowing background effect on hover */}
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0" />
                  
                  <div className="relative z-10 h-full p-6 md:p-8 rounded-2xl border border-border/50 bg-card/40 hover:bg-card/60 backdrop-blur-md transition-all duration-500 shadow-sm hover:shadow-xl">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {project.name}
                      </h4>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {project.description.map((desc, dIndex) => (
                        <li key={dIndex} className="flex gap-3 text-muted-foreground group-hover:text-muted-foreground/90 transition-colors">
                          <span className="mt-1.5 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="leading-relaxed text-sm md:text-base">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {project.tech && project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                        {project.tech.map((t, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50 transition-colors duration-300 group-hover:border-purple-500/30 group-hover:bg-purple-500/5 dark:group-hover:bg-purple-500/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
