import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  TrendingDown,
  Layers,
  CheckCircle,
  Target,
  BarChart3,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Alvertech Advantage",
  description:
    "Precision engineered for pharmaceutical excellence — speed to market, regulatory certainty, cost optimization, and holistic expertise.",
};

const advantages = [
  {
    icon: Clock,
    title: "Speed to Market",
    description:
      "Accelerate product lifecycles through optimized tech transfer and lean manufacturing protocols, reducing time-to-clinic significantly.",
    color: "text-tech-blue",
    bg: "bg-tech-blue/10",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Certainty",
    description:
      "Pre-emptive compliance strategies engineered for FDA, EMA, and WHO standards. Our precision minimizes audit findings and submission delays.",
    color: "text-growth-green",
    bg: "bg-growth-green/10",
  },
  {
    icon: TrendingDown,
    title: "Cost Optimization",
    description:
      "Data-driven yield maximization and supply chain derisking. We identify inefficiencies at the molecular level to drive commercial viability.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Layers,
    title: "Holistic Expertise",
    description:
      "From early-stage process characterization to commercial launch, our integrated approach ensures continuity and knowledge retention across phases.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const methodology = [
  {
    icon: Target,
    step: "01",
    title: "Discovery & Assessment",
    description:
      "Comprehensive analysis of your current operations, regulatory landscape, and strategic objectives.",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Strategic Planning",
    description:
      "Data-driven roadmap development with clear milestones, compliance checkpoints, and resource optimization.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Execution & Validation",
    description:
      "End-to-end implementation with rigorous process characterization, validation protocols, and regulatory documentation.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Compliance & Launch",
    description:
      "Pre-emptive audit preparation, regulatory filing support, and seamless transition to commercial manufacturing.",
  },
];

export default function AdvantagePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-tech-blue blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-growth-green blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-48">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-tech-blue font-semibold text-sm uppercase tracking-widest mb-4">
              Why Choose Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Precision Engineered for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-growth-green">
                Pharmaceutical Excellence
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              We bridge the gap between scientific innovation and commercial
              reality. Our data-driven methodologies ensure operational
              resilience, regulatory compliance, and accelerated market entry for
              high-stakes clinical and commercial manufacturing.
            </p>
          </div>
        </div>
        <div className="hero-fade-bottom" />
      </section>

      {/* ── Advantage Cards ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="bg-white rounded p-6 border border-border-light card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded ${adv.bg} flex items-center justify-center mb-5`}
                  >
                    <Icon size={24} className={adv.color} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{adv.title}</h3>
                  <p className="text-sm text-soft-gray leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Proven Methodology ── */}
      <section className="bg-slate-bg section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-tech-blue font-semibold text-sm uppercase tracking-widest mb-2">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Proven Methodologies
            </h2>
            <p className="mt-4 text-lg text-soft-gray max-w-2xl mx-auto">
              Applied strategic growth and clinical precision in action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white rounded p-6 border border-border-light relative"
                >
                  <span className="text-6xl font-black text-tech-blue/10 absolute top-4 right-4 leading-none">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded bg-tech-blue/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-tech-blue" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-soft-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Case Study ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-midnight-blue to-charcoal rounded-lg overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="text-tech-blue font-semibold text-sm uppercase tracking-widest mb-4">
                Case Study
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Successful Scale-up of Sterile Injectables
              </h2>
              <p className="text-white/70 leading-relaxed max-w-3xl mb-8">
                For a top-tier biopharma client, Alvertech orchestrated the
                transition from clinical Phase III to commercial manufacturing
                for a complex sterile injectable. Through rigorous process
                characterization and advanced risk modeling, we identified
                critical process parameters that mitigated a projected 15% batch
                failure rate.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded p-5 border border-white/10">
                  <p className="text-3xl font-bold text-growth-green">15%</p>
                  <p className="text-sm text-white/60 mt-1">
                    Batch Failure Rate Mitigated
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded p-5 border border-white/10">
                  <p className="text-3xl font-bold text-tech-blue">Phase III</p>
                  <p className="text-sm text-white/60 mt-1">
                    To Commercial Scale
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded p-5 border border-white/10">
                  <p className="text-3xl font-bold text-white">
                    <CheckCircle size={32} className="inline" />
                  </p>
                  <p className="text-sm text-white/60 mt-1">
                    FDA Compliance Achieved
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="gradient-btn text-white font-semibold px-8 py-3 rounded transition-all duration-200 hover:shadow-xl inline-flex items-center gap-2"
              >
                Discuss Your Project <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
