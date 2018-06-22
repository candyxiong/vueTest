<template>
  <div id="singe-blog">
    <h2>我是单个博客页面</h2>
    <h4>{{user.title}}</h4>
    <article>{{user.body}}</article>
  </div>
</template>

<script>

  export default {
    name: 'singe-blog',
    data(){
      return{
        id:this.$route.params.id,
        user:{}
      }
    },
    created(){
      var that = this;
      that.$http.get('http://jsonplaceholder.typicode.com/posts/' + that.id)
        .then(function(res){
        that.user = res.data;
      })
        .catch(function(res){
          console.log(res)
      })
    }
  }
</script>

<style>

</style>
