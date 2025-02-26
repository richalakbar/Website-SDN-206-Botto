<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SDN 206 Botto</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto text-center">
          <RouterLink
            to="/"
            class="nav-item nav-link"
            active-class="active"
            exact-active-class="active"
          >
            Beranda
          </RouterLink>
          <RouterLink
            to="/visimisi"
            class="nav-item nav-link"
            active-class="active"
            exact-active-class="active"
          >
            Visi & Misi
          </RouterLink>
          <RouterLink
            to="/prestasi"
            class="nav-item nav-link"
            active-class="active"
            exact-active-class="active"
          >
            Prestasi
          </RouterLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbarComponent",
};
</script>

<style scoped>
.navbar {
  background-color: #fdeebf;
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px -2px rgba(11, 151, 184, 0.5);
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
}

.navbar-brand {
  color: #0b97b8 !important;
  font-weight: bold;
  margin-bottom: 5px;
}

.nav-link {
  color: #0b97b8 !important;
  font-weight: normal;
  margin-bottom: 5px;
  transition: color 0.3s ease-in-out, font-weight 0.1s ease-in-out;
  margin: 0 15px;
}

.nav-link:hover {
  font-weight: bold;
  color: #0b97b8 !important;
}

.nav-link.active {
  font-weight: bold !important;
  color: #f2651c !important;
  transition: color 0.3s ease-in-out;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3), 0px 0px 30px rgba(0, 0, 0, 0.15);
}

.navbar-toggler {
  border: 2px solid #0b97b8;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='%230b97b8' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

@media (max-width: 768px) {
  .navbar-nav {
    flex-direction: column;
    text-align: center;
  }

  .navbar-nav .nav-item {
    margin-bottom: 10px;
  }
}
</style>
