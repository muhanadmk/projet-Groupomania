<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark mb-10">
      <div class="container-fluid">
        <router-link to="/Home"
          ><a class="navbar-brand text-light"> <img style="width:10%" src="../assets/icon-left-font-monochrome-white.png" alt="">
</a></router-link
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
import axios from "axios";
export default {
  props: ["userId_userLofin"],
  name: "AppHeader",
  data() {
    return{
      userId : ""
    }
  },
  created() {
    this.checkUser();
    // this.$router.reload();
  },
  methods: {
    LogOutUser() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
    getPrfileUser() {
      // alert(this.userId)
      // alert(this.$route.params.id)
      this.$root.$emit('load')
      this.$router.push("/profile/"+ this.userId);
      // this.$router.go(this.$router.push("/profile/"+ this.userId))
    },
    
      // this.$router.push(this.$router.push("/profile/"+ this.userId););
      // this.$router.reload();
      // if(this.userId == this.$route.params.id){
      //   this.$router.push("/profile/"+ this.$route.params.id);
      // }
      //  this.$router.push("/profile/"+ this.userId);
    async checkUser() {
      try {
        const response = await axios.get(`users/user`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        this.userId = response.data[0].id;
        //  alert(this.userId)
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
