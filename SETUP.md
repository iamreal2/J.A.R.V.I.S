# J.A.R.V.I.S Setup Guide

## Hızlı Başlangıç

### 1. Ollama Kurulumu ve Model İndirme

```bash
# Ollama'yı indirin: https://ollama.ai/download
# Kurulumdan sonra:

ollama pull llama3
```

### 2. PostgreSQL Kurulumu

```bash
# PostgreSQL'i indirin: https://www.postgresql.org/download/
# Kurulumdan sonra database oluşturun:

createdb jarvis

# Schema'yı yükleyin (PostgreSQL dizininde):
psql -U postgres -d jarvis -f database/init.sql
```

### 3. Backend Environment Setup

`backend/.env` dosyasını oluşturun:

```env
DATABASE_URL=postgresql://postgres:SİFRENİZ@localhost:5432/jarvis
OLLAMA_URL=http://localhost:11434
OLLAMA_MODEL=llama3
GITHUB_TOKEN=
HOST=0.0.0.0
PORT=8000
```

**Önemli**: `SİFRENİZ` kısmını PostgreSQL şifrenizle değiştirin!

### 4. Backend Başlatma

```bash
# Otomatik:
start-backend.bat

# Manuel:
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app/main.py
```

### 5. Frontend Başlatma

```bash
# Otomatik:
start-frontend.bat

# Manuel:
cd frontend
npm install
npm run dev
```

## Sorun Giderme

### Ollama Çalışmıyor
```bash
# Ollama servisinin çalıştığını kontrol edin
ollama serve

# Model listesini kontrol edin
ollama list
```

### PostgreSQL Bağlantı Hatası
- PostgreSQL servisinin çalıştığını kontrol edin (Windows Services)
- Database URL'in doğru olduğunu kontrol edin
- Database'in oluşturulduğunu kontrol edin: `psql -U postgres -l`

### Frontend Backend'e Bağlanamıyor
- Backend'in çalıştığını kontrol edin: `http://localhost:8000/health`
- CORS hatası alıyorsanız, `backend/app/main.py`'daki CORS ayarlarını kontrol edin

### Import Hataları
```bash
# Backend dependencies'i yeniden yükleyin
cd backend
pip install --upgrade pip
pip install -r requirements.txt

# Frontend dependencies'i yeniden yükleyin
cd frontend
rm -rf node_modules package-lock.json
npm install
```

## Test Etme

1. Backend test: `http://localhost:8000/docs` (Swagger UI)
2. Frontend test: `http://localhost:3000`
3. Basit arama yapın: "Yiğit Erdoğan" gibi bir isim girin

## İlk Kullanım

1. Backend ve Frontend'i başlatın
2. `http://localhost:3000` adresini açın
3. JARVIS sizi karşılayacak
4. Bir isim girin (örn: "Linus Torvalds")
5. JARVIS bilgileri araştırsın
6. Beğendiyseniz "Save" butonuna basın
