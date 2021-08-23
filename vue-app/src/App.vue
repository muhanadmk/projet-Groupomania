<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>


<script>
import Footer from "./components/Footer.vue"

export default {
 name: "app",
 components: {
   Footer,
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0px;
  padding: 0px;
}
a {
  text-decoration: none;
  color: none;
}

</style>
