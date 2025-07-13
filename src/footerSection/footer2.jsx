export default function Footer2(){
    <footer className="bg-gray-100 text-gray-700 py-8">
    <div className="flex flex-col items-center">
      <div className="font-extrabold text-xl mb-2">SB</div>
      <ul className="flex space-x-6 mb-4">
        <li>
          <a href="#" className="hover:text-blue-500">Anasayfa</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Hakkında</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">İletişim</a>
        </li>
      </ul>
      <div className="flex space-x-4 mb-2">
        <a href="#" className="hover:text-blue-600">Twitter</a>
        <a href="#" className="hover:text-blue-600">Instagram</a>
        <a href="#" className="hover:text-blue-600">LinkedIn</a>
      </div>
      <div className="text-gray-400 text-xs">
        © {new Date().getFullYear()} SB. Tüm hakları saklıdır.
      </div>
    </div>
  </footer>
}