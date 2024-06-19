# Web-profile
Web Profile Step Up Project

### Konfigurasi client side (FE)
1. Clone repository ini
2. masuk folder client
3. konfigurasi environment (di terminal) -> npm i
4. running -> npm run dev


### Konfigurasi Server side (BE)
1. Clone repository ini
2. masuk folder server
3. konfigurasi environment (di terminal) -> npm i

### Sinkronisasi kode
1. Pindah ke main (git checkout main)
2. Git fetch dan git pull
3. git branch -d nama_branch_lama
4. git remote prune origin
5. buat branch baru(git checkout -b nama_branch_baru)
6. git push -u origin nama_branch_baru

```
Web-profile
├─ client
│  ├─ .eslintrc.cjs
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.js
│  ├─ public
│  │  ├─ images
│  │  │  ├─ article-detail-1.png
│  │  │  ├─ article-image-1.png
│  │  │  ├─ article-image-2.png
│  │  │  ├─ atribut-dev.png
│  │  │  ├─ bg-login-1.png
│  │  │  ├─ bg-login-2.png
│  │  │  ├─ bg-login-3.png
│  │  │  ├─ bg-login-big-1.png
│  │  │  ├─ bg-login-big-2.png
│  │  │  ├─ coding.png
│  │  │  ├─ dashboardDev-layanan-artikel.png
│  │  │  ├─ dashboardDev-layanan-konsultasi.png
│  │  │  ├─ desktop-icon.zip
│  │  │  ├─ expressjs.png
│  │  │  ├─ frame-footer-2.png
│  │  │  ├─ frame-footer-md.png
│  │  │  ├─ frame-footer.png
│  │  │  ├─ Icons
│  │  │  │  └─ Icons
│  │  │  │     └─ Icons
│  │  │  ├─ layanan-1.png
│  │  │  ├─ layanan-appweb.png
│  │  │  ├─ layanan-artikel.png
│  │  │  ├─ layanan-sosmed.png
│  │  │  ├─ layanan-website.png
│  │  │  ├─ logo.png
│  │  │  ├─ mockup-1.png
│  │  │  ├─ mockup-2.png
│  │  │  ├─ mockup-3.jpg
│  │  │  ├─ mockup-3.png
│  │  │  ├─ mockup-4.png
│  │  │  ├─ mockup-5.png
│  │  │  ├─ mysql.png
│  │  │  ├─ nodejs.png
│  │  │  ├─ pelanggan-1.png
│  │  │  ├─ pelanggan-2.png
│  │  │  ├─ pelanggan-3.png
│  │  │  ├─ pelanggan-4.png
│  │  │  ├─ pelanggan-5.png
│  │  │  ├─ portfolio-card-1.png
│  │  │  ├─ portfolio-card-2.png
│  │  │  ├─ portfolio-detail-hp.png
│  │  │  ├─ portfolio-detail-laptop.png
│  │  │  ├─ react.png
│  │  │  ├─ stylized-frame-1-left.png
│  │  │  ├─ stylized-frame-1-right.png
│  │  │  ├─ stylized-frame-2-right.png
│  │  │  ├─ stylized-frame-3-left.png
│  │  │  ├─ team-adit.jpg
│  │  │  ├─ team-hadi.jpg
│  │  │  ├─ team-ikhlas.jpg
│  │  │  ├─ team-ikhsan.jpg
│  │  │  ├─ team-riyadhi.jpg
│  │  │  ├─ team-yoga.jpg
│  │  │  ├─ testimoni
│  │  │  │  ├─ pp-1.png
│  │  │  │  ├─ pp-2.png
│  │  │  │  └─ pp-3.png
│  │  │  ├─ vector-1.png
│  │  │  ├─ vector-2-lg.png
│  │  │  ├─ vector-2.png
│  │  │  └─ video-about.png
│  │  ├─ svg
│  │  │  ├─ arrow-right.svg
│  │  │  ├─ artikel-dark.svg
│  │  │  ├─ artikel-white.svg
│  │  │  ├─ beranda-dark.svg
│  │  │  ├─ beranda-white.svg
│  │  │  ├─ curly-style.svg
│  │  │  ├─ delete.png
│  │  │  ├─ edit.png
│  │  │  ├─ email.svg
│  │  │  ├─ instagram.svg
│  │  │  ├─ layanan-dark.svg
│  │  │  ├─ layanan-white.svg
│  │  │  ├─ linkedin.svg
│  │  │  ├─ location-pin.svg
│  │  │  ├─ portfolio-dark.svg
│  │  │  ├─ portfolio-white.svg
│  │  │  ├─ tentang-dark.svg
│  │  │  ├─ tentang-white.svg
│  │  │  ├─ tick.svg
│  │  │  ├─ twitter.svg
│  │  │  └─ whatsapp.svg
│  │  ├─ thumbnail
│  │  └─ vite.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ Elements
│  │  │  │  ├─ Button
│  │  │  │  │  └─ Button.jsx
│  │  │  │  ├─ DateConverter.jsx
│  │  │  │  ├─ HeadTitle.jsx
│  │  │  │  ├─ Input
│  │  │  │  │  ├─ DatePicker.jsx
│  │  │  │  │  ├─ Editor.jsx
│  │  │  │  │  ├─ Image.jsx
│  │  │  │  │  ├─ Input.jsx
│  │  │  │  │  └─ TextArea.jsx
│  │  │  │  ├─ RememberMe.jsx
│  │  │  │  ├─ SectionHead.jsx
│  │  │  │  ├─ StylizedFrame.jsx
│  │  │  │  └─ VideoPlayer.jsx
│  │  │  ├─ Fragments
│  │  │  │  ├─ CardArtikel.jsx
│  │  │  │  ├─ CardLayanan.jsx
│  │  │  │  ├─ CardPortfolio.jsx
│  │  │  │  ├─ Footer.jsx
│  │  │  │  ├─ FormArticle.jsx
│  │  │  │  ├─ FormEditArticle.jsx
│  │  │  │  ├─ FormKonsultasi.jsx
│  │  │  │  ├─ FormLogin.jsx
│  │  │  │  ├─ LatestCardArticle.jsx
│  │  │  │  ├─ Navbar.jsx
│  │  │  │  └─ TeamCard.jsx
│  │  │  └─ Layouts
│  │  │     └─ AuthLayout.jsx
│  │  ├─ data
│  │  │  ├─ portfolio.js
│  │  │  └─ teams.js
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  ├─ pages
│  │  │  ├─ artikel.jsx
│  │  │  ├─ artikelDetail.jsx
│  │  │  ├─ artikelDev.jsx
│  │  │  ├─ artikelEdit.jsx
│  │  │  ├─ beranda.jsx
│  │  │  ├─ berandaDev.jsx
│  │  │  ├─ konsultasi.jsx
│  │  │  ├─ konsultasiDev.jsx
│  │  │  ├─ layanan.jsx
│  │  │  ├─ login.jsx
│  │  │  ├─ portfolio.jsx
│  │  │  ├─ portfolioDetail.jsx
│  │  │  └─ tentang.jsx
│  │  ├─ services
│  │  │  ├─ article.service.js
│  │  │  ├─ auth.service.js
│  │  │  ├─ isAuth.service.js
│  │  │  ├─ konsultasi.service.js
│  │  │  ├─ portfolio.service.js
│  │  │  └─ team.service.js
│  │  └─ utils
│  │     ├─ article.js
│  │     └─ withAuth.jsx
│  ├─ tailwind.config.js
│  └─ vite.config.js
├─ package.json
├─ README.md
└─ server
   ├─ .env
   ├─ .env.development
   ├─ app.js
   ├─ assets
   │  ├─ article
   │  │  ├─ 1711015438986_article-image-1.png
   │  │  ├─ 1712220893759_50fb3e9dd8.jpeg
   │  │  ├─ 1712220902143_50fb3e9dd8.jpeg
   │  │  ├─ 1712255752601_asta's sword.jpg
   │  │  ├─ 1713619784396_9acf7fb00b.jpeg
   │  │  ├─ 1713619821185_4f12c8f84f.jpg
   │  │  ├─ 1713620215218_404.jpg
   │  │  ├─ 1713792771810_50fb3e9dd8.jpeg
   │  │  ├─ 1713792812281_50fb3e9dd8.jpeg
   │  │  ├─ 1713792818876_50fb3e9dd8.jpeg
   │  │  ├─ 1713792960085_50fb3e9dd8.jpeg
   │  │  ├─ 1713792997033_50fb3e9dd8.jpeg
   │  │  ├─ 1713793041389_50fb3e9dd8.jpeg
   │  │  ├─ 1713793063132_9acf7fb00b.jpeg
   │  │  ├─ 1713793098099_9acf7fb00b.jpeg
   │  │  ├─ 1713793213964_4f12c8f84f.jpg
   │  │  ├─ 1713797365801_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713797448854_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713797470955_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713797550957_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713797787182_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713797850799_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713797892016_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713797989698_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713798007179_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713798054061_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713798082577_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713798108666_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713798119384_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713798181066_ai-generated-8209440_1920.jpg
   │  │  ├─ 1713878902496_asta.jpg
   │  │  ├─ 1713878958440_asta.jpg
   │  │  ├─ 1713879058249_Demon Slayer_ Kimetsu No Yaiba HD Wallpaper _ Background Image _ 2000x1213.png
   │  │  ├─ 1713879135048_Demon Slayer_ Kimetsu No Yaiba HD Wallpaper _ Background Image _ 2000x1213.png
   │  │  ├─ 1713879204282_DEMON SLAYER.jpg
   │  │  ├─ 1713879246071_DEMON SLAYER.jpg
   │  │  ├─ 1713879248301_DEMON SLAYER.jpg
   │  │  ├─ 1713879307555_DEMON SLAYER.jpg
   │  │  ├─ 1713879353877_DEMON SLAYER.jpg
   │  │  ├─ 1713879617643_download.jfif
   │  │  ├─ 1713879636059_asta.jpg
   │  │  ├─ 1713879721197_asta.jpg
   │  │  ├─ 1713879937955_asta.jpg
   │  │  ├─ 1713880040262_asta.jpg
   │  │  ├─ 1713880063894_asta.jpg
   │  │  ├─ 1713880067376_asta.jpg
   │  │  ├─ 1713880120609_asta.jpg
   │  │  ├─ 1713880150889_asta.jpg
   │  │  ├─ 1713880188330_asta.jpg
   │  │  ├─ 1713880344159_asta.jpg
   │  │  ├─ 1713880362299_asta.jpg
   │  │  ├─ 1713880538855_asta.jpg
   │  │  ├─ 1713880690195_asta.jpg
   │  │  ├─ 1713880705195_asta.jpg
   │  │  ├─ 1713880710080_asta.jpg
   │  │  ├─ 1713880737501_asta.jpg
   │  │  ├─ 1713880837456_asta.jpg
   │  │  ├─ 1713880861584_asta.jpg
   │  │  ├─ 1713880876572_asta.jpg
   │  │  ├─ 1713880920878_asta.jpg
   │  │  ├─ 1713880963891_asta.jpg
   │  │  ├─ 1713880983110_asta.jpg
   │  │  ├─ 1713880985660_asta.jpg
   │  │  ├─ 1713880999604_asta.jpg
   │  │  ├─ 1713881026656_asta.jpg
   │  │  ├─ 1713881127229_asta.jpg
   │  │  ├─ 1713881137467_asta.jpg
   │  │  ├─ 1713881155353_asta.jpg
   │  │  ├─ 1713881160974_asta.jpg
   │  │  ├─ 1713881193792_asta.jpg
   │  │  ├─ 1713881243501_asta.jpg
   │  │  ├─ 1713881251998_asta.jpg
   │  │  ├─ 1713881322399_asta.jpg
   │  │  ├─ 1713881410108_asta.jpg
   │  │  ├─ 1713881427460_download.jfif
   │  │  ├─ 1713881472563_asta.jpg
   │  │  ├─ 1713881620440_download.jfif
   │  │  ├─ 1713881726808_asta.jpg
   │  │  ├─ 1713881876628_asta.jpg
   │  │  ├─ 1713881885452_asta.jpg
   │  │  ├─ 1714066592363_asta.jpg
   │  │  ├─ 1714068088344_asta.jpg
   │  │  ├─ 1714068103058_asta.jpg
   │  │  ├─ 1714068128577_asta.jpg
   │  │  ├─ 1714068246365_asta.jpg
   │  │  ├─ 1714068276600_asta.jpg
   │  │  ├─ 1714068291226_asta.jpg
   │  │  ├─ 1714068318636_asta.jpg
   │  │  ├─ 1714068353299_asta.jpg
   │  │  ├─ 1714068359777_asta.jpg
   │  │  ├─ 1714068375241_asta.jpg
   │  │  ├─ 1714068403504_asta.jpg
   │  │  ├─ 1714068423513_asta.jpg
   │  │  ├─ 1714068442320_asta.jpg
   │  │  ├─ 1714068459865_asta.jpg
   │  │  ├─ 1714075041424_blob
   │  │  └─ 1715182488611_article-image-2.png
   │  └─ public
   ├─ controllers
   │  ├─ article.js
   │  └─ auth.js
   ├─ e49662245f422215fe0897015badb21b
   ├─ middleware
   │  ├─ isAuth.js
   │  ├─ isAuthorArticle.js
   │  ├─ isAuthorization.js
   │  └─ isValidObjectId.js
   ├─ models
   │  ├─ artikel.js
   │  ├─ konsultasi.js
   │  └─ user.js
   ├─ package-lock.json
   ├─ package.json
   ├─ routes
   │  ├─ article.js
   │  ├─ auth.js
   │  ├─ developer.js
   │  └─ konsultasi.js
   ├─ seeds
   │  └─ user.js
   ├─ stepup.artikels.json
   ├─ utils
   │  ├─ ErrorHandler.js
   │  └─ wrapAsync.js
   └─ vercel.json

```