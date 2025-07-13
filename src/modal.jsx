import React from "react";
import NavbarSelector from "./navbarSelector";
import Button from "./button";
export default function Modal({isOpen, onClose, children}){
    if(!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Arka plan karartma */}
      <div
        className="absolute  inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      {/* Modal kutusu */}
      
      <div className="relative bg-white p-8 h-170 w-300 rounded-lg shadow-lg z-10 min-w-[320px] flex flex-col">
  {/* Kapatma butonu */}
        <button className="absolute top-2 right-2 text-red-400 hover:text-red-700 text-2xl" onClick={onClose}>
            &times;
        </button>
  
        {/* Üst içerik */}
        <div className="flex-1">
             <h2 className=" text-center text-xl font-bold mb-4">Site İçeriklerini Seç</h2>
          <div className="bg-pink-200 p-4 block rounded-2xl">
            <h2 className="text-center mt-2 text-xl font-bold mb-4">Navbar Seç</h2>
                <NavbarSelector />
          </div>
        </div>
  
            {/* Alt buton - ortada ve yukarıda */}
            <div className="mt-6 text-center">
                <Button className="bg-orange-400 text-dark" onClick={onClose}>
                    Siteyi Yarat
                </Button>
                </div>
            </div>
      
      
    </div>
    )
}       