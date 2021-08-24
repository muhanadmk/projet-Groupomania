<template>
  <article class="card mt-5 mb-5"  v-if="postProfile">
    <div class="card-header">
      <p class="fs-4" type="submit">{{postProfile.username}}</p>
    </div>
    <p class="card-title fs-4">{{ postProfile.title }}</p>
    <div class="card-body">
      <p class="card-text">{{ postProfile.post }}</p>
      <img class="card-img" v-if="postProfile.imagePostUrl" v-bind:src="postProfile.imagePostUrl" alt="..." />
      <p class="card-text text-dark">{{convitrDate( postProfile.datePost) }}</p>
      <CommentCard :post_id="postProfile.post_id" :ProfileUserIdd="postProfile.id"/>
    </div>
  </article>
</template>

<script>
import CommentCard from "./CommentCard.vue"
export default {
  props: ["postProfile"],
  name: "postsUser",
  components: {
  CommentCard
  },
  data() {
    return {
      admin: this.admin,
      postProfiles: this.postProfile,
    };
  },
  methods: {
    getIsAdmin() {
      return (this.admin = localStorage.getItem("admin"));
    },
     convitrDate(timestamp) {
      var date = new Date(timestamp);
      return (
        date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes()
      );
    },
  },
  created() {
    this.getIsAdmin();
  },
};
</script>
