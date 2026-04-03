import { COPY } from "@/constants/copy";
import RevealOnScroll from "./RevealOnScroll";

export default function TrustBar() {
  return (
    <section className="w-full bg-navy-light py-5 lg:py-0 lg:h-16 flex items-center justify-center border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 lg:flex lg:flex-nowrap justify-center lg:justify-between items-center gap-y-4 gap-x-4 lg:gap-x-8">
          {COPY.TRUST_BAR_STATS.map((stat, index) => (
            <RevealOnScroll 
              key={index} 
              delay={index * 60} 
              direction="up" 
              className={`flex items-center justify-center lg:justify-start ${index === COPY.TRUST_BAR_STATS.length - 1 ? 'col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-center gap-2 text-white/90 font-semibold text-xs sm:text-sm text-center lg:text-left">
                <span className="text-primary">{stat.icon}</span>
                <span>{stat.label}</span>
                {index < COPY.TRUST_BAR_STATS.length - 1 && (
                  <div className="hidden lg:block w-px h-6 bg-white/10 ml-8" />
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
