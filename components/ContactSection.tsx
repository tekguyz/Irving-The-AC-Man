"use client";

import { useState } from "react";
import { BRAND } from "@/constants/brand";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import MapEmbed from "./MapEmbed";
import RevealOnScroll from "./RevealOnScroll";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-navy py-16 md:py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Info */}
          <div className="px-4 sm:px-0">
            <RevealOnScroll delay={0} direction="left">
              <span className="text-primary text-sm font-bold tracking-wide uppercase">
                Get In Touch
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-4">
                Ready to Get Your AC Fixed?
              </h2>
              <p className="text-muted text-lg mb-10">
                Call us for same-day service, or fill out the form and Irving will get back to you fast.
              </p>

              {/* Emergency Callout (Moved up for mobile) */}
              <div className="mb-10 bg-warning/10 border border-warning/40 rounded-2xl p-6">
                <h3 className="text-warning font-bold text-xl mb-2">⚡ AC Emergency?</h3>
                <p className="text-white mb-4">
                  Call right now — we offer same-day service throughout Broward County.
                </p>
                <a
                  href={`tel:${BRAND.PHONE}`}
                  className="inline-block w-full sm:w-auto text-center bg-warning text-navy font-bold px-6 py-3 rounded-xl hover:bg-yellow-500 transition-colors focus-ring"
                >
                  📞 Call Now
                </a>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-muted text-sm">Call or text anytime</div>
                    <a href={`tel:${BRAND.PHONE}`} className="text-primary font-bold text-xl hover:text-primary-dark transition-colors focus-ring">
                      {BRAND.PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <a href={`mailto:${BRAND.EMAIL}`} className="text-white hover:text-primary transition-colors focus-ring">
                    {BRAND.EMAIL}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white">{BRAND.ADDRESS}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white">{BRAND.HOURS}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white">License: {BRAND.LICENSE} — State of Florida</span>
                </div>
              </div>

              <div className="mt-10">
                <MapEmbed />
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column - Form */}
          <div>
            <RevealOnScroll delay={200} direction="right" className="h-full">
              <div className="bg-white sm:rounded-2xl p-6 sm:p-8 shadow-xl h-full">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <CheckCircle2 className="w-20 h-20 text-primary mb-6" />
                    <h3 className="text-navy text-3xl font-bold mb-4">Request Received!</h3>
                    <p className="text-muted text-lg mb-8">
                      Irving will call you back shortly. For immediate help: <br/>
                      <span className="font-bold text-navy">{BRAND.PHONE_DISPLAY}</span>
                    </p>
                    <a
                      href={`tel:${BRAND.PHONE}`}
                      className="bg-primary text-white font-bold rounded-xl px-8 py-4 text-lg hover:bg-primary-dark transition-colors w-full focus-ring"
                    >
                      📞 Call Now
                    </a>
                  </div>
                ) : (
                  <>
                    <h3 className="text-navy font-bold text-2xl mb-2">Request a Free Quote</h3>
                    <p className="text-muted text-sm mb-8">
                      No obligation. We'll respond within the hour.
                    </p>

                    <form 
                      onSubmit={handleSubmit}
                      name="irving-acman-leads"
                      data-netlify="true"
                      className="flex flex-col gap-5"
                    >
                      <input type="hidden" name="form-name" value="irving-acman-leads" />
                      <p className="hidden">
                        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                      </p>

                      <div>
                        <label htmlFor="fullName" className="block text-navy text-sm font-bold mb-2">Full Name*</label>
                        <input required type="text" id="fullName" name="fullName" className="w-full min-h-[48px] border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus-ring" />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-navy text-sm font-bold mb-2">Phone Number*</label>
                        <input required type="tel" id="phone" name="phone" className="w-full min-h-[48px] border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus-ring" />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-navy text-sm font-bold mb-2">Email (Optional)</label>
                        <input type="email" id="email" name="email" className="w-full min-h-[48px] border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus-ring" />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-navy text-sm font-bold mb-2">Service Needed*</label>
                        <select required id="service" name="service" className="w-full min-h-[48px] border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white focus-ring">
                          <option value="">Select a service...</option>
                          <option value="Emergency">Emergency / Same-Day Service</option>
                          <option value="Repair">AC Repair & Diagnostics</option>
                          <option value="Install">New AC Installation</option>
                          <option value="Maintenance">Preventive Maintenance</option>
                          <option value="Commercial">Commercial HVAC</option>
                          <option value="Ducts">Duct Cleaning</option>
                          <option value="Unsure">Not Sure — Just Need Help</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="brand" className="block text-navy text-sm font-bold mb-2">AC Brand (Optional)</label>
                        <input type="text" id="brand" name="brand" placeholder="e.g. Carrier, Trane" className="w-full min-h-[48px] border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus-ring" />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-navy text-sm font-bold mb-2">Message (Optional)</label>
                        <textarea id="message" name="message" rows={3} className="w-full min-h-[48px] border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none focus-ring"></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white font-bold rounded-xl py-4 text-base hover:bg-primary-dark hover:shadow-[0_0_20px_oklch(60%_0.18_220/0.4)] hover:-translate-y-[1px] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2 focus-ring"
                      >
                        {isSubmitting ? "Sending..." : "Send My Request →"}
                      </button>
                    </form>

                    <div className="mt-6 text-center text-muted text-xs">
                      🔒 Your info is private. No spam, ever.
                    </div>
                  </>
                )}
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
