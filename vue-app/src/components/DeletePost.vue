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
      admin: "",
      user_id: "",
    };
  },
  methods: {
    async checkUser() {
      try {
        const response = await axios.get(`users/user`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
      
        this.admin = response.data[0].admin;
        this.user_id = response.data[0].id;
      } catch (error) {
        console.log(error);
      }
    },
    async AdminDeletePost(e) {
       e.preventDefault();
      try {
        const response = await axios.delete(`posts/Admin/${this.post_ID}/${this.user_id}`, {
         
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
        const response = await axios.delete(`posts/${this.post_ID}/${this.user_id}`, {
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
 this.checkUser()();
  },
};
</script>
