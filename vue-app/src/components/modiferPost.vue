<template>
    <div>
    <!-- <div class="form-row">
            <label class="card__subtitle" for="file">Sélectionner une image:</label>
            <input @change="onFileSelected" class="form-row__input" type="file" name="image" id="file" accept="image/png, image/jpg, image/jpeg, image/gif">
    </div>
    <div>
      <label for="title">title</label>
      <input id="title" type="text" v-model="title" />
    </div>

    <div>
      <label for="post">post</label>
      <input id="post" type="text" v-model="post" />
    </div>
    <div>
      <button @click="modiferPost">modiferPost</button>
    </div> -->
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "modiferPost",
  data() {
    return {
       title: "",
      post: "",
      userId : 23
    };
  },
   methods: {
   modiferPost() {
      axios.put("http://localhost:3000/api/posts/61", {
          userId: this.userId,
           title: this.title,
          post: this.post,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
   }  
};
</script>
