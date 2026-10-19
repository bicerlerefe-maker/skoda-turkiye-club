/* ==========================================================
   Škoda Türkiye Club – Sayfa davranışları
   Bu dosyayı değiştirmen gerekmez. Ayarlar için config.js'e bak.
   ========================================================== */

(function () {
  "use strict";

  var ayar = window.SITE_AYARLARI || {};

  /* Güvenlik: yalnızca https:// ile başlayan bağlantıları kabul et */
  function gecerliMi(url, alanAdi) {
    if (typeof url !== "string") return false;
    url = url.trim();
    if (url === "") return false;
    if (!/^https:\/\//i.test(url)) return false;
    try {
      var host = new URL(url).hostname.toLowerCase();
      return host === alanAdi || host === "www." + alanAdi || host.endsWith("." + alanAdi);
    } catch (e) {
      return false;
    }
  }

  /* ----- WhatsApp butonları ----- */
  var waLink = (ayar.whatsappLink || "").trim();
  var waHazir = gecerliMi(waLink, "whatsapp.com");
  var waButonlar = document.querySelectorAll(".js-whatsapp");
  var waNot = document.getElementById("whatsappNote");

  waButonlar.forEach(function (b) {
    if (waHazir) {
      b.setAttribute("href", waLink);
      b.setAttribute("target", "_blank");
      b.setAttribute("rel", "noopener noreferrer");
    }
    /* Hazır değilse butonlar sayfa içindeki "katıl" bölümüne gider (#katil) */
  });

  /* Ana çağrı butonu hazır değilse "yakında" göster */
  var ana = document.getElementById("ctaWhatsapp");
  if (!waHazir) {
    if (ana) {
      ana.textContent = "Bağlantı Yakında";
      ana.setAttribute("aria-disabled", "true");
      ana.addEventListener("click", function (e) { e.preventDefault(); });
    }
    if (waNot) waNot.hidden = false;
  }

  /* ----- Instagram ----- */
  var igLink = (ayar.instagramLink || "").trim();
  var igBtn = document.getElementById("instaBtn");
  var igYazi = document.getElementById("instaText");
  if (gecerliMi(igLink, "instagram.com") && igBtn) {
    igBtn.setAttribute("href", igLink);
    igBtn.setAttribute("target", "_blank");
    igBtn.setAttribute("rel", "noopener noreferrer");
    igBtn.removeAttribute("aria-disabled");
    igBtn.textContent = "Instagram'a Git";
    if (igYazi) igYazi.textContent = "Fotoğraflar, buluşmalar ve duyurular için bizi Instagram'da takip et.";
  } else if (igBtn) {
    igBtn.addEventListener("click", function (e) { e.preventDefault(); });
  }

  /* ----- Haftanın Škoda'sı ----- */
  var h = ayar.haftaninSkodasi || {};
  var m = document.getElementById("weekModel");
  var d = document.getElementById("weekDesc");
  var o = document.getElementById("weekOwner");
  var img = document.getElementById("weekImg");
  var ph = document.getElementById("weekPh");

  /* textContent kullanıyoruz: yazılan metin asla kod gibi çalışmaz */
  if (m) m.textContent = h.model || "Bu hafta henüz seçilmedi";
  if (d) d.textContent = h.aciklama || "";
  if (o && h.sahip) {
    o.textContent = "Araç sahibi: " + h.sahip;
    o.hidden = false;
  }
  if (img && h.gorsel && /^[\w\-./]+\.(jpg|jpeg|png|webp|avif)$/i.test(h.gorsel) && h.gorsel.indexOf("..") === -1) {
    img.style.backgroundImage = "url('" + h.gorsel + "')";
    if (ph) ph.hidden = true;
  }

  /* ----- Mobil menü ----- */
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var acik = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", acik ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----- Alt bilgideki yıl ----- */
  var yil = document.getElementById("yil");
  if (yil) yil.textContent = new Date().getFullYear();

  /* ----- Kaydırınca yumuşak beliren bölümler ----- */
  var hedefler = document.querySelectorAll(".card, .week, .rules li, details");
  if ("IntersectionObserver" in window) {
    var gozcu = new IntersectionObserver(function (kayitlar) {
      kayitlar.forEach(function (k) {
        if (k.isIntersecting) {
          k.target.classList.add("visible");
          gozcu.unobserve(k.target);
        }
      });
    }, { threshold: 0.12 });
    hedefler.forEach(function (el) {
      el.classList.add("reveal");
      gozcu.observe(el);
    });
  }
})();
