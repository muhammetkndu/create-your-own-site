export default function Footer2() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8 md:py-12 px-4 md:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-yellow-400 mr-2 text-2xl">✈️</span>
              <h3 className="text-xl font-bold">SkyWings</h3>
            </div>
            <p className="text-blue-100 mb-4 text-sm md:text-base">
              Dünya çapında güvenli ve konforlu uçuş deneyimi sunuyoruz.
              En uygun fiyatlarla hayalinizdeki destinasyonlara ulaşın.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-yellow-300 transition">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="text-blue-100 hover:text-yellow-300 transition">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="text-blue-100 hover:text-yellow-300 transition">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="text-blue-100 hover:text-yellow-300 transition">
                <span className="text-xl">📺</span>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition">Ana Sayfa</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition">Uçuşlar</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition">Destinasyonlar</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition">Hakkımızda</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition">İletişim</a></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-center text-blue-100">
                <span className="mr-2">📍</span>
                İstanbul Havalimanı
              </li>
              <li className="flex items-center text-blue-100">
                <span className="mr-2">📞</span>
                +90 212 555 0123
              </li>
              <li className="flex items-center text-blue-100">
                <span className="mr-2">✉️</span>
                info@skywings.com
              </li>
              <li className="flex items-center text-blue-100">
                <span className="mr-2">🕒</span>
                7/24 Hizmet
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-blue-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} SkyWings Airlines. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-yellow-300 text-sm transition">Gizlilik Politikası</a>
              <a href="#" className="text-blue-200 hover:text-yellow-300 text-sm transition">Kullanım Şartları</a>
              <a href="#" className="text-blue-200 hover:text-yellow-300 text-sm transition">KVKK</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}