<template>
<div class="card mt-5 mb-5">
    <button @click="DeletePost"  class="text-dark" v-bind="post.id">DeletePost</button>
</div>
</template>

<script>
import axios from "axios";
export default {
  props:["post"],
  name: "DeletePost",
  data() {
    return {
      userId : 25,
      postId : this.post.id,
    };
  },
   methods: {
   DeletePost() {
      axios.delete(`http://localhost:3000/api/posts/${this.postId}`, {
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

