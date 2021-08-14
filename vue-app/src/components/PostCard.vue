<template>
<div class="card mt-5 mb-5">
  <div class="card-header">
  <h4>{{ onepost.username }}</h4>
  </div>
  <div class="card-title">
    <h5 class="card-title">{{onepost.title }} </h5>
  </div>
  <div class="card-body">
    <p class="card-text">{{ onepost.post }}</p>
    <img class="card-img" v-bind:src="onepost.imagePostUrl" alt="...">
     <p class="card-text text-dark">{{ onepost.datePost }}</p>
  </div>
       <button class="btn btn-dark" @click="DeletePost" v-bind="onepost.post_id" > {{ onepost.post_id }}DeletePost</button>
</div>
</template>

<script>
// import modiferPost from './modiferPost.vue'
// import DeletePost from "../components/DeletePost.vue";
import axios from "axios";


export default {
  props:["onepost"] ,
  name: 'post-card',
  // components: {
    // DeletePost,
  //   // modiferPost
  // },
  data() {
    return {
      userId: this.onepost.id,
      postId: this.onepost.post_id,
    };
  },
   methods: {
    async DeletePost(){
      try {
        const response = await axios.delete(`posts/${this.postId}`,{
          data: { 
            userId: this.userId 
            }  
        });
        console.log(response);
      }catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

