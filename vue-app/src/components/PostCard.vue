<template>
<div class="card mt-5 mb-5">
  <div class="card-header">
  <h5 class="card-title">{{post.title }} </h5>
  </div>
  <div class="card-body">
    <p class="card-text">{{ post.post }}</p>
    <img src="../assets/logo.png" class="card-img-top" alt="...">
     <p class="card-text">{{ post.datePost }}</p>
  </div>
  <!-- <div class="form-floating">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" 
    ></textarea>
    <label for="floatingTextarea2">Comments</label>
    <button @click="submitComment">submit</button>
  </div> -->
  <DeletePost /> 
</div>

  
</template>

<script>
import DeletePost from "./DeletePost.vue"

export default {
  props:["post"] ,
  name: 'post-card',
  components: {
    DeletePost
  }
};
</script>

