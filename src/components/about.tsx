"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  GraduationCap,
  Calendar,
  Trophy,
  Rocket,
  Server,
} from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Years Experience", value: "2+", icon: Calendar },
  { label: "Production Systems", value: "5+", icon: Server },
  { label: "Best Employee", value: "Award", icon: Trophy },
];

const education = [
  {
    school: "Masai School",
    degree: "Full Stack Development",
    year: "2024",
  },
  {
    school: "DAV College, Kanpur",
    degree: "B.Sc. Information Technology",
    year: "2022",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="About"
          highlight="Me"
          subtitle="Full Stack Developer passionate about building scalable, production-ready web platforms"
        />

        <div className="max-w-4xl space-y-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Hi! I&apos;m{" "}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">
                  Ritik Sonwani
                </span>
                , a Full Stack Developer with 2+ years of hands-on experience
                designing and building scalable web platforms. Currently working
                at{" "}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">Mindrops</span>,
                where I&apos;ve delivered production systems across EdTech,
                e-commerce, supply chain, workforce management, and AI-powered
                document automation domains.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                I specialize in layered backend architecture
                (Controller-Service-Repository), REST API design, RBAC
                authentication systems, payment integrations, and Linux/Docker
                deployment workflows. I love turning complex requirements into
                clean, maintainable code.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="text-purple-600 dark:text-purple-400" />
                <span>Kanpur, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="border-border bg-card/50 hover:border-purple-500/40 dark:border-purple-500/30 transition-all duration-300 group">
                    <CardContent className="p-4 text-center">
                      <stat.icon
                        size={20}
                        className="mx-auto mb-2 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform"
                      />
                      <p className="text-2xl font-bold gradient-text">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <GraduationCap size={20} className="text-purple-600 dark:text-purple-400" />
                Education
              </h3>
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl border border-border bg-card/30 hover:border-purple-500/40 dark:border-purple-500/30 transition-all"
                  >
                    <div>
                      <p className="font-semibold text-sm md:text-base text-foreground">{edu.school}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {edu.degree}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/20 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/40 dark:border-purple-500/30 text-xs py-1"
                    >
                      {edu.year}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex items-start sm:items-center gap-3 text-sm text-muted-foreground p-4 rounded-xl bg-card/30 border border-border"
            >
              <Rocket size={18} className="text-purple-600 dark:text-purple-400 shrink-0" />
              <span className="leading-relaxed">
                Open to new collaborations and opportunities. Let&apos;s build
                something great together!
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
