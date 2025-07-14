import React from "react";

const Home3 = () => {
  return (
    <section className="w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center w-full bg-cover bg-center py-12 md:py-20 lg:py-32"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80')",
        }}>
        <div className="text-center max-w-4xl mx-4 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Sınırsız <span className="text-yellow-400">Eğlence</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 px-4">
            Binlerce film ve dizi, tek tıkla erişiminizde
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-6 md:px-8 py-3 md:py-4 rounded-lg transition font-semibold text-lg">
              Hemen İzle
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-6 md:px-8 py-3 md:py-4 rounded-lg transition font-semibold text-lg">
              Ücretsiz Dene
            </button>
          </div>
        </div>
      </div>

      {/* Popüler İçerikler */}
      <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            Popüler İçerikler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Film 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80"
                alt="Film 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">Avengers: Endgame</h3>
                  <span className="bg-yellow-500 text-purple-900 px-2 py-1 rounded text-sm font-bold">9.0</span>
                </div>
                <p className="text-gray-600 mb-4">Aksiyon, Macera, Bilim Kurgu</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2019 • 3s 1dk</span>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
                    İzle
                  </button>
                </div>
              </div>
            </div>

            {/* Film 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80"
                alt="Film 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">Inception</h3>
                  <span className="bg-yellow-500 text-purple-900 px-2 py-1 rounded text-sm font-bold">8.8</span>
                </div>
                <p className="text-gray-600 mb-4">Bilim Kurgu, Aksiyon, Gerilim</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2010 • 2s 28dk</span>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
                    İzle
                  </button>
                </div>
              </div>
            </div>

            {/* Film 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80"
                alt="Film 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">The Dark Knight</h3>
                  <span className="bg-yellow-500 text-purple-900 px-2 py-1 rounded text-sm font-bold">9.0</span>
                </div>
                <p className="text-gray-600 mb-4">Aksiyon, Suç, Drama</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2008 • 2s 32dk</span>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
                    İzle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kategoriler */}
      <div className="py-12 md:py-16 bg-purple-800 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            Kategoriler
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-purple-700 rounded-xl p-6 text-center hover:bg-purple-600 transition cursor-pointer">
              <div className="text-3xl mb-2">🎬</div>
              <h3 className="text-white font-semibold">Aksiyon</h3>
            </div>
            <div className="bg-purple-700 rounded-xl p-6 text-center hover:bg-purple-600 transition cursor-pointer">
              <div className="text-3xl mb-2">😂</div>
              <h3 className="text-white font-semibold">Komedi</h3>
            </div>
            <div className="bg-purple-700 rounded-xl p-6 text-center hover:bg-purple-600 transition cursor-pointer">
              <div className="text-3xl mb-2">💕</div>
              <h3 className="text-white font-semibold">Romantik</h3>
            </div>
            <div className="bg-purple-700 rounded-xl p-6 text-center hover:bg-purple-600 transition cursor-pointer">
              <div className="text-3xl mb-2">👻</div>
              <h3 className="text-white font-semibold">Korku</h3>
            </div>
            <div className="bg-purple-700 rounded-xl p-6 text-center hover:bg-purple-600 transition cursor-pointer">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-white font-semibold">Bilim Kurgu</h3>
            </div>
            <div className="bg-purple-700 rounded-xl p-6 text-center hover:bg-purple-600 transition cursor-pointer">
              <div className="text-3xl mb-2">🔍</div>
              <h3 className="text-white font-semibold">Gerilim</h3>
            </div>
            <div className="bg-purple-700 rounded-xl p-6 text-center hover:bg-purple-600 transition cursor-pointer">
              <div className="text-3xl mb-2">🎭</div>
              <h3 className="text-white font-semibold">Drama</h3>
            </div>
            <div className="bg-purple-700 rounded-xl p-6 text-center hover:bg-purple-600 transition cursor-pointer">
              <div className="text-3xl mb-2">👶</div>
              <h3 className="text-white font-semibold">Çocuk</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Özellikler */}
      <div className="py-12 md:py-16 bg-indigo-900 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            Neden MovieHub?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-900 text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Her Yerde İzle</h3>
              <p className="text-indigo-200">Mobil, tablet ve TV'de kesintisiz izleme</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-900 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Kişiselleştirilmiş</h3>
              <p className="text-indigo-200">Size özel film ve dizi önerileri</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-900 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hızlı İndirme</h3>
              <p className="text-indigo-200">Çevrimdışı izleme için hızlı indirme</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3;

