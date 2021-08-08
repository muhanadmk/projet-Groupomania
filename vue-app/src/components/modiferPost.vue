<template>
    <div class="card mt-5 mb-5">
    <button @click="modiferPost" class="">modiferPost</button>
    </div>
</template>


<script>
import axios from "axios";
export default {
  name: "modiferPost",
  data() {
    return {
      userId : 23
    };
  },
   methods: {
   modiferPost() {
      axios.put("http://localhost:3000/api/posts/58", {
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
