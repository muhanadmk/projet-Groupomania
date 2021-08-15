<template>
       <button class="btn btn-outline-danger">gooooolgoooool {{onepost.title}} </button>
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