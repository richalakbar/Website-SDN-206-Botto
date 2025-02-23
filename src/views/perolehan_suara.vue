<template>
  <navbar-component />
  <div class="container-global">
    <h1 class="pewarnaan">Perolehan Suara</h1>
  </div>
</template>

<script>
import navbarComponent from "../components/navbarComponent.vue";
export default {
  name: "Suara",
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
