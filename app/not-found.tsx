import Link from "next/link";
import { BRAND } from "@/constants/brand";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-navy flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl mb-6">❄️</div>
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
        Page Not Found
      </h1>
      <p className="text-muted text-lg md:text-xl mb-8">
        Let's get you back to the cool side.
      </p>
      <Link
        href="/"
        className="bg-primary text-white font-bold rounded-xl px-8 py-4 text-lg hover:bg-primary-dark transition-colors mb-6"
      >
        Back to Home
      </Link>
      <a
        href={`tel:${BRAND.PHONE}`}
        className="text-primary hover:text-white transition-colors font-bold text-xl"
      >
        Or call us: {BRAND.PHONE_DISPLAY}
      </a>
    </main>
  );
}
