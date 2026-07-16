"use client";

import { Mail, ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const socialLinks = [
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
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart size={14} className="text-purple-600 dark:text-purple-400 fill-purple-600 dark:fill-purple-400" />
            <span>by</span>
            <span className="font-semibold text-foreground">
              Ritik Sonwani
            </span>
          </div>

          {/* Center */}
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-purple-600 dark:text-purple-400 transition-colors duration-300"
              >
                <social.icon width={20} height={20} />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 w-9 h-9 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-purple-600 dark:text-purple-400 hover:border-purple-500/40 dark:border-purple-500/30 transition-all duration-300"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
