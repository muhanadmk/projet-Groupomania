<template>
    <div>
    <div class="form-row">
       <label class="card__subtitle" for="file">Sélectionner une image: </label>
        <input @change="onFileSelected" class="form-row__input" type="file" name="image" id="file" accept="image/png, image/jpg, image/jpeg, image/gif">
    </div>
    <div>
      <label for="title">title this is onepost.post_id</label>
      <input type="text" v-model="title" />
    </div>

    <div>
      <label for="post">post</label>
      <input type="text" v-model="post" />
    </div>
    <div>
      <button type="submit" @click="modiferPost">modiferPost</button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
    lotOfPost: [] ,
  name: "modifer-Post",
  data() {
    return {
      message: "",
      title: "",
      post: "",
      image: null,
      userId :this.userId,
      postId: this.postOne.post_id
    };
  },
   mounted() {
    console.log(this.message);
  },
  methods: {
    onFileChanged(event) {
      this.image = event.target.files[0];
    },
    async modiferPost(e) {
      const userId = localStorage.getItem("userId");
      try {
        e.preventDefault();
        let formData = new FormData();
        formData.append("title", this.title);
        formData.append("post", this.post);
        formData.append("userId", userId);
        formData.append("image", this.image);
        const response = await axios.put(`posts/${this.postId}`, formData, {
         headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
          });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  }, 
};
</script>
