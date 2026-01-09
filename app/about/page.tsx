"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Settings,
  ShieldCheck,
  Truck,
  HeartPulse,
  CreditCard,
  ShoppingCart,
  MapPin,
} from "lucide-react";

type Step = {
  icon?: ReactNode;
  text: string;
};

type ModalContent = {
  title: string;
  description: string;
  steps: Step[];
};

export default function AboutPage() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ModalContent | null>(null);

  const openModal = (data: ModalContent) => {
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

        {/* INTRO */}
        <h1 className="text-3xl font-semibold mb-6 text-white">About</h1>

        <p className="text-lg text-gray-400 max-w-3xl mb-4">
          I operate as an independent full-stack software solutions provider,
          working directly with clients to design, build, and maintain
          production-grade applications.
        </p>

        <p className="text-lg text-gray-400 max-w-3xl mb-14">
          This independent model removes organizational overhead, ensures
          direct accountability, and aligns delivery strictly with outcomes —
          not roles, hierarchy, or headcount.
        </p>

        {/* HOW WE OPERATE */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">

          <div
            onClick={() =>
              openModal({
                title: "How We Work",
                description:
                  "A direct engagement model built on transparency and ownership.",
                steps: [
                  { icon: <Users size={18} />, text: "Direct collaboration without intermediaries." },
                  { icon: <Users size={18} />, text: "Single point of accountability for delivery." },
                  { icon: <Users size={18} />, text: "Regular updates and early risk visibility." },
                ],
              })
            }
            className="cursor-pointer border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-900/50 transition"
          >
            <h3 className="text-lg font-medium text-white mb-2">How We Work</h3>
            <p className="text-sm text-gray-400">Direct, transparent, accountable.</p>
          </div>

          <div
            onClick={() =>
              openModal({
                title: "How Systems Are Handled",
                description:
                  "Systems are treated as long-term products, not short-term tasks.",
                steps: [
                  { icon: <Settings size={18} />, text: "Maintenance-first mindset from day one." },
                  { icon: <Settings size={18} />, text: "Clean architecture and separation of concerns." },
                  { icon: <Settings size={18} />, text: "Decisions documented for long-term clarity." },
                ],
              })
            }
            className="cursor-pointer border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-900/50 transition"
          >
            <h3 className="text-lg font-medium text-white mb-2">How Systems Are Handled</h3>
            <p className="text-sm text-gray-400">Stable, maintainable, future-ready.</p>
          </div>

          <div
            onClick={() =>
              openModal({
                title: "Security & Trust",
                description:
                  "Security is embedded into every phase of design and delivery.",
                steps: [
                  { icon: <ShieldCheck size={18} />, text: "Secure handling of code, credentials, and data." },
                  { icon: <ShieldCheck size={18} />, text: "Role-based access and environment isolation." },
                  { icon: <ShieldCheck size={18} />, text: "Compliance-aware practices where required." },
                ],
              })
            }
            className="cursor-pointer border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-900/50 transition"
          >
            <h3 className="text-lg font-medium text-white mb-2">Security & Trust</h3>
            <p className="text-sm text-gray-400">Non-negotiable responsibility.</p>
          </div>

          <div
            onClick={() =>
              openModal({
                title: "How Delivery Happens",
                description:
                  "Delivery is structured, tested, and outcome-aligned.",
                steps: [
                  { icon: <Truck size={18} />, text: "Incremental delivery with clear milestones." },
                  { icon: <Truck size={18} />, text: "Testing and validation before acceptance." },
                  { icon: <Truck size={18} />, text: "Payment aligned with verified outcomes." },
                ],
              })
            }
            className="cursor-pointer border border-gray-800 rounded-xl p-6 hover:border-gray-600 hover:bg-gray-900/50 transition"
          >
            <h3 className="text-lg font-medium text-white mb-2">How Delivery Happens</h3>
            <p className="text-sm text-gray-400">Predictable and outcome-driven.</p>
          </div>

        </div>

        {/* CLIENT INDUSTRIES */}
        <h2 className="text-xl font-semibold text-white mb-6">Industries & Domains</h2>

        <div className="grid md:grid-cols-4 gap-6 mb-20 text-sm text-gray-400">
          <div className="flex items-center gap-2"><HeartPulse size={16} /> Healthcare</div>
          <div className="flex items-center gap-2"><CreditCard size={16} /> FinTech</div>
          <div className="flex items-center gap-2"><ShoppingCart size={16} /> Retail & E-Commerce</div>
          <div className="flex items-center gap-2"><MapPin size={16} /> GPS & Location Systems</div>
        </div>

        {/* ENGAGEMENT LIFECYCLE */}
        <h2 className="text-xl font-semibold text-white mb-6">Engagement Lifecycle</h2>

        <ol className="space-y-3 text-sm text-gray-400 mb-20">
          <li>1. Discovery & requirement alignment</li>
          <li>2. Architecture & planning</li>
          <li>3. Development & validation</li>
          <li>4. Release & monitoring</li>
          <li>5. Maintenance & long-term support</li>
        </ol>

        {/* LEGAL POSITIONING */}
        <div className="border border-gray-800 rounded-xl p-6 text-sm text-gray-400 mb-16">
          This engagement operates strictly on an independent contractor basis.
          No employer–employee relationship is created. Compensation is aligned
          solely with delivered, tested, and approved outcomes.
        </div>

        {/* CTA */}
        <a
          href="/contact"
          className="inline-flex items-center text-lg font-medium text-black bg-white px-8 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Discuss a Project →
        </a>

        {/* MODAL */}
        <AnimatePresence>
          {open && content && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white text-gray-900 rounded-2xl max-w-lg w-full p-8 shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{content.description}</p>

                <ul className="space-y-3 text-sm">
                  {content.steps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-black">{step.icon}</span>
                      <span>{step.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </main>
  );
}
