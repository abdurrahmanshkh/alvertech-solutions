"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}



const founders = [
  {
    name: "Manoj Patel",
    title: "The Architect",
    role: "Facility Design & Sterile Manufacturing Expert",
    years: "35+",
    yearsLabel: "Years in Industry Leadership",
    icon: Building2Icon,
    image: "/manoj.jpg",
    linkedin: "https://www.linkedin.com/in/manoj-patel-885a3b61/",
    phone: "+91 98203 38978",
    email: "patelmanojc@gmail.com",
    bio: "Manoj Patel is a seasoned pharmaceutical professional with over 35 years of experience in the design, development, and successful commissioning of regulatory-compliant manufacturing facilities. He has deep expertise in establishing U.S. FDA-approved plants for sterile dosage forms, including injectables, nasal products, and ophthalmic products.",
    extendedBio:
      "He has extensive end-to-end project execution experience, from conceptual design and layout planning to equipment qualification, validation, and regulatory approvals. He is highly experienced in compliance with cGMP, WHO, and EU guidelines.",
    competencies: [
      "Facility design and cleanroom architecture",
      "Technology transfer and scale-up",
      "Validation: IQ, OQ, PQ",
      "Regulatory documentation & audit readiness",
      "FDA / WHO / EU inspections",
      "Cross-functional leadership",
    ],
    highlights: [
      "35 years at leading Global Pharma MNCs",
      "Worked on 9 USA-based projects",
      "Specialization in sterile injectables, nasal spray, BFS technology, MDI, DPI",
    ],
  },
  {
    name: "Gurudev Suryavanshi",
    title: "The Operator",
    role: "Strategic Operations Executive",
    years: "24+",
    yearsLabel: "Years at USV Private Limited",
    icon: OperationsIcon,
    image: "/gurudev.jpg",
    linkedin: "https://www.linkedin.com/in/gurudev-suryavanshi-94149321/",
    phone: "+91 99877 48837",
    email: "gurudev.suryavanshi1682@gmail.com",
    bio: "Gurudev Suryavanshi is a strategic operations professional with 24 years of experience in transforming complex formulations into commercial successes through integrated expertise in R&D, manufacturing, and supply chain excellence.",
    extendedBio:
      "His career is centered around bridging the gap between technical innovation and operational efficiency. He is focused on building high-performing teams that deliver life-saving medicines with speed, quality, and cost-effectiveness.",
    competencies: [
      "Finished dosage formulations",
      "External / contract manufacturing",
      "New product launch",
      "Quality compliance and audit compliance",
      "Production planning and inventory control",
      "Cross-functional project leadership",
    ],
    highlights: [
      "Senior Manager at USV Private Limited since 2002",
      "Expertise in auditing, outsourcing and costing",
      "Core team member for new plant project at USV Baddi",
    ],
  },
  {
    name: "Inamdar Bhaisaheb",
    title: "The Foundation",
    role: "Academic & Institutional Expert",
    years: "35+",
    yearsLabel: "Years of Academic Service",
    icon: AcademicIcon,
    image: "/inamdar.jpg",
    linkedin: "https://www.linkedin.com/in/bhaisaheb-inamdar-711b25402/",
    phone: "+91 70209 92919",
    email: "bbidpham@gmail.com",
    bio: "Inamdar Bhaisaheb is a distinguished pharmaceutical educator with a remarkable career spanning 35 years of continuous service. He is an alumnus of Govt. College of Pharmacy, Karad, where he completed both his Diploma in Pharmacy and Bachelor of Pharmacy.",
    extendedBio:
      "He dedicated more than three decades to the same institution and contributed significantly to shaping the careers of thousands of pharmacy professionals. Beyond teaching, he is recognized for mentorship, academic rigor, and professional ethics.",
    competencies: [
      "Pharmaceutical education and academic leadership",
      "Curriculum understanding",
      "Institutional standards and operations",
      "Student mentoring and development",
      "Academic rigor and ethics",
      "Long-term pharma industry perspective",
    ],
    highlights: [
      "35 years at Pravara College of Pharmacy",
      "B.Pharm alumnus of Govt. College of Pharmacy, Karad",
      "Shaped careers of thousands of pharmacy professionals",
    ],
  },
];

