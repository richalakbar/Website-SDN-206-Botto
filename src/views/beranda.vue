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
      </div>
    </main>
  </main>
</template>

<script>
import navbarComponent from "../components/navbarComponent.vue";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.jpeg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpeg";

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
  width: 300px;
  height: 270px;
}

.sambutan-image {
  margin-top: -91px;
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
  margin-bottom: 5px;
  content: "";
  display: inline-block;
  width: 300px; /* Panjang garis */
  height: 3px; /* Ketebalan garis */
  background-color: #f2651c;
  margin-left: 15px; /* Jarak antara teks dan garis */
  vertical-align: middle;
}

.sambutan-text p {
  text-align: justify;
}

.sambutan-text h3 {
  margin-top: 20px;
}
</style>
