import Link from "next/link";
import { BRAND } from "@/constants/brand";
import { COPY } from "@/constants/copy";
import RevealOnScroll from "./RevealOnScroll";

export default function Footer() {
  return (
    <footer className="bg-[#121216] py-12 border-t border-primary/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Col 1 - Brand */}
          <RevealOnScroll delay={0} direction="up">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-white font-bold text-xl tracking-wider">
                ❄️ {BRAND.BUSINESS_NAME.toUpperCase()}
              </span>
              <span className="text-primary text-xs tracking-wide mt-1">
                Licensed HVAC Contractor
              </span>
              <p className="text-white/60 italic text-sm mt-4 max-w-xs">
                "{COPY.FOOTER_TAGLINE}"
              </p>
              <p className="text-muted text-xs mt-4">
                Lic. {BRAND.LICENSE}
              </p>
            </div>
          </RevealOnScroll>

          {/* Col 2 - Quick Links */}
          <RevealOnScroll delay={100} direction="up">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  { name: "Emergency Service", href: "#services" },
                  { name: "AC Repair", href: "#services" },
                  { name: "Installation", href: "#services" },
                  { name: "Maintenance", href: "#services" },
                  { name: "Commercial", href: "#services" },
                  { name: "Duct Cleaning", href: "#services" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted hover:text-primary transition-colors text-sm focus-ring">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Col 3 - Contact */}
          <RevealOnScroll delay={200} direction="up">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6">
                Contact
              </h4>
              <div className="flex flex-col gap-3 text-sm items-center md:items-start">
                <a href={`tel:${BRAND.PHONE}`} className="text-primary font-bold text-2xl md:text-lg hover:text-primary-dark transition-colors focus-ring">
                  {BRAND.PHONE_DISPLAY}
                </a>
                <a href={`mailto:${BRAND.EMAIL}`} className="text-muted hover:text-primary transition-colors focus-ring">
                  {BRAND.EMAIL}
                </a>
                <span className="text-muted text-center md:text-left">
                  {BRAND.ADDRESS}
                </span>
                <span className="text-muted">
                  {BRAND.HOURS}
                </span>
                <a
                  href={`tel:${BRAND.PHONE}`}
                  className="mt-4 bg-primary text-white font-bold rounded-full px-8 py-3 hover:bg-primary-dark transition-colors inline-block focus-ring"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </RevealOnScroll>

        </div>

        {/* Bottom Bar */}
        <RevealOnScroll delay={300} direction="up">
          <div className="border-t border-white/5 pt-6 mt-12 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted text-xs">
              © {new Date().getFullYear()} {BRAND.LEGAL_NAME} · All Rights Reserved
            </p>
            <p className="text-muted text-xs">
              {BRAND.CITY}, {BRAND.STATE} · Lic. {BRAND.LICENSE}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
