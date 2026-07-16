"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/ui/timeline";

const experienceData = [
  {
    title: "Full Stack Developer",
    company: "Mindrops",
    period: "Oct 2024 – Present",
    location: "Delhi",
    items: [
      {
        name: "Ventuera – Educational & Career Platform",
        description: [
          "Built a role-based access control (RBAC) system with granular permission levels across student, corporate, and admin roles, backed by JWT authentication.",
          "Designed REST APIs using Node.js, Express, Prisma, and PostgreSQL with layered Controller-Service-Repository architecture and Zod request validation.",
          "Implemented task and ideation lifecycle workflows including submission review, winner declaration, and points disbursement via cron-driven status automation.",
          "Developed gamification features including points wallet, badge reconciliation jobs, and tier upgrades to drive user engagement.",
        ],
        tech: [
          "Node.js",
          "Express",
          "Prisma",
          "PostgreSQL",
          "JWT",
          "Zod",
          "RBAC",
        ],
      },
      {
        name: "Supply Chain Management System",
        description: [
          "Designed and implemented a supply chain management system for industry operations, including multi-stage vehicle unloading workflows.",
          "Built backend modules for tracking shipment and inventory status across multiple operational stages with audit-friendly data structures.",
        ],
        tech: ["Node.js", "TypeScript", "PostgreSQL", "REST APIs"],
      },
      {
        name: "Face Recognition Attendance Application",
        description: [
          "Built a GPS-verified, facial recognition-based attendance tracking application integrating Google location services for accurate clock-in/out verification.",
          "Implemented reverse geocoding and location validation logic to confirm employee presence at registered sites, reducing manual attendance errors.",
          "Designed APIs for attendance status tracking, history logs, and admin-facing reporting dashboards.",
        ],
        tech: ["Node.js", "Google APIs", "Face Recognition", "GPS"],
      },
      {
        name: "E-commerce Application",
        description: [
          "Developed a full-featured e-commerce platform supporting products and product variants, with master data management for key modules.",
          "Built an order management system with integrated shipping via Shiprocket, covering pickup location and AWB assignment workflows.",
          "Integrated RazorPay and PayU for secure payment processing and order reconciliation.",
        ],
        tech: ["Node.js", "React", "RazorPay", "PayU", "Shiprocket"],
      },
      {
        name: "AI-Powered Invoice Management Platform",
        description: [
          "Designed an AI-powered invoice management platform that automates extraction, categorization, and lifecycle tracking of vendor invoices.",
          "Integrated OCR and intelligent document processing to extract key invoice fields, paired with a human validation layer.",
          "Built a centralized, searchable invoice repository with standardized categorization, role-based access control, and secure document storage.",
          "Implemented invoice lifecycle management covering review, editing, re-processing, and status tracking.",
        ],
        tech: ["Node.js", "OCR", "AI/ML", "RBAC", "PostgreSQL"],
      },
      {
        name: "Instofin – NBFC Consumer Financing Platform",
        description: [
          "Developed scalable backend services and REST APIs for an end-to-end NBFC consumer financing platform using Node.js, TypeScript, Express, Prisma, PostgreSQL, React, and Vite.",
          "Designed and implemented secure APIs following Controller–Service–Repository architecture with JWT authentication, RBAC, Zod validation, centralized error handling, and Prisma ORM.",
          "Built and enhanced the complete loan origination workflow, including customer onboarding, digital KYC, underwriting, document management, loan processing, and application lifecycle management.",
          "Integrated third-party services including Digio (Digital KYC & e-Sign), CIBIL, MSG91, and AWS SES to automate customer verification, credit assessment, and communication workflows.",
          "Developed collections and repayment modules with EMI schedule management, payment tracking, DPD calculations, and automated background jobs for operational workflows.",
          "Built role-based admin modules and dashboards for loan management, customer management, portfolio monitoring, and configurable system settings using React, Redux Toolkit, React Query, Tailwind CSS, and Recharts.",
        ],
        tech: ["Node.js", "TypeScript", "Prisma", "PostgreSQL", "React", "Vite", "Zod", "Redux Toolkit"],
      },
    ],
  },
  {
    title: "Ecommerce Account Manager",
    company: "UB Enterprises",
    period: "Aug 2022 – Jan 2024",
    location: "Kanpur",
    items: [
      {
        name: "Seller Account & Revenue Management",
        description: [
          "Boosted sales by leveraging data-driven strategies to understand market trends and customer preferences.",
          "Implemented efficient workflows for seller account management, enhancing organizational revenue.",
          "Conducted thorough analysis and reporting to optimize product listings and promotional campaigns.",
        ],
        tech: ["Data Analysis", "E-commerce", "Account Management"],
      },
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Work"
          highlight="Experience"
          subtitle="Building production-grade systems across diverse domains"
        />
        <Timeline data={experienceData} />
      </div>
    </section>
  );
};
