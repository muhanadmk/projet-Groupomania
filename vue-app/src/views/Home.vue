<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <createPost />
        <div class="postes-aera">
          <PostCard v-for="Onepost in posts" v-bind:key="Onepost.post_id" :Onepost="Onepost" />
          <!-- <modiferPost v-show="true" :posts="posts" /> -->
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
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get("posts");
        console.log(response);
        this.posts = response.data;
        this.lotOfPost = response.data;
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
