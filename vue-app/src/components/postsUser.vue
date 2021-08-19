<template>
  <div class="card mt-5 mb-5">
    <div class="card-header">
    <!-- <a type="submit" @click="getPrfile" >{{ postProfile.username }}</a> -->
    </div>
    <div class="card-title">
      <h5 class="card-title">{{postProfile.title }} </h5>
    </div>
    <div class="card-body">
      <p class="card-text">{{ postProfile.post }}</p>
      <img class="card-img" v-bind:src="postProfile.imagePostUrl" alt="...">
      <p class="card-text text-dark">{{ postProfile.datePost }}</p>
      <DeletePost :postProfiles="postProfiles"/>
      <modiferPost :postProfiles="postProfiles" />
    </div>
  </div>
</template>

<script>
import DeletePost  from "./DeletePost.vue";
import modiferPost  from "./modiferPost.vue";

export default {
  props: ['postProfile'],
  name: 'postsUser',
  components: {
    DeletePost,
    modiferPost
    },
    data() {
    return {
      admin: this.admin,
      postProfiles: this.postProfile,
    }
  },
  methods: {
    getIsAdmin () {
     return this.admin = localStorage.getItem('admin');
    },
  },
  created() {
    this.getIsAdmin();
  },
}
</script>

