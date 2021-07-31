<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDes }}</p>
    
  </div>
</template>

<script>

export default {
  data: function (){
    return{
      pageName: "About Us",
      pageDes: " this is About Us"
    }
  },
  name: "About"
};
</script>
