<template>
<div class="card mt-5 mb-5">
  <div class="card-header">
  <h5 class="card-title">{{post.title }} </h5>
  </div>
  <div class="card-body">
    <p class="card-text">{{ post.post }}</p>
    <img class="card-img" v-bind:src="post.imagePostUrl" alt="...">
     <p class="card-text text-dark">{{ post.datePost }}</p>
  </div>
   <div>
    <!-- <button class="btn btn-dark" @click="DeletePost" key="post.id" >DeletePost</button> -->
  </div>
</div>

  
</template>

<script>
// import modiferPost from './modiferPost.vue'
// import DeletePost from "../components/DeletePost.vue";
// import axios from "axios";


export default {
  props:["post"] ,
  name: 'post-card',
  // components: {
  //   // DeletePost,
  //   // modiferPost
  // },
  data() {
    return {
      userId: 25,
      postId: "",
    };
  },
  // methods: {
  //   DeletePost() {
  //     axios
  //       .delete(`http://localhost:3000/api/posts/85`, {
  //         userId: 25
  //       })
  //       .then((data) => {
  //         console.log("delet", data);
  //         // console.log(this.postId);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   },
  // },
};
</script>

