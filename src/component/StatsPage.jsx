import React from "react";
import Balls from "../assets/Images/Balls.png";

const SocialMediaLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 lg:py-14">
        {/* Tiny badge (Why Us) */}
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
            Why Us
          </span>
        </div>

        {/* Headline + Features (2 cols like the Figma) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-12 lg:mb-16">
          {/* Left – Headline & subcopy */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-gray-900">
              GROW YOUR BRAND
              <br />
              TO SOCIAL MEDIA
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
              Partner with us to experience unparalleled digital marketing
              expertise, drive measurable results, and unlock new growth
              opportunities.
            </p>
          </div>

          {/* Right – 2×2 features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {/* Item */}
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-green-500">
                <span className="h-2 w-2 rounded-full bg-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Innovation at Our Core
                </h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                  We stay ahead of trends to deliver cutting-edge solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-green-500">
                <span className="h-2 w-2 rounded-full bg-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Results Driven
                </h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                  Our strategies focus on achieving your business goals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-green-500">
                <span className="h-2 w-2 rounded-full bg-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Customization
                </h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                  Tailored services to meet your unique needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-green-500">
                <span className="h-2 w-2 rounded-full bg-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Expert Team
                </h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                  A skilled team dedicated to your success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Big image block (full-width card with correct aspect & crop) */}
        <div className="mb-12 lg:mb-16">
          <div className="rounded-2xl bg-gray-100 p-2 sm:p-3 shadow-md overflow-hidden">
            {/* Keep a stable aspect and make the image feel “heroic” */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9]">
              <img
                src={Balls}
                alt="3D geometric shapes with spheres and cubes"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-green-500">
              10<span className="text-2xl sm:text-3xl lg:text-4xl">+</span>
            </div>
            <div className="mt-1 text-sm font-medium text-gray-600">
              Years of Experience
            </div>
          </div>

          <div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-green-500">
              20<span className="text-2xl sm:text-3xl lg:text-4xl">+</span>
            </div>
            <div className="mt-1 text-sm font-medium text-gray-600">
              Happy Clients
            </div>
          </div>

          <div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-green-500">
              50<span className="text-2xl sm:text-3xl lg:text-4xl">+</span>
            </div>
            <div className="mt-1 text-sm font-medium text-gray-600">
              Project Delivery
            </div>
          </div>

          <div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-green-500">
              98<span className="text-2xl sm:text-3xl lg:text-4xl">%</span>
            </div>
            <div className="mt-1 text-sm font-medium text-gray-600">
              Client Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLanding;
