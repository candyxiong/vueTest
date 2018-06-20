<template>
  <div v-theme="'ran'" class="showBlog">
    <h1>我是博客总览页面</h1>
    <div class="search"><input v-model="search" type="text" placeholder="搜索"></div>
    <div v-for="blog in filterBlogs" class="blogInfo">
        <h4 v-rainbow>{{blog.title | to-upCass}}</h4>
        <article>
          {{blog.body | snippet}}
        </article>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'showBlog',
    data(){
      return{
        blogs:[],
        search:''
      }
    },
    created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then((data) => {
        console.log(data)
        this.blogs = data.data.slice(0,6)
      })
    },
    computed:{
      filterBlogs(){
        return this.blogs.filter((blog) =>{
          return blog.title.match(this.search)
        })
      }
    },
    filters:{
//      "to-upCass":function(value){
//        return value.toUpperCase();
//      }
      toUpCass(value){
        return value.toUpperCase();
      },
      snippet(value){
        return value.slice(0,10);
      }
    },
    directives:{
      'rainbow':{
        bind(el,bind,vnode){
          el.style.color = '#'+ Math.random().toString(16).slice(2,8);//彩虹色
        }
      }
    }

  }
</script>

<style>
h1,.search{text-align: center}
.blogInfo{ background-color: #eee;width: 600px;padding:20px;margin: 0 auto 20px auto}
.blogInfo h4{margin: 0;}
</style>
