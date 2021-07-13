<template>
  <div class="our-home">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDes }}</p>
    
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Home Us",
      pageDes: " this is Home Us",
    };
  },
  name: "Home",
};
</script>
