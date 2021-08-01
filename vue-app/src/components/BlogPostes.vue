<template>
  <div class="post-box">
    <h3 class="post-title">{{ title }} </h3>
    <span class="post-date">{{ datePost }}</span>
    <p class="post-content">{{ post }}</p>
    <img src="" alt="">
  </div>
  
</template>

<script>
export default {
  props:["title", "post", "imageUrl", "datePost"] ,
  name: 'post',
};
</script>

<style lang="scss" scoped>
  .post-box{
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px #DDD;
    height: 250px;
    .post-title{
      font-weight: bold;
      color: #777;
    }
    .post-date{
      display: block;
      padding: 0 0 5px;
      color: #888;
      font-size: 14px;
    }
    .post-conrent{
      line-height: 1.8;
      color: #666;
    }
  }

</style>