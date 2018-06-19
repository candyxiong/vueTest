<template>
  <div id="app">
    <!--<addBlog></addBlog>-->
    <showBlog></showBlog>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/showBlog'

export default {
  name: 'App',
  components: {
    AddBlog,ShowBlog
  }
}
</script>

<style>

</style>
