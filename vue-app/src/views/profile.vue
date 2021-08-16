<template>
<div class="card mt-5 mb-5">
  <div class="card-header">
      <a type="submit" @click="getPrfile" >getPrfile</a>

  <!-- <a type="submit"  >{{profile.postOfUser[0].datePost}}</a> -->
  <p>{{profile.postOfUser[0].post}}</p>
    <a type="submit" >{{}}</a>

  </div>
  <div class="card-title">
    <h5 class="card-title"> </h5>
  </div>
  <div class="card-body">
    <p class="card-text"></p>
    <!-- <img class="card-img" v-bind:src="onepost.imagePostUrl" alt="..."> -->
     <p class="card-text text-dark">{{}}</p>
  </div>
  <button v-if="admin > 0" type="submit" class="btn btn-outline-danger" @click="AdminDeletePost"> Admin Delete Post</button>
  <button v-else-if="admin <= 0" class="btn btn-outline-danger" @click="DeletePost">Delete Post</button>
</div>
</template>


<script>
import axios from "axios";

export default {
    name: 'profile',
    data() {
    return {
      profile : [],
      message : "",
    };
  },
  methods: {
    async getPrfile() {
      try {
        const ProfileUserId = localStorage.getItem("ProfileUserId");
        const response = await axios.get(`posts/profile/${ProfileUserId}`);
        this.profile = response.data;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getPrfile();
  },
}
</script>