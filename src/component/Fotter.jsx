import React, { useState } from "react";
/* Icons (install once if not already):  npm i lucide-react */
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

/**
 * Footer.jsx
 * Figma-accurate footer section.
 * - Replace LOGO_SRC with your logo path.
 * - Colors, spacing, and typography tuned to match the screenshot.
 * - Includes newsletter input with “Send” button.
 */

const LOGO_SRC = "/path/to/your-logo.png"; // ⬅️ replace with your logo image path

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle your submit here
    // e.g., call API or open mailto
    setEmail("");
  };

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand + contact */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_SRC}
                alt="ADVIBE"
                className="h-7 w-auto object-contain"
              />
            </div>

            <div className="mt-5 space-y-2 text-sm text-gray-600">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gray-500" />
                <span>123 Antique Street, Creativity City, Designland</span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-gray-500" />
                <a href="mailto:info@yoursite.com" className="hover:text-gray-900">
                  info@yoursite.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-gray-500" />
                <a href="tel:0842119892011" className="hover:text-gray-900">
                  0842119892011
                </a>
              </p>
            </div>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-gray-900">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Content Marketing</a></li>
              <li><a href="#" className="hover:text-gray-900">Social Media Management</a></li>
              <li><a href="#" className="hover:text-gray-900">PPC Advertising</a></li>
              <li><a href="#" className="hover:text-gray-900">Email Marketing</a></li>
              <li><a href="#" className="hover:text-gray-900">Web Design & Development</a></li>
              <li><a href="#" className="hover:text-gray-900">Analytics & Reporting</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-gray-900">
              Stay Updated with Our Insights
            </h4>
            <p className="mt-3 text-sm text-gray-600">
              Join Advibe’s newsletter for trends, tips, and exclusive offers!
            </p>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex items-stretch gap-2">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="enter your email"
                    className="w-full rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 rounded-full bg-lime-300 px-4 py-2.5 text-sm font-semibold text-black hover:bg-lime-200 transition-colors"
                >
                  Send
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-200"></div>

        {/* Bottom bar */}
        <div className="mt-4 flex flex-col-reverse items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row">
          <p>© 2024 Peterdraw. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-700">Blog</a>
            <a href="#" className="hover:text-gray-700">Case Studies</a>
            <a href="#" className="hover:text-gray-700">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
