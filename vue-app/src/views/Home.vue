<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <createPost />
        <div class="postes-aera">
          <PostCard v-for="onepost in posts" v-bind:key="onepost.post_id" :onepost="onepost" />
        </div>
      </div>
    </div>
  </div>
</template>
        <!-- <DeletePost /> -->

<script>
import PostCard from "../components/PostCard.vue";
// import DeletePost from "../components/DeletePost.vue";
import createPost from "../components/createPost.vue";


import axios from "axios";
export default {
   name: "Home",
  components: {
    PostCard,
    createPost,
    // DeletePost
  },
  data() {
    return {
      posts: [],
      // title: "",
      // post: "",
      userId: 17,
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get("posts");
        console.log(response);
        this.posts = response.data;
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
