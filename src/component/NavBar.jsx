import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react"; // ✅ proper icon

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const links = ["Home", "About", "Career"];

  return (
    <nav className="w-full bg-[#0b0d06] px-10 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-white font-bold text-xl tracking-wider">
        ADVIBE
      </div>

      {/* Nav Links */}
      <div className="flex space-x-6 text-base">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => setActive(link)}
            className={`px-5 py-2 rounded-full transition ${
              active === link
                ? "bg-neutral-800 text-white"
                : "text-white hover:text-gray-300"
            }`}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Contact Button */}
      <a
        href="#"
        className="bg-lime-400 text-black px-6 py-2 rounded-full font-medium text-base flex items-center gap-2 hover:bg-lime-300 transition"
      >
        Contact Us
        <ArrowUpRight size={18} strokeWidth={2.2} /> {/* ✅ clean icon */}
      </a>
    </nav>
  );
}
