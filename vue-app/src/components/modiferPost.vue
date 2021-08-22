<template>
 <div class="text-start">
    <form>
      <div class="card mt-5 mb-5"  v-show="modifer">
        <div class="card-header">
          <input
            class="card-title"
            type="text"
            v-model="title"
            placeholder="ecrir votre title de post"
          />
        </div>
        <div class="card-body">
          <textarea
            class="form-control card-text"
            placeholder="ecrir votre post ici"
            type="text"
            v-model="post"
            style="height: 100px"
          ></textarea>
          <input
            @change="onFileChangedModifer"
            class="form-row__input mt-5 btn btn-secondary"
            type="file"
            name="imageUrlPost"
            accept="image/png, image/jpg, image/jpeg, image/gif"
          />
        </div>
        <button class="mt-2 btn btn-dark" type="submit" @click="modiferPost" >
          modiferPost 
        </button>
      </div>
    </form>
    <button class="btn btn-dark mt-2" @click="afichageModifier">modifer</button>
  </div>
</template>


<script>
import axios from "axios";
export default {
  props:['post_Modifier'],
  name: "modifer-Post",
  data() {
    return {
      message: "",
      title: this.post_Modifier.title,
      post: this.post_Modifier.post,
      image: this.post_Modifier.image,
      userId: this.post_Modifier.user_id,
      postId: this.post_Modifier.post_id,
      modifer: false,
      // btnPourModifer: true,
    };
  },
   mounted() {
    console.log(this.message);
  },
  methods: {
   onFileChangedModifer(event) {
    this.image = event.target.files[0];
    },
    afichageModifier(){
      this.modifer =true; 
    },
  async modiferPost(e) {
      try {
        e.preventDefault();
        let formData = new FormData();
        const userId = localStorage.getItem("userId");
        formData.append("title", this.title);
        formData.append("userId",userId);
        formData.append("post", this.post);
        formData.append("image", this.image);
        const response = await axios.put(`posts/${this.postId}`, formData, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
          });
          this.$root.$emit('modferPost')
          this.modifer =false;
          console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>
