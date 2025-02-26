<template>
  <navbar-component />
  <main style="padding-top: 100px;" class="container-global">
    <h1 class="pewarnaan">Prestasi</h1>
  </main>
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
