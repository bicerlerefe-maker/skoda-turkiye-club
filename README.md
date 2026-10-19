# Škoda Türkiye Club – Topluluk Sitesi

Bağımsız bir Škoda sahipleri topluluğu için hazırlanmış, tamamen ücretsiz yayınlanabilen tek sayfalık sitedir.
Sunucu, veritabanı veya ücretli hizmet gerektirmez.

> Bu site resmî Škoda sitesi değildir. Alt bilgideki uyarıyı silme.

## Dosyalar

| Dosya | Ne işe yarar? |
|---|---|
| `index.html` | Sitenin ana sayfası (yazılar ve bölümler) |
| `style.css` | Renkler ve görünüm |
| `script.js` | Menü ve butonların çalışması |
| `config.js` | **Senin değiştireceğin tek dosya**: WhatsApp, Instagram, Haftanın Škoda'sı |
| `README.md` | Bu rehber |

---

## 1) Siteyi Windows'ta açma

1. Dosyaların bulunduğu klasörü Dosya Gezgini'nde aç.
2. `index.html` dosyasına **çift tıkla**.
3. Site varsayılan tarayıcında (Edge, Chrome vb.) açılır.

Açılmazsa: `index.html` üzerinde sağ tıkla → **Birlikte aç** → Chrome veya Edge seç.

Bir değişiklik yaptıktan sonra tarayıcıda **F5** tuşuna basarak sayfayı yenile.

---

## 2) WhatsApp bağlantısını ekleme (en önemli ayar)

Şu an bağlantı **boş**. Bu yüzden sitede butonlar "Bağlantı Yakında" gösterir.

1. WhatsApp'ta grubunu aç → grup adına dokun → **Gruba davet et** → **Bağlantıyı kopyala**.
2. Bağlantı `https://chat.whatsapp.com/...` şeklinde başlar.
3. `config.js` dosyasını **Not Defteri** ile aç (sağ tık → Birlikte aç → Not Defteri).
4. Şu satırı bul:

   ```js
   whatsappLink: "",
   ```

5. Bağlantını iki tırnağın **arasına** yapıştır:

   ```js
   whatsappLink: "https://chat.whatsapp.com/SENIN_BAGLANTIN",
   ```

6. Dosyayı kaydet (Ctrl+S) ve tarayıcıda siteyi yenile.

Sitedeki **bütün** WhatsApp butonları otomatik olarak bu bağlantıya gider.

Güvenlik için site yalnızca `https://` ile başlayan ve `whatsapp.com` adresine ait bağlantıları kabul eder. Başka bir adres yazarsan buton "yakında" durumunda kalır.

## 3) Instagram bağlantısını ekleme

Aynı dosyada (`config.js`):

```js
instagramLink: "https://www.instagram.com/hesapadin",
```

Boş bırakırsan sitede "Yakında" yazar.

## 4) Haftanın Škoda'sını değiştirme

`config.js` içindeki bu bölümü düzenle:

```js
haftaninSkodasi: {
  model: "Octavia",
  aciklama: "Kısa bir tanıtım yazısı.",
  sahip: "Ahmet",
  gorsel: "gorseller/octavia.jpg"
}
```

Fotoğraf eklemek için:
1. Site klasörünün içinde `gorseller` adında yeni bir klasör oluştur.
2. Fotoğrafı oraya koy (jpg, png veya webp).
3. `gorsel` satırına dosya adını yaz.

Üyenin izni olmadan kişisel bilgi (plaka, telefon, adres) paylaşma. Fotoğrafta plaka görünüyorsa kapat.

---

## 5) GitHub Pages ile ücretsiz yayınlama

1. https://github.com adresinde ücretsiz hesap aç.
2. Sağ üstteki **+** → **New repository**.
3. Ad olarak örneğin `skoda-turkiye-club` yaz, **Public** seç, **Create repository**'ye tıkla.
4. Açılan sayfada **uploading an existing file** bağlantısına tıkla.
5. Site klasöründeki dosyaları (`index.html`, `style.css`, `script.js`, `config.js`, `README.md`) sürükleyip bırak. Bir `gorseller` klasörün varsa onu da ekle.
6. Aşağıdaki **Commit changes** düğmesine bas.
7. Depoda **Settings** → soldaki **Pages** bölümüne gir.
8. **Source / Branch** kısmında `main` ve `/ (root)` seç, **Save**'e bas.
9. Birkaç dakika sonra aynı sayfada sitenin adresi görünür. Genellikle şu biçimdedir:
   `https://KULLANICIADIN.github.io/skoda-turkiye-club/`

Sonradan değişiklik yapmak için: depoda `config.js` dosyasını aç → kalem simgesi (Edit) → değiştir → **Commit changes**. Site bir iki dakikada güncellenir.

> GitHub'ın arayüzü zamanla biraz değişebilir; menü adları farklıysa "GitHub Pages" yazarak resmî yardım sayfasına bakabilirsin.

---

## Sık sorulanlar

**Butona basınca bir şey olmuyor.** WhatsApp bağlantısı henüz `config.js` içine eklenmemiştir. 2. adıma bak.

**Değişikliğim görünmüyor.** Dosyayı kaydettiğinden emin ol, sonra tarayıcıda Ctrl+F5 ile yenile.

**Topluluk kuralları ve rehber yazıları.** Bunlar başlangıç taslağıdır. `index.html` dosyasında ilgili bölümdeki yazıları kendi topluluğuna göre değiştirebilirsin. Rehberler genel bilgidir; teknik kararlar için araç kılavuzu ve yetkili servis esas alınmalıdır.
