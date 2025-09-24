import React from "react";
/* Icons (install once):  npm i lucide-react */
import {
  Sparkles,
  ArrowRight,
  Tag,
  BarChart3,
  Share2,
  MonitorSmartphone,
} from "lucide-react";

import image1 from "../assets/Images/Image1.png";
import image2 from "../assets/Images/Image2.png";
import image3 from "../assets/Images/Image3.png";
import image4 from "../assets/Images/Image4.png";

const projects = [
  {
    image: image1, // ⬅️ replace path
    category: "Branding",
    icon: Tag,
    title: "Innovative Branding Initiative",
  },
  {
    image: image2, // ⬅️ replace path
    category: "Conversion Optimization",
    icon: BarChart3,
    title: "Conversion Optimization Campaign",
  },
  {
    image: image3, // ⬅️ replace path
    category: "Social Media Management",
    icon: Share2,
    title: "Social Media Makeover",
  },
  {
    image: image4, // ⬅️ replace path
    category: "Web Design & Development",
    icon: MonitorSmartphone,
    title: "Company Profile Revamp",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="relative isolate bg-black text-white">
      {/* soft lime vignette like the Figma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-0 h-[36rem] w-[36rem] rounded-full blur-[120px] opacity-35"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 50%, rgba(170,255,120,0.30) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-14 lg:py-20">
        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: badge + headline */}
          <div className="md:col-span-7">
            <div className="mb-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-semibold text-lime-300 shadow-[0_0_0_1px_rgba(163,255,93,0.15)_inset]">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-lime-400/20">
                  <Sparkles className="h-3 w-3 text-lime-300" />
                </span>
                Project
              </span>
            </div>

            <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-extrabold uppercase tracking-[0.01em]">
              Look at our Featured
              <br className="hidden sm:block" />
              Project Success
            </h2>
          </div>

          {/* Right: copy + button */}
          <div className="md:col-span-5">
            <p className="text-white/80 leading-relaxed">
              Uncover the strategy, design, and innovation that made this
              project a standout achievement.
            </p>

            <button
              type="button"
              className="group mt-5 inline-flex items-center gap-2 rounded-full border border-lime-400/35 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300 hover:bg-lime-400/15 transition-colors"
            >
              Explore More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(({ image, category, icon: Icon, title }) => (
            <article
              key={title}
              className="rounded-2xl p-2 sm:p-3 bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)] transition-shadow"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={image} // ⬅️ put your actual path
                  alt={title}
                  className="h-56 w-full object-cover object-center md:h-60 lg:h-64"
                />
                {/* Subtle corner accent to mimic Figma's rounded feel */}
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
              </div>

              {/* Meta */}
              <div className="px-1 sm:px-2">
                <div className="mt-3 flex items-center gap-2 text-[11px] font-medium tracking-wide text-white/70">
                  <Icon className="h-3.5 w-3.5 text-lime-300" />
                  <span>{category}</span>
                </div>

                <h3 className="mt-1.5 text-base sm:text-lg font-semibold leading-snug">
                  {title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
