export const COPY = {
  HERO_EMERGENCY_BADGE: "⚡ Same-Day Emergency Service Available",
  
  HERO_HEADLINE: {
    line1: "South Florida's Most Trusted",
    line2: "AC Expert",
  },
  
  HERO_SUBHEADLINE: "17+ years of licensed HVAC experience. Backed by 100+ five-star reviews, delivering honest, reliable cooling solutions across Pompano Beach and Broward County.",
  
  HERO_TRUST_ITEMS: [
    "Licensed CAC1821029",
    "Fully Insured",
    "100+ 5-Star Reviews",
    "Nextdoor Neighborhood Favorite"
  ],

  TRUST_BAR_STATS: [
    { icon: "📅", label: "17+ Years Experience" },
    { icon: "⭐", label: "100+ Five-Star Reviews" },
    { icon: "🏆", label: "4x Nextdoor Favorite" },
    { icon: "🔧", label: "Licensed CAC1821029" },
    { icon: "⏰", label: "24/7 Emergency Service" }
  ],

  SERVICES_COPY: [
    {
      id: "emergency",
      name: "Emergency / Same-Day Service",
      description: "AC breakdown in the middle of a Florida summer? We respond fast with same-day, evening, and weekend repairs to restore your comfort immediately.",
      tag: "SAME-DAY AVAILABLE"
    },
    {
      id: "repair",
      name: "AC Repair & Diagnostics",
      description: "Tired of guessing games and hidden fees when your system acts up? Get accurate diagnostics and honest, lasting repairs for all major HVAC brands."
    },
    {
      id: "install",
      name: "New AC Installation",
      description: "Struggling with an old, inefficient unit that costs a fortune to run? We install high-performance, energy-saving systems tailored perfectly to your home and budget."
    },
    {
      id: "maintenance",
      name: "Preventive Maintenance",
      description: "Want to avoid unexpected breakdowns and sky-high electric bills? Our comprehensive tune-ups keep your system running efficiently and extend its lifespan for years."
    },
    {
      id: "commercial",
      name: "Commercial HVAC",
      description: "Is a malfunctioning AC threatening your business operations or customer comfort? We provide rapid, reliable commercial HVAC services to keep your doors open."
    },
    {
      id: "ducts",
      name: "Duct Cleaning",
      description: "Breathing in dust, allergens, or noticing weak airflow from your vents? Our thorough duct cleaning improves your indoor air quality and system efficiency instantly."
    }
  ],

  ABOUT_EYEBROW: "WHY CHOOSE IRVING",
  
  ABOUT_HEADLINE: {
    line1: "17 Years. One Name.",
    line2: "Irving."
  },
  
  ABOUT_PARAGRAPH: "I've spent the last 17 years working my way up from a hands-on technician to a service manager, and now the proud owner of my own HVAC company. Along the way, I've mastered every major brand and built a team that shares my dedication to doing the job right the first time. When you hire Irving The AC Man, you're getting my personal investment and unwavering commitment to your home's comfort.",
  
  ABOUT_DIFFERENTIATORS: [
    { label: "Licensed & Insured", description: "Lic. CAC1821029 — State of Florida" },
    { label: "All Major Brands", description: "Trane, Carrier, Rheem, Goodman, Lennox, York" },
    { label: "100+ Five-Star Reviews", description: "Nextdoor Favorite in 4 neighborhoods" },
    { label: "24/7 Availability", description: "Emergency service when you need it most" }
  ],
  
  ABOUT_QUOTE: "There's nothing that I can't fix. With 17 years of hands-on experience, I bring proven expertise and honest solutions to every single job.",

  REVIEWS_HEADING: "100+ Five-Star Reviews",
  REVIEWS_SUBHEADING: "Trusted by homeowners across Pompano Beach, Deerfield Beach, Lighthouse Point, and all of Broward County.",

  BRANDS_LABEL: "BRANDS WE SERVICE & REPAIR",

  SERVICE_AREA_HEADING: "Serving All of Broward County",
  SERVICE_AREA_SUBHEADING: "Based in Pompano Beach — we come to you.",

  CONTACT_EYEBROW: "GET IN TOUCH",
  CONTACT_HEADING: "Ready to Get Your AC Fixed?",
  CONTACT_SUBHEADING: "Call us for same-day service, or request a free quote and Irving will reply fast.",
  
  EMERGENCY_BOX_HEADING: "⚡ AC Emergency?",
  EMERGENCY_BOX_BODY: "Don't sweat out the South Florida heat. Call right now for rapid, same-day service anywhere in Broward County.",
  
  FORM_HEADING: "Request a Free Quote",
  FORM_SUBHEADING: "No obligation. We'll respond within the hour.",
  FORM_SUCCESS_HEADING: "Request Received!",
  FORM_SUCCESS_BODY: "Irving will call you back shortly. For immediate help, call (954) 292-1208.",
  FORM_TRUST_LINE: "🔒 Your info is private. No spam, ever.",

  FOOTER_TAGLINE: "Honest service. Expert repairs. South Florida's trusted AC man.",

  META_TITLE: "Irving The AC Man | AC Repair Pompano Beach FL",
  META_DESCRIPTION: "Need AC repair in Pompano Beach? Irving The AC Man offers licensed, 5-star HVAC & emergency service across Broward County. Call (954) 292-1208 today!",

  STRUCTURED_DATA: {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Irving The AC Man LLC",
    "url": "https://irvingtheacman.com",
    "telephone": "+1-954-292-1208",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5031 NE 6th Ave",
      "addressLocality": "Pompano Beach",
      "addressRegion": "FL",
      "postalCode": "33064",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.2845,
      "longitude": -80.1132
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "100"
    },
    "areaServed": [
      "Pompano Beach", "Deerfield Beach", "Lighthouse Point",
      "Boca Raton", "Delray Beach", "Fort Lauderdale",
      "Coral Springs", "Coconut Creek", "Margate", "Tamarac",
      "Oakland Park", "Wilton Manors", "Lauderdale-by-the-Sea",
      "Hillsboro Beach", "North Lauderdale", "Lauderdale Lakes",
      "Plantation", "Davie", "Weston", "Hollywood"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "State License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "State of Florida"
      },
      "credentialNumber": "CAC1821029"
    }
  }
} as const;
