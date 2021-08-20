<template>
  <div id="app">
    <router-view/>
    <auth/>
    <Footer/>
  </div>
</template>


<script>
// import AppHeader from "./components/AppHeader.vue"
import Footer from "./components/Footer.vue"
import auth from "./components/auth.vue"


export default {
 name: "app",
 components: {
  //  AppHeader,
   Footer,
   auth
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #eee;
}
a {
  text-decoration: none;
}

</style>
