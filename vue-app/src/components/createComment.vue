<template>
     <div class="bt">
    <form>
      <div class="card mt-5 mb-5">
        <div class="card-body">
          <textarea
            class="form-control card-text"
            placeholder="ecrir votre Comment ici"
            id="Comment"
            type="text"
            v-model="Comment"
            style="height: 100px"
          ></textarea>
          <input
            @change="onFileChangedComment"
            class="form-row__input mt-5 btn btn-secondary"
            type="file"
            name="imageCommentUrl"
            id="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
          />
        </div>
        <button class="btn btn-dark" type="submit" @click="createComment">
          createComment
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
    props: ['postsforComment'],
    name: "createComment",
 data() {
    return {
      message: "",
      Comment: this.postsforComment.Comment,
      postId: this.postsforComment.post_id ,
      image: null,
    };
  },
  mounted() {
    console.log(this.message);
  },
  methods: {
    onFileChangedComment(event) {
      this.image = event.target.files[0];
    },
    async createComment(e) {
      const userId = localStorage.getItem("userId");
      try {
        e.preventDefault();
        let formData = new FormData();
        formData.append("Comment", this.Comment);
        formData.append("post_id", this.postId);
        formData.append("user_id", userId);
        formData.append("image", this.image);
        const response = await axios.post("comments/newComment", formData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        // this.newPost = response.data;
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>