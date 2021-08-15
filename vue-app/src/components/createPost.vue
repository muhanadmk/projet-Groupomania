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
        <button class="btn btn-dark" type="submit" @click="createPost">
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
      userId: this.userId,
      message: "hello",
      title: "",
      post: "",
      image: null,
    };
  },
  mounted() {
    console.log(this.message);
    // if (this.$store.state.user.userId == -1) {
    //       this.$router.push('/login');
  },
  methods: {
    onFileChanged(event) {
      this.image = event.target.files[0];
    },
    async createPost(e) {
      const userId = localStorage.getItem("userId_dansLocalStorge");
      try {
        e.preventDefault();
        let formData = new FormData();
        formData.append("title", this.title);
        formData.append("post", this.post);
        formData.append("userId", userId);
        formData.append("image", this.image);
        const response = await axios.post("posts", formData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.bt {
  margin-top: 80px !important;
}
</style>
