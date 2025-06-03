# Zynora E-Ticaret Uygulaması

Zynora, React ve Node.js (Express, MongoDB) ile geliştirilmiş tam özellikli bir e-ticaret platformudur. Proje üç ana bölümden oluşur:

- **frontend/**: Kullanıcıların alışveriş yaptığı ana web sitesi<br>
- **admin/**: Ürün yönetimi için admin paneli<br>
- **backend/**: API ve veri tabanı işlemleri

## Klasör Yapısı

admin/      # Admin paneli (React)<br>
backend/    # Node.js/Express API ve MongoDB bağlantısı<br>
frontend/   # Kullanıcı arayüzü (React)

## Kurulum

### 1. Backend

cd backend<br>
npm install<br>
node index.js

Varsayılan olarak `localhost:4000` portunda çalışır.

### 2. Frontend

cd frontend<br>
npm install<br>
npm run dev

Varsayılan olarak `localhost:5173` portunda çalışır.

### 3. Admin Panel


cd admin<br>
npm install<br>
npm run dev

Varsayılan olarak `localhost:5173` portunda çalışır (farklı port gerekirse ayarlayabilirsiniz).

## Özellikler

- Kullanıcılar için ürün listeleme, kategoriye göre filtreleme, ürün detayları, sepete ekleme ve ödeme özeti
- Kullanıcı kayıt ve giriş işlemleri (JWT ile)
- Admin panelinden ürün ekleme, silme ve listeleme
- Görsel yükleme desteği (multer ile)
- MongoDB Atlas üzerinde ürün ve kullanıcı yönetimi

## Ortam Değişkenleri

- MongoDB bağlantı adresinizi `backend/index.js` dosyasında güncelleyebilirsiniz.

## Notlar

- Frontend ve admin paneli için TailwindCSS kullanılmaktadır.
- Geliştirme ortamında CORS açıktır.
- Görseller `backend/upload/images/` klasörüne kaydedilir.
