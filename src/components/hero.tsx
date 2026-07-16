"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedGridBackground } from "@/components/ui/animated-grid-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import Image from "next/image";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "Backend Architect",
  "Node.js & React Expert",
  "TypeScript Enthusiast",
];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    window.open("/Ritik_Resume.pdf", "_blank");
    const link = document.createElement("a");
    link.href = "/Ritik_Resume.pdf";
    link.download = "RitikSonwani_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex pt-20 pb-4 md:pt-20 lg:pt-12 md:pb-0 items-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0">
        <AnimatedGridBackground />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <motion.div 
          className="w-full md:w-[50%] lg:w-[50%] flex flex-col items-start text-left pt-12 md:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting badge */}
          <motion.div variants={itemVariants} className="mb-3 lg:mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/40 dark:border-purple-500/30 dark:border-purple-500/20 bg-purple-500/20 dark:bg-purple-500/10 dark:bg-purple-500/5 text-purple-700 dark:text-purple-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants} className="mb-2">
            <span className="text-lg sm:text-xl text-muted-foreground font-medium">
              Hi there! 👋 I&apos;m
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="text-left w-full">
            <TextGenerateEffect
              words="Ritik Sonwani"
              className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl mb-1 lg:mb-2 text-left"
              duration={0.6}
            />
          </motion.div>

          {/* Rotating Text using AnimatePresence */}
          <motion.div variants={itemVariants} className="text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground font-medium mb-3 lg:mb-4 h-8 lg:h-10 relative w-full overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute"
              >
                {roles[currentRole]}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-lg lg:max-w-xl mb-4 lg:mb-6 leading-relaxed"
          >
            2+ years of experience building scalable web platforms with{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">Node.js</span>,{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">TypeScript</span>,{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">React</span>, and{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">Next.js</span>.
            Delivered production systems across EdTech, e-commerce, AI automation,
            and more.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-6 lg:mb-8">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5 px-8 text-base w-full sm:w-auto"
            >
              View My Work
              <ArrowDown size={18} className="ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadResume}
              className="border-purple-500/40 dark:border-purple-500/30 text-foreground hover:bg-purple-500/20 dark:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300 px-8 text-base w-full sm:w-auto"
            >
              <Download size={18} />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {[
              {
                icon: GithubIcon,
                href: "https://github.com/Ritik26052000",
                label: "GitHub",
              },
              {
                icon: LinkedinIcon,
                href: "https://www.linkedin.com/in/ritik-sonwani-son/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:anshusonwani2605@gmail.com",
                label: "Email",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-purple-600 dark:text-purple-400 hover:border-purple-500/40 dark:border-purple-500/30 hover:bg-purple-500/20 dark:bg-purple-500/10 dark:bg-purple-500/5 transition-all duration-300"
              >
                <social.icon width={20} height={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-0 bottom-0 w-[50%] z-10 hidden md:block overflow-hidden"
        style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/profile_pic.png"
            alt="Ritik Sonwani Resume Photo"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Optional subtle gradient overlay to ensure it blends nicely */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20" />
        </div>
      </motion.div>
      
      {/* Mobile Image (Visible only on small screens, no clip-path) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="relative w-full h-[40vh] mt-10 md:hidden block z-10 px-4"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border">
          <Image
            src="/images/profile_pic.png"
            alt="Ritik Sonwani Resume Photo"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};
