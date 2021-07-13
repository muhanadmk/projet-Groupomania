<template>
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

</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.bg-nav {
  background-color: #333;
  .nav-page {
    width: 1300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .logo-site {
      width: 200px;
      height: 70px;
      object-fit: cover;
    }
    .navbar {
      width: 300px;
      display: flex;
      justify-content: space-between;
      margin: 0;
    }
    li {
      display: inline-block;
      a {
        font-weight: bold;
        color: #fff;
        text-decoration: none;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
}
</style>
