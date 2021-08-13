<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-md-6">
        <div class="card">
          <form class="box bg-dark">
            <h1>Singup</h1>
            <p class="text-muted">
              Please enter your email and password and username!
            </p>
            <input
              type="text"
              username=""
              placeholder="username"
              v-model="username"
            />
            <!-- <p class="text-white"> {{ vlaidUsername() }} </p> -->
            <input type="text" email="" placeholder="email" v-model="email" />
            <input
              type="password"
              name=""
              placeholder="Password"
              v-model="password"
            />
            <label for="avatar">Choose a profile picture:</label>
            <!-- <input type="file" id="imageUserUrl" name="imageUserUrl" accept="image/png, image/jpeg, image/jpg">         -->
            <div>
              <router-link to="/Login"
                ><a> Already registered sign in?</a>
              </router-link>
            </div>
            <input type="submit" name="" value="Singup" @click="submitSingup" />
            <div></div>
            <div class="col-md-12">
              <ul class="social-network social-circle">
                <li>
                  <a href="#" class="icoFacebook" title="Facebook"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="icoTwitter" title="Twitter"
                    ><i class="fab fa-twitter"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="icoGoogle" title="Google +"
                    ><i class="fab fa-google-plus"></i
                  ></a>
                </li>
              </ul>
            </div>
          </form>
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
      }
      catch (error) {
        console.log(error);
      }
    },
  },
  //   computed: {
  //       vlaidUsername:  () => {
  //           if (this.username){
  //               return 'username ne peut pas etre vide';
  //             }
  //         },
  //     }
};
</script>
<style scoped>
.body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(to right, #b92b27, #1565c0);
}

.card {
  margin-bottom: 20px;
  border: none;
}

.box {
  width: 500px;
  padding: 40px;
  text-align: center;
  transition: 0.25s;
  margin-top: 100px;
}

.box input[type="text"],
.box input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 10px 10px;
  width: 250px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}

.box h1 {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
  width: 300px;
  border-color: #2ecc71;
}

.box input[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}

.box input[type="submit"]:hover {
  background: #2ecc71;
}

.forgot {
  text-decoration: underline;
}

ul.social-network {
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
}

ul.social-network li {
  display: inline;
  margin: 0 5px;
}

.social-network a.icoFacebook:hover {
  background-color: #3b5998;
}

.social-network a.icoTwitter:hover {
  background-color: #33ccff;
}

.social-network a.icoGoogle:hover {
  background-color: #bd3518;
}

.social-network a.icoFacebook:hover i,
.social-network a.icoTwitter:hover i,
.social-network a.icoGoogle:hover i {
  color: #fff;
}

a.socialIcon:hover,
.socialHoverClass {
  color: #44bcdd;
}

.social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  border-radius: 50%;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 20px;
}

.social-circle li i {
  margin: 0;
  line-height: 50px;
  text-align: center;
}

.social-circle li a:hover i,
.triggeredHover {
  transform: rotate(360deg);
  transition: all 0.2s;
}

.social-circle i {
  color: #fff;
  transition: all 0.8s;
  transition: all 0.8s;
}
</style>
