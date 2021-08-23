<template>
  <main>
    <AppHeader/>
    <auth />
    <div class="container">
      <h1>bienvenue {{userId}} chez Groupomania société</h1>
      <div class="row">
        <div class="col-md-8">
          <createPost />
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
import auth from "../components/auth.vue"
import axios from "axios";
export default {
   name: "Home",
  components: {
    AppHeader,
    PostCard,
    createPost,
    auth,
  },
  data() {
    return {
      Comments: [],
      posts: [],
      userId: localStorage.getItem("username")
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get("posts");
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
    this.getData();
  },
};
</script>
