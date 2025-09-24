import React from "react";
// Icons (install: npm i lucide-react)
import {
  FileText,
  Share2,
  Megaphone,
  Mail,
  MonitorSmartphone,
  Search,
} from "lucide-react";

// ✅ Import your background asset from src (Vite/CRA bundlers)
import HomeHero from "../assets/Images/HomeHero.png";
import logo1 from "../assets/Images/01.png"
import logo2 from "../assets/Images/02.png"
import logo3 from "../assets/Images/03.png"
import logo4 from "../assets/Images/05.png"
import logo5 from "../assets/Images/06.png"

const brandLogos = [
  { src: logo1, alt: "Brand 1" }, // ⬅️ replace
  { src: logo2, alt: "Brand 2" },
  { src: logo3, alt: "Brand 3" },
  { src: logo4, alt: "Brand 4" },
  { src: logo5, alt: "Brand 5" },
];



const services = [
  {
    icon: FileText,
    title: "Content Marketing",
    desc:
      "Engage your audience with compelling content that drives traffic and builds brand loyalty.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc:
      "Elevate your brand’s presence across social platforms with tailored strategies and impactful campaigns.",
  },
  {
    icon: Megaphone,
    title: "PPC Advertising",
    desc:
      "Drive targeted traffic to your site with cost-effective pay-per-click advertising solutions.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc:
      "Boost customer engagement and retention through personalized and effective email campaigns.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Design & Development",
    desc:
      "Create a stunning, user-friendly website that reflects your brand and converts visitors into customers.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc:
      "Improve a website’s visibility in search engine results to attract more organic traffic.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white min-h-screen">
      {/* Background image layer (fixed z-index and height context) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-70"
        style={{
          backgroundImage: `url(${HomeHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Soft neon green vignettes (Figma glow) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-0 h-[42rem] w-[42rem] rounded-full blur-[120px] opacity-40 -z-10"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(163, 255, 93, 0.35) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 right-10 h-[38rem] w-[38rem] rounded-full blur-[120px] opacity-35 -z-10"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(170, 255, 120, 0.30) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-16 lg:py-24">
        {/* Framed heading block */}
        <div className="rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10 text-center mb-12 lg:mb-14 bg-black/30 backdrop-blur-sm">
          {/* Small badge */}
          <div className="mb-4 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-semibold text-lime-300 shadow-[0_0_0_1px_rgba(163,255,93,0.15)_inset]">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-lime-400/20">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300"></span>
              </span>
              Services
            </span>
          </div>

          {/* BIG heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] leading-[1.05] font-extrabold tracking-[0.02em] uppercase">
            Your Path to Digital Excellence
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base text-white/85 leading-relaxed">
            Dive into our project portfolio to see how we’ve transformed
            businesses with our strategic solutions, driving growth and
            achieving outstanding results.
          </p>
        </div>

        {/* Services grid (3 cards x 2 rows) */}
        <div className="rounded-2xl border border-white/10 p-3 sm:p-4 lg:p-5 bg-black/35 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={[
                  "group relative rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)]",
                  "border border-white/10 p-5 sm:p-6 lg:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
                  "backdrop-blur-[2px]",
                ].join(" ")}
              >
                {/* subtle card highlight on some cells like Figma */}
                {(i === 4 || i === 2) && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-30 blur-[40px]"
                    style={{
                      background:
                        "radial-gradient(70% 60% at 50% 10%, rgba(170,255,120,0.20) 0%, rgba(0,0,0,0) 70%)",
                    }}
                  />
                )}

                <div className="relative flex items-start gap-4">
                  {/* Icon pill */}
                  <div className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-lime-400/10 ring-1 ring-lime-400/25">
                    <Icon className="h-5 w-5 text-lime-300" strokeWidth={2.2} />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logos strip */}
        <div className="mt-10 lg:mt-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 sm:px-6 sm:py-6 backdrop-blur-[2px]">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {brandLogos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo.src} // ⬅️ replace paths
                  alt={logo.alt}
                  className="h-8 sm:h-9 object-contain opacity-90"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
