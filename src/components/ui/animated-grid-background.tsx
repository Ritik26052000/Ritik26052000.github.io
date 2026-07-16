"use client";

import { cn } from "@/lib/utils";

export const AnimatedGridBackground = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px] animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 dark:bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[150px]"
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
    </div>
  );
};
