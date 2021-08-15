<template>
       <button class="btn btn-outline-danger" @click="DeletePost"></button>
</template>


<script>
export default {
    name: 'profile',
    data() {
    return {
      props:["onepost"],
    };
  },
}
</script>