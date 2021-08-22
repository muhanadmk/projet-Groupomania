<template>
  <div class="text-end">
    <button v-if="admin > 0" class="btn btn-outline-danger" @click="AdminDeleteComment">
      Admin  delete Comment
    </button>
    <button  v-else-if="admin <= 0" class="btn btn-outline-danger" @click="deleteComment">
      delete Comment
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["Comment_id", "userIdComment","post_id"],
  name: "deleteComment",
  data() {
    return {   
      useridComment: this.userIdComment,
      admin: this.admin,
      userId: this.userId
    };
  },
  methods: {
    getIsAdmin() {
      return (this.admin = localStorage.getItem("admin"),(this.userId = localStorage.getItem("userId")) );
    },
    async AdminDeleteComment(e) {
      e.preventDefault();
      try {
        const response = await axios.delete(`comments/AdminDeleteComment/${this.Comment_id}/${this.userId}`,{
            // userId: localStorage.getItem("userId"),
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
        this.$root.$emit("AdmindeleteCommentBus", this.post_id);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteComment(e) {
      try {
        e.preventDefault();
         const userid = localStorage.getItem("userId")
        const response = await axios.delete(`comments/deleteComment/${this.Comment_id}/${userid}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        this.$root.$emit("deleteCommentBus", this.post_id);
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
