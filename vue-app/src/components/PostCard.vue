<template>
<div class="card mt-5 mb-5">
  <!-- <DeletePost /> -->
  <div class="card-header">
  <h5 class="card-title">{{post.title }} </h5>
  </div>
  <div class="card-body">
    <p class="card-text">{{ post.post }}</p>
    <img class="card-img" v-bind:src="post.imagePostUrl" alt="...">
     <p class="card-text text-dark">{{ post.datePost }}</p>
  </div>
  <!-- <modiferPost /> -->
  <!-- <div class="form-floating">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" 
    ></textarea>
    <label for="floatingTextarea2">Comments</label>
    <button @click="submitComment">submit</button>
  </div> -->
  
</div>

  
</template>

<script>
// import modiferPost from './modiferPost.vue'
// import DeletePost from "../components/DeletePost.vue";


export default {
  props:["post"] ,
  name: 'post-card',
  components: {
    // DeletePost,
    // modiferPost
  }
};
</script>

