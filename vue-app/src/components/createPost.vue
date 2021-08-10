<template>
<div>
    <form>
    <div class="form-row">
      <label class="card__subtitle" for="file">Sélectionner une imageUrlPost:</label>
      <input
        @change="onFileChanged"
        class="form-row__input"
        type="file"
        name="imageUrlPost"
        id="file"
        accept="image/png, image/jpg, image/jpeg, image/gif"
      />
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
      <button @click="createPost">createPost22</button>
    </div>
  </form>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'create-post',
  data(){
    return {
      message: 'dfvjkbdvfvfdv',
      title:'',
      post:'',
      image:null
    }
  },
  mounted(){
    console.log(this.message);
  },
  methods:{
    onFileChanged(event){
      this.image = event.target.files[0];

    },
    createPost(){
      let formData = new FormData();
      formData.append('title',this.title);
      formData.append('post',this.post);
      formData.append('userId', 25)
      formData.append('image',this.image);
      axios.post('http://localhost:3000/api/posts',formData).then((data) => {
        console.log(data);
        
      })

    }
  }
}
</script>