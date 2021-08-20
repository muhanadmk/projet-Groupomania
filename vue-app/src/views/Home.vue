<template>
  <div>
  <AppHeader /> 
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <createPost @newPostAdded="addNewPost"  />
          <div class="postes-aera">
            <PostCard v-for="Onepost in posts" v-bind:key="Onepost.post_id" :Onepost="Onepost" />
          </div>
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue"
// import Footer from "../components/Footer.vue"
import PostCard from "./PostCard.vue";
import createPost from "../components/createPost.vue";

import axios from "axios";
export default {
   name: "Home",
  components: {
    AppHeader,
    PostCard,
    createPost,
    //  Footer
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    addNewPost(post){
      this.posts.unshift(post)
    },
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
