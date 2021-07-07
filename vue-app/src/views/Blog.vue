<template>
  <div class="our-Blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDes }}</p>
  </div>
</template>

<script>
export default {
  data: function (){
    return{
      pageName: "Blog Us",
      pageDes: " this is Blog Us"
    }
  },
  name: "Blog"
};
</script>