<template>
    <div>
    <div class="form-row">
       <label class="card__subtitle" for="file">Sélectionner une image:</label>
        <input @change="onFileSelected" class="form-row__input" type="file" name="image" id="file" accept="image/png, image/jpg, image/jpeg, image/gif">
    </div>
    <div>
      <label for="title">title this is onepost.post_id {{onepost.post_id + onepost.username }}</label>
      <input type="text" v-model="title" />
    </div>

    <div>
      <label for="post">post</label>
      <input type="text" v-model="post" />
    </div>
    <div>
      <button type="submit" @click="modiferPost">modiferPost</button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
   props:["onepost"] ,
  name: "modifer-Post",
  data() {
    return {
      message: "hello",
      title: "",
      post: "",
      image: null,
      userId :this.userId,
      postId: this.onepost.post_id
    };
  },
   mounted() {
    console.log(this.message);
    // if (this.$store.state.user.userId == -1) {
    //       this.$router.push('/login');
  },
  methods: {
    onFileChanged(event) {
      this.image = event.target.files[0];
    },
    async modiferPost() {
      const userId = localStorage.getItem("userId_dansLocalStorge");
      try {
        // e.preventDefault();
        let formData = new FormData();
        formData.append("title", this.title);
        formData.append("post", this.post);
        formData.append("userId", userId);
        formData.append("image", this.image);
        const response = await axios.put(`posts/${this.postId}`, formData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
  //  methods: {
  //    async modiferPost(){
  //     try {
  //       const response = await axios.put(`posts/${this.postId}`,{
  //         data: { 
  //           userId: this.userId,
  //           title: this.title,
  //           post: this.post,
  //           }  
  //       });
  //       console.log(response);
  //     }catch (error) {
  //       console.log(error);
  //     }
  //   }
  //  }  
};
</script>
