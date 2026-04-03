"use client";

import { useState, useEffect } from "react";
import { BRAND } from "@/constants/brand";
import { COPY } from "@/constants/copy";
import RevealOnScroll from "./RevealOnScroll";

export default function ReviewsSection() {
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const scrollPosition = target.scrollLeft;
    const cardWidth = target.offsetWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveDot(newIndex);
  };

  const reviews = [
    {
      quote: "AC went out on a Saturday afternoon in the middle of July. Called Irving and he was at my house within 2 hours. Fixed the issue quickly, explained everything clearly, and the price was more than fair. Absolute lifesaver.",
      name: "Michael R.",
      location: "Pompano Beach, FL",
      initials: "MR",
    },
    {
      quote: "Irving replaced my entire AC system last year. He gave me an honest assessment, didn't try to upsell me on anything I didn't need, and the install was clean and fast. My electric bill actually went down. Highly recommend.",
      name: "Sandra L.",
      location: "Deerfield Beach, FL",
      initials: "SL",
    },
    {
      quote: "I've used Irving for 3 years now — maintenance, one repair, and a duct cleaning. Every single time he's been on time, professional, and priced fairly. He's the only AC guy I'll ever call.",
      name: "James T.",
      location: "Lighthouse Point, FL",
      initials: "JT",
    },
  ];

  return (
    <section id="reviews" className="bg-[#f8faff] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <RevealOnScroll direction="up">
            <span className="text-primary text-sm font-bold tracking-wide uppercase">
              What Customers Say
            </span>
            <h2 className="text-navy text-4xl font-bold mt-2 mb-4">
              {COPY.REVIEWS_HEADING}
            </h2>
            <p className="text-muted text-lg mb-6">
              {COPY.REVIEWS_SUBHEADING}
            </p>
            <div className="text-yellow-400 text-3xl tracking-widest">
              ⭐⭐⭐⭐⭐
            </div>
          </RevealOnScroll>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden text-center mb-4 text-muted text-sm animate-[fadeOut_0.5s_2s_forwards]">
          swipe →
        </div>

        {/* Reviews Grid / Scroll Container */}
        <div 
          className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 -mx-4 px-4 md:mx-0 md:px-0"
          onScroll={handleScroll}
        >
          {reviews.map((review, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100} direction="up" className="min-w-[280px] w-[85vw] md:w-auto snap-start shrink-0 h-full">
              <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-primary/10 hover:shadow-md hover:border-primary/25 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary" />
                
                <div className="text-yellow-400 text-lg mb-4">⭐⭐⭐⭐⭐</div>
                
                <p className="text-navy font-medium text-base leading-relaxed italic mb-6 flex-grow">
                  "{review.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-navy font-bold">{review.name}</div>
                    <div className="text-muted text-sm">{review.location}</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Mobile Scroll Indicators */}
        <div className="flex md:hidden justify-center gap-2 mb-8">
          {reviews.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all duration-300 ${activeDot === idx ? 'w-6 bg-primary' : 'w-2 bg-primary/20'}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <RevealOnScroll delay={200} direction="up">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-primary text-primary font-bold rounded-full px-8 py-3 hover:bg-primary hover:text-white transition-colors duration-300 focus-ring"
            >
              See all {BRAND.REVIEW_COUNT} reviews on Google
            </a>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
