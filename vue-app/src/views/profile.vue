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
            <p class="card-text font-weight-bold">{{convitrDate(usernameData.dateUser)}}</p>
             <img src="@/assets/icon-left-font.png" class="card-img-top" alt="...">
              <button v-if="admin > 0"  class="btn btn-outline-danger" type="submit" @click="AdminDeleteUser" >Admin delete User</button>
              <button v-if="userSIngin == $route.params.id && admin == 0" class="btn btn-outline-danger" type="submit" @click="deleteUser" >deleteUser</button>
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
      admin: "",
     
      message : "",
      ProfileUserId: this.ProfileUserId,
      userSIngin: ""
    };
  },
  created() {    
    this.checkUser()
     this.autoLogin();
     this.$root.$on('load',()=>{
       this.postsOfUser = []
        this.checkUser()
     })
  },
  methods: {

      convitrDate(timestamp) {
      var date = new Date(timestamp);
      return (
        date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes()
      );
    },
     async  checkUser(){
    try {
         const response = await axios.get(`users/user`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        this.userSIngin = response.data[0].id
        this.admin = response.data[0].admin;
        this.usernameData = response.data;
        this.getPrfile(this.$route.params.id)
        this.getusername(this.$route.params.id)
      }catch(error){
      console.log(error);
      }       
    },
    async deleteUser() {
      try {
        const response = await axios.delete(`users/${this.userSIngin}`,{
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }  
        });
        localStorage.removeItem('token');
        this.response = response;
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async AdminDeleteUser() {
      try {
        const response = await axios.delete(`users/${this.userSIngin}/${this.$route.params.id}`,{
          data: { 
            userId: this.userId  
            },
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }  
        });
        this.$router.push("/");
        this.response = response;
      } catch (error) {
        console.log(error);
      }
    },
    async getPrfile(e) {
      try {
        const response = await axios.get(`posts/profile/${e}`);
        this.postsOfUser = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getusername(e) {
      try {
        const response = await axios.get(`users/profile/${e}`);
        this.usernameData = response.data;
      } catch (error) {
        console.log(error);
      }
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
          this.$router.push("/profile/" + this.$route.params.id);
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
}
</script>
