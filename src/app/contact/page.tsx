"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Building2,
  User,
} from "lucide-react";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contacts = [
  {
    name: "Manoj Patel",
    role: "Facility Design & Sterile Manufacturing Expert",
    phone: "+91 98203 38978",
    phoneHref: "tel:+919820338978",
    email: "patelmanojc@gmail.com",
    linkedin: "https://www.linkedin.com/in/manoj-patel-885a3b61/",
  },
  {
    name: "Inamdar Bhaisaheb",
    role: "Academic & Institutional Expert",
    phone: "+91 70209 92919",
    phoneHref: "tel:+917020992919",
    email: "bbidpham@gmail.com",
    linkedin: "https://www.linkedin.com/in/bhaisaheb-inamdar-711b25402/",
  },
  {
    name: "Gurudev Suryavanshi",
    role: "Strategic Operations Executive",
    phone: "+91 99877 48837",
    phoneHref: "tel:+919987748837",
    email: "gurudev.suryavanshi1682@gmail.com",
    linkedin: "https://www.linkedin.com/in/gurudev-suryavanshi-94149321/",
  },
];

const serviceOptions = [
  "Facility Design & Project Execution",
  "Manufacturing & Operations Consulting",
  "Product Development Support",
  "Greenfield/Brownfield Projects",
  "Regulatory Compliance & Audit Prep",
  "Technology Transfer",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API endpoint
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-tech-blue blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-48">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-tech-blue font-semibold text-sm uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Partner with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-growth-green">
                Industry Experts
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Connect with our scientific leadership team to discuss strategic
              solutions, compliance, and growth for your pharmaceutical
              enterprise.
            </p>
          </div>
        </div>
        <div className="hero-fade-bottom" />
      </section>

      {/* ── Contact Content ── */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* ── Left Column: Contact Details ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* Headquarters */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-tech-blue/10 flex items-center justify-center">
                    <Building2 size={20} className="text-tech-blue" />
                  </div>
                  <h2 className="text-xl font-bold">Headquarters</h2>
                </div>
                <div className="flex gap-3 text-sm text-soft-gray pl-1">
                  <MapPin
                    size={18}
                    className="shrink-0 mt-0.5 text-tech-blue"
                  />
                  <div>
                    <p className="font-medium text-charcoal">
                      Alvertech Solutions
                    </p>
                    <p>Greenfield Residency, Flat No. 203,</p>
                    <p>Plot No. 03, Sector 35-I,</p>
                    <p>Kharghar, Navi Mumbai – 410210</p>
                    <p>Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Scientific Leadership */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-growth-green/10 flex items-center justify-center">
                    <User size={20} className="text-growth-green" />
                  </div>
                  <h2 className="text-xl font-bold">Scientific Leadership</h2>
                </div>
                <div className="space-y-5">
                  {contacts.map((c) => (
                    <div
                      key={c.name}
                      className="p-4 rounded bg-slate-bg border border-border-light"
                    >
                      <h3 className="font-semibold text-charcoal">
                        {c.name}
                      </h3>
                      <p className="text-xs text-tech-blue font-medium mt-0.5">
                        {c.role}
                      </p>
                      <div className="mt-3 space-y-2">
                        <a
                          href={c.phoneHref}
                          className="flex items-center gap-2 text-sm text-soft-gray hover:text-charcoal transition-colors"
                        >
                          <Phone size={14} className="text-tech-blue" />
                          {c.phone}
                        </a>
                        <a
                          href={`mailto:${c.email}`}
                          className="flex items-center gap-2 text-sm text-soft-gray hover:text-charcoal transition-colors"
                        >
                          <Mail size={14} className="text-tech-blue" />
                          {c.email}
                        </a>
                        <a
                          href={c.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-soft-gray hover:text-tech-blue transition-colors"
                        >
                          <LinkedInIcon size={14} />
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right Column: Form ── */}
            <div className="lg:col-span-3">
              <div className="bg-slate-bg rounded-lg p-6 md:p-8 border border-border-light">
                <h2 className="text-2xl font-bold mb-2">
                  Request Consultation
                </h2>
                <p className="text-sm text-soft-gray mb-8">
                  Provide your details below, and our specialized team will
                  contact you to discuss your strategic needs.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-growth-green/20 flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-growth-green" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">
                      Thank You!
                    </h3>
                    <p className="text-soft-gray mt-2 max-w-md mx-auto">
                      Your consultation request has been submitted. Our team
                      will reach out to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-charcoal mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded bg-white border border-border-light text-sm text-charcoal placeholder-soft-gray/60 focus:outline-none focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-charcoal mb-1.5"
                        >
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded bg-white border border-border-light text-sm text-charcoal placeholder-soft-gray/60 focus:outline-none focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 transition-all"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-charcoal mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded bg-white border border-border-light text-sm text-charcoal placeholder-soft-gray/60 focus:outline-none focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-charcoal mb-1.5"
                      >
                        Service Type *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded bg-white border border-border-light text-sm text-charcoal focus:outline-none focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 transition-all appearance-none"
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-charcoal mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded bg-white border border-border-light text-sm text-charcoal placeholder-soft-gray/60 focus:outline-none focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 transition-all resize-none"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full gradient-btn text-white font-semibold px-8 py-4 rounded transition-all duration-200 hover:shadow-xl hover:shadow-tech-blue/20 inline-flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Submit Consultation Request
                    </button>

                    <p className="text-xs text-soft-gray/70 text-center">
                      By submitting, you agree to our privacy policy regarding
                      the handling of sensitive corporate data.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
