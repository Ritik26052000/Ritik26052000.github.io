"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Image from "next/image";

const projects = [
  {
    name: "DocEase",
    description:
      "A powerful document management app inspired by Notion Docs with real-time collaboration, document versioning, and rich text editing.",
    image: "/images/DocEase.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB", "ReactQuill"],
    github: "https://github.com/Mayank8683/Cloud-Climbers_045.git",
    demo: "https://66d587c1d92965dc325710f8--meek-meringue-871a76.netlify.app/",
  },
  {
    name: "ER Diagram Builder",
    description:
      "Interactive ER diagram builder representing logical database structures with a visual entity framework, drag-and-drop interface.",
    image: "/images/ER_Builder.png",
    tech: ["React", "Redux", "Chakra UI", "React-Flow", "Auth0"],
    github: "https://github.com/PKalyanReddy/Declaration-DevOps_032.git",
    demo: "https://er-diagram-builder01.netlify.app/",
  },
  {
    name: "BeetPulse Music",
    description:
      "A cutting-edge, open-source music streaming application with custom API integration, animated UI, and seamless playback.",
    image: "/images/Music.png",
    tech: ["JavaScript", "HTML", "CSS", "Custom API", "CSS Animations"],
    github: "https://github.com/alfaj7/SAP-Sultans_056.git",
    demo: "https://beet-pulse-music.netlify.app",
  },
  {
    name: "DMart Clone",
    description:
      "E-commerce clone streamlining the retail process for a convenient and cost-effective shopping experience with modern UI.",
    image: "/images/DMart.png",
    tech: ["HTML", "CSS", "Tailwind CSS", "SCSS"],
    github: "https://github.com/arnabBaruah009/Yamuna-Variable-002.git",
    demo: "https://dmart-cw.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="My"
          highlight="Projects"
          subtitle="Personal and collaborative projects that showcase my development skills"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="h-full flex flex-col">
                {/* Image */}
                <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-purple-500/20 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/40 dark:border-purple-500/30 dark:border-purple-500/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  {(project.github || project.demo) && (
                    <div className="flex gap-3">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1 border-border hover:border-purple-500/40 dark:border-purple-500/30 hover:bg-purple-500/20 dark:bg-purple-500/10 dark:bg-purple-500/5 hover:text-purple-600 dark:text-purple-400 transition-all"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GithubIcon width={16} height={16} />
                            GitHub
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          size="sm"
                          asChild
                          className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-indigo-600 hover:to-purple-600 transition-all"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
