<template>
  <div class="container mt-5 ">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6">
        <div class="shadow-lg p-3 mb-5 bg-dark rounded">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <h2 class="fw-bold mb-0 text-white">Sign up</h2>
          </div>
          <div class="modal-body">
            <form class="">
              <div class="form-floating mb-3">
                <input
                  for="username"
                  type="text"
                  class="form-control"
                  placeholder="name@example.com"
                  v-model="username"
                />
                <label for="floatingInput">username</label>
                <p v-if="!usernameIsValide" class="error-meesage text-warning">username doit etre entre au moins de 4 caracteres ! </p>
                <!-- <span class="text-warning" :errUsername="errUsername"> {{errUsername}}</span> -->
              </div>
              <div class="form-floating mb-3">
                <input
                  for="email"
                  type="email"
                  class="form-control rounded-4"
                  placeholder="name@example.com"
                  v-model="email"
                />
                <label>Email address</label>
                <p v-if="!emailIsValide" class="text-warning">email ne peut pas etre vide !</p>
              </div>
              <div class="form-floating mb-3">
                <input
                  for="password"
                  type="password"
                  class="form-control rounded-4"
                  placeholder="Password"
                  v-model="password"
                />
                <label>Password</label>
                <p v-if="!passwordIsValide" class="text-warning" >ecrir password puls de 8 caracteres</p>
              </div>
               <p v-if="msgErrorSingup" class="text-warning fs-5" > email deja utilier</p>
              <button
                class="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                @click="submitSingup"
              >
                Sign up
              </button>
              <div>
                <router-link to="/"
                  ><a class="text-primary fs-4"> Already registered sign in Alors</a>
                </router-link>
              </div>
              <small class="fs-5 text-white"
                >bienvenue chez Groupomania société.</small
              >
            </form>
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
      email: null,
      password: null,
      username: null,
      msgErrorSingup: false
    };
  },
  computed: {
    usernameIsValide(){
      return !!this.username && this.username.length >= 4;
    }, 
    passwordIsValide(){
      return !!this.password && this.password.length >= 8;
    },
    emailIsValide(){
      return !!this.email && this.email.length >= 5;
    }
  },
  methods: {
    async submitSingup(e) {
       e.preventDefault(); 
      try {
          const response = await axios.post("users/signup", {
          email: this.email,
          password: this.password,
          username: this.username,
        });
        this.response = response;
        this.$router.push("/");
      } catch (error) {
        console.log(error);
        this.msgErrorSingup = true;
      }
    },
    submitForm(){
      const fromIsVlaide = this.usernameIsValide && this.passwordIsValide && this. emailIsValide;
      if(fromIsVlaide){
        return true
      }
      else{
        return false
      }
    },
  },


};
</script>
