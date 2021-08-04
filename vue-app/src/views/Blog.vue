<template>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="postes-aera">
            <PostCard v-for="post in posts"
             v-bind:key="post.id" 
             :post="post"
             />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <!-- <BlogPostes /> -->
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import PostCard from "../components/PostCard.vue";
import axios from "axios"
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get('http://localhost:3000/api/posts');
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
  name: "Blog",
  components: {
    PostCard
  } 
};
</script>

