<template>
  <div class="card mt-5 mb-5">
    <div class="card-header">
       <a type="submit" @click="getPrfile" v-if=" Onepost.username">{{ Onepost.username }}</a>
      <a type="submit" @click="getPrfile" v-if="Onepost.username.username">{{ Onepost.username[0].username }}</a>
    </div>
    <div class="card-title">
      <h5 class="card-title">{{ Onepost.title }}</h5>
    </div>
    <div class="card-body">
      <p class="card-text">{{ Onepost.post }}</p>
      <img class="card-img" v-bind:src="Onepost.imagePostUrl" alt="..." />
      <p class="card-text text-dark">{{ Onepost.datePost }}</p>
      <!-- <modiferPost :post_id_Mddifier="Onepost.post_id"/> -->
    </div>
       <createComment :postsforComment="postsforComment" />
        <CommentCard  :post_id="Onepost.post_id" />
        <postsUser :userid="Onepost.id" />

  </div>
</template>

<script>

import createComment from "../components/createComment.vue";
import CommentCard from "../components/CommentCard.vue";
import postsUser from "../components/postsUser.vue";
// import modiferPost from '../components/modiferPost.vue';

//import axios from "axios";


export default {
  props: ["Onepost"],
  name: "post-card",
  components: {
    createComment,
    CommentCard,
    postsUser,
    // DeletePost
    // modiferPost
  },
  data() {
    return {
      Comments: [],
      postsforComment: this.Onepost,
      userId: this.Onepost.id,
      postId: this.Onepost.post_id,
      title: "",
      post: "",
      image: null,
      message: "",
      show:false,
    };
  },
  methods: {
    getPrfile(e) {
      e.preventDefault();
      localStorage.setItem("ProfileUserId", this.userId);
      this.$router.push("/profile");
    },
  },
  created() {
  //  this.getAllCommente();
  },
};
</script>
