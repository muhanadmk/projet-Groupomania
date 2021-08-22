<template>
<section>
   <div v-for="(item,index,key) in comments" :key="key" >
    <div class="card-header" >
     <router-link to="/profile" class="fs-5" type="submit" @click.prevent="getPrfile"><a >{{item.username}}</a></router-link> 
    </div>
      <p class="card-title fs-5 ms-2 me-1" > {{item.Comment}}</p>
      <p>{{item.dateComment}}</p>
      <deleteComment :Comment_id="item.Comment_id" :userIdComment="item.user_id" :post_id="post_id" />
  </div>
  </section>
</template>

<script>
 import axios from "axios";
 import deleteComment from "./deleteComment.vue";

export default {
  props: ["post_id"],
  name: "CommentCard",
  created(){
     this.$root.$on('AdmindeleteCommentBus', (Comment_id)=>{
      console.log(Comment_id)
      this.getAllCommente(this.post_id);
    })
     this.$root.$on('deleteCommentBus', (post_id)=>{
        if(post_id == this.post_id)
         this.getAllCommente(this.post_id);
    })
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
     Comment_id: this.Comment_id
    };
  },
  components: {
    deleteComment
  },
};
</script>
