<template>
  <div id="app">
    <router-view/>
    <auth/>
    <Footer/>
  </div>
</template>


<script>
import Footer from "./components/Footer.vue"
import auth from "./components/auth.vue"




export default {
 name: "app",
 components: {
   Footer,
   auth
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
a {
  text-decoration: none;
  color: none;
}

</style>
