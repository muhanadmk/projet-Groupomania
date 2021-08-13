<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <createPost />
        <div class="postes-aera">
          <PostCard v-for="post in posts" v-bind:key="post.id" :post="post" />
          <!-- <DeletePost /> -->
          <!-- <DeletePost v-for="post in posts" v-bind:key="post.id" :post="post" />  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from "../components/PostCard.vue";
// import DeletePost from "../components/DeletePost.vue";
import createPost from "../components/createPost.vue";


import axios from "axios";
export default {
   name: "Home",
  components: {
    createPost,
    PostCard,
  },
  data() {
    return {
      posts: [],
      // title: "",
      // post: "",
      // userId: 17,
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
  //  deletePost() {
  //     axios
  //       .delete(`http://localhost:3000/api/posts/41`)
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   },
  
  created() {
    this.getData();
  },
};
</script>
