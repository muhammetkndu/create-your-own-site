import React from "react";
export default function Navbar2() {
    return(
    <nav className="bg-gray-100 h-16 flex items-center justify-between px-8 shadow">
      {/* Logo */}
      <div className="text-blue-600 font-extrabold text-lg tracking-widest">
        SB
      </div>
      {/* Menü */}
      <ul className="flex space-x-6">
        <li>
          <a
            href="#"
            className="text-gray-800 px-3 py-2 rounded hover:bg-blue-100 transition"
          >
            Anasayfa
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-800 px-3 py-2 rounded hover:bg-blue-100 transition"
          >
            Hakkında
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-800 px-3 py-2 rounded hover:bg-blue-100 transition"
          >
            İletişim
          </a>
        </li>
      </ul>
      {/* Giriş Yap Butonu */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition font-semibold">
        Giriş Yap
      </button>
    </nav>
  );
};

