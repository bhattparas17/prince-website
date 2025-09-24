import React from "react";
/* Icons */
import { Sparkles, ArrowRight } from "lucide-react";

// ✅ Replace these with your actual file paths
import MAN_IMAGE from "../assets/Images/Man.png";          // Person cutout
import BACKGROUND_IMAGE from "../assets/Images/HomeHero.png";  // Background image

const TransformCtaHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-60"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay gradient for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 75% at 20% 30%, rgba(7, 49, 18, 0.9) 0%, rgba(5, 22, 10, 0.95) 40%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* Soft neon vignettes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-0 h-[38rem] w-[38rem] rounded-full blur-[120px] opacity-35"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 50%, rgba(174,255,105,0.35) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[34rem] w-[34rem] rounded-full blur-[120px] opacity-25"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 50%, rgba(130,200,70,0.28) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-semibold text-lime-300 shadow-[0_0_0_1px_rgba(163,255,93,0.15)_inset]">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-lime-400/20">
                  <Sparkles className="h-3 w-3 text-lime-300" />
                </span>
                Grow Your Business Today
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-extrabold tracking-[0.01em] uppercase">
              Ready to{" "}
              <span className="text-lime-400 drop-shadow-[0_0_20px_rgba(163,255,93,0.15)]">
                Transform
              </span>
              <br className="hidden sm:block" />
              Your Digital Strategy?
            </h1>

            {/* Subcopy */}
            <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/85">
              Take the next step in your digital journey! Whether you’re ready
              to dive in or just exploring, our team is here to guide you.
            </p>

            {/* Button */}
            <div className="mt-6">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-2.5 text-sm font-semibold text-black hover:bg-lime-200 transition-colors"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right side - Person image */}
          <div className="lg:col-span-5 xl:col-span-6">
            <div className="relative">
              <img
                src={MAN_IMAGE}
                alt="Smiling professional holding a tablet"
                className="ml-auto h-auto max-h-[360px] sm:max-h-[420px] lg:max-h-[460px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformCtaHero;
