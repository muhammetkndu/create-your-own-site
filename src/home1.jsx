import React from "react";

const Home1 = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center w-full bg-cover bg-center py-12 md:py-20 lg:py-32"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80')",
        }}>
        <div className="text-center max-w-4xl mx-4 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Lüks Araçların <span className="text-red-500">Dünyası</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 px-4">
            Premium araç koleksiyonumuzda hayalinizdeki arabayı bulun
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition font-semibold text-lg">
              Araçları İncele
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg transition font-semibold text-lg">
              İletişime Geç
            </button>
          </div>
        </div>
      </div>

      {/* Öne Çıkan Araçlar */}
      <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            Öne Çıkan Araçlarımız
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Araç 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=400&q=80"
                alt="BMW M3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">BMW M3 Competition</h3>
                <p className="text-gray-600 mb-4">510 HP, 0-100 km/s: 3.8 saniye</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">€85,000</span>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition">
                    Detaylar
                  </button>
                </div>
              </div>
            </div>

            {/* Araç 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=400&q=80"
                alt="Mercedes AMG"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Mercedes AMG GT</h3>
                <p className="text-gray-600 mb-4">585 HP, 0-100 km/s: 3.2 saniye</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">€120,000</span>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition">
                    Detaylar
                  </button>
                </div>
              </div>
            </div>

            {/* Araç 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=400&q=80"
                alt="Porsche 911"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Porsche 911 Carrera S</h3>
                <p className="text-gray-600 mb-4">450 HP, 0-100 km/s: 3.7 saniye</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">€95,000</span>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition">
                    Detaylar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hizmetler */}
      <div className="py-12 md:py-16 bg-gray-800 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            Neden Bizi Seçmelisiniz?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Araçlar</h3>
              <p className="text-gray-300">En kaliteli ve güncel araç modelleri</p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Güvenli Alım</h3>
              <p className="text-gray-300">%100 güvenli ödeme sistemi</p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Teknik Destek</h3>
              <p className="text-gray-300">7/24 teknik destek hizmeti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home1;

