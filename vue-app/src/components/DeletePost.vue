<template>
  <div>
    <button
      v-if="admin > 0"
      class="btn btn-outline-danger"
      @click="AdminDeletePost"
    >
      Admin Delete Post
    </button>
    <button
      v-else-if="admin <= 0"
      class="btn btn-outline-danger"
      @click="DeletePost"
    >
      Delete Post
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["postProfiles","OnepostDelete" ],
  name: "DeletePost",
  data() {
    return {
      postIdProfile: this.postProfiles.post_id,
    //   postIdHome: this.OnepostDelete.post_id,
      admin: this.admin,
    };
  },
  methods: {
    getIsAdmin() {
      return (this.admin = localStorage.getItem("admin"));
    },
    async AdminDeletePost(e) {
      try {
        e.preventDefault();
        // const userId = localStorage.getItem("userId");
        const response = await axios.delete(`posts/Admin/${this.postIdProfile}`, {
          data: {
            userId: localStorage.getItem("userId"),
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async DeletePost() {
      try {
        const response = await axios.delete(`posts/${this.postIdProfile}`, {
          data: {
            userId: localStorage.getItem("userId"),
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getIsAdmin();
  },
};
</script>
