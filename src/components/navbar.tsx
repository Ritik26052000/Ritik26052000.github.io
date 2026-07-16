"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  Code2,
  Mail,
  Menu,
  FileText,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    const scrollPosition = window.scrollY + 200;
    for (const item of navItems) {
      const section = document.getElementById(item.id);
      if (
        section &&
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        setActiveSection(section.id);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-3 glass-strong shadow-lg shadow-purple-500/5"
          : "py-4 bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl rotate-3 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-purple-500/30" />
            <div className="relative w-full h-full bg-background rounded-xl flex items-center justify-center">
              <span className="font-bold text-lg gradient-text">RS</span>
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative px-3.5 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-medium",
                  activeSection === item.id
                    ? "text-purple-600 dark:text-purple-400 bg-purple-500/20 dark:bg-purple-500/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                <Icon size={16} />
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full" />
                )}
              </button>
            );
          })}
          <div className="ml-2 flex items-center">
            <ThemeToggle />
          </div>
          <Button
            onClick={handleDownloadResume}
            className="ml-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <FileText size={16} />
            Resume
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="lg:hidden inline-flex shrink-0 items-center justify-center rounded-lg size-8 text-foreground hover:bg-muted hover:text-foreground transition-all">
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-border w-72">
            <SheetTitle className="gradient-text text-xl font-bold mb-6">
              Navigation
            </SheetTitle>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left",
                      activeSection === item.id
                        ? "text-purple-600 dark:text-purple-400 bg-purple-500/20 dark:bg-purple-500/10 border-l-2 border-purple-600 dark:border-purple-500"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5 border-l-2 border-transparent"
                    )}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
              <Button
                onClick={() => {
                  handleDownloadResume();
                  setIsOpen(false);
                }}
                className="mt-4 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
              >
                <FileText size={16} />
                Resume
              </Button>
              <div className="mt-2 flex justify-end px-4">
                <ThemeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
