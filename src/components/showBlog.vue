<template>
  <div v-theme:lisjs="'ran'" class="showBlog">
    <h1 >我是博客总览页面</h1>
    <div v-for="blog in blogs" class="blogInfo">
        <h4 v-color>{{blog.title}}</h4>
        <article>
          {{blog.body}}
        </article>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'showBlog',
    data(){
      return{
        blogs:[]
      }
    },
    created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then((data) => {
        console.log(data)
        this.blogs = data.data.slice(0,6)
      })

    }
  }
</script>

<style>
.blogInfo{ background-color: #eee;width: 600px;padding:20px;margin: 0 auto 20px auto}
  .blogInfo h4{margin: 0;}
</style>
