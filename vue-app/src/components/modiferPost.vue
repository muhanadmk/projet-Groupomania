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
            @change="onFileChangedModifer"
            class="form-row__input mt-5 btn btn-secondary"
            type="file"
            name="imageUrlPost"
            id="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
          />
        </div>
        <button class="btn btn-dark" type="submit" @click="modiferPost" >
          modiferPost 
        </button>
        <!-- <p v-if="userId == userIdSrorge" > test</p> -->
      </div>
    </form>
  </div>
</template>


<script>
import axios from "axios";
export default {
  props:['postProfiles'],
  name: "modifer-Post",
  data() {
    return {
      message: "",
      title: "",
      post: "",
      image: null,
      userIdSrorge: this.userIdSrorge,
      userId: this.postProfiles.user_id,
      postId: this.postProfiles.post_id
    };
  },
   mounted() {
    console.log(this.message);
  },
  methods: {
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
        // EventBus.$emit('postModified',post);
      } catch (error) {
        console.log(error);
      }
    },
    getUserId () {
     this.userIdSrorge = localStorage.getItem('userId')
    }
  },
  created() {
    this.getUserId();
  }, 
};
</script>
