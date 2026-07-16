"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anshusonwani2605@gmail.com",
    href: "mailto:anshusonwani2605@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8707279119",
    href: "tel:+918707279119",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kanpur, Uttar Pradesh, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/Ritik26052000",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ritik-sonwani-son/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:anshusonwani2605@gmail.com",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_rz9kqny",
        "template_q97qldd",
        e.target as HTMLFormElement,
        "5pdbzgABPNCokUfO7"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ companyName: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Get In"
          highlight="Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-purple-500/40 dark:border-purple-500/30 hover:bg-card/80 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 dark:bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors shrink-0">
                        <item.icon size={18} className="text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 dark:bg-purple-500/10 flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <p className="text-sm text-muted-foreground mb-3">
                Connect with me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
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
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="border-border bg-card/50">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 transition-all resize-none text-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 py-6 text-base"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle size={18} />
                        Message Sent!
                      </>
                    ) : status === "error" ? (
                      <>
                        <AlertCircle size={18} />
                        Failed. Try Again
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
