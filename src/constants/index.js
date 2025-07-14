// Site temaları
export const SITE_THEMES = {
    CAR: 'car',
    AIRPLANE: 'airplane',
    MOVIE: 'movie'
};

// Bileşen tipleri
export const COMPONENT_TYPES = {
    NAVBAR: 'navbar',
    HOME: 'home',
    FOOTER: 'footer'
};

// Selector seçenekleri
export const SELECTOR_OPTIONS = {
    navbar: [
        { value: 'navbar1', label: 'Araba Galerisi', color: 'red-500', activeClass: 'bg-red-500' },
        { value: 'navbar2', label: 'Uçak Rezervasyonu', color: 'green-500', activeClass: 'bg-green-500' },
        { value: 'navbar3', label: 'Film Sitesi', color: 'blue-500', activeClass: 'bg-blue-500' }
    ],
    home: [
        { value: 'home1', label: 'Araba galerisi', color: 'red-500', activeClass: 'bg-red-500' },
        { value: 'home2', label: 'Uçak Rezervasyonu', color: 'green-500', activeClass: 'bg-green-500' },
        { value: 'home3', label: 'Film Sitesi', color: 'blue-500', activeClass: 'bg-blue-500' }
    ],
    footer: [
        { value: 'footer1', label: 'Araba Galerisi', color: 'red-500', activeClass: 'bg-red-500' },
        { value: 'footer2', label: 'Uçak Rezervasyonu', color: 'green-500', activeClass: 'bg-green-500' },
        { value: 'footer3', label: 'Film Sitesi', color: 'blue-500', activeClass: 'bg-blue-500' }
    ]
};

// Menü öğeleri
export const MENU_ITEMS = {
    car: [
        { label: 'Ana Sayfa', href: '#' },
        { label: 'Araçlarımız', href: '#' },
        { label: 'Hakkımızda', href: '#' },
        { label: 'İletişim', href: '#' }
    ],
    airplane: [
        { label: 'Ana Sayfa', href: '#' },
        { label: 'Uçuşlar', href: '#' },
        { label: 'Destinasyonlar', href: '#' },
        { label: 'Hakkımızda', href: '#' },
        { label: 'İletişim', href: '#' }
    ],
    movie: [
        { label: 'Ana Sayfa', href: '#' },
        { label: 'Filmler', href: '#' },
        { label: 'Diziler', href: '#' },
        { label: 'Kategoriler', href: '#' },
        { label: 'İletişim', href: '#' }
    ]
};

// Loading süreleri
export const LOADING_TIMES = {
    SITE_CREATION: 3000, // 3 saniye
};

// Route'lar
export const ROUTES = {
    HOME: '/',
    PREVIEW: '/PrewievPage'
};

// Responsive breakpoint'ler
export const BREAKPOINTS = {
    MOBILE: 'sm',
    TABLET: 'md',
    DESKTOP: 'lg',
    LARGE_DESKTOP: 'xl'
}; 