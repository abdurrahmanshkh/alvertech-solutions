"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Building2,
  FlaskConical,
  PackageCheck,
} from "lucide-react";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const capabilities = [
  {
    icon: Building2,
    title: "Facility Design & Project Execution",
    items: [
      "Greenfield & Brownfield Projects",
      "HVAC & Cleanroom Engineering",
      "Equipment Qualification & Validation",
    ],
  },
  {
    icon: FlaskConical,
    title: "Manufacturing & Operations",
    items: [
      "Process Scale-up Strategy",
      "Lean Manufacturing Implementation",
      "Cost Optimization & Troubleshooting",
    ],
  },
  {
    icon: PackageCheck,
    title: "Product Development Support",
    items: [
      "Formulation & R&D Guidance",
      "Injectable, Ophthalmic & Nasal",
      "Technology Transfer Protocols",
    ],
  },
];

const founders = [
  {
    name: "Manoj Patel",
    title: "The Architect",
    role: "Facility Design & Sterile Manufacturing Expert",
    years: "35+",
    description:
      "Expert in establishing U.S. FDA-approved plants for sterile dosage forms. Extensive end-to-end project execution from conceptual design to regulatory approvals.",
    image: "/manoj.jpg",
    linkedin: "https://www.linkedin.com/in/manoj-patel-885a3b61/",
  },
  {
    name: "Gurudev Suryavanshi",
    title: "The Operator",
    role: "Strategic Operations Executive",
    years: "24+",
    description:
      "Transforming complex formulations into commercial successes through integrated R&D, manufacturing, and supply chain excellence.",
    image: "/gurudev.jpg",
    linkedin: "https://www.linkedin.com/in/gurudev-suryavanshi-94149321/",
  },
  {
    name: "Inamdar Bhaisaheb",
    title: "The Foundation",
    role: "Academic & Institutional Expert",
    years: "35+",
    description:
      "Distinguished pharmaceutical educator ensuring methodologies are rooted in rigorous scientific principles and institutional standards.",
    image: "/inamdar.jpg",
    linkedin: "https://www.linkedin.com/in/bhaisaheb-inamdar-711b25402/",
  },
];

const stats = [
  { value: "94+", label: "Combined Years of Expertise" },
  { value: "9", label: "U.S. FDA Projects Delivered" },
  { value: "3", label: "Pillars of Excellence" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="gradient-hero relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-tech-blue blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-growth-green blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl z-10"
            >
              <p className="text-tech-blue font-semibold text-sm uppercase tracking-widest mb-4">
                Pharmaceutical Consultancy
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Transforming Pharmaceutical Visions into{" "}
                <span className="text-tech-blue">Operational Realities</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                Engineering excellence in R&D and commercial manufacturing. We bridge the gap between scientific innovation and FDA-compliant, scalable facility design.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="gradient-btn text-white font-semibold px-8 py-4 rounded text-center transition-all duration-200 hover:shadow-xl hover:shadow-tech-blue/20 inline-flex items-center justify-center gap-2"
                >
                  Explore Services <ArrowRight size={18} />
                </Link>
                <Link
                  href="/about"
                  className="border border-white/20 text-white font-semibold px-8 py-4 rounded text-center transition-all duration-200 hover:bg-white/10 hover:border-white/40"
                >
                  Meet the Team
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative h-[400px] lg:h-[600px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src="/images/hero.webp"
                alt="Abstract representation of pharmaceutical research with glass vials and blue lighting reflecting scientific precision"
                fill
                sizes="100vw"
                className="object-cover mix-blend-luminosity opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-midnight-blue via-transparent to-tech-blue/20 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              The Alvertech Advantage
            </h2>
            <p className="mt-4 text-lg text-soft-gray max-w-2xl mx-auto">
              Nearly a century of combined expertise bridging robust academic
              foundations, operational excellence, and state-of-the-art
              FDA-compliant facility design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 rounded bg-slate-bg border border-border-light"
              >
                <p className="text-5xl md:text-6xl font-bold text-tech-blue">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-medium text-soft-gray uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Capabilities ── */}
      <section className="bg-slate-bg section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-tech-blue font-semibold text-sm uppercase tracking-widest mb-2">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Core Capabilities
            </h2>
            <p className="mt-4 text-lg text-soft-gray max-w-2xl mx-auto">
              Comprehensive consulting across the pharmaceutical lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded p-8 border border-border-light card-shadow hover:card-shadow-hover transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded bg-tech-blue/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-tech-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{cap.title}</h3>
                  <ul className="space-y-3">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle
                          size={18}
                          className="text-growth-green shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-soft-gray">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-tech-blue hover:text-tech-blue-dark transition-colors"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Leadership Preview ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-tech-blue font-semibold text-sm uppercase tracking-widest mb-2">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Founding Partners
            </h2>
            <p className="mt-4 text-lg text-soft-gray max-w-2xl mx-auto">
              Founding partners driving strategic execution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded border border-border-light card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-tech-blue/90 text-white text-xs font-semibold rounded uppercase tracking-wider">
                      {founder.title}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{founder.name}</h3>
                  <p className="text-sm text-tech-blue font-medium mt-1">
                    {founder.years} Years of Experience
                  </p>
                  <p className="text-sm text-soft-gray mt-3 leading-relaxed">
                    {founder.description}
                  </p>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-tech-blue hover:text-tech-blue-dark transition-colors"
                  >
                    <LinkedInIcon size={16} />
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 gradient-btn text-white font-semibold px-8 py-3 rounded transition-all duration-200 hover:shadow-lg"
            >
              Meet the Full Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-tech-blue blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Build Your Next Facility?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Partner with industry experts who combine regulatory mastery with
            operational excellence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="gradient-green-btn text-white font-semibold px-8 py-4 rounded transition-all duration-200 hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Schedule a Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
