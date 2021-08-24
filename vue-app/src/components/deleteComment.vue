<template>
  <div class="text-end">
    <button v-if="admin > 0" class="btn btn-outline-danger" @click="AdminDeleteComment">
      Admin  delete Comment
    </button>
    <button  v-if="admin <= 0 && userIdComment == userId" class="btn btn-outline-danger" @click="deleteComment">
      delete Comment
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["Comment_id", "userIdComment","post_id", "userId_post"],
  name: "deleteComment",
  data() {
    return {   
      useridComment: this.userIdComment,
      userId: "",
      admin: "",
    };
  },
   created() {
     this.checkUser();
   },
  methods: {
    async  checkUser(){
    try {
         const response = await axios.get(`users/user`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log(response);
        this.userId = response.data[0].id
        this.admin = response.data[0].admin
    }catch(error){
      console.log(error);
    }
            
    },
    async AdminDeleteComment(e) {
      e.preventDefault();
      try {
        const response = await axios.delete(`comments/AdminDeleteComment/${this.Comment_id}/${this.userId}`,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
        this.$root.$emit("AdmindeleteCommentBus", this.post_id);
        this.response = response;
      
      } catch (error) {
        console.log(error);
      }
    },
    async deleteComment(e) {
      try {
        e.preventDefault();
        const response = await axios.delete(`comments/deleteComment/${this.Comment_id}/${this.userId}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        this.$root.$emit("deleteCommentBus", this.post_id);
        this.response = response;
      } catch (error) {
        console.log(error);
      }
    },
  },
 
};
</script>
