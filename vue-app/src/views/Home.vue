<template>
  <main>
    <AppHeader/>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <createPost @newPostAdded="addNewPost"/>
          <div class="postes-aera">
            <PostCard v-for="Onepost in posts" v-bind:key="Onepost.post_id" :Onepost="Onepost" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PostCard from "./PostCard.vue";
import createPost from "../components/createPost.vue";
import AppHeader from "../components/AppHeader.vue"



import axios from "axios";
export default {
   name: "Home",
  components: {
    AppHeader,
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
    this.$root.$on('DeletePost', (post_id)=>{
      console.log(post_id)
     this.getData();
    })
    this.$root.$on('newPostAdded',()=>{
       this.getData();
    })
     this.$root.$on('modferPost',()=>{
       this.getData();
    }) 
    // this.autoLogin();
    this.getData();
  },
};
</script>
