<template>
  <div class="bt">
    <form>
      <div class="card mt-5 mb-5">
        <div class="card-header">
          <input
            class="card-title"
            id="title"
            type="text"
            v-model="title"
            placeholder="ecrir votre title de post"
          />
        </div>
        <div class="card-body">
          <textarea
            class="form-control card-text"
            placeholder="ecrir votre post ici"
            id="post"
            type="text"
            v-model="post"
            style="height: 100px"
          ></textarea>
          <input
            @change="onFileChanged"
            class="form-row__input mt-5 btn btn-secondary"
            type="file"
            name="imageUrlPost"
            id="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
          />
        </div>
        <button class="btn btn-dark" type="submit" @click="createPost" >
          createPost
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "createPost",
  data() {
    return {
      newPost: [],
      // userId: this.userId,
      message: "",
      title: "",
      post: "",
      image: null,
    };
  },
  mounted() {
    console.log(this.message);
  },
  methods: {
    onFileChanged(event) {
      this.image = event.target.files[0];
    },
    async createPost(e) {
      const userId = localStorage.getItem("userId");
      console.log(this.title);
      try {
        e.preventDefault();
        let formData = new FormData();
        formData.append("title", this.title);
        formData.append("post", this.post);
        formData.append("userId", userId);
        formData.append("image", this.image);
        console.log(formData);
        const response = await axios.post("posts", formData,{
         headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
          });
        console.log(response.data);
        this.$router.push("/Home");
      } 
      catch (error) {
        console.log(error);
      }
    },
  },
  // addPost() {
  //     this.newPost.push({ NewPost: this.post, NewTitle: this.title});
  //     // this.post = "";
  //     // this.title = "";
  //     // this.image = null;
  //   },
};
</script>

<style>
.bt {
  margin-top: 80px !important;
}
</style>
