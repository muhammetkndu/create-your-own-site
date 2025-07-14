import React, { useState } from "react";

const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 h-16 flex items-center justify-between px-4 md:px-8 w-full sticky top-0 shadow-lg z-50">
      {/* Logo */}
      <div className="text-white font-bold text-lg md:text-xl tracking-wide flex items-center">
        <span className="text-red-500 mr-2">🚗</span>
        AutoLux
      </div>
      
      {/* Desktop Menü */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <a
            href="#"
            className="text-white hover:text-red-400 transition text-base font-medium"
          >
            Ana Sayfa
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-red-400 transition text-base font-medium"
          >
            Araçlarımız
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-red-400 transition text-base font-medium"
          >
            Hakkımızda
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-red-400 transition text-base font-medium"
          >
            İletişim
          </a>
        </li>
      </ul>

      {/* Desktop Buton */}
      <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition font-semibold text-base">
        Rezervasyon
      </button>

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
        <div className="absolute top-16 left-0 right-0 bg-gradient-to-r from-gray-900 to-gray-800 md:hidden z-50 shadow-lg">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a
                href="#"
                className="text-white hover:text-red-400 block py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-red-400 block py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Araçlarımız
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-red-400 block py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-red-400 block py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </a>
            </li>
            <li className="pt-2">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition font-semibold text-base">
                Rezervasyon
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;