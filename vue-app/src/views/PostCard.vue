<template>
<div class="card mt-5 mb-5">
  <div class="card-header">
  <a type="submit" @click="getPrfile" >{{ Onepost.username }}</a>
  </div>
  <div class="card-title">
    <h5 class="card-title">{{Onepost.title }} </h5>
  </div>
  <div class="card-body">
    <p class="card-text">{{ Onepost.post }}</p>
    <img class="card-img" v-bind:src="Onepost.imagePostUrl" alt="...">
    <p class="card-text text-dark">{{ Onepost.datePost }}</p>
  </div>
</div>

</template>

<script>


export default {
  props:["Onepost"],
  name: 'post-card',
  components: {
    // DeletePost
    // modiferPost
  },
  data() {
    return {
      OnepostDelete: this.Onepost,
      userId: this.Onepost.id,
      postId: this.Onepost.post_id,
      title: "",
      post: "",
      image: null,
      message: "",
    };

  },
   mounted() {
    console.log(this.message);
  },
  
   methods: {
      getPrfile(e) {
        e.preventDefault();
        const ProfileUserId = localStorage.setItem("ProfileUserId", this.userId);
        this.$router.push("/profile");
        console.log(ProfileUserId);
    },
  },
};
</script>

