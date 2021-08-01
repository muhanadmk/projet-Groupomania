<template>
  <div class="our-Blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDes }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="postes-aera">
            <BlogPostes v-for="post in posts"
             v-bind:key="post.id" 
             :post="post.post"
             :title="post.title"
             :datePost="post.datePost"
             :imageUrl="post.imageUrl"
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
  </div>
</template>

<script>

import BlogPostes from "../components/BlogPostes.vue";
import Json_posts from "../json/blog_posts.json";

export default {
  data: function () {
    return {
      pageName: "Blog Us",
      pageDes: " this is Blog Us",
      posts: Json_posts,
    };
  },
  name: "Blog",
  components: {
    BlogPostes
  } 
};
</script>
