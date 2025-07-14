import React, { useState } from "react";

const Navbar3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-indigo-900 h-16 flex items-center justify-between px-4 md:px-8 shadow-lg w-full sticky top-0 z-50">
      {/* Logo */}
      <div className="text-white font-bold text-lg md:text-xl tracking-wide flex items-center">
        <span className="text-yellow-400 mr-2">🎬</span>
        MovieHub
      </div>

      {/* Desktop Menü */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition text-base font-medium"
          >
            Ana Sayfa
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition text-base font-medium"
          >
            Filmler
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition text-base font-medium"
          >
            Diziler
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition text-base font-medium"
          >
            Kategoriler
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition text-base font-medium"
          >
            İletişim
          </a>
        </li>
      </ul>

      {/* Desktop Butonlar */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-4 py-2 rounded-lg transition font-semibold text-base">
          Giriş Yap
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-4 py-2 rounded-lg transition font-semibold text-base">
          Üye Ol
        </button>
      </div>

      {/* Mobil Hamburger Menü */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobil Menü Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gradient-to-r from-purple-900 to-indigo-900 md:hidden z-50 shadow-lg">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a
                href="#"
                className="text-white hover:text-yellow-300 block py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-yellow-300 block py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Filmler
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-yellow-300 block py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Diziler
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-yellow-300 block py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kategoriler
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-yellow-300 block py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </a>
            </li>
            <li className="pt-2 space-y-2">
              <button className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-4 py-2 rounded-lg transition font-semibold text-base">
                Giriş Yap
              </button>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-4 py-2 rounded-lg transition font-semibold text-base">
                Üye Ol
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar3;

