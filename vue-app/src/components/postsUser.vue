<template>
  <div class="card mt-5 mb-5">
    <div class="card-header">
    <a type="submit" @click="getPrfile" >{{ post.username }}</a>
    </div>
    <div class="card-title">
      <h5 class="card-title">{{post.title }} </h5>
    </div>
    <div class="card-body">
      <p class="card-text">{{ post.post }}</p>
      <img class="card-img" v-bind:src="post.imagePostUrl" alt="...">
      <p class="card-text text-dark">{{ post.datePost }}</p>
    </div>
    <button v-if="admin > 0" type="submit" class="btn btn-outline-danger" @click="AdminDeletePost"> Admin Delete Post</button>
    <button v-else-if="admin <= 0" class="btn btn-outline-danger" @click="DeletePost">Delete Post</button>
  </div>
</template>

<script>
// import createPost from "./createPost.vue"
export default {
  props: ['post'],
  name: 'postsUser',
  components: {
      // createPost,
    },
    data() {
    return {
      admin: this.admin
    }
  },
  methods: {
    getIsAdmin () {
     return this.admin = localStorage.getItem('admin');
    },
  },
  created() {
    this.getIsAdmin();
  },
}
</script>

