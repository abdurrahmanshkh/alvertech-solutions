import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Leadership" },
  { href: "/advantage", label: "The Advantage" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight-blue text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Alvertech Solutions"
              width={180}
              height={50}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm leading-relaxed text-white/60 max-w-md">
              Transforming Pharmaceutical Visions into Operational Realities.
              Engineering excellence in clinical and commercial manufacturing
              with nearly a century of combined expertise.
            </p>
            <p className="mt-6 text-xs text-white/40">
              Scientific Precision. Strategic Growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-tech-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Headquarters
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-sm text-white/60">
                <MapPin size={18} className="shrink-0 mt-0.5 text-tech-blue" />
                <span>
                  Greenfield Residency, Flat No. 203,
                  <br />
                  Plot No. 03, Sector 35-I,
                  <br />
                  Kharghar, Navi Mumbai – 410210
                </span>
              </div>
              <div className="flex gap-3 text-sm text-white/60">
                <Phone size={18} className="shrink-0 text-tech-blue" />
                <a
                  href="tel:+919820338978"
                  className="hover:text-white transition-colors"
                >
                  +91 98203 38978
                </a>
              </div>
              <div className="flex gap-3 text-sm text-white/60">
                <Mail size={18} className="shrink-0 text-tech-blue" />
                <a
                  href="mailto:patelmanojc@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  patelmanojc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Alvertech Solutions. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Scientific Precision. Strategic Growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
