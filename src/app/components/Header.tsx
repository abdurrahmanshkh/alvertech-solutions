"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Leadership" },
  { href: "/advantage", label: "The Advantage" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border-light"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <Image
              src="/logo.png"
              alt="Alvertech Solutions"
              width={48}
              height={48}
              className="h-10 w-auto lg:h-12 transition-transform duration-300 group-hover:scale-110"
              priority
            />
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline">
                <span className="text-xl lg:text-2xl font-light text-soft-gray tracking-tight">ALVER</span>
                <span className="text-xl lg:text-2xl font-black text-tech-blue tracking-tight">TECH</span>
              </div>
              <span className="text-[10px] lg:text-[11px] font-bold text-soft-gray/60 tracking-[0.3em] -mt-0.5 uppercase">
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                    isActive
                      ? "text-tech-blue"
                      : "text-soft-gray hover:text-charcoal"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-tech-blue rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 gradient-btn text-white text-sm font-semibold px-6 py-2.5 rounded transition-all duration-200 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-charcoal hover:bg-slate-bg transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-6 space-y-1 bg-white border-t border-border-light">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-tech-blue bg-blue-50"
                    : "text-soft-gray hover:text-charcoal hover:bg-slate-bg"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              className="block text-center gradient-btn text-white font-semibold px-6 py-3 rounded transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
