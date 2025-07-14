import React from "react";

const Home2 = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center w-full bg-cover bg-center py-12 md:py-20 lg:py-32"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80')",
        }}>
        <div className="text-center max-w-4xl mx-4 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Dünyayı <span className="text-yellow-400">Keşfedin</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 px-4">
            En uygun fiyatlarla dünya çapında uçuşlar
          </p>

          {/* Uçuş Arama Formu */}
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nereden</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>İstanbul</option>
                  <option>Ankara</option>
                  <option>İzmir</option>
                  <option>Antalya</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nereye</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Londra</option>
                  <option>Paris</option>
                  <option>New York</option>
                  <option>Tokyo</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Gidiş</label>
                <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Dönüş</label>
                <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg mt-4 transition">
              Uçuş Ara
            </button>
          </div>
        </div>
      </div>

      {/* Popüler Destinasyonlar */}
      <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8 md:mb-12">
            Popüler Destinasyonlar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Destinasyon 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80"
                alt="Londra"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Londra, İngiltere</h3>
                <p className="text-gray-600 mb-4">Tarihi ve modern şehrin mükemmel karışımı</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">€299</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                    Rezervasyon
                  </button>
                </div>
              </div>
            </div>

            {/* Destinasyon 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1502602898534-47d3c0c2b0d3?auto=format&fit=crop&w=400&q=80"
                alt="Paris"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Paris, Fransa</h3>
                <p className="text-gray-600 mb-4">Aşk ve sanatın başkenti</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">€349</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                    Rezervasyon
                  </button>
                </div>
              </div>
            </div>

            {/* Destinasyon 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80"
                alt="New York"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">New York, USA</h3>
                <p className="text-gray-600 mb-4">Hiç uyumayan şehir</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">€599</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                    Rezervasyon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hizmetler */}
      <div className="py-12 md:py-16 bg-blue-600 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            Neden SkyWings?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 text-2xl">✈️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Güvenli Uçuşlar</h3>
              <p className="text-blue-100">En yüksek güvenlik standartları</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Uygun Fiyatlar</h3>
              <p className="text-blue-100">En iyi fiyat garantisi</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 text-2xl">🕒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">7/24 Destek</h3>
              <p className="text-blue-100">Kesintisiz müşteri hizmeti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2;

