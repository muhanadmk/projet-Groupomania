<template>
<div class="card mt-5 mb-5">
  <div class="card-header">
  <h5 class="card-title"></h5>
  </div>
  <div class="card-body">
    <p class="card-text"></p>
     <input type="file" id="imagePostUrl" name="imagePostUrl" accept="image/png, image/jpeg, image/jpg">        
    <img src="../assets/logo.png" class="card-img-top" alt="...">
     <p class="card-text"></p>
  </div>
  <!-- <div class="form-floating">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" 
    ></textarea>
    <p></p>
    <label for="floatingTextarea2">Comments</label>
    <button @click="submitComment">submit</button>
  </div> -->
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "createPost",
  data() {
    return {
      title: "",
      post: "",
      userId: 19,
    };
  },
   methods: {
   submitPost() {
      axios
        .post("http://localhost:3000/api/posts", {
          title: this.title,
          post: this.post,
          userId: this.userId,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
   }  
};
</script>

