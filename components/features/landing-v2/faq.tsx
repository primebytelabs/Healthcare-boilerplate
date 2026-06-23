
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the AI Healthcare Assistant work?",
    answer:
      "Our AI assistant is trained on clinical literature, patient records (anonymized), and medical guidelines. It helps doctors with differential diagnosis, note generation, care plan suggestions, and administrative tasks — reducing cognitive load so clinicians can focus on patients. It never replaces clinical judgment; it amplifies it.",
  },
  {
    question: "Is the platform HIPAA compliant and how is patient data protected?",
    answer:
      "Yes. Vitalis is fully HIPAA-compliant and we sign Business Associate Agreements (BAA) with every customer. Patient data is encrypted with AES-256 at rest and in transit, access is controlled via role-based permissions, and every action is logged in an immutable audit trail. We also hold SOC 2 Type II certification.",
  },
  {
    question: "Can Vitalis integrate with our existing EMR or hospital systems?",
    answer:
      "We offer HL7 FHIR-compliant APIs, pre-built connectors for major EMR systems (Epic, Cerner, Athenahealth, Meditech), and a custom integration service for legacy systems. Our integrations team handles the full onboarding, including data migration, at no extra charge for enterprise customers.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "For clinics, you can be live in as little as 24–48 hours. For multi-hospital networks with complex integrations, our typical implementation timeline is 4–8 weeks. We assign a dedicated Customer Success Manager and provide full staff training, go-live support, and a 30-day hypercare period.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Pricing is modular — pay for what you use. We offer per-provider plans for small practices, per-seat volume pricing for clinics, and enterprise licensing for health systems. Contact our sales team for a custom quote based on your organization's size, locations, and required modules.",
  },
  {
    question: "Do you offer white-label or co-branded versions?",
    answer:
      "Yes. Enterprise customers can white-label the entire platform — patient app, doctor portal, and admin console — with their brand identity. We support custom domains, logos, color schemes, and email templates. This is ideal for hospital networks and insurance companies.",
  },
];

function AccordionItem({
  faq,
  isOpen,
  onClick,
  index,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-slate-100 last:border-0"
    >
      <button
        className="flex justify-between items-center w-full py-6 text-left gap-6"
        onClick={onClick}
      >
        <span className="text-base font-semibold text-slate-900 leading-snug">
          {faq.question}
        </span>
        <div
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
            isOpen ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-500"
          }`}
        >
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-500 leading-relaxed text-sm max-w-2xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-32 bg-white landing-section">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Questions & Answers
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about the platform. Can't find your answer?{" "}
            <a href="#contact" className="text-blue-700 font-semibold hover:underline">
              Talk to our team.
            </a>
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm px-8">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
