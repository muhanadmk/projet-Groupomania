<template>
<div>
   <div v-for="(item,index,key) in comments" :key="key">
    <div class="card-header" >
     <router-link to="/profile" type="submit" @click.prevent="getPrfile">{{item.username}}</router-link> 
    </div>
    <div class="card-title">
    <h5 class="card-title"> {{item.Comment}}</h5>
    </div>
  </div>
  </div>
</template>

<script>
 import axios from "axios";

export default {
  props: ["post_id"],
  name: "CommentCard",
  created(){
    this.$root.$on('createPostEvetn',(e)=>{
      if(e == this.post_id)
      {
         this.getAllCommente(this.post_id);
      }
    })
    this.getAllCommente(this.post_id);
  },
  methods: {
      async getAllCommente(id) {
      try {
        const response = await axios.get(`comments/Comment/${id}`);
        this.comments = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    getPrfile() {
      localStorage.setItem("ProfileUserId", this.userId);
      this.$router.push("/profile");
    },
  },
  data() {
    return {
     comments:[],
    };
  },
};
</script>
