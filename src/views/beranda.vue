<template>
  <navbar-component />
  <main class="main-content">
    <div class="image-slider">
      <img :src="currentImage" alt="Slideshow Image" />
    </div>
    <main class="container-global">
      <div class="container-center">
        <div class="welcome-container">
          <h1 class="selamat-datang">
            SELAMAT DATANG DI WEBSITE SDN 206 BOTTO
          </h1>
        </div>
        <div class="sambutan-container">
          <div class="sambutan">
            <img
              class="sambutan-image"
              src="../assets/Kepsek.png"
              alt="Deskripsi gambar"
            />
          </div>
          <div class="sambutan-text">
            <h2>SAMBUATN KEPALA SEKOLAH</h2>
            <p>
              Assalamu’alaikum warahmatullahi wabarakatuh. Puji syukur kita
              panjatkan ke hadirat Allah SWT atas limpahan rahmat dan
              hidayah-Nya sehingga SDN 206 Botto terus berkembang dalam
              memberikan pendidikan berkualitas. Kami berkomitmen menciptakan
              lingkungan belajar yang aman, nyaman, dan inspiratif bagi siswa,
              serta mendorong kerja sama antara guru, siswa, dan orang tua dalam
              membangun generasi yang berakhlak mulia, cerdas, dan berdaya
              saing. Melalui website ini, kami berharap dapat memberikan
              informasi yang bermanfaat serta menjadi sarana komunikasi antara
              sekolah dan masyarakat. Terima kasih atas dukungan semua pihak.
              Semoga SDN 206 Botto terus maju dan memberikan yang terbaik bagi
              dunia pendidikan. Wassalamu’alaikum warahmatullahi wabarakatuh.
            </p>
            <h3>Hj. Iradeng, S.Pd.</h3>
          </div>
        </div>
        <div class="svg-row">
          <div class="icon-text-container">
            <div class="center-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#FDEEBF"
                class="bi bi-book"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"
                />
              </svg>
            </div>
            <p>KELAS</p>
          </div>
          <div class="icon-text-container">
            <div class="center-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#FDEEBF"
                class="bi bi-diagram-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
                />
              </svg>
            </div>
            <p>STRUKTUR</p>
          </div>
          <div class="icon-text-container">
            <div class="center-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#FDEEBF"
                class="bi bi-building"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
                />
                <path
                  d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"
                />
              </svg>
            </div>
            <p>AKREDITASI</p>
          </div>
          <div class="icon-text-container">
            <div class="center-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#FDEEBF"
                class="bi bi-calendar-event"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
                />
                <path
                  d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
                />
              </svg>
            </div>
            <p>KALENDER AKADEMIK</p>
          </div>
        </div>
        <div class="content-web">
          <h2 class="content-title">PREASTASI</h2>
          <div class="prestasi-container">
            <img
              class="prestasi-image"
              src="../assets/3.jpg"
              alt="Deskripsi gambar"
            />
            <div class="prestasi-text-container">
              <p class="prestasi-title">
                G Juara 1 Lomba Pramuka: Sebuah Perjalanan Penuh Semangat dan
                Dedikasi
              </p>
              <p class="prestasi-description">
                Menjadi juara 1 dalam lomba Pramuka bukanlah hal yang mudah,
                tetapi G berhasil membuktikan bahwa kerja keras, disiplin, dan
                kebersamaan adalah kunci utama menuju kemenangan. Dalam
                kompetisi yang penuh tantangan, G menunjukkan kemampuan
                terbaiknya dalam berbagai aspek kepramukaan, mulai dari
                keterampilan tali-temali, baris-berbaris, hingga pengetahuan
                tentang survival di alam. Tidak hanya mengandalkan keahlian
                teknis, G juga memperlihatkan jiwa kepemimpinan yang kuat dan
                kemampuan bekerja sama dalam tim. Dengan strategi yang matang
                dan semangat pantang menyerah, G dan timnya berhasil melewati
                setiap rintangan dengan penuh percaya diri. Kemenangan ini bukan
                hanya tentang membawa pulang trofi juara, tetapi juga tentang
                pengalaman berharga yang mengajarkan arti kerja keras,
                solidaritas, dan ketangguhan. Prestasi ini menjadi inspirasi
                bagi banyak orang untuk terus berusaha dan mengembangkan diri
                dalam dunia kepramukaan.
              </p>
              <button class="selengkapnya-prestasi-utama">Selengkapnya</button>
            </div>
          </div>
          <div class="gallery-container">
            <div class="gallery-item">
              <img
                class="gallery-image"
                src="../assets/3.jpg"
                alt="Deskripsi gambar"
              />
              <div class="gallery-text-container">
                <p class="gallery-title">
                  G Juara 1 Lomba Pramuka: Sebuah Perjalanan Penuh Semangat dan
                  Dedikasi
                </p>
                <p class="gallery-description">
                  Menjadi juara 1 dalam lomba Pramuka bukanlah hal yang mudah,
                  tetapi G berhasil membuktikan bahwa kerja keras, disiplin, dan
                  kebersamaan adalah kunci utama menuju kemenangan. Dalam
                  kompetisi yang penuh tantangan, G menunjukkan kemampuan
                  terbaiknya dalam berbagai aspek kepramukaan, mulai dari
                  keterampilan tali-temali, baris-berbaris, hingga pengetahuan
                  tentang survival di alam. Tidak hanya mengandalkan keahlian
                  teknis, G juga memperlihatkan jiwa kepemimpinan yang kuat dan
                  kemampuan bekerja sama dalam tim. Dengan strategi yang matang
                  dan semangat pantang menyerah, G dan timnya berhasil melewati
                  setiap rintangan dengan penuh percaya diri. Kemenangan ini
                  bukan hanya tentang membawa pulang trofi juara, tetapi juga
                  tentang pengalaman berharga yang mengajarkan arti kerja keras,
                  solidaritas, dan ketangguhan. Prestasi ini menjadi inspirasi
                  bagi banyak orang untuk terus berusaha dan mengembangkan diri
                  dalam dunia kepramukaan.
                </p>
              </div>
              <button class="selengkapnya-prestasi">Selengkapnya</button>
            </div>
            <div class="gallery-item">
              <img
                class="gallery-image"
                src="../assets/3.jpg"
                alt="Deskripsi gambar"
              />
              <div class="gallery-text-container">
                <p class="gallery-title">
                  G Juara 1 Lomba Pramuka: Sebuah Perjalanan Penuh Semangat dan
                  Dedikasi
                </p>
                <p class="gallery-description">
                  Menjadi juara 1 dalam lomba Pramuka bukanlah hal yang mudah,
                  tetapi G berhasil membuktikan bahwa kerja keras, disiplin, dan
                  kebersamaan adalah kunci utama menuju kemenangan. Dalam
                  kompetisi yang penuh tantangan, G menunjukkan kemampuan
                  terbaiknya dalam berbagai aspek kepramukaan, mulai dari
                  keterampilan tali-temali, baris-berbaris, hingga pengetahuan
                  tentang survival di alam. Tidak hanya mengandalkan keahlian
                  teknis, G juga memperlihatkan jiwa kepemimpinan yang kuat dan
                  kemampuan bekerja sama dalam tim. Dengan strategi yang matang
                  dan semangat pantang menyerah, G dan timnya berhasil melewati
                  setiap rintangan dengan penuh percaya diri. Kemenangan ini
                  bukan hanya tentang membawa pulang trofi juara, tetapi juga
                  tentang pengalaman berharga yang mengajarkan arti kerja keras,
                  solidaritas, dan ketangguhan. Prestasi ini menjadi inspirasi
                  bagi banyak orang untuk terus berusaha dan mengembangkan diri
                  dalam dunia kepramukaan.
                </p>
              </div>
              <button class="selengkapnya-prestasi">Selengkapnya</button>
            </div>
            <div class="gallery-item">
              <img
                class="gallery-image"
                src="../assets/3.jpg"
                alt="Deskripsi gambar"
              />
              <div class="gallery-text-container">
                <p class="gallery-title">
                  G Juara 1 Lomba Pramuka: Sebuah Perjalanan Penuh Semangat dan
                  Dedikasi
                </p>
                <p class="gallery-description">
                  Menjadi juara 1 dalam lomba Pramuka bukanlah hal yang mudah,
                  tetapi G berhasil membuktikan bahwa kerja keras, disiplin, dan
                  kebersamaan adalah kunci utama menuju kemenangan. Dalam
                  kompetisi yang penuh tantangan, G menunjukkan kemampuan
                  terbaiknya dalam berbagai aspek kepramukaan, mulai dari
                  keterampilan tali-temali, baris-berbaris, hingga pengetahuan
                  tentang survival di alam. Tidak hanya mengandalkan keahlian
                  teknis, G juga memperlihatkan jiwa kepemimpinan yang kuat dan
                  kemampuan bekerja sama dalam tim. Dengan strategi yang matang
                  dan semangat pantang menyerah, G dan timnya berhasil melewati
                  setiap rintangan dengan penuh percaya diri. Kemenangan ini
                  bukan hanya tentang membawa pulang trofi juara, tetapi juga
                  tentang pengalaman berharga yang mengajarkan arti kerja keras,
                  solidaritas, dan ketangguhan. Prestasi ini menjadi inspirasi
                  bagi banyak orang untuk terus berusaha dan mengembangkan diri
                  dalam dunia kepramukaan.
                </p>
              </div>
              <button class="selengkapnya-prestasi">Selengkapnya</button>
            </div>
            <div class="gallery-item">
              <img
                class="gallery-image"
                src="../assets/3.jpg"
                alt="Deskripsi gambar"
              />
              <div class="gallery-text-container">
                <p class="gallery-title">
                  G Juara 1 Lomba Pramuka: Sebuah Perjalanan Penuh Semangat dan
                  Dedikasi
                </p>
                <p class="gallery-description">
                  Menjadi juara 1 dalam lomba Pramuka bukanlah hal yang mudah,
                  tetapi G berhasil membuktikan bahwa kerja keras, disiplin, dan
                  kebersamaan adalah kunci utama menuju kemenangan. Dalam
                  kompetisi yang penuh tantangan, G menunjukkan kemampuan
                  terbaiknya dalam berbagai aspek kepramukaan, mulai dari
                  keterampilan tali-temali, baris-berbaris, hingga pengetahuan
                  tentang survival di alam. Tidak hanya mengandalkan keahlian
                  teknis, G juga memperlihatkan jiwa kepemimpinan yang kuat dan
                  kemampuan bekerja sama dalam tim. Dengan strategi yang matang
                  dan semangat pantang menyerah, G dan timnya berhasil melewati
                  setiap rintangan dengan penuh percaya diri. Kemenangan ini
                  bukan hanya tentang membawa pulang trofi juara, tetapi juga
                  tentang pengalaman berharga yang mengajarkan arti kerja keras,
                  solidaritas, dan ketangguhan. Prestasi ini menjadi inspirasi
                  bagi banyak orang untuk terus berusaha dan mengembangkan diri
                  dalam dunia kepramukaan.
                </p>
              </div>
              <button class="selengkapnya-prestasi">Selengkapnya</button>
            </div>
          </div>
          <p class="selengkapnya">Prestasi Selengkapnya</p>
        </div>
      </div>
    </main>
  </main>
