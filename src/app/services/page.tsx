import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Building2,
  Factory,
  FlaskConical,
  Shield,
  Award,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end pharmaceutical consultancy services: Facility Design & Project Execution, Manufacturing & Operations, and Product Development Support.",
};

const complianceBadges = [
  { label: "U.S. FDA", icon: Shield },
  { label: "WHO GMP", icon: Globe },
  { label: "EU EMA", icon: Award },
  { label: "cGMP", icon: CheckCircle },
];

const services = [
  {
    icon: Building2,
    title: "Facility Design & Project Execution",
    description:
      "We deliver comprehensive engineering solutions for both Greenfield and Brownfield projects. Our architectural and structural planning ensures optimal operational flow while maintaining strict adherence to regulatory cleanroom standards.",
    categories: [
      {
        heading: "Greenfield Developments",
        subtitle: "Ground-up facility planning and execution.",
        items: [
          "Injectable dosage forms",
          "Ophthalmic dosage forms",
          "Nasal dosage forms, including DPI and MDI",
          "Solid oral dosage forms",
        ],
      },
      {
        heading: "Brownfield Upgrades",
        subtitle: "Modernizing existing infrastructure.",
        items: [
          "Facility redesign and optimization",
          "Layout planning and restructuring",
          "Compliance upgrades for existing plants",
        ],
      },
      {
        heading: "Cleanroom Engineering",
        subtitle: "ISO-certified environmental controls and HVAC design.",
        items: [
          "HVAC design and consultation",
          "Cleanroom planning and validation",
          "Equipment selection and qualification",
        ],
      },
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing & Operations",
    description:
      "Transforming laboratory success into commercial viability. We optimize scale-up processes, implementing rigorous quality control protocols while driving significant cost optimization across the production lifecycle.",
    categories: [
      {
        heading: "Scale-Up Strategy",
        subtitle: "Seamless transition from pilot to commercial batches.",
        items: [
          "Process scale-up support",
          "Plant setup and commissioning",
          "Production troubleshooting",
        ],
      },
      {
        heading: "Cost Optimization",
        subtitle: "Yield improvement and process efficiency engineering.",
        items: [
          "Lean manufacturing implementation",
          "Cost optimization and analysis",
          "Production planning and inventory control",
        ],
      },
    ],
  },
  {
    icon: FlaskConical,
    title: "Product Development Support",
    description:
      "Accelerating your time-to-market with expert formulation development and robust technology transfer protocols. We ensure scientific integrity is maintained from R&D through to commercial manufacturing.",
    categories: [
      {
        heading: "Formulation Development",
        subtitle: "Advanced drug delivery systems and stability testing.",
        items: [
          "Injectable products",
          "Ophthalmic products",
          "Nasal products, including DPI and MDI",
          "Solid oral dosage forms",
        ],
      },
      {
        heading: "Technology Transfer",
        subtitle: "Validated site-to-site process migration.",
        items: [
          "Technology transfer from R&D to manufacturing",
          "Process development and optimization",
          "Documentation support",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-tech-blue blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-growth-green blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-tech-blue font-semibold text-sm uppercase tracking-widest mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              End-to-End Solutions from{" "}
              <span className="text-tech-blue">
                Concept to Commercialization
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Driving pharmaceutical and biotech innovation with strategic
              engineering, rigorous compliance, and scalable manufacturing
              solutions.
            </p>
          </div>

          {/* Compliance Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {complianceBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded px-4 py-2 text-white text-sm font-medium"
                >
                  <Icon size={16} className="text-growth-green" />
                  {badge.label}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Service Sections ── */}
      {services.map((service, idx) => {
        const Icon = service.icon;
        const isAlt = idx % 2 !== 0;
        return (
          <section
            key={service.title}
            className={`${isAlt ? "bg-slate-bg" : "bg-white"} section-padding`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded bg-tech-blue/10 flex items-center justify-center">
                  <Icon size={24} className="text-tech-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-tech-blue uppercase tracking-widest">
                    Service {idx + 1} of 3
                  </p>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {service.title}
              </h2>
              <p className="text-lg text-soft-gray max-w-3xl leading-relaxed mb-10">
                {service.description}
              </p>

              {/* Sub-Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.categories.map((cat) => (
                  <div
                    key={cat.heading}
                    className={`${
                      isAlt ? "bg-white" : "bg-slate-bg"
                    } rounded p-6 border border-border-light hover:card-shadow transition-shadow duration-300`}
                  >
                    <h3 className="text-lg font-semibold mb-1">
                      {cat.heading}
                    </h3>
                    <p className="text-sm text-tech-blue font-medium mb-4">
                      {cat.subtitle}
                    </p>
                    <ul className="space-y-2.5">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-soft-gray"
                        >
                          <CheckCircle
                            size={16}
                            className="text-growth-green shrink-0 mt-0.5"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="gradient-hero relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-growth-green blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need a Tailored Solution?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Our consultants will design a comprehensive strategy aligned with
            your facility requirements and regulatory goals.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="gradient-btn text-white font-semibold px-8 py-4 rounded transition-all duration-200 hover:shadow-xl inline-flex items-center gap-2"
            >
              Request a Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
