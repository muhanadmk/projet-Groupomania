<template>
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid bg-dark">
    <a class="navbar-brand" href="#">
      <img src="../assets/icon-left-font-monochrome-white.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
    </a>
     <ul class="navbar">
        <router-link to="/" tag="li"><a> Home</a> </router-link>
        |
         <router-link to="/Blog" tag="li" ><a> Blog</a> </router-link>
        |
        <router-link to="/about" tag="li"><a>About</a></router-link
        >|
        <router-link to="/Help" tag="li"><a>Help</a></router-link>
        |
         <router-link to="/singup" tag="li"><a>singup</a></router-link>
      </ul>
  </div>
</nav>

     
 

</template>

<script>
export default {
  name: "AppHeader",
};
</script>

// <style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
// .bg-nav {
//   background-color: #333;
//   .nav-page {
//     width: 1300px;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     .logo-site {
//       width: 200px;
//       height: 70px;
//       object-fit: cover;
//     }
//     .navbar {
//       width: 300px;
//       display: flex;
//       justify-content: space-between;
//       margin: 0;
//     }
//     li {
//       display: inline-block;
//       a {
//         font-weight: bold;
//         color: #fff;
//         text-decoration: none;
//         &.router-link-exact-active {
//           color: #42b983;
//         }
//       }
//     }
//   }
// }
// </style>