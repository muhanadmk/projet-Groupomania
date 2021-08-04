<template>
<div class="mt-20">
  <div class="post-box">
    <h3 class="post-title">{{post.title }} </h3>
    <span class="post-date">{{ post.datePost }}</span>
    <p class="post-content">{{ post.post }}</p>
    <img src="" alt="">
    <div>
      <div v-for="comment in post.comments" :key="comment.comment">{{comment.comment}}</div>
      <textarea></textarea>
    </div>
  </div>
</div> 
  
</template>

<script>
export default {
  props:["post"] ,
  name: 'post-card',
};
</script>

<style lang="scss" scoped>
  .post-box{
    margin-top: 20px;
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