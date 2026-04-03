import Image from "next/image";
import { BRAND } from "@/constants/brand";
import { COPY } from "@/constants/copy";
import { CheckCircle2 } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function WhyIrving() {
  const differentiators = [
    {
      label: "Licensed & Insured",
      desc: `Lic. ${BRAND.LICENSE} — State of Florida`,
    },
    {
      label: "All Major Brands",
      desc: "Trane, Carrier, Rheem, Goodman, Lennox, York",
    },
    {
      label: `${BRAND.REVIEW_COUNT} Five-Star Reviews`,
      desc: "Nextdoor Favorite in 4 neighborhoods",
    },
    {
      label: "24/7 Availability",
      desc: "Emergency service when you need it most",
    },
  ];

  return (
    <section id="about" className="bg-navy py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column */}
          <div className="w-full lg:w-[55%] order-1 lg:order-1">
            <RevealOnScroll delay={0} direction="left">
              <span className="text-primary text-sm font-bold tracking-wide uppercase">
                {COPY.ABOUT_EYEBROW}
              </span>
              <h2 className="text-4xl font-bold mt-2 leading-tight">
                {COPY.ABOUT_HEADLINE.line1}<br />
                {COPY.ABOUT_HEADLINE.line2}
              </h2>
              <div className="w-14 h-[3px] bg-primary mt-4 mb-6" />
              
              <p className="text-muted leading-relaxed text-lg">
                {COPY.ABOUT_PARAGRAPH}
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {COPY.ABOUT_DIFFERENTIATORS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block sm:inline">{item.label}</span>
                      <span className="text-muted sm:ml-2 block sm:inline">— {item.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-l-4 border-primary pl-4 sm:pl-6 py-2">
                <p className="text-white italic text-lg leading-relaxed">
                  "{COPY.ABOUT_QUOTE}"
                </p>
                <p className="text-primary font-bold mt-3">
                  — {BRAND.OWNER}, Owner
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[45%] relative order-2 lg:order-2">
            <RevealOnScroll delay={200} direction="right">
              <div className="relative aspect-video lg:aspect-[4/5] w-full rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Irving Hernandez working on an AC unit"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Overlay Badge */}
              <div className="absolute -bottom-4 lg:-bottom-6 -left-2 lg:-left-6 bg-white text-navy rounded-full px-4 lg:px-6 py-2 lg:py-3 shadow-xl flex items-center gap-2 border border-gray-100 text-sm lg:text-base">
                <span className="text-yellow-400 text-lg lg:text-xl">⭐</span>
                <span className="font-bold">5.0 · {BRAND.REVIEW_COUNT} Google Reviews</span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
