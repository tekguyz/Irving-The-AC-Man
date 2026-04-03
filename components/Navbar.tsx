"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { BRAND } from "@/constants/brand";

export default function Navbar() {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 60;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Intersection Observer for active nav link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Service Area", href: "#service-area" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-xl border-b border-primary/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col z-50 relative max-w-[calc(100%-100px)]">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-[0.08em] uppercase truncate">
                ❄️ Irving The AC Man
              </span>
            </div>
            <span className="hidden md:block text-primary text-xs tracking-wide">
              Licensed HVAC Contractor — Pompano Beach, FL
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`relative text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-white hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <span 
                      className={`absolute -bottom-1 left-0 w-full h-[2px] bg-primary transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
            <a
              href={`tel:${BRAND.PHONE}`}
              className="bg-primary text-white font-bold rounded-full px-6 py-2.5 hover:bg-primary-dark transition-all duration-300 flex items-center gap-2 animate-glowPulse focus-ring"
              aria-label={`Call Irving at ${BRAND.PHONE_DISPLAY}`}
            >
              📞 {BRAND.PHONE_DISPLAY}
            </a>
          </div>

          {/* Mobile Right Side */}
          <div className="flex lg:hidden items-center gap-3 z-50 relative">
            <a
              href={`tel:${BRAND.PHONE}`}
              className="bg-primary text-white font-bold rounded-full px-4 h-9 flex items-center text-sm focus-ring"
              aria-label={`Call Irving at ${BRAND.PHONE_DISPLAY}`}
            >
              📞 Call
            </a>
            <button
              className="text-white w-[44px] h-[44px] flex items-center justify-center focus-ring rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "top-2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-2 w-full h-[2px] bg-white transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "top-2 -rotate-45" : "top-4"}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-[oklch(15%_0.04_264/0.98)] flex flex-col items-center justify-center transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center w-full px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-white text-3xl sm:text-4xl font-bold text-center py-4 hover:text-primary transition-colors duration-200 focus-ring rounded-lg px-4"
            >
              {link.name}
            </a>
          ))}
          
          <div className="absolute bottom-10 flex flex-col items-center gap-4">
            <div className="border border-primary text-primary rounded-full px-4 py-1.5 text-xs font-bold">
              Lic. {BRAND.LICENSE}
            </div>
            <a
              href={`tel:${BRAND.PHONE}`}
              className="text-white font-bold text-xl focus-ring rounded-lg px-4 py-2"
            >
              {BRAND.PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
