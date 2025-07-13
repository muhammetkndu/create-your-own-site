import React from "react";
export default function Home1(){
    return(
            <section
              className="relative flex items-center justify-center h-[70vh] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
              }}
            >
              <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Hayalindeki Siteyi Kolayca Oluştur
                </h1>
                <p className="text-lg text-gray-200 mb-6">
                  Sürükle, bırak ve dakikalar içinde kendi web siteni tasarla.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded font-semibold transition">
                  Hemen Başla
                </button>
              </div>
            </section>
          );
        };
        
        