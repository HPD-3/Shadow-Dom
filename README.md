# Shadow DOM dengan JavaScript

Proyek ini menunjukkan cara menggunakan Shadow DOM di HTML menggunakan JavaScript. Shadow DOM memungkinkan kita membuat komponen yang terisolasi dengan gaya dan struktur DOM tersendiri.

## 📌 Fitur
- Membuat komponen dengan Shadow DOM
- Memisahkan gaya dan struktur dari elemen lainnya
- Menggunakan `class` ES6 untuk mendefinisikan elemen kustom

## 📦 Instalasi
Tidak perlu instalasi khusus. Cukup klon repositori ini dan buka `index.html` di browser.

```sh
# Clone repositori
git clone https://github.com/HPD-3/Shadow-Dom
cd Shadow-Dom

# Buka di browser
open index.html  # MacOS
start index.html # Windows
```

## 🚀 Cara Menggunakan
1. Tambahkan file JavaScript ke dalam proyek Anda:
    ```html
    <script type="module" src="src/main.js"></script>
    ```
2. Gunakan elemen kustom di dalam HTML:
    ```html
    <image-figure></image-figure>
    ```

## 📜 Contoh Implementasi
Kode berikut menunjukkan bagaimana mendefinisikan Custom Element dengan Shadow DOM:

```js
class ImageFigure extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        figure {
          max-width: 220px;
          margin: 0;
          padding: 5px;
          border: 1px #c0c0c0 solid;
          display: flex;
          flex-flow: column;
        }
        figure > img {
          max-width: 100%;
        }
        figure > figcaption {
          padding: 3px;
          background-color: #222;
          text-align: center;
          color: #fff;
          font-family: sans-serif;
          font-size: smaller;
          font-style: italic;
        }
      </style>
      <figure>
        <img src="src/Building.jpg" alt="Building" width="200" />
        <figcaption>This is a cool building</figcaption>
      </figure>
    `;
  }
}

customElements.define('image-figure', ImageFigure);
```

## 📖 Dokumentasi Tambahan
- [MDN Web Docs - Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- [Web Components - Google Developers](https://developers.google.com/web/fundamentals/web-components/)

## 🛠 Kontribusi
Jika Anda ingin berkontribusi, silakan buat pull request atau ajukan issue di repositori ini.

## 📄 Lisensi
Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.
