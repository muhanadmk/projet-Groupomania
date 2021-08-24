<template>
  <div class="">
        <p v-if="megErrorsComment" class="fs-5 text-center text-dark font-weight-bold">vous pouvez pas laiiser vied</p>
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
  created(){
    this.checkUser();
  },
  data() {
    return {
      Comment: "",
      message: "",
      postId: this.postsforComment.post_id,
      megErrorsComment: false,
      userId:'',
    };
  },
  methods: {
  async  checkUser(){
    try {
         const response = await axios.get(`users/user`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
       this.response = response;
       this.userId = response.data[0].id
    }catch(error){
      console.log(error);
    }
            
    },
    async createCommente(e) {
      if(this.Comment == "" || this.Comment == "") {
        this.megErrorsComment = true;
      }else {
        try {
          e.preventDefault();
          const response = await axios.post(
            "comments",
            {
              user_id: this.userId,
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
          this.megErrorsComment = false;
          this.$root.$emit('createPostEvetn', this.postId)
          this.response.data = response.data;
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
