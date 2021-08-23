<template>
<div class="container mt-5 ">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6">
        <div class="shadow-lg p-3 mb-5 bg-dark rounded">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <h2 class="fw-bold mb-0 text-white">login</h2>
          </div>
          <div class="modal-body">
            <form class="">
              <div class="form-floating mb-3 mb-5">
                <input
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
                  type="password"
                  class="form-control rounded-4"
                  placeholder="Password"
                  v-model="password"
                />
                <label>Password</label>
                <p v-if="!passwordIsValide" class="text-warning" >ecrir password puls de 4 caracteres</p>
              </div>
               <p v-if="msgErrorLogin" class="text-warning" >password or email est faute</p>
              <button
                class="w-100 mb-2 btn btn-lg rounded-4 btn-primary mt-5"
                type="submit"
                @click="submitLogin"
              >
                Login
              </button>
              <div>
                <router-link to="/Singup"
                  ><a class="text-primary fs-4"> vous n'etes pas registez alors sign up</a>
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
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      error : null,
      msgErrorLogin: false
    }
  },
   computed: { 
    passwordIsValide(){
      return !!this.password && this.password.length >= 8;
    },
    emailIsValide(){
      return !!this.email && this.email.length >= 5;
    }
  },
  methods: {
    async submitLogin(e) {
      try {
        e.preventDefault();
        const response = await axios.post("users/login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('admin', response.data.admin);
        localStorage.setItem('username', response.data.username);
         this.email = "",
         this.password= "",
        this.$router.push("/Home");
      } catch (error) {
        console.log(error);
        this.msgErrorLogin = true;
      }
    },
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
};
</script>
