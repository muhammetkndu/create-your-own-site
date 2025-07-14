# 🎨 Site Builder MVP

Modern ve kullanıcı dostu bir site oluşturucu uygulaması. Üç farklı tema (Araba Galerisi, Uçak Rezervasyonu, Film Sitesi) ile özelleştirilebilir web siteleri oluşturabilirsiniz.

## ✨ Özellikler

- 🎯 **3 Farklı Tema**: Araba Galerisi, Uçak Rezervasyonu, Film Sitesi
- 📱 **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- 🎨 **Modern UI/UX**: Tailwind CSS ile modern tasarım
- ⚡ **Hızlı Oluşturma**: Saniyeler içinde sitenizi oluşturun
- 🔄 **Gerçek Zamanlı Önizleme**: Anında sonuçları görün

## 🚀 Kurulum

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Production build oluşturun
npm run build
```

## 📁 Proje Yapısı

```
src/
├── components/          # Generic bileşenler
│   ├── GenericCard.jsx
│   ├── GenericSection.jsx
│   ├── GenericServiceCard.jsx
│   └── GenericSelector.jsx
├── constants/           # Sabitler
│   └── index.js
├── utils/              # Utility fonksiyonlar
│   └── styles.js
├── navbar1.jsx         # Araba galerisi navbar
├── navbar2.jsx         # Uçak rezervasyon navbar
├── navbar3.jsx         # Film sitesi navbar
├── home1.jsx           # Araba galerisi ana sayfa
├── home2.jsx           # Uçak rezervasyon ana sayfa
├── home3.jsx           # Film sitesi ana sayfa
├── footer1.jsx         # Araba galerisi footer
├── footer2.jsx         # Uçak rezervasyon footer
├── footer3.jsx         # Film sitesi footer
├── navbarSelector.jsx  # Navbar seçici
├── homeSelector.jsx    # Ana sayfa seçici
├── footerSelector.jsx  # Footer seçici
├── modal.jsx           # Site oluşturma modalı
├── LoadingScreen.jsx   # Yükleme ekranı
├── PrewievPage.jsx     # Önizleme sayfası
├── ContextProvider.jsx # Context API
├── button.jsx          # Generic buton bileşeni
├── App.jsx             # Ana uygulama
└── main.jsx            # Giriş noktası
```

## 🎯 Kullanım

1. **Ana Sayfa**: "Site Yap" butonuna tıklayın
2. **Bileşen Seçimi**: Navbar, Ana Sayfa ve Footer bileşenlerini seçin
3. **Oluşturma**: "Siteyi Oluştur" butonuna tıklayın
4. **Önizleme**: Oluşturulan sitenizi görüntüleyin

## 🛠️ Teknolojiler

- **React 18**: Modern React hooks ve context API
- **Vite**: Hızlı build tool
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Sayfa yönlendirme
- **Context API**: State yönetimi

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🎨 Tema Renkleri

### Araba Galerisi
- Primary: Red (#EF4444)
- Secondary: Gray (#6B7280)
- Accent: Red-500

### Uçak Rezervasyonu
- Primary: Blue (#3B82F6)
- Secondary: Blue (#1E40AF)
- Accent: Yellow-400

### Film Sitesi
- Primary: Purple (#7C3AED)
- Secondary: Purple (#5B21B6)
- Accent: Yellow-500

## 🔧 Geliştirme

### Yeni Tema Ekleme

1. `constants/index.js` dosyasına yeni tema ekleyin
2. Yeni navbar, home ve footer bileşenleri oluşturun
3. `PrewievPage.jsx` dosyasına bileşen mapping'lerini ekleyin

### Stil Değişiklikleri

Ortak stiller `utils/styles.js` dosyasında tanımlanmıştır. Bu dosyayı düzenleyerek tüm bileşenlerde tutarlı değişiklikler yapabilirsiniz.

## 📄 Lisans

MIT License

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

