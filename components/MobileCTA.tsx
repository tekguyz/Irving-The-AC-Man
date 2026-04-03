"use client";

import { BRAND } from "@/constants/brand";

export default function MobileCTA() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-navy border-t-2 border-primary shadow-[0_-8px_30px_oklch(0%_0_0/0.4)] h-[calc(64px+env(safe-area-inset-bottom,0px))] pb-[env(safe-area-inset-bottom,0px)] flex">
      <a
        href={`tel:${BRAND.PHONE}`}
        className="flex-1 h-full flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm focus-ring"
        aria-label={`Call Irving at ${BRAND.PHONE_DISPLAY}`}
      >
        📞 Call Irving
      </a>
      <a
        href="#contact"
        onClick={handleScrollToContact}
        className="flex-1 h-full flex items-center justify-center gap-2 bg-warning text-navy font-bold text-sm focus-ring"
      >
        ⚡ Emergency
      </a>
    </div>
  );
}
