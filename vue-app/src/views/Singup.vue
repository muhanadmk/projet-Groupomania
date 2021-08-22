<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-5">
        <div class="">
          <div class="">
            <div class="rounded-5 shadow">
              <div class="modal-header p-5 pb-4 border-bottom-0">
                <h2 class="fw-bold mb-0">Sign up</h2>
              </div>
              <div class="modal-body">
                <form class="">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
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
                    <label>Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control rounded-4"
                      placeholder="Password"
                      v-model="password"
                    />
                    <label>Password</label>
                  </div>
                  <button
                    class="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                    type="submit"
                    @click="submitSingup"
                  >
                    Sign up
                  </button>
                  <div>
                    <router-link to="/"
                      ><a> Already registered sign in?</a>
                    </router-link>
                  </div>
                  <small class="fs-5"
                    >bienvenue chez Groupomania société.</small
                  >
                  <hr class="my-4" />
                </form>
              </div>
            </div>
          </div>
          <div>
            <!-- <div class="errListe">
        <div class="oneErr" v-for="oneErr in fromError" :oneErr="oneErr">{{ oneErr }}</div>
      </div> -->
          </div>
        </div>
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
      fromError: [],
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
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
  validateForm(e) {
    this.fromError = [];
    if (!this.username) {
      this.fromError.push("username ne peut pas etre vide !");
    }
    e.preventDefault();
  },
};
</script>
