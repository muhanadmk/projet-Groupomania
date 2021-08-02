<template>
  <div id="app">
    <div id="nav">
      <AppHeader />
      <div>
        <!-- <Singup /> -->
      </div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>


<script>
import AppHeader from "./components/AppHeader.vue"
// import Singup from "./views/Singup.vue"

export default {
 name: "app",
 components: {
   AppHeader,
  //  Singup
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
