export default function Footer1(){
    <footer className="bg-gray-900 text-white py-6 px-8 flex flex-col md:flex-row items-center justify-between">
    <div className="font-bold text-lg mb-4 md:mb-0">SiteBuilder</div>
    <ul className="flex space-x-6">
      <li>
        <a href="#" className="hover:underline">Anasayfa</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Hakkında</a>
      </li>
      <li>
        <a href="#" className="hover:underline">İletişim</a>
      </li>
    </ul>
    <div className="text-gray-400 text-sm mt-4 md:mt-0">
      © {new Date().getFullYear()} SiteBuilder. Tüm hakları saklıdır.
    </div>
  </footer>
}