import React from "react";
/* Icons (install once if not already):  npm i lucide-react */
import { Newspaper } from "lucide-react";

import blog1 from "../assets/Images/Blog1.png";
import blog2 from "../assets/Images/Blog2.png";
import blog3 from "../assets/Images/Blog3.png";

const posts = [
  {
    image: blog1, // ⬅️ replace
    date: "July 10, 2024",
    title: "How to Boost Your SEO in 2024",
    excerpt:
      "Discover cutting-edge SEO techniques and tactics to boost your website’s visibility.",
  },
  {
    image: blog2, // ⬅️ replace
    date: "July 20, 2024",
    title: "The Power of Content Marketing",
    excerpt:
      "Discover how impactful content marketing captivates audiences and builds loyalty.",
  },
  {
    image: blog3, // ⬅️ replace
    date: "May 15, 2024",
    title: "Social Media Trends to Watch",
    excerpt:
      "Explore upcoming social media trends and their potential impact on your strategy.",
  },
];

const BlogInsights = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-12 lg:py-16">
        {/* Centered heading block */}
        <div className="text-center mb-8 lg:mb-10">
          {/* Small badge */}
          <div className="mb-3 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-100">
                <Newspaper className="h-3 w-3 text-gray-700" />
              </span>
              Blog
            </span>
          </div>

          {/* Big headline (condensed/impact style) */}
          <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-extrabold tracking-[0.01em] uppercase text-gray-900">
            Insights & Updates
          </h2>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {posts.map(({ image, date, title, excerpt }) => (
            <article
              key={title}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="p-2">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={image} // ⬅️ replace with your path
                    alt={title}
                    className="h-56 w-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Meta */}
              <div className="px-4 pb-5">
                <p className="text-[12px] tracking-wide text-gray-500">{date}</p>
                <h3 className="mt-1.5 text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
