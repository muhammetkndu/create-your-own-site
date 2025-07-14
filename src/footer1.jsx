export default function Footer1() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 md:py-12 px-4 md:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-red-500 mr-2 text-2xl">🚗</span>
              <h3 className="text-xl font-bold">AutoLux</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Premium araç koleksiyonumuzla hayalinizdeki arabayı bulun.
              Güvenilir, kaliteli ve lüks araç deneyimi için doğru adrestesiniz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-400 transition">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition">
                <span className="text-xl">📺</span>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition">Ana Sayfa</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition">Araçlarımız</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition">Hakkımızda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition">İletişim</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition">Rezervasyon</a></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-center text-gray-300">
                <span className="mr-2">📍</span>
                İstanbul, Türkiye
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">📞</span>
                +90 212 555 0123
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">✉️</span>
                info@autolux.com
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">🕒</span>
                Pzt-Cmt: 09:00-18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AutoLux. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition">Gizlilik Politikası</a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition">Kullanım Şartları</a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition">KVKK</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}