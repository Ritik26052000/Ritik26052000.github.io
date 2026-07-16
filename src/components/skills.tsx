"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Database,
  Container,
  Link2,
  Sparkles,
} from "lucide-react";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => ({
      default: mod.GitHubCalendar,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 rounded-xl bg-card/50 animate-pulse" />
    ),
  }
);

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "React",
      "Redux",
      "Next.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Prisma ORM",
      "Redis",
      "Supabase",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Container,
    skills: [
      "Docker",
      "Linux",
      "Git",
      "GitHub Actions",
      "PM2",
      "NPM",
      "Postman",
    ],
  },
  {
    title: "Integrations & Other",
    icon: Link2,
    skills: [
      "RazorPay",
      "PayU",
      "Shiprocket",
      "RBAC & JWT",
      "REST APIs",
      "Responsive Design",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Technical"
          highlight="Skills"
          subtitle="Technologies and tools I work with on a daily basis"
        />

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-border bg-card/50 hover:border-purple-500/40 dark:border-purple-500/30 dark:border-purple-500/20 transition-all duration-300 h-full group">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2.5 text-base font-semibold">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/20 dark:bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <category.icon
                        size={18}
                        className="text-purple-600 dark:text-purple-400"
                      />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs rounded-lg bg-secondary/50 text-muted-foreground border border-border hover:border-purple-500/40 dark:border-purple-500/30 hover:text-purple-700 dark:text-purple-300 hover:bg-purple-500/20 dark:bg-purple-500/10 dark:bg-purple-500/5 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={18} className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-semibold text-center">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Teamwork", "Effective Communication", "Problem Solving"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full border border-purple-500/40 dark:border-purple-500/30 dark:border-purple-500/20 bg-purple-500/20 dark:bg-purple-500/10 dark:bg-purple-500/5 text-purple-700 dark:text-purple-300 font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* GitHub Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="border-border bg-card/50 overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold mb-6 text-center">
                GitHub Contributions
              </h3>
              <div className="flex justify-center overflow-x-auto">
                <GitHubCalendar
                  username="Ritik26052000"
                  colorScheme="dark"
                  blockSize={13}
                  blockMargin={4}
                  fontSize={13}
                  theme={{
                    dark: [
                      "oklch(0.18 0.02 250)",
                      "#6d28d9",
                      "#7c3aed",
                      "#8b5cf6",
                      "#a78bfa",
                    ],
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
