<template>
  <section class="card mt-5 mb-5" v-show="modifer">
    <article>
      <div class="card-header">
        <a
          type="submit"
          class="text-capitalize fs-4"
          @click="getPrfile"
          v-if="Onepost.username"
          >{{ Onepost.username }}</a
        >
        <a type="submit" @click="getPrfile" v-if="Onepost.username.username">{{
          Onepost.username[0].username
        }}</a>
      </div>
      <div class="card-title">
        <h5 class="card-title text-lg-start fs-5 fw-bold ms-2">
          {{ Onepost.title }}
        </h5>
      </div>
      <div class="card-body">
        <p class="card-text fs-5">{{ Onepost.post }}</p>
        <img
          class="card-img"
          v-if="Onepost.imagePostUrl"
          v-bind:src="Onepost.imagePostUrl"
          alt="ceci l'image de la post"
        />
        <p class="card-text text-dark">{{ convitrDate(Onepost.datePost) }}</p>
        <modiferPost :post_Modifier="post_Modifier" />
        <DeletePost :post_ID="Onepost.post_id" :post_user_id="Onepost.id" />
      </div>
      <createComment :postsforComment="postsforComment"  />
      <CommentCard :post_id="Onepost.post_id" :ProfileUserId="Onepost.id"/>
    </article>
    <postsUser :userid="Onepost.id" />
  </section>
</template>

<script>
import modiferPost from "../components/modiferPost.vue";
import createComment from "../components/createComment.vue";
import postsUser from "../components/postsUser.vue";
import DeletePost from "../components/DeletePost.vue";
import CommentCard from "../components/CommentCard.vue";
export default {
  props: ["Onepost"],
  name: "post-card",
  components: {
    createComment,
    CommentCard,
    postsUser,
    DeletePost,
    modiferPost,
  },
  data() {
    return {
      modifer: true,
      Comments: [],
      post_Modifier: this.Onepost,
      postsforComment: this.Onepost,
      userId: this.Onepost.id,
      postId: this.Onepost.post_id,
      title: "",
      post: "",
      image: null,
      message: "",
      show: false,
      // ProfileUserId: this.Onepost.id
    };
  },
  methods: {
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
    getPrfile() {
      this.$router.push("/profile/" + this.userId);
    },
  },
  created() {
    this.$root.$on("modferPost", () => {
      this.getData();
    });
  },
};
</script>
