<template>
  <div
    class="modal modal-signin position-static d-block bg-secondary py-5"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded-5 shadow">
        <div class="modal-header p-5 pb-4 border-bottom-0">
          <!-- <h5 class="modal-title">Modal title</h5> -->
          <h2 class="fw-bold mb-0">Sign up</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-5 pt-0">
          <form class="">
            <div class="form-floating mb-3">
              <input
                type="username"
                class="form-control rounded-4"
                placeholder="name@example.com"
                v-model="username"
              />
              <label for="floatingInput">username</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control rounded-4"
                placeholder="name@example.com"
                v-model="email"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control rounded-4"
                placeholder="Password"
                v-model="password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button
              class="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
              type="submit"
              @click="submitSingup"
            >
              Sign up
            </button>
            <div>
              <router-link to="/Login"
                ><a> Already registered sign in?</a>
              </router-link>
            </div>
            <small class="text-muted"
              >bienvenue chez Groupomania société.</small
            >
            <hr class="my-4" />
          </form>
        </div>
        <!-- <button @click="autoLogin" class="btn">loooooo</button> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Singup",

  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    async submitSingup(e) {
      try {
        e.preventDefault();
        const response = await axios.post("users/signup", {
          email: this.email,
          password: this.password,
          username: this.username,
        });
        console.log(response);
        this.$router.push("/Login");
      } catch (error) {
        console.log(error);
      }
    },
  },
  async autoLogin() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
       console.log("to doit sinup");
      } 
      else {
        const response = await axios.get("users/auth", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log(response.data);
        this.$router.push("/Home");
      }
    } catch (error) {
      console.log(error);
    }
  },
  // created() {
  //   this.autoLogin();
  // },
};
</script>
