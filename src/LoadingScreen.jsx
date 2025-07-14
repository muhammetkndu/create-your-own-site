import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const LoadingScreen = ({ onLoadingComplete }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // 3 saniye sonra preview sayfasına yönlendir
        const timer = setTimeout(() => {
            onLoadingComplete(); // Loading state'ini sıfırla
            navigate('/PrewievPage');r
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate, onLoadingComplete]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
            <div className="text-center text-white">
                {/* Logo animasyonu */}
                <div className="mb-8">
                    <div className="text-6xl mb-4 animate-bounce">🎨</div>
                    <h1 className="text-3xl font-bold mb-2">Site Oluşturucu</h1>
                    <p className="text-blue-100">Siteniz hazırlanıyor...</p>
                </div>

                {/* Loading animasyonu */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-white border-opacity-30 rounded-full"></div>
                        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="w-64 bg-white bg-opacity-20 rounded-full h-2 mx-auto">
                    <div className="bg-white h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                </div>

                {/* Adımlar */}
                <div className="mt-8 space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-sm">Bileşenler yükleniyor...</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <span className="text-sm">Tasarım uygulanıyor...</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <span className="text-sm">Son kontroller yapılıyor...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;