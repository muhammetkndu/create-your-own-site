import React from "react";
const features = [
    {
      title: "Hızlı Kurulum",
      desc: "Dakikalar içinde kendi siteni oluştur.",
      bg: "bg-blue-50"
    },
    {
      title: "Kolay Yönetim",
      desc: "Tüm içeriklerini tek panelden kontrol et.",
      bg: "bg-green-50"
    },
    {
      title: "Güvenli Altyapı",
      desc: "Verilerin her zaman güvende.",
      bg: "bg-purple-50"
    },
  ];
export default function Home3(){

  return (
    <section className="py-14 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Neden Bizi Seçmelisiniz?</h2>
        <p className="text-gray-500">Kullanıcı dostu, hızlı ve güvenli bir platform sunuyoruz.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`${feature.bg} rounded-xl shadow p-8 flex flex-col items-center text-center`}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{feature.title}</h3>
            <p className="text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

