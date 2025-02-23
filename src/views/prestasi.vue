<template>
  <navbar-component />
  <div class="container-global">
    <h1 class="pewarnaan">Prestasi</h1>
  </div>
</template>

<script>
import navbarComponent from "../components/navbarComponent.vue";
export default {
  name: "prestasi",
  components: {
    navbarComponent,
  },
};
</script>

<style scoped>
.pewarnaan {
  text-align: center;
  color: #ff0000;
}
</style>
