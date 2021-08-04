<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div>
          <div>
            <label for="title">title</label>
            <input id="title" type="text" v-model="title" />
          </div>

          <div>
            <label for="post">title</label>
            <input id="post" type="text" v-model="post" />
          </div>
          <div>
            <button @click="submitPost">submit</button>
          </div>
        </div>
        <div class="postes-aera">
          <PostCard v-for="post in posts" v-bind:key="post.id" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from "../components/PostCard.vue";

import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      title: "",
      post: "",
      userId: 17,
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get("http://localhost:3000/api/posts");
        console.log(response);
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    submitPost() {
      axios
        .post("http://localhost:3000/api/posts", {
          title: this.title,
          post: this.post,
          userId: this.userId,
        })
        .then((data) => {
          console.log(data);
          //   this.$router.push("/Blog");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  created() {
    this.getData();
  },
  name: "Blog",
  components: {
    PostCard,
  },
};
</script>
