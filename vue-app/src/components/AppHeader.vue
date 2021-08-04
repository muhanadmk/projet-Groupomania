<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
       <router-link to="/Blog"><a class="navbar-brand text-light">Groupomania</a></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>

        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
</nav>

</template>


<script>
export default {
  name: "AppHeader",
};
</script>

// <style lang="scss" scoped>
// *{
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
// }
// #ImgLogo{
//   width: 90px;
//   // height: 300x;
//   object-fit: cover;
// }
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
</style>

<div class="bg-nav">
    <nav class="nav-page">
      <img src="../assets/icon-left-font-monochrome-white.png" class="logo-site"><img>
      <ul class="navbar">
        <router-link to="/" tag="li"><a> Home</a> </router-link>
        |
         <router-link to="/Blog" tag="li" ><a> Blog</a> </router-link>
        |
        <router-link to="/about" tag="li"><a>About</a></router-link
        >|
        <router-link to="/Help" tag="li"><a>Help</a></router-link>
      </ul>
    </nav>
  </div>