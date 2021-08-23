<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark mb-10">
      <div class="container-fluid">
        <router-link to="/Home"
          ><a class="navbar-brand text-light"> Groupomania</a></router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <button
              type="button"
              class="btn btn-outline-info me-2"
              @click="getPrfileUser"
            >
              profile
            </button>
            <button
              class="btn btn-outline-warning me-2"
              type="button"
              @click="LogOutUser"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    LogOutUser() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("admin");
      localStorage.removeItem("ProfileUserId");
      localStorage.removeItem("username");
      this.$router.push("/");
    },
    getPrfileUser(e) {
      e.preventDefault();
      const userId = localStorage.getItem("userId");
      this.$router.push("/profile");
      this.ProfileUserId = localStorage.setItem("ProfileUserId", userId);
    },
  },
};
</script>
