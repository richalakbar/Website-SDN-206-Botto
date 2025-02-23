<template>
  <div>
    <navbar-component />
    <div class="image-slider">
      <img :src="currentImage" alt="Slideshow Image" />
    </div>
    <main class="container-global"></main>
  </div>
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
</style>
