<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>哈哈哈哈</h3>
    <form>
      <ul>
        <li>
          <label>标题:</label>
          <input type="text" v-model="blog.title"/>
        </li>
        <li>
          <label>内容:</label>
          <textarea v-model="blog.content"></textarea>
        </li>
        <li>
          <label>分类:</label>
          <input type="checkbox" value="vue.js" v-model="blog.checkedNames">
          <label for="jack">vue.js</label>
          <input type="checkbox" value="react.js" v-model="blog.checkedNames">
          <label for="john">react.js</label>
          <input type="checkbox" value="angular.js" v-model="blog.checkedNames">
          <label for="mike">angle.js</label>
        </li>
        <li>
          <label>作者:</label>
          <select v-model="blog.author">
            <option v-for="author in authors">{{author}}</option>
          </select>
        </li>
      </ul>
      <button @click.prevent="postData">添加</button>
    </form>

    <hr>
    <div id="preview">
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容:{{blog.content}}</p>
      <p>分类:{{blog.checkedNames}}</p>
      <p>作者:{{blog.author}}</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'addBlog',
    data () {
      return {
        msg: '添加博客',
        blog:{
          title:'',
          content:'',
          checkedNames:[],
          author:''
        },
        authors:['jolin','jaychou','ella','selina']
      }
    },
    methods:{
      postData(){
        this.$http.post('http://jsonplaceholder.typicode.com/posts',{
          title:this.blog.title,
          body:this.blog.content,
          userId:1,
          id:2
        })
        .then(function(res){
          console.log(res)
        })
        .catch(function (response) {
          console.log(response);
        });

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
