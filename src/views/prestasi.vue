<template>
  <navbar-component />
  <main style="padding-top: 100px" class="container-global">
    <div class="position-search">
      <form class="d-flex custome-icon-search" role="search" @submit.prevent>
        <input
          class="search-control"
          type="search"
          v-model="searchQuery"
          placeholder="Search..."
          aria-label="Search"
        />
        <img src="../assets/Search.svg" class="search-icon" alt="Search Icon" />
      </form>
    </div>
    <h1>Prestasi</h1>
    <div class="prestasi-container-1">
      <img
        class="prestasi-image-1"
        src="../assets/3.jpg"
        alt="Deskripsi gambar"
      />
      <div class="prestasi-text-container-1">
        <p class="prestasi-title-1">
          G Juara 1 Lomba Pramuka: Sebuah Perjalanan Penuh Semangat dan Dedikasi
        </p>
        <div style="display: flex; align-items: center; gap: 5px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="#0b97b8"
            class="bi bi-calendar3"
            viewBox="0 0 16 16"
          >
            <path
              d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"
            />
            <path
              d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            />
          </svg>
          <p style="margin: 0; font-size: 10px">12 November 2024</p>
        </div>

        <p class="prestasi-description-1">
          Menjadi juara 1 dalam lomba Pramuka bukanlah hal yang mudah, tetapi G
          berhasil membuktikan bahwa kerja keras, disiplin, dan kebersamaan
          adalah kunci utama menuju kemenangan. Dalam kompetisi yang penuh
          tantangan, G menunjukkan kemampuan terbaiknya dalam berbagai aspek
          kepramukaan, mulai dari keterampilan tali-temali, baris-berbaris,
          hingga pengetahuan tentang survival di alam. Tidak hanya mengandalkan
          keahlian teknis, G juga memperlihatkan jiwa kepemimpinan yang kuat dan
          kemampuan bekerja sama dalam tim. Dengan strategi yang matang dan
          semangat pantang menyerah, G dan timnya berhasil melewati setiap
          rintangan dengan penuh percaya diri. Kemenangan ini bukan hanya
          tentang membawa pulang trofi juara, tetapi juga tentang pengalaman
          berharga yang mengajarkan arti kerja keras, solidaritas, dan
          ketangguhan. Prestasi ini menjadi inspirasi bagi banyak orang untuk
          terus berusaha dan mengembangkan diri dalam dunia kepramukaan.
        </p>
        <button class="selengkapnya-prestasi-utama-1">Selengkapnya</button>
      </div>
    </div>
  </main>
</template>

<script>
import navbarComponent from "../components/navbarComponent.vue";
export default {
  name: "prestasi",
  components: {
    navbarComponent,
  },
  data() {
    return {
      searchQuery: "", // Define searchQuery property
    };
  },
};
</script>

<style scoped>
.position-search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 3px;
  gap: 20px;
  flex-wrap: nowrap; /* Tetap dalam satu baris */
  width: 100%; /* Pastikan container penuh */
}

.search-control {
  color: #000000;
  background: #ffffff;
  height: 42px;
  border-radius: 10px;
  padding: 5px 20px 5px 40px;
  font-size: 16px;
  border: 1px solid transparent;
  transition: border-color 0.3s ease, width 0.3s ease;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15), 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.search-control:focus {
  border: none;
  outline: none;
  border-color: #b0c4de;
  box-shadow: 0 0 8px #b0c4de;
  background: #f4f6f5;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #000000;
  cursor: pointer;
  transition: width 0.3s ease, height 0.3s ease;
}

.custome-icon-search:focus-within .search-icon {
  filter: brightness(0);
  width: 22px;
  height: 22px;
}

.custome-icon-search {
  position: relative;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .position-search {
    gap: 10px; /* Kurangi jarak agar tetap dalam satu baris */
    flex-wrap: nowrap; /* Pastikan tetap satu baris */
    width: 100%;
  }

  .custome-icon-search,
  .search-control {
    flex: 1; /* Biarkan elemen menyesuaikan diri */
    min-width: 200px; /* Pastikan tidak terlalu kecil */
    max-width: 100%; /* Tidak melebihi container */
    width: 100%; /* Ambil seluruh ruang yang tersedia */
    box-sizing: border-box; /* Menambahkan box-sizing untuk menghitung padding dan margin */
  }
}

.prestasi-container-1 {
  display: flex;
  width: 800px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  background-color: rgba(11, 151, 184, 0.05);
  margin-bottom: 30px;
}

.prestasi-image-1 {
  width: 100%;
  width: 300px;
  object-fit: cover;
}

.prestasi-text-container-1 {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 15px;
}

.prestasi-title-1 {
  margin-bottom: 4px;
  font-weight: bold;
  text-align: justify;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.prestasi-description-1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  text-align: justify;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-top: 12px;
}

.selengkapnya-prestasi-utama-1 {
  align-self: flex-end;
}

.selengkapnya-prestasi-utama-1 {
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

.selengkapnya-prestasi-utama-1:hover {
  color: #ff7f50;
}

.selengkapnya-prestasi-utama-1:active {
  color: #ff4500;
}

@media screen and (max-width: 480px) {
  .custome-icon-search,
  .search-control {
    min-width: 165px; /* Pastikan tetap terlihat */
    max-width: 100%;
  }

  .search-icon {
    width: 16px; /* Kurangi ukuran ikon di mobile */
    height: 16px;
  }
}
</style>
