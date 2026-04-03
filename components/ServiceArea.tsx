import { COPY } from "@/constants/copy";
import RevealOnScroll from "./RevealOnScroll";

export default function ServiceArea() {
  const cities = [
    { name: "Pompano Beach", isHome: true },
    { name: "Deerfield Beach" },
    { name: "Lighthouse Point" },
    { name: "Boca Raton" },
    { name: "Delray Beach" },
    { name: "Fort Lauderdale" },
    { name: "Coral Springs" },
    { name: "Coconut Creek" },
    { name: "Margate" },
    { name: "Tamarac" },
    { name: "Oakland Park" },
    { name: "Wilton Manors" },
    { name: "Lauderdale-by-the-Sea" },
    { name: "Hillsboro Beach" },
    { name: "North Lauderdale" },
    { name: "Lauderdale Lakes" },
    { name: "Plantation" },
    { name: "Davie" },
    { name: "Weston" },
    { name: "Hollywood" },
  ];

  return (
    <section id="service-area" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll direction="up">
          <span className="text-primary text-sm font-bold tracking-wide uppercase">
            Where We Work
          </span>
          <h2 className="text-navy text-3xl sm:text-4xl font-bold mt-2 mb-4">
            {COPY.SERVICE_AREA_HEADING}
          </h2>
          <p className="text-muted text-lg mb-10">
            {COPY.SERVICE_AREA_SUBHEADING}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={150} direction="up">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {cities.map((city) => (
              <div
                key={city.name}
                className={`rounded-full px-4 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-medium transition-colors duration-300 cursor-default flex items-center gap-2 ${
                  city.isHome
                    ? "bg-primary text-white border-primary"
                    : "border-[1.5px] border-primary/30 text-navy hover:bg-primary hover:text-white"
                }`}
              >
                {city.isHome && <span>📍</span>}
                {city.name}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
