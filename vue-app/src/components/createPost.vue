<template>
  <div>
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
        <button class="btn btn-dark" @click="createPost">createPost</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "create-post",
  data() {
    return {
      message: "dfvjkbdvfvfdv",
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
    createPost() {
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("post", this.post);
      formData.append("userId", 25);
      formData.append("image", this.image);
      axios.post("http://localhost:3000/api/posts", formData).then((data) => {
        console.log(data);
      });
    },
  },
};
</script>
