<template>
  <div class="our-Blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDes }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="postes-aera">
            <BlogPostes />
            <div class="alert alert-primary" role="alert">
             A simple primary alert—check it out!
      </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <BlogPostes />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import BlogPostes from "../components/BlogPostes.vue"
export default {
  data: function () {
    return {
      pageName: "Blog Us",
      pageDes: " this is Blog Us",
    };
  },
  name: "Blog",
  components: {
    BlogPostes
  } 
};
</script>
