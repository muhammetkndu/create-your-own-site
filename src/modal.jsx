import React, { useContext, useState } from "react";
import NavbarSelector from "./navbarSelector";
import Button from "./button";
import HomeSelector from "./homeSelector";
import FooterSelector from "./footerSelector";
import { useNavigate } from "react-router";
import { AppContext } from "./ContextProvider";
import { LOADING_TIMES } from "./constants";

export default function Modal({ isOpen, onClose, onLoadingStart, children }) {
    const navigate = useNavigate();
    const { selectedNavbar, selectedHome, selectedFooter } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateSite = async () => {
        if (selectedNavbar && selectedHome && selectedFooter) {
            setIsLoading(true);
            onLoadingStart(); // App'teki loading state'i aktif et

            // Loading süresi kadar bekle
            await new Promise(resolve => setTimeout(resolve, LOADING_TIMES.SITE_CREATION));

            // Loading tamamlandı, sayfaya yönlendir
            navigate('/PrewievPage');
            onClose(); // Modal'ı kapat
        } else {
            alert("Lütfen Tüm Seçimleri Yapın");
        }
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
            {/* Arka plan karartma */}
            <div
                className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal kutusu */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto z-10 transform transition-all duration-300 scale-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                <span className="text-lg sm:text-xl">🎨</span>
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-2xl font-bold">Site Oluşturucu</h2>
                                <p className="text-blue-100 text-xs sm:text-sm">Bileşenlerinizi seçin ve sitenizi oluşturun</p>
                            </div>
                        </div>
                        <button
                            className="text-white hover:text-gray-200 transition-colors duration-200 p-1 sm:p-2 rounded-full hover:bg-white hover:bg-opacity-20"
                            onClick={onClose}
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {/* Navbar Seçimi */}
                    <div className="bg-gradient-to-r from-pink-50 to-red-50 border border-pink-200 rounded-xl p-4 sm:p-6">
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs sm:text-sm font-bold">1</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Navbar Seçimi</h3>
                        </div>
                        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Sitenizin üst kısmındaki navigasyon menüsünü seçin</p>
                        <NavbarSelector />
                    </div>

                    {/* Home Seçimi */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 sm:p-6">
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs sm:text-sm font-bold">2</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Ana Sayfa Seçimi</h3>
                        </div>
                        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Sitenizin ana içerik bölümünü seçin</p>
                        <HomeSelector />
                    </div>

                    {/* Footer Seçimi */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-4 sm:p-6">
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs sm:text-sm font-bold">3</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Footer Seçimi</h3>
                        </div>
                        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Sitenizin alt kısmındaki bilgi bölümünü seçin</p>
                        <FooterSelector />
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-b-2xl border-t border-gray-200">
                    <div className="flex flex-col space-y-4">
                        <div className="text-center sm:text-left">
                            <div className="text-sm text-gray-600">
                                {selectedNavbar && selectedHome && selectedFooter ? (
                                    <span className="text-green-600 font-semibold">✅ Tüm seçimler tamamlandı!</span>
                                ) : (
                                    <span className="text-orange-600 font-semibold">⚠️ Lütfen tüm seçimleri yapın</span>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                            <button
                                onClick={onClose}
                                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold text-sm sm:text-base"
                            >
                                İptal
                            </button>
                            <Button
                                onClick={handleCreateSite}
                                disabled={isLoading || !selectedNavbar || !selectedHome || !selectedFooter}
                                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center space-x-2">
                                        <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                                        <span>Siteniz Oluşturuluyor...</span>
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center space-x-2">
                                        <span>🚀</span>
                                        <span>Siteyi Oluştur</span>
                                    </span>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                {children}
            </div>
        </div>
    )
}       