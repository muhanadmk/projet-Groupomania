<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <createPost @newPostAdded="addNewPost"/>
          <div class="postes-aera">
            <PostCard v-for="Onepost in posts" v-bind:key="Onepost.post_id" :Onepost="Onepost" />
              <!-- <CommentCard v-for="Comment in posts" v-bind:key="Comment.post_id" :Comment="Comment" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
import createPost from "../components/createPost.vue";


import axios from "axios";
export default {
   name: "Home",
  components: {
    PostCard,
    createPost,
  },
  data() {
    return {
      Comments: [],
      posts: [],
    };
  },
  methods: {
      async autoLogin() {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("users/auth", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          console.log(response.data);
         
        } else {
          this.$router.push("/Singup");
        }
      } catch (error) {
        console.log(error);
      }
    },
    addNewPost(post){
      this.posts.unshift(post)
    },
    async getData() {
      try {
        const response = await axios.get("posts");
        console.log(response.data);
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.$root.$on('newPostAdded',()=>{
       this.getData();
    })
    this.autoLogin();
    this.getData();
  },
};
</script>
