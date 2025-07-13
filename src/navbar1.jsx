import React from "react";
export default function Navbar1() {
    return(
    <nav className="bg-red-500 h-16 flex items-center justify-between px-8">
      {/* Logo */}
      <div className="text-white font-bold text-xl tracking-wide">
        SiteBuilder
      </div>
      {/* Menü */}
      <ul className="flex space-x-8">
        <li>
          <a
            href="#"
            className="text-white hover:underline underline-offset-4 transition"
          >
            Anasayfa
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:underline underline-offset-4 transition"
          >
            Hakkında
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:underline underline-offset-4 transition"
          >
            İletişim
          </a>
        </li>
      </ul>
    </nav>
    );
};