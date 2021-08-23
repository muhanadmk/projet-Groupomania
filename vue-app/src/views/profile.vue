<template>
<div>
  <AppHeader/>
<div class="container">
    <div class="row">
      <aside class="col-sm-3 col-md-8 mt-5 col-lg-4 ">
        <div class="card profile">
          <div class="card-body">
            <p class="card-title fs-5">c'est un profile de M ou MMe </p>
            <p class="card-title fs-4 font-weight-bold">{{usernameData.username}} </p>
            <p class="card-text fs-5"> il/ elle member chez Groupomania depuis <br> </p>
            <p class="card-text font-weight-bold">{{usernameData.dateUser}}</p>
             <img src="@/assets/icon-left-font.png" class="card-img-top" alt="...">
              <button v-if="admin > 0"  class="btn btn-outline-danger" type="submit" @click="AdminDeleteUser" >Admin delete User</button>
              <button v-else-if="admin <= 0" class="btn btn-outline-danger" type="submit" @click="deleteUser" >deleteUser</button>
          </div>
        </div>
      </aside>
      <div class="col-md-12 col-lg-8">
        <div class="postes-aera">
            <postsUser v-for="postProfile in postsOfUser" v-bind:key="postProfile.post_id" :postProfile="postProfile" :username="postProfile.username" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import axios from "axios";
import postsUser from "../components/postsUser.vue";
import AppHeader from "../components/AppHeader.vue"

export default {
    props:['postProfile'],
    name: 'profile',
    components: {
      AppHeader,
      postsUser,
    },
    data() {
    return {
      postsOfUser : [],
      usernameData: [],
      admin: this.admin,
      userId: this.userId,
      message : "",
      ProfileUserId: this.ProfileUserId,
    };
  },
 
  methods: {
    async deleteUser() {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.delete(`users/${userId}`,{
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }  
        });
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('admin');
        localStorage.removeItem('ProfileUserId');
        this.response = response;
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async AdminDeleteUser() {
      try {
        const userId = localStorage.getItem("userId");
        const ProfileUserId = localStorage.getItem("ProfileUserId");
        const response = await axios.delete(`users/${userId}/${ProfileUserId}`,{
          data: { 
            userId: this.userId  
            },
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }  
        });
        localStorage.removeItem('ProfileUserId');
        this.$router.push("/");
        this.response = response;
      } catch (error) {
        console.log(error);
      }
    },
    async getPrfile() {
      try {
        const ProfileUserId = localStorage.getItem("ProfileUserId");
        const response = await axios.get(`posts/profile/${ProfileUserId}`);
        this.postsOfUser = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getusername() {
      try {
        const ProfileUserId = localStorage.getItem("ProfileUserId");
        const response = await axios.get(`users/profile/${ProfileUserId}`);
        this.usernameData = response.data;
       
      } catch (error) {
        console.log(error);
      }
    },
     getIsAdmin () {
      this.admin = localStorage.getItem('admin')
      this.userId = localStorage.getItem('userId')
      this.ProfileUserId = localStorage.getItem('ProfileUserId')
    },
    async autoLogin() {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("users/auth", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
         this.response = response;
          this.$router.push("/profile");
        } else {
          this.message = "you must log in";
          this.hide = false;
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {   
    this.getIsAdmin();
    this.getPrfile();
    this.getusername();
    this.autoLogin();
  },
}
</script>
