<template>
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
</template>

<script>
import axios from "axios";
export default {
  name: "create-post",
  data() {
    return {
      title: "",
      post: "",
      userId: 17,
    };
  },
  methods: {
    submitPost() {
      axios
        .post("http://localhost:3000/api/posts", {
          title: this.title,
          post: this.post,
          userId: this.userId,
        })
        .then((data) => {
          console.log(data);
          this.$router.push("/Blog");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
