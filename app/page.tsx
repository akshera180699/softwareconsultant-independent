"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  GitBranch,
  Target,
} from "lucide-react";

type Step = {
  icon?: ReactNode;
  text: string;
  isHeading?: boolean;
};

type ModalContent = {
  title: string;
  steps: Step[];
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ModalContent | null>(null);

  const openModal = (data: ModalContent, label: string) => {
    console.log("Card clicked:", label);
    setContent(data);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setContent(null);
  };

  return (
    <main className="min-h-screen bg-black text-gray-200">
      <section className="max-w-5xl mx-auto px-6 py-24">

        {/* Heading */}
        <h1 className="text-4xl font-semibold mb-4 text-white">
          Independent Full Stack Software Solutions Provider
        </h1>

        <p className="text-lg text-gray-400 mb-16">
          Secure • Scalable • Outcome-Driven Application Development
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">

          {/* Maintenance */}
          <div
            onClick={() =>
              openModal(
                {
                  title: "Maintenance-first delivery",
                  steps: [
                    { icon: <Wrench size={18} />, text: "Initial system and codebase health assessment." },
                    { icon: <Wrench size={18} />, text: "Identification of stability risks and technical debt." },
                    { icon: <Wrench size={18} />, text: "Critical fixes prioritized before new feature work." },
                    { icon: <Wrench size={18} />, text: "Long-term support planning to ensure continuity." },
                  ],
                },
                "maintenance"
              )
            }
            className="cursor-pointer border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-900/50 transition"
          >
            <h3 className="text-lg font-medium mb-2 text-white">
              Maintenance-first delivery
            </h3>
            <p className="text-sm text-gray-400">
              Stability and continuity come first.
            </p>
          </div>

          {/* Security */}
          <div
            onClick={() =>
              openModal(
                {
                  title: "Security is non-negotiable",
                  steps: [
                    { text: "Healthcare (HIPAA)", isHeading: true },
                    { icon: <ShieldCheck size={18} />, text: "HIPAA-compliant access control and auditing." },
                    { icon: <ShieldCheck size={18} />, text: "Encryption of PHI at rest and in transit." },
                    { icon: <ShieldCheck size={18} />, text: "Strict role-based access to patient data." },
                    { icon: <ShieldCheck size={18} />, text: "Secure logging, monitoring, and breach response." },

                    { text: "Retail & E-Commerce (PCI-DSS)", isHeading: true },
                    { icon: <ShieldCheck size={18} />, text: "PCI-DSS compliant payment data handling." },
                    { icon: <ShieldCheck size={18} />, text: "Encrypted customer and transaction data." },
                    { icon: <ShieldCheck size={18} />, text: "Fraud prevention and continuous monitoring." },

                    { text: "GPS & Location Systems (GDPR)", isHeading: true },
                    { icon: <ShieldCheck size={18} />, text: "User-consent driven location tracking." },
                    { icon: <ShieldCheck size={18} />, text: "Encryption and masking of location data." },
                    { icon: <ShieldCheck size={18} />, text: "Minimal retention with regional compliance." },
                  ],
                },
                "security"
              )
            }
            className="cursor-pointer border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-900/50 transition"
          >
            <h3 className="text-lg font-medium mb-2 text-white">
              Security is non-negotiable
            </h3>
            <p className="text-sm text-gray-400">
              Protection is built into every layer.
            </p>
          </div>

          {/* CI/CD */}
          <div
            onClick={() =>
              openModal(
                {
                  title: "CI/CD driven releases",
                  steps: [
                    { text: "Continuous Integration", isHeading: true },
                    { icon: <GitBranch size={18} />, text: "Automated builds, code reviews, and static analysis on every commit." },

                    { text: "Automated Testing", isHeading: true },
                    { icon: <GitBranch size={18} />, text: "Unit, integration, and regression tests executed in pipeline." },

                    { text: "Quality & Security Gates", isHeading: true },
                    { icon: <GitBranch size={18} />, text: "Performance validation and security vulnerability scanning." },

                    { text: "User Acceptance Testing (UAT)", isHeading: true },
                    { icon: <GitBranch size={18} />, text: "Deployment to UAT environment with business sign-off." },

                    { text: "Production Readiness", isHeading: true },
                    { icon: <GitBranch size={18} />, text: "Controlled deployment, monitoring, and rollback readiness." },
                  ],
                },
                "cicd"
              )
            }
            className="cursor-pointer border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-900/50 transition"
          >
            <h3 className="text-lg font-medium mb-2 text-white">
              CI/CD driven releases
            </h3>
            <p className="text-sm text-gray-400">
              Predictable and controlled deployments.
            </p>
          </div>

          {/* Outcome */}
          <div
            onClick={() =>
              openModal(
                {
                  title: "Outcome-based engagement",
                  steps: [
                    { icon: <Target size={18} />, text: "Clear scope and deliverables defined upfront." },
                    { icon: <Target size={18} />, text: "Timelines aligned with agreed bandwidth." },
                    { icon: <Target size={18} />, text: "Testing and validation before approval." },
                    { icon: <Target size={18} />, text: "Payment aligned with verified outcomes." },
                  ],
                },
                "outcome"
              )
            }
            className="cursor-pointer border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-900/50 transition"
          >
            <h3 className="text-lg font-medium mb-2 text-white">
              Outcome-based engagement
            </h3>
            <p className="text-sm text-gray-400">
              Pay for what is delivered and approved.
            </p>
          </div>

        </div>

        {/* CTA */}
        <a
          href="/projects"
          className="inline-flex items-center text-lg font-medium text-black bg-white px-8 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          View Projects →
        </a>

        {/* Modal */}
        <AnimatePresence>
  {open && content && (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-xl"
      >
        <h2 className="text-xl font-semibold mb-6 text-gray-900">
          {content.title}
        </h2>

        <ul className="space-y-3">
          {content.steps.map((step, i) =>
            step.isHeading ? (
              <li
                key={i}
                className="mt-6 text-xs font-semibold uppercase tracking-wider text-gray-700"
              >
                {step.text}
              </li>
            ) : (
              <li
                key={i}
                className="flex gap-3 text-sm text-gray-700"
              >
                <span className="text-gray-900 mt-0.5">
                  {step.icon}
                </span>
                <span>{step.text}</span>
              </li>
            )
          )}
        </ul>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


      </section>
    </main>
  );
}
