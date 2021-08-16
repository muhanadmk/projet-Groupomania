<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <createPost />
        <div class="postes-aera">
          <PostCard v-for="onepost in posts" v-bind:key="onepost.post_id" :onepost="onepost" />
          <!-- <profile v-for="postOne in lotOfPost" v-bind:key="postOne.id" :postOne="postOne" /> -->
        </div>
      </div>
    </div>
  </div>
  
</template>
    <!-- <profile/> -->

<script>
import PostCard from "./PostCard.vue";
// import modiferPost from "../components/modiferPost.vue";
// import profile from './profile.vue'

import createPost from "../components/createPost.vue";


import axios from "axios";
export default {
   name: "Home",
  components: {
    PostCard,
    createPost,
    // profile
    // modiferPost
  },
  data() {
    return {
      posts: [],
      // lotOfPost: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get("posts");
        console.log(response);
        this.posts = response.data;
        // this.lotOfPost = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
