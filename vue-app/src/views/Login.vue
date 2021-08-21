<template>
<div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog">
  <auth/>
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-5 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <!-- <h5 class="modal-title">Modal title</h5> -->
        <h2 class="fw-bold mb-0">log in</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body p-5 pt-0">
        <form class="">
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-4" placeholder="name@example.com" v-model="email">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-4" placeholder="Password"  v-model="password">
            <label for="floatingPassword">Password</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit" @click="submitLogin">log in</button>
           <div>
              <router-link to="/Singup"
                ><a> not registered you must sige up</a>
              </router-link>
            </div>
          <small class="text-muted">bienvenue chez Groupomania société.</small>
          <hr class="my-4">
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import { mapMutations } from "vuex";
import axios from "axios";
import auth from "../components/auth.vue";
// import AppHeader from "../components/AppHeader.vue"


// import userCtrl from "../../../backend/controllers/user";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error : null,
    }
  },
  components: {
      auth
    },
  methods: {
    async submitLogin(e) {
      try {
        e.preventDefault();
        const response = await axios.post("users/login", {
          email: this.email,
          password: this.password,
        });
        // localStorage.setItem("token",JSON.stringify(response.data.token))
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('admin', response.data.admin);
        // this.$store.dispatch('username', response.data.username)
        this.$router.push("/Home");
      } catch (error) {
        this.error = error.response.data.error
      }
    },
  },
};
</script>
