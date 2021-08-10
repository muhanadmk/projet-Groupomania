<template>
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
      <button @click="createPost">createPost</button>
    </div>
  </form>
</template>



<script>
import axios from "axios";
export default {
  name: "createPost",
  data() {
    return {
      title: "",
      post: "",
      userId: 25,
     selectedFile: null
    };
  },
  methods: {
      onFileChanged (event) {
        this.selectedFile = event.target.files[0]
      },
    createPost() {
      const formData = new FormData()
      formData.append('image', this.selectedFile, this.selectedFile.name)
      formData.append('userId', 25)
      formData.append('title', this.title)
      formData.append('post', this.post)
      axios.post("http://localhost:3000/api/posts", {
          // title: this.title,
          // post: this.post,
          // imageUrlPost: this.selectedFile,
          // userId: this.userId,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

// <script>
// export default {
//     name: 'createPost',
//     data: function() {
//         return {
//             title: '',
//             post: '',
//         }
//     },
//     // mounted: function () {
//     //     if (this.$store.state.user.userId == -1) {
//     //         this.$router.push('/login');
//     //     return;
//     //     }
//     // },
//     // computed:{
//     //     validatedFields: function() {
//     //         if (this.title != "" && this.post != "" && this.selectedFile != '') {
//     //             return true;
//     //         } else {
//     //             return false;
//     //         }
//     //     }
//     // },
//     methods: {
//         onFileSelected (event) {
//             this.selectedFile = event.target.files[0]
//         },
//         createPost: async function() {
//             const self = this
//             const formData = new FormData()
//             formData.append('image', this.selectedFile)
//             formData.append('name', this.selectedFile.name)
//             formData.append('title',this.title)
//             formData.append('post',this.post)
//             formData.append(25)
//             await this.$store.dispatch('createPost', formData)
//             .then(function() {
//                 self.$router.push('/posts');
//             })
//             .catch(function(error) {
//                 console.log(error);
//                     });
//                 }
//             },
        
// }
// </script>
// <script>
// import axios from "axios";
// export default {
//   name: "createPost",
//   data() {
//     return {
//       title: "",
//       post: "",
//       userId: 25,
//      selectedFile: null
//     };
//   },
//   methods: {
//       onFileChanged (event) {
//         this.selectedFile = event.target.files[0]
//       },
//     createPost() {
//        const formData = new FormData()
//       formData.append('myFile', this.selectedFile, this.selectedFile.name)
//       axios.post("http://localhost:3000/api/posts", {
//           title: this.title,
//           post: this.post,
//           imageUrlPost: this.selectedFile,
//           userId: this.userId,
//         })
//         .then((data) => {
//           console.log(data);
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     },
//   },
// };
// </script>
