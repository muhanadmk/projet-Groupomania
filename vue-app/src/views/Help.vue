<template>
  <div class="our-help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDes }}</p>
    <div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Help Us",
      pageDes: " this is Help Us",
    };
  },
  name: "Help",
};
</script>
