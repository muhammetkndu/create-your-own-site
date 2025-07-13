import React from "react";
export default function Home2(){
    return(
        <section className="flex flex-col md:flex-row items-center justify-center h-[60vh] bg-gray-50 px-6">
      {/* Sol: Görsel */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
          alt="Takım"
          className="w-48 h-48 object-cover rounded-full shadow-lg"
        />
      </div>
      {/* Sağ: Metin */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Ekibimizle Tanışın
        </h2>
        <p className="text-gray-600 mb-5">
          Alanında uzman ekibimizle, size en iyi web deneyimini sunmak için çalışıyoruz.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded font-semibold transition">
          Daha Fazla Bilgi
        </button>
      </div>
    </section>
  );
};

