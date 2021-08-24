<template>
  <div class="bt">
    <form>
      <div class="card mt-5 mb-5">
        <div class="card-header">
          
          <input
            class="card-title"
            id="titlePost"
            type="text"
            v-model="title"
            placeholder="ecrir votre title de post"
            label= "Post"
          />
        </div>
        <div class="card-body">
          <textarea
            class="form-control card-text"
            placeholder="ecrir votre post ici"
            id="postCreate"
            type="text"
            v-model="post"
            style="height: 100px"
          ></textarea>
          <input
            @change="onFileChanged"
            class="form-row__input mt-5 btn"
            type="file"
            name="imageUrlPost"
            id="fileCreate"
            accept="image/png, image/jpg, image/jpeg, image/gif"
          />
        </div>
        <p v-show="msgError" class="fs-5 text-center text-dark font-weight-bold">vous douvez bien remplier les title et le post</p>
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
  created(){
    this.checkUser();
  },
  name: "createPost",
  data() {
    return {
      message: "",
      title: "",
      post: "",
      image: null,
      userId: "",
      msgError: false,
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
    onFileChanged(event) {
      this.image = event.target.files[0];
    },
    async createPost(e) {
      
      e.preventDefault();

     
      if(this.title == "" || this.post == ""){
      return this.msgError = true;
    }
    else{
      try {
       
        
        let formData = new FormData();
        formData.append("title", this.title);
        formData.append("post", this.post);
        formData.append("image", this.image);
        const response = await axios.post(`posts/crerte/${this.userId}`, formData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        this.newPost = response.data;
        this.$root.$emit('newPostAdded')
        this.title = "";
        this.post = "";
        this.image = null;
        this.msgError = false;
      } catch (error) {
        console.log(error);
      }
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
