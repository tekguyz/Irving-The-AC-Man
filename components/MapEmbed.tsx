"use client";

export default function MapEmbed() {
  return (
    <div className="w-full h-52 bg-navy-light rounded-xl overflow-hidden relative flex flex-col items-center justify-center border border-white/10 mt-6">
      <div className="text-white text-lg font-medium mb-4">
        📍 Pompano Beach, FL 33064
      </div>
      <a
        href="https://www.google.com/maps/place/Pompano+Beach,+FL"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-teal-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-teal-500 transition-colors"
      >
        Get Directions
      </a>
    </div>
  );
}
