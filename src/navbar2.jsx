import React, { useState } from "react";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 h-auto min-h-16 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 shadow-lg w-full sticky top-0 z-50">
      {/* Logo */}
      <div className="text-white font-bold text-lg md:text-xl tracking-wide flex items-center py-4 md:py-0">
        <span className="text-yellow-400 mr-2">✈️</span>
        SkyWings
      </div>

      {/* Desktop Menü - 1020px üstünde görünür */}
      <ul className="hidden xl:flex space-x-6">
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
            Uçuşlar
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition text-base font-medium"
          >
            Destinasyonlar
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition text-base font-medium"
          >
            Hakkımızda
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

      {/* Desktop Butonlar - 1020px üstünde yan yana */}
      <div className="hidden xl:flex space-x-4 py-4 xl:py-0">
        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg transition font-semibold text-base">
          Giriş Yap
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg transition font-semibold text-base">
          Rezervasyon
        </button>
      </div>

      {/* Orta Ekran Menü (768px-1020px) */}
      <div className="hidden md:flex xl:hidden flex-col items-center space-y-2 py-4">
        <ul className="flex space-x-4 text-sm">
          <li>
            <a href="#" className="text-white hover:text-yellow-300 transition font-medium">
              Ana Sayfa
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-yellow-300 transition font-medium">
              Uçuşlar
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-yellow-300 transition font-medium">
              Destinasyonlar
            </a>
          </li>
        </ul>
        <div className="flex space-x-2">
          <button className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 px-3 py-1 rounded text-sm font-semibold transition">
            Giriş Yap
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-3 py-1 rounded text-sm font-semibold transition">
            Rezervasyon
          </button>
        </div>
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
        <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-800 md:hidden z-50 shadow-lg">
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
                Uçuşlar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-yellow-300 block py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinasyonlar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-yellow-300 block py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
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
              <button className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg transition font-semibold text-base">
                Giriş Yap
              </button>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg transition font-semibold text-base">
                Rezervasyon
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;

