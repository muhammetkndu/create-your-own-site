import React from "react";
export default function Navbar3() {
    return(
    <nav className="bg-gray-900 h-16 flex items-center justify-between px-8 shadow">
      {/* Logo */}
      <div className="text-green-400 font-bold text-xl tracking-wide">
        SiteX
      </div>
      {/* Menü */}
      <ul className="flex items-center space-x-6">
        <li>
          <a
            href="#"
            className="text-gray-200 px-3 py-2 hover:text-green-400 transition"
          >
            Anasayfa
          </a>
        </li>
        <li>
          <span className="h-6 border-l border-gray-700"></span>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-200 px-3 py-2 hover:text-green-400 transition"
          >
            Hakkında
          </a>
        </li>
        <li>
          <span className="h-6 border-l border-gray-700"></span>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-200 px-3 py-2 hover:text-green-400 transition"
          >
            İletişim
          </a>
        </li>
      </ul>
      {/* Kayıt Ol Butonu */}
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition font-semibold">
        Kayıt Ol
      </button>
    </nav>
  );
};

