<template>
  <div class="text-end">
    <button
      v-if="admin > 0"
      class="btn btn-outline-danger"
      @click="AdminDeletePost"
    >
      Admin Delete Post
    </button>
    <button
      v-else-if="admin <= 0 && user_id == post_user_id "
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
  props: ["post_ID","post_user_id" ],
  name: "DeletePost",
  data() {
    return {
      admin: this.admin,
      user_id: localStorage.getItem("userId"),
    };
  },
  methods: {
    getIsAdmin() {
      return (this.admin = localStorage.getItem("admin"));
    },
    async AdminDeletePost(e) {
       e.preventDefault();
      try {
        const userId= localStorage.getItem("userId");
        const response = await axios.delete(`posts/Admin/${this.post_ID}/${userId}`, {
         
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        this.$root.$emit('DeletePost',this.post_ID)
        this.response = response;
      } catch (error) {
        console.log(error);
      }
    },
    async DeletePost(e) {
      e.preventDefault();
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.delete(`posts/${this.post_ID}/${userId}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        this.$root.$emit('DeletePost',this.post_ID)
        this.response = response;
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
