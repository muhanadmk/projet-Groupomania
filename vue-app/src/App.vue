<template>
  <div id="app">
    <AppHeader />
    <router-view/>
    <div>
     <Footer />
    </div>
  </div>
</template>


<script>
import AppHeader from "./components/AppHeader.vue"
import Footer from "./components/Footer.vue"

export default {
 name: "app",
 components: {
   AppHeader,
   Footer
   
  }
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
