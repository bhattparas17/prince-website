import React from "react";
import { ArrowUpRight } from "lucide-react";
import HomeHero from "../assets/Images/HomeHero.png"; // ✅ correct path

export default function HeroSection() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(${HomeHero})`,
      }}
    >
      {/* Top pill with transparent shade */}
      <div className="bg-black/30 backdrop-blur-sm rounded-full px-6 py-2 flex items-center gap-2 mb-8">
        <span className="text-sm font-semibold text-white uppercase tracking-wide">
          #1 Digital Marketing
        </span>
        <span className="text-base">🚀</span>
      </div>

      {/* Headline */}
      <h1 className="text-white font-extrabold uppercase leading-[1.1] tracking-tight">
        <span className="text-7xl md:text-8xl text-lime-600">Elevate</span>{" "}
        <span className="text-7xl md:text-8xl">Your</span>
        <br />
        <span className="block text-7xl md:text-8xl">Marketing Game</span>
      </h1>

      {/* Subtext */}
      <p className="mt-8 max-w-3xl text-gray-300 text-lg md:text-xl leading-relaxed">
        Combining creativity and data-driven insights to deliver marketing
        solutions that inspire, engage, and drive conversions.
      </p>

      {/* CTA Button */}
      <a
        href="#"
        className="mt-10 bg-lime-600 text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-lime-500 transition"
      >
        Explore Our Solutions
        <ArrowUpRight size={22} strokeWidth={2.2} />
      </a>
    </section>
  );
}