function Building2Icon() {
  return <Award size={24} />;
}
function OperationsIcon() {
  return <Briefcase size={24} />;
}
function AcademicIcon() {
  return <GraduationCap size={24} />;
}

export default function AboutPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden bg-midnight-blue">
        <div className="absolute inset-0">
          <Image 
            src="/images/about-lab.webp" 
            alt="Modern pharmaceutical laboratory" 
            fill 
            sizes="100vw"
            className="object-cover opacity-40 mix-blend-luminosity" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue/80 to-midnight-blue/95" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
              About Alvertech Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The Synthesis of{" "}
              <span className="text-blue-400">
                Expertise
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Alvertech Solutions represents a synthesis of rigorous R&D
              foundation, operational scale-up expertise, and unparalleled
              regulatory facility design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Don&apos;t Just Advise — We Engineer Success
          </h2>
          <p className="text-lg text-soft-gray leading-relaxed">
            Our foundation is built upon decades of hands-on experience in the
            most rigorous environments of the pharmaceutical and biotech
            industries. We specialize in the seamless transition from academic
            formulation to commercial scale-up, ensuring that scientific
            breakthroughs meet the stringent requirements of global regulatory
            bodies.
          </p>
          <p className="mt-4 text-lg text-soft-gray leading-relaxed">
            Our approach to facility design is deeply rooted in USFDA
            compliance, mitigating risk before a single foundation is laid.
          </p>
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="bg-slate-bg section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-tech-blue font-semibold text-sm uppercase tracking-widest mb-2">
              The Three Pillars
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Our Leadership</h2>
            <p className="mt-4 text-lg text-soft-gray max-w-2xl mx-auto">
              Guided by industry veterans with a proven track record of
              institutional knowledge and regulatory mastery.
            </p>
          </div>

          <div className="space-y-16">
            {founders.map((founder, idx) => {
              const Icon = founder.icon;
              const isReversed = idx % 2 !== 0;
              return (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-8 lg:gap-12 items-start`}
                >
                  {/* Photo */}
                  <div className="w-full lg:w-5/12 shrink-0">
                    <div className="relative overflow-hidden rounded card-shadow">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={600}
                        height={700}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight-blue/70 to-transparent p-6">
                        <span className="inline-block px-3 py-1.5 bg-tech-blue text-white text-xs font-bold rounded uppercase tracking-wider">
                          {founder.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-7/12">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded bg-tech-blue/10 flex items-center justify-center text-tech-blue">
                        <Icon />
                      </div>
                      <span className="text-sm font-semibold text-tech-blue uppercase tracking-wider">
                        {founder.role}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mt-2">
                      {founder.name}
                    </h3>
                    <p className="text-sm font-medium text-tech-blue mt-1">
                      {founder.years} Years of Experience •{" "}
                      {founder.yearsLabel}
                    </p>

                    <p className="mt-4 text-soft-gray leading-relaxed">
                      {founder.bio}
                    </p>
                    <p className="mt-3 text-soft-gray leading-relaxed">
                      {founder.extendedBio}
                    </p>

                    {/* Core Competencies */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-3">
                        Core Competencies
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {founder.competencies.map((comp) => (
                          <div
                            key={comp}
                            className="flex items-start gap-2 text-sm text-soft-gray"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-growth-green shrink-0 mt-1.5" />
                            {comp}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mt-6 p-4 bg-white rounded border border-border-light">
                      <h4 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-2">
                        Key Highlights
                      </h4>
                      <ul className="space-y-1.5">
                        {founder.highlights.map((h) => (
                          <li
                            key={h}
                            className="text-sm text-soft-gray flex items-start gap-2"
                          >
                            <span className="text-tech-blue mt-0.5">✓</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact & LinkedIn */}
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 gradient-btn text-white font-medium text-sm px-5 py-2.5 rounded transition-all duration-200 hover:shadow-lg"
                      >
                        <LinkedInIcon size={16} />
                        View LinkedIn Profile
                      </a>
                      <a
                        href={`mailto:${founder.email}`}
                        className="text-sm text-tech-blue hover:text-tech-blue-dark font-medium transition-colors"
                      >
                        {founder.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
