import { BRAND } from "@/constants/brand";
import { Zap, Wrench, Home, Shield, Building2, Wind } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function ServicesSection() {
  const services = [
    {
      id: "emergency",
      icon: <Zap className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" />,
      title: "Emergency / Same-Day Service",
      desc: "AC breakdown? We respond fast — same day, evenings, and weekends. South Florida heat doesn't wait.",
      tag: "SAME-DAY AVAILABLE",
    },
    {
      id: "repair",
      icon: <Wrench className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" />,
      title: "AC Repair & Diagnostics",
      desc: "Accurate diagnosis, honest pricing. We work on all major brands — Trane, Carrier, Goodman, Lennox, Rheem, York.",
    },
    {
      id: "install",
      icon: <Home className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" />,
      title: "New AC Installation",
      desc: "Full system replacements and new installs. We'll help you choose the right unit for your home and budget.",
    },
    {
      id: "maintenance",
      icon: <Shield className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" />,
      title: "Preventive Maintenance",
      desc: "Regular tune-ups extend system life, lower energy bills, and prevent costly emergency breakdowns.",
    },
    {
      id: "commercial",
      icon: <Building2 className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" />,
      title: "Commercial HVAC",
      desc: "From small offices to large commercial spaces, we keep your business comfortable year-round.",
    },
    {
      id: "ducts",
      icon: <Wind className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-white" />,
      title: "Duct Cleaning",
      desc: "Clean ducts mean better air quality and system efficiency. Improve your indoor air today.",
    },
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll delay={0} direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-bold tracking-wide uppercase">
              What We Do
            </span>
            <h2 className="text-navy text-4xl font-bold mt-2 mb-4">
              Complete HVAC Solutions
            </h2>
            <p className="text-navy-light text-lg">
              From emergency repairs to full system installs — we handle it all across South Florida.
            </p>
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} delay={index * 100} direction="up">
              <div
                className="group bg-white border border-primary/15 rounded-[1.25rem] p-5 md:p-7 shadow-sm hover:border-primary hover:-translate-y-1 hover:shadow-[0_20px_40px_oklch(60%_0.18_220/0.15)] transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary">
                  {service.icon}
                </div>
                <h3 className="text-navy font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-grow">
                  {service.desc}
                </p>
                {service.tag && (
                  <div className="mt-auto">
                    <span className="inline-block bg-warning text-white text-xs font-bold px-3 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA Banner */}
        <RevealOnScroll delay={200} direction="up">
          <div className="mt-16 bg-primary rounded-2xl py-8 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="text-white text-xl font-medium">
              Not sure what you need? Call Irving — he&apos;ll diagnose it.
            </p>
            <a
              href={`tel:${BRAND.PHONE}`}
              className="w-full md:w-auto bg-white text-navy font-bold rounded-xl px-8 py-4 text-lg hover:bg-gray-50 transition-colors shrink-0 text-center focus-ring"
            >
              📞 {BRAND.PHONE_DISPLAY}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
