<template>
  <div class="">
          <textarea
            class="form-control card-text"
            placeholder="ecrir votre Comment ici"
            id="Comment"
            type="text"
            v-model="Comment"
            style="height: 100px"
          ></textarea>
        <button class="btn btn-dark mt-2" type="submit" @click="createCommente">
          Comment
        </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["postsforComment"],
  name: "createComment",
  data() {
    return {
      Comment: "",
      // comments: [],
      message: "",
      postId: this.postsforComment.post_id,
    };
  },
  mounted() {
    console.log(this.message);
  },
  methods: {
    async createCommente(e) {
      try {
        e.preventDefault();

        const response = await axios.post(
          "comments",
          {
            user_id: localStorage.getItem('userId'),
            Comment: this.Comment,
            post_id: this.postId,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        // this.comments = response.data;
        this.Comment = "";
        this.$root.$emit('createPostEvetn', this.postId)
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
