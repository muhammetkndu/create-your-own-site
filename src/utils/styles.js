// Ortak stil sınıfları
export const commonStyles = {
    // Button stilleri
    button: {
        primary: "px-4 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none",
        secondary: "px-4 py-2 rounded-lg font-semibold border transition-all duration-200 focus:outline-none",
    },

    // Card stilleri
    card: {
        base: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:scale-105",
        image: "w-full h-48 object-cover",
        content: "p-6",
    },

    // Section stilleri
    section: {
        container: "py-12 md:py-16 lg:py-20 px-4 md:px-8",
        title: "text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12",
        grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
    },

    // Hero stilleri
    hero: {
        container: "relative flex items-center justify-center w-full bg-cover bg-center py-12 md:py-20 lg:py-32",
        content: "text-center max-w-4xl mx-4 px-4",
        title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6",
        subtitle: "text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 px-4",
    },

    // Navbar stilleri
    navbar: {
        base: "h-16 flex items-center justify-between px-4 md:px-8 w-full sticky top-0 shadow-lg z-50",
        logo: "text-white font-bold text-lg md:text-xl tracking-wide flex items-center",
        menu: "hidden md:flex space-x-6",
        menuItem: "text-white hover:text-red-400 transition text-base font-medium",
        mobileMenu: "md:hidden text-white p-2",
        mobileDropdown: "absolute top-16 left-0 right-0 md:hidden z-50 shadow-lg",
    },

    // Footer stilleri
    footer: {
        base: "text-white py-8 md:py-12 px-4 md:px-8 w-full",
        container: "max-w-7xl mx-auto",
        grid: "grid grid-cols-1 md:grid-cols-4 gap-8",
        title: "text-lg font-semibold mb-4",
        link: "text-gray-300 hover:text-red-400 transition",
    }
};

// Renk temaları
export const themes = {
    car: {
        primary: "red",
        secondary: "gray",
        accent: "red-500",
    },
    airplane: {
        primary: "blue",
        secondary: "blue",
        accent: "yellow-400",
    },
    movie: {
        primary: "purple",
        secondary: "purple",
        accent: "yellow-500",
    }
};

// Ortak metinler
export const commonTexts = {
    buttons: {
        details: "Detaylar",
        reservation: "Rezervasyon",
        contact: "İletişime Geç",
        explore: "İncele",
        login: "Giriş Yap",
        register: "Üye Ol",
    },
    sections: {
        featured: "Öne Çıkan",
        popular: "Popüler",
        services: "Hizmetler",
        whyChoose: "Neden Bizi Seçmelisiniz?",
    }
}; 