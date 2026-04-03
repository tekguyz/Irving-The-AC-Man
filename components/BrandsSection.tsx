export default function BrandsSection() {
  const brands = [
    "TRANE",
    "CARRIER",
    "RHEEM",
    "GOODMAN",
    "LENNOX",
    "YORK",
  ];

  return (
    <section className="w-full bg-white py-12 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm uppercase tracking-widest text-muted font-semibold">
          Brands We Service & Repair
        </h3>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-full border-[1.5px] border-primary/25 px-6 py-2 font-semibold text-navy text-sm hover:bg-primary hover:text-white transition-colors duration-300 cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