</template>

<script>
import navbarComponent from "../components/navbarComponent.vue";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";

export default {
  name: "beranda",
  components: {
    navbarComponent,
  },
  data() {
    return {
      images: [image1, image2, image3, image4, image5],
      currentImageIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    }, 15000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.image-slider {
  width: 100%;
  height: 450px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.main-content {
  padding-top: 65px;
}

.container-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.welcome-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.selamat-datang {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
  color: #0b97b8;
}

.selamat-datang::before,
.selamat-datang::after {
  content: "";
  display: block;
  width: 136px;
  height: 3px;
  margin-top: 5px;
  background-color: #f2651c;
}

.selamat-datang::before {
  margin-right: 15px;
}

.selamat-datang::after {
  margin-left: 15px;
}

.svg-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 200px;
}

.center-container {
  background-color: #ffa360;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px;
  margin-bottom: 4px;
}

.icon-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon-text-container p {
  color: #0b97b8;
}

.sambutan-container {
  display: flex;
  margin-top: 40px;
}

.sambutan {
  margin-right: 25px;
  margin-top: 80px;
  background-color: #0b97b8;
  border-radius: 50% 50% 0 0;
  width: 250px;
  height: 280px;
  display: flex;
  justify-content: center; /* Memusatkan gambar secara horizontal */
  align-items: flex-start;
}

.sambutan-image {
  margin-top: -85px;
  width: 300px;
}

.sambutan-text {
  margin-top: 80px;
  text-align: left;
}

.sambutan-text h2 {
  color: #0b97b8;
}

.sambutan-text h2::after {
  content: "";
  display: inline-block;
  width: 300px;
  height: 3px;
  background-color: #f2651c;
  margin-left: 15px;
  vertical-align: middle;
  margin-bottom: 4px;
}

.sambutan-text p {
  text-align: justify;
}

.sambutan-text h3 {
  margin-top: 30px;
}

.content-web {
  margin-top: 25px;
  align-self: flex-start;
  width: 100%;
  text-align: left;
}

.content-title {
  margin-bottom: 20px;
}

.prestasi-container {
  display: flex;
  width: 1205px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  background-color: rgba(11, 151, 184, 0.05);
  margin-bottom: 30px;
}

.prestasi-image {
  width: 100%;
  width: 400px;
  object-fit: cover;
}

.prestasi-text-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px;
}

.prestasi-title {
  font-weight: bold;
  text-align: justify;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

.prestasi-description {
  margin-top: -10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  line-clamp: 7;
  overflow: hidden;
  text-align: justify;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
}

.gallery-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin: 0 auto;
}

.gallery-item {
  width: 300px;
  height: 445px;
  overflow: hidden;
  border-radius: 10px;
  background-color: rgba(11, 151, 184, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.gallery-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.gallery-text-container {
  margin: 5px 15px 15px 15px;
  flex-grow: 1;
}

.gallery-title {
  font-weight: bold;
  text-align: justify;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

.gallery-description {
  margin-top: -10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.6);
  text-align: justify;
}

.selengkapnya-prestasi-utama,
.selengkapnya-prestasi {
  align-self: flex-end;
}

.selengkapnya-prestasi-utama {
  display: flex;
  color: #f2651c;
  justify-content: flex-end;
  width: 100%;
  background: none; /* Menghilangkan latar belakang */
  border: none; /* Menghilangkan border */
  padding: 0; /* Hilangkan padding default */
  font: inherit; /* Pastikan mengikuti font default */
  cursor: pointer; /* Tetap bisa diklik */
  align-self: flex-end;
  margin-bottom: 40px;
  margin-top: auto;
  font-size: 14px;
}

.selengkapnya-prestasi {
  display: flex;
  color: #f2651c;
  justify-content: flex-end;
  width: 100%;
  background: none; /* Menghilangkan latar belakang */
  border: none; /* Menghilangkan border */
  padding: 0; /* Hilangkan padding default */
  font: inherit; /* Pastikan mengikuti font default */
  cursor: pointer; /* Tetap bisa diklik */
  margin-top: auto;
  margin-bottom: 15px;
  margin-right: 15px;
  font-size: 14px;
  align-self: flex-end;
}

.selengkapnya {
  display: flex;
  color: #0b97b8;
  margin-top: 20px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
}

.selengkapnya::after {
  content: " ➜";
  font-size: 16px;
  margin-left: 10px;
  margin-top: 2px;
}
</style>
