<template>
<div class="container">
    <div class="row">
      <div class="col-md-4 mt-5 ">
        <div class="card" style="width: 18rem;">
          <img src="@/assets/icon-left-font.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">c'est un profile de M ou MMe </h5>
            <h4 class="card-title font-weight-bold">{{usernameData.username}} </h4>
            <p class="card-text"> il/ elle member chez Groupomania depuis <br> </p>
            <h5 class="card-text font-weight-bold">{{usernameData.dateUser}}</h5>
              <!-- <button v-show="admin > 0"  class="btn btn-outline-danger" type="submit" @click="deleteUser" >Admin delete User</button>
              <button v-show="admin <= 0" class="btn btn-outline-danger" type="submit" @click="deleteUser" >deleteUser</button> -->
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <createPost />
        <div class="postes-aera">
            <postsUser v-for="postProfile in postsOfUser" v-bind:key="postProfile.post_id" :postProfile="postProfile"/>
            <!-- <DeletePost :postsOfUser="postsOfUser"/> -->
            <!-- <modifer-Post :postsOfUser="postsOfUser"/> -->
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
    props:['postProfile'],
    name: 'profile',
    components: {
      postsUser,
      createPost,
    },
    data() {
    return {
      postsOfUser : [],
      usernameData: [],
      admin: this.admin,
      userId: this.userId,
      message : "",
    };
  },
  methods: {
    async getPrfile() {
      try {
        const ProfileUserId = localStorage.getItem("ProfileUserId");
        const response = await axios.get(`posts/profile/${ProfileUserId}`);
        this.postsOfUser = response.data;
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
     getIsAdmin () {
      this.admin = localStorage.getItem('admin')
      this.userId = localStorage.getItem('userId')
    },
  },
  created() {
    this.getPrfile();
    this.getusername();
  },
}
</script>

s