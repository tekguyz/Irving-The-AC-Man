import Image from "next/image";
import { BRAND } from "@/constants/brand";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80"
          alt="HVAC technician working on AC unit"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Overlays */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to right, oklch(15% 0.04 264 / 95%) 0%, oklch(15% 0.04 264 / 70%) 55%, oklch(15% 0.04 264 / 30%) 100%)"
        }}
      />
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to top, oklch(15% 0.04 264) 0%, transparent 45%)"
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="max-w-[680px] flex flex-col items-center lg:items-start">
          {/* Emergency Badge */}
          <div className="inline-flex items-center gap-2 bg-warning/15 border border-warning/40 text-warning px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-warning animate-[pulseDot_2s_ease-in-out_infinite]"></span>
            </span>
            ⚡ Same-Day Emergency Service Available
          </div>

          {/* Heading */}
          <h1 className="text-white font-extrabold leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,7vw,4rem)]">
            South Florida&apos;s Most <br className="hidden sm:block" />
            <span className="text-primary">Trusted AC Expert</span>
          </h1>

          {/* Divider */}
          <div className="w-12 h-[3px] bg-primary mt-4 mb-5 mx-auto lg:mx-0" />

          {/* Subheading */}
          <p className="text-lg text-white/90 max-w-[520px] mx-auto lg:mx-0">
            {BRAND.YEARS_EXPERIENCE} years of experience. Licensed & insured. {BRAND.REVIEW_COUNT} five-star reviews across Pompano Beach and Broward County.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col min-[420px]:flex-row items-center justify-center lg:justify-start gap-4 mt-8 w-full min-[420px]:w-auto">
            <a
              href={`tel:${BRAND.PHONE}`}
              className="w-full min-[420px]:w-auto bg-primary text-white font-bold rounded-xl px-8 py-4 text-lg hover:bg-primary-dark hover:shadow-[0_0_20px_oklch(60%_0.18_220/0.4)] hover:-translate-y-[2px] transition-all duration-300 text-center focus-ring"
            >
              📞 Call Now: {BRAND.PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              className="w-full min-[420px]:w-auto bg-transparent border-2 border-white text-white font-bold rounded-xl px-8 py-4 text-lg hover:bg-white hover:text-navy transition-all duration-300 text-center focus-ring"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Trust Micro-row */}
          <div className="grid grid-cols-2 lg:flex justify-center lg:justify-start gap-x-4 gap-y-3 mt-8 text-xs sm:text-sm text-white w-full max-w-[400px] lg:max-w-none mx-auto lg:mx-0 text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-primary">✅</span> Licensed {BRAND.LICENSE}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-primary">✅</span> Fully Insured
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-primary">⭐</span> {BRAND.REVIEW_COUNT} 5-Star Reviews
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-primary">🏆</span> Nextdoor Favorite
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-white w-8 h-8 opacity-70" />
      </div>
    </section>
  );
}
