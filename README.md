# J.A.R.V.I.S - AI Assistant 🤖

![JARVIS](https://img.shields.io/badge/JARVIS-AI%20Assistant-00f3ff?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.11-blue?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-0.109-009688?style=for-the-badge&logo=fastapi)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql)

**Just A Rather Very Intelligent System** - Iron Man'deki JARVIS'ten esinlenerek yapılmış, yapay zeka destekli kişi profil arama asistanı.

## ✨ Özellikler

- 🧠 **Ollama AI Integration** - Ücretsiz, local AI ile akıllı profil analizi
- 🔍 **Web Scraping** - GitHub, Instagram, X (Twitter), LinkedIn profil arama
- 🌐 **Google Search** - Bilgi bulunamazsa otomatik Google araması
- 💾 **PostgreSQL Database** - Onaylanan profilleri güvenli şekilde saklama
- 🎨 **Futuristic UI** - Iron Man temalı, Arc Reactor efektli arayüz
- ⚡ **Real-time Search** - Anında sonuçlar ve dinamik yükleme animasyonları

## 🏗️ Proje Yapısı

```
J.A.R.V.I.S/
├── backend/              # FastAPI Backend
│   ├── app/
│   │   ├── models/      # SQLAlchemy modelleri
│   │   ├── routes/      # API endpoints
│   │   ├── services/    # İş mantığı
│   │   └── schemas/     # Pydantic schemas
│   └── requirements.txt
│
├── frontend/            # Next.js Frontend
│   ├── app/            # Next.js app directory
│   ├── components/     # React bileşenleri
│   ├── services/       # API servisleri
│   └── types/          # TypeScript tipleri
│
└── database/
    └── init.sql        # PostgreSQL şema
```

## 🚀 Kurulum

### Gereksinimler

- Python 3.11+
- Node.js 18+
- PostgreSQL 16+
- Ollama (AI için)

### 1. Ollama Kurulumu

```bash
# Windows için Ollama'yı indirin ve kurun
# https://ollama.ai/download

# Llama 3 modelini indirin
ollama pull llama3
```

### 2. PostgreSQL Kurulumu

```bash
# PostgreSQL'i kurun ve başlatın
# Database oluşturun
createdb jarvis

# Schema'yı yükleyin
psql -U postgres -d jarvis -f database/init.sql
```

### 3. Backend Kurulumu

```bash
cd backend

# Virtual environment oluşturun
python -m venv venv
venv\Scripts\activate  # Windows

# Bağımlılıkları yükleyin
pip install -r requirements.txt

# .env dosyası oluşturun
copy .env.example .env
# .env dosyasını düzenleyin ve database bilgilerinizi girin

# Backend'i başlatın
python app/main.py
```

Backend şu adreste çalışacak: `http://localhost:8000`

### 4. Frontend Kurulumu

```bash
cd frontend

# Bağımlılıkları yükleyin
npm install

# Development server'ı başlatın
npm run dev
```

Frontend şu adreste çalışacak: `http://localhost:3000`

## 💻 Kullanım

1. **Frontend'i açın**: `http://localhost:3000`
2. **Bir isim girin**: Örnek: "Yiğit Erdoğan"
3. **JARVIS araştırsın**: AI, GitHub, sosyal medya ve web'de arama yapacak
4. **Sonuçları inceleyin**: JARVIS bulunan tüm bilgileri size sunacak
5. **Onaylayın**: Beğendiyseniz "Save" butonuna basın, PostgreSQL'e kaydedilsin

## 🎨 Kullanılan Teknolojiler

### Backend
- **FastAPI** - Modern, hızlı web framework
- **Ollama** - Ücretsiz, local AI
- **SQLAlchemy** - ORM
- **BeautifulSoup** - Web scraping
- **PostgreSQL** - Database

### Frontend
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animasyonlar
- **Axios** - HTTP client

## 🔧 API Endpoints

### Search
```http
POST /api/search/
Content-Type: application/json

{
  "query": "Yiğit Erdoğan"
}
```

### Profiles
```http
GET    /api/profiles/              # Tüm profiller
GET    /api/profiles/{id}          # Belirli bir profil
POST   /api/profiles/              # Yeni profil oluştur
DELETE /api/profiles/{id}          # Profil sil
GET    /api/profiles/search/{name} # İsme göre ara
```

## 🎯 Özellik Roadmap

- [ ] Voice input (ses ile arama)
- [ ] Multiple language support
- [ ] Export profilleri (JSON, CSV)
- [ ] Advanced filtering
- [ ] Email notifications
- [ ] Chrome extension

## 🐛 Bilinen Sorunlar

- Instagram ve X (Twitter) scraping platformların rate limiting'i nedeniyle bazen başarısız olabilir
- Ollama ilk kullanımda model download ettiği için yavaş olabilir
- Google scraping CAPTCHA ile karşılaşabilir

## 📝 Lisans

MIT License - İstediğiniz gibi kullanabilirsiniz!

## 👨‍💻 Geliştirici

Yiğit Erdoğan

## 🙏 Teşekkürler

- Marvel Studios - JARVIS konsepti için
- Tony Stark - İlham için 😄
- Ollama Team - Ücretsiz AI için

---

**"Sometimes you gotta run before you can walk."** - Tony Stark