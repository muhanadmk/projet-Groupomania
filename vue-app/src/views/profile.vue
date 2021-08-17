<template>
<div class="container">
    <div class="row">
      <div class="col-md-4 mt-5">
        <div class="card" style="width: 18rem;">
          <img src="@/assets/icon-left-font.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">c'est un profile de M ou MMe </h5>
            <h4 class="card-title font-weight-bold">{{usernameData.username}} </h4>
            <p class="card-text"> il/ elle member chez Groupomania depuis <br> </p>
            <h5 class="card-text font-weight-bold">{{usernameData.dateUser}}</h5>
              <button v-show="admin > 0"  class="btn btn-outline-danger" type="submit" @click="deleteUser" >Admin delete User</button>
              <button v-show="admin <= 0" class="btn btn-outline-danger" type="submit" @click="deleteUser" >deleteUser</button>
          </div>
        </div>
      </div>
      
      <div class="col-md-8">
        <createPost />
        <div class="postes-aera">
            <postsUser v-for="post in postOfUser" v-bind:key="post.post_id" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import postsUser from "../components/postsUser.vue";
import createPost  from "../components/createPost.vue";



export default {
    name: 'profile',
    components: {
      postsUser,
      createPost
    },
    data() {
    return {
      postOfUser : [],
      usernameData: [],
      admin: this.admin,
      message : "",
    };
  },
  methods: {
    async getPrfile() {
      try {
        const ProfileUserId = localStorage.getItem("ProfileUserId");
        const response = await axios.get(`posts/profile/${ProfileUserId}`);
        this.postOfUser = response.data;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async getusername() {
      try {
        const ProfileUserId = localStorage.getItem("ProfileUserId");
        const response = await axios.get(`users/profile/${ProfileUserId}`);
        this.usernameData = response.data;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser() {
      try {
        const ProfileUserId = localStorage.getItem("ProfileUserId");
        const response = await axios.delete(`users/${ProfileUserId}`,{
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
         localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('admin');
        localStorage.removeItem('ProfileUserId');
        this.$router.push("/");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async AdminDeleteUser() {
      try {
        const ProfileUserId = localStorage.getItem("ProfileUserId");
        const response = await axios.delete(`users/Admin/${ProfileUserId}`,{
          data: { 
            userId: this.userId  
            },
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }  
        });
        localStorage.removeItem('ProfileUserId');
        this.$router.push("/");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
     getIsAdmin () {
     return this.admin = localStorage.getItem('admin');
    },
  },
  created() {
    this.getPrfile(),
    this.getusername(),
    this.getIsAdmin();
  },
}
</script>

s