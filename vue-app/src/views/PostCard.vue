<template>
<div class="card mt-5 mb-5">
  <div class="card-header">
  <h4><router-link to="/profile"><a>{{ onepost.username }}</a></router-link></h4>
  </div>
  <div class="card-title">
    <h5 class="card-title">{{onepost.title }} </h5>
  </div>
  <div class="card-body">
    <p class="card-text">{{ onepost.post }}</p>
    <img class="card-img" v-bind:src="onepost.imagePostUrl" alt="...">
     <p class="card-text text-dark">{{ onepost.datePost }}</p>
  </div>
       <button class="btn btn-outline-danger" @click="DeletePost">DeletePost</button>
</div>

</template>

<script>
import axios from "axios";


export default {
  props:["onepost"] ,
  name: 'post-card',
  components: {
  },
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

