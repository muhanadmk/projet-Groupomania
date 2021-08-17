<template>
<div class="card mt-5 mb-5">
  <div class="card-header">
  <a type="submit" @click="getPrfile" >{{ onepost.username }}</a>
  </div>
  <div class="card-title">
    <h5 class="card-title">{{onepost.title }} </h5>
  </div>
  <div class="card-body">
    <p class="card-text">{{ onepost.post }}</p>
    <img class="card-img" v-bind:src="onepost.imagePostUrl" alt="...">
     <p class="card-text text-dark">{{ onepost.datePost }}</p>
  </div>
  <button v-if="admin > 0" type="submit" class="btn btn-outline-danger" @click="AdminDeletePost"> Admin Delete Post</button>
  <button v-else-if="admin <= 0" class="btn btn-outline-danger" @click="DeletePost">Delete Post</button>
  <div class="">
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
            @change="onFileChangedModifer"
            class="form-row__input mt-5 btn btn-secondary"
            type="file"
            name="imageUrlPost"
            id="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
          />
        </div>
        <button class="btn btn-dark" type="submit" @click="modiferPost">
          modiferPost
        </button>
      </div>
    </form>
  </div>
  
</div>

</template>
       <!-- <modifer-Post v-for="postOne in lotOfPost" v-bind:key="postOne.post_id" :postOne="postOne" /> -->

<script>
import axios from "axios";
// import profile from "./profile.vue"
// import modiferPost from "../components/modiferPost.vue";


export default {
  props:["onepost"],
  name: 'post-card',
  components: {
    
  },
  data() {
    return {
      admin: this.admin,
      userId: this.onepost.id,
      postId: this.onepost.post_id,
      title: "",
      post: "",
      image: null,
      message: "",
      // userIdlOclal :this.userId,
    };

  },
   mounted() {
    console.log(this.message);
  },
  
   methods: {
    getIsAdmin () {
     return this.admin = localStorage.getItem('admin');
    },
    async DeletePost(){
      try {
        const response = await axios.delete(`posts/${this.postId}`,{
          data: { 
            userId: localStorage.getItem('userId')
            },
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }  
        });
        console.log(response);
      }catch (error) {
        console.log(error);
      }
    },
     async AdminDeletePost(e){
      try {
        e.preventDefault();
        const userId = localStorage.getItem("userId");
        const response = await axios.delete(`posts/Admin/${this.postId}`,{
          data: { 
            userId: userId  
            },
            headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }  
        });
        console.log(response);
      }catch (error) {
        console.log(error);
      }
    },
  onFileChangedModifer(event) {
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
      getPrfile(e) {
        e.preventDefault();
        const ProfileUserId = localStorage.setItem("ProfileUserId", this.userId);
        this.$router.push("/profile");
        console.log(ProfileUserId);
    },
  },
  created() {
    this.getIsAdmin();
  },
};
</script>

